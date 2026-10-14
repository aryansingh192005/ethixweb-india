import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";
import { connection } from "next/server";
import Link from "next/link";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string;
  status: "new" | "contacted" | "closed";
  created_at: string;
};

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f5f2eb] p-10 text-[#24211f]">
          Loading private inbox…
        </main>
      }
    >
      <AdminInbox />
    </Suspense>
  );
}

async function AdminInbox() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  await connection();
  if (!token || !verifyAdminSession(token)) {
    redirect("/admin/login");
  }

  const projectUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const secret = process.env.SUPABASE_SECRET_KEY;
  let leads: Lead[] = [];
  let error = "";

  if (!projectUrl || !secret) {
    error = "Database settings are missing.";
  } else {
    try {
      const response = await fetch(
        `${projectUrl}/rest/v1/leads?select=id,name,email,phone,service,message,status,created_at&order=created_at.desc`,
        {
          headers: { apikey: secret },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        error = "Could not load enquiries from the database.";
      } else {
        leads = await response.json();
      }
    } catch {
      error = "Could not connect to the database.";
    }
  }

  async function updateStatus(formData: FormData) {
    "use server";

    const session = (await cookies()).get(ADMIN_COOKIE)?.value;
    if (!session || !verifyAdminSession(session)) redirect("/admin/login");

    const id = String(formData.get("id") || "");
    const status = String(formData.get("status") || "");

    if (!/^[0-9a-f-]{36}$/i.test(id)) return;
    if (!["new", "contacted", "closed"].includes(status)) return;

    const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
    const key = process.env.SUPABASE_SECRET_KEY;
    if (!url || !key) return;

    await fetch(`${url}/rest/v1/leads?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: {
        apikey: key,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ status }),
      cache: "no-store",
    });

    revalidatePath("/admin");
  }

  async function signOut() {
    "use server";

    (await cookies()).delete(ADMIN_COOKIE);
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#24211f]">
      <header className="flex items-center justify-between border-b border-black/10 px-6 py-5 md:px-12">
        <Link href="/" className="text-xl font-bold tracking-tight">
          ethixweb<span className="text-[#d83929]">.</span>
          <span className="ml-2 text-[10px] font-medium tracking-[0.2em] text-[#d83929]">
            INDIA
          </span>
        </Link>

        <form action={signOut}>
          <button className="border border-black/20 px-4 py-3 text-xs font-semibold">
            Sign out ↗
          </button>
        </form>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
          PRIVATE WORKSPACE
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Enquiries <span className="text-[#d83929]">{leads.length}</span>
        </h1>
        <p className="mt-3 text-sm text-[#746d64]">
          Review incoming project enquiries and update their status.
        </p>

        {error && (
          <p className="mt-8 border border-[#d83929]/30 bg-white p-5 text-sm text-[#b92e22]">
            {error}
          </p>
        )}

        {!error && leads.length === 0 && (
          <p className="mt-8 border border-black/10 bg-[#fffdf8] p-8 text-sm text-[#746d64]">
            No enquiries yet. New submissions will appear here.
          </p>
        )}

        <div className="mt-8 space-y-4">
          {leads.map((lead) => (
            <article
              key={lead.id}
              className="bg-[#fffdf8] p-5 shadow-sm md:p-7"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#81796f]">
                    {lead.status} ·{" "}
                    {new Date(lead.created_at).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                      timeZone: "Asia/Kolkata",
                    })}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">{lead.name}</h2>
                  <p className="mt-1 text-sm text-[#686159]">
                    <a className="underline" href={`mailto:${lead.email}`}>
                      {lead.email}
                    </a>
                    {lead.phone && ` · ${lead.phone}`}
                  </p>
                  <p className="mt-4 text-sm font-semibold">{lead.service}</p>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[#686159]">
                    {lead.message}
                  </p>
                </div>

                <form action={updateStatus} className="flex h-fit gap-2">
                  <input type="hidden" name="id" value={lead.id} />
                  <select
                    name="status"
                    defaultValue={lead.status}
                    className="border border-black/15 bg-[#f9f7f2] px-3 py-2 text-xs"
                    aria-label={`Status for ${lead.name}`}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                  <button className="bg-[#24211f] px-3 py-2 text-xs font-semibold text-white">
                    Save
                  </button>
                </form>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
