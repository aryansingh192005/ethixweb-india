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
        <main className="min-h-screen bg-[#f5f2eb] p-6 text-[#24211f] sm:p-10">
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
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-black/10 bg-[#f5f2eb]/90 px-5 py-4 backdrop-blur-xl sm:px-8 md:px-12">
        <Link href="/" className="text-lg font-bold tracking-[-0.05em] sm:text-xl">
          ethixweb<span className="text-[#c53a2c]">.</span>
          <span className="ml-2 text-[10px] font-medium tracking-[0.2em] text-[#c53a2c]">
            INDIA
          </span>
        </Link>

        <form action={signOut}>
          <button className="border border-black/25 px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-[#24211f] hover:text-white">
            Sign out ↗
          </button>
        </form>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 md:px-10 md:py-14">
        <p className="text-[10px] font-medium tracking-[0.18em] text-[#746d64]">
          PRIVATE WORKSPACE
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
          Enquiries <span className="text-[#c53a2c]">{leads.length}</span>
        </h1>
        <p className="mt-3 text-sm text-[#746d64]">
          Review incoming project enquiries and update their status.
        </p>

        {error && (
          <p role="alert" className="mt-8 border border-[#c53a2c]/30 bg-[#fffdf8] p-5 text-sm text-[#b92e22]">
            {error}
          </p>
        )}

        {!error && leads.length === 0 && (
          <p className="mt-8 border border-black/10 bg-[#fffdf8] p-8 text-sm leading-6 text-[#746d64]">
            No enquiries yet. New submissions will appear here.
          </p>
        )}

        <div className="mt-8 space-y-4">
          {leads.map((lead) => (
            <article
              key={lead.id}
              className="border border-black/[0.06] bg-[#fffdf8] p-5 shadow-[0_14px_44px_-38px_rgba(36,33,31,0.55)] transition-shadow hover:shadow-[0_20px_50px_-38px_rgba(36,33,31,0.65)] sm:p-6 md:p-7"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] ${lead.status === "new" ? "border-[#c53a2c]/20 bg-[#c53a2c]/[0.07] text-[#b92e22]" : lead.status === "contacted" ? "border-[#628467]/25 bg-[#628467]/[0.08] text-[#46674b]" : "border-black/10 bg-black/[0.04] text-[#746d64]"}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${lead.status === "new" ? "bg-[#c53a2c]" : lead.status === "contacted" ? "bg-[#628467]" : "bg-[#746d64]"}`} />
                      {lead.status}
                    </span>
                    <span className="text-[10px] tracking-wide text-[#746d64]">
                    {new Date(lead.created_at).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                      timeZone: "Asia/Kolkata",
                    })}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold">{lead.name}</h2>
                  <p className="mt-1 text-sm text-[#686159]">
                    <a className="decoration-black/30 underline underline-offset-4 transition-colors hover:text-[#b92e22]" href={`mailto:${lead.email}`}>
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
                    className="min-h-10 border border-black/15 bg-[#f9f7f2] px-3 py-2 text-xs outline-none focus-visible:ring-2 focus-visible:ring-[#c53a2c]/30"
                    aria-label={`Status for ${lead.name}`}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                  <button className="min-h-10 bg-[#24211f] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#c53a2c]">
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
