"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Could not sign in.");
      }

      router.push("/admin");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not sign in. Try again."
      );
      setSending(false);
    }
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#f5f2eb] px-5 py-6 text-[#24211f] sm:px-8 md:px-12">
      <Link href="/" className="relative z-10 w-fit text-xl font-bold tracking-tight">
        ethixweb<span className="text-[#c53a2c]">.</span>
        <span className="ml-2 text-[10px] font-medium tracking-[0.2em] text-[#c53a2c]">
          INDIA
        </span>
      </Link>

      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[#c53a2c]/[0.06] blur-3xl" />
      <section className="relative mx-auto my-auto w-full max-w-md border border-black/[0.06] bg-[#fffdf8] p-6 shadow-[0_24px_70px_-48px_rgba(36,33,31,0.45)] sm:p-8 md:p-10">
        <p className="text-[10px] font-medium tracking-[0.2em] text-[#746d64]">
          PRIVATE WORKSPACE
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Welcome back.
        </h1>
        <p className="mt-2 text-sm text-[#746d64]">
          Sign in to manage enquiries.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block text-xs font-semibold">
            Email
          <input
              name="email"
              type="email"
              required
              autoComplete="username"
              className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none transition focus:border-[#c53a2c] focus-visible:ring-2 focus-visible:ring-[#c53a2c]/25"
            />
          </label>

          <label className="block text-xs font-semibold">
            Password
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none transition focus:border-[#c53a2c] focus-visible:ring-2 focus-visible:ring-[#c53a2c]/25"
            />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-between bg-[#24211f] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#c53a2c] disabled:opacity-60"
          >
            {sending ? "Signing in…" : "Sign in"}
            <span>↗</span>
          </button>

          <p aria-live="polite" className="min-h-5 text-xs text-[#b92e22]">
            {error}
          </p>
        </form>
      </section>
    </main>
  );
}
