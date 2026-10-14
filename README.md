# Ethixweb India

An India-focused redesign concept for Ethixweb: a digital partner for thoughtful websites, web applications, growth systems, and practical automation.

## Tech stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS
- Supabase Postgres, accessed through server-side REST requests

## Pages and features

- `/` — homepage with the India-focused value proposition, services, process, concept study, reasons to work with Ethixweb, and a project enquiry call to action.
- `/services` — overview of the four service areas.
- `/about` — the India story and working principles.
- `/contact` — validated project enquiry form.
- `/admin/login` — private administrator sign-in.
- `/admin` — protected enquiry inbox with status management.

Enquiries are validated on the server and stored in Supabase. A hidden honeypot and database-backed rate limit help reduce spam. Administrator sessions use a signed, HTTP-only cookie. Supabase secret credentials are used only by server-side code.

## India-specific design rationale

The India edition treats India as a varied set of customers and contexts, rather than a single audience. The copy and service examples account for mobile-first use, regional languages, UPI journeys, and local customer needs while keeping the visual identity restrained and globally minded. Warm red and saffron artwork provides a sense of place without relying on stereotypes or implying a change to Ethixweb’s actual business location.

The featured “mitti” storefront is clearly presented as an independent concept study, not as client work. This gives the portfolio a concrete example while staying transparent about its status.

## What changed from the current site

This concept gives the India edition a clearer path from the value proposition to services, working process, example work, and enquiry. It adds dedicated Services, About, and Contact pages, adapts Ethixweb’s senior-led and outcomes-focused positioning for Indian businesses, and connects the enquiry form to a working database and protected admin inbox. The layout uses consistent typography, spacing, colors, and reusable navigation and calls to action across pages.

## Run locally

Use Node.js 20.9 or later. Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and replace every placeholder with server-only values. Never commit the real `.env.local` file:

```env
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_SECRET_KEY=YOUR_SUPABASE_SECRET_KEY
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=use-a-strong-unique-password
SESSION_SECRET=use-a-random-secret-at-least-32-characters-long
```

In a new Supabase project, run [`supabase/schema.sql`](supabase/schema.sql) in the SQL Editor to create the `leads` table, rate-limit table and function, enable row-level security, and apply restricted grants. The secret key must stay on the server; never prefix it with `NEXT_PUBLIC_` or expose it in browser code.

## Deployment notes

Set the same environment variables in the hosting provider’s server-side project settings before deploying. Keep `.env.local` out of Git, and use a unique, strong admin password and session secret for production. Check the deployed pages and enquiry flow, and capture PageSpeed Insights results for both mobile and desktop before submission; performance scores are not claimed until measured.
