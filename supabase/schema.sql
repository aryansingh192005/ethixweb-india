-- Ethixweb India: enquiry storage and database-backed rate limiting.
-- Run this file in the Supabase SQL Editor for a new project.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 2 and 100),
  email text not null check (
    char_length(email) <= 254
    and email ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  ),
  phone text check (phone is null or char_length(phone) <= 20),
  service text not null check (
    service in (
      'Website or e-commerce',
      'Web application',
      'Growth and marketing',
      'AI and automation',
      'Something else'
    )
  ),
  message text not null check (char_length(btrim(message)) between 10 and 3000),
  status text not null default 'new' check (status in ('new', 'contacted', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

alter table public.leads enable row level security;
revoke all on table public.leads from public, anon, authenticated;
grant select, insert, update on table public.leads to service_role;

create table if not exists public.rate_limit_windows (
  key_hash text primary key check (key_hash ~ '^[0-9a-f]{64}$'),
  window_started_at timestamptz not null,
  request_count integer not null check (request_count > 0)
);

create index if not exists rate_limit_window_started_at_idx
  on public.rate_limit_windows (window_started_at);

alter table public.rate_limit_windows enable row level security;
revoke all on table public.rate_limit_windows from public, anon, authenticated;
revoke all on table public.rate_limit_windows from service_role;

create or replace function public.check_and_consume_rate_limit(
  p_key text,
  p_limit integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_count integer;
begin
  if p_key !~ '^[0-9a-f]{64}$'
    or p_limit < 1
    or p_limit > 1000
    or p_window_seconds < 1
    or p_window_seconds > 86400 then
    raise exception 'Invalid rate limit parameters';
  end if;

  insert into public.rate_limit_windows as current_window (
    key_hash,
    window_started_at,
    request_count
  )
  values (p_key, pg_catalog.now(), 1)
  on conflict (key_hash) do update
    set window_started_at = case
          when current_window.window_started_at <= pg_catalog.now() - pg_catalog.make_interval(secs => p_window_seconds)
            then pg_catalog.now()
          else current_window.window_started_at
        end,
        request_count = case
          when current_window.window_started_at <= pg_catalog.now() - pg_catalog.make_interval(secs => p_window_seconds)
            then 1
          else current_window.request_count + 1
        end
  returning request_count into v_count;

  delete from public.rate_limit_windows
  where window_started_at < pg_catalog.now() - interval '24 hours';

  return v_count <= p_limit;
end;
$$;

revoke all on function public.check_and_consume_rate_limit(text, integer, integer)
  from public, anon, authenticated;
grant execute on function public.check_and_consume_rate_limit(text, integer, integer)
  to service_role;
