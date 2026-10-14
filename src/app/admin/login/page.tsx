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
    <main className="min-h-screen bg-[#f5f2eb] px-6 py-8 text-[#24211f]">
      <Link href="/" className="text-xl font-bold tracking-tight">
        ethixweb<span className="text-[#d83929]">.</span>
        <span className="ml-2 text-[10px] font-medium tracking-[0.2em] text-[#d83929]">
          INDIA
        </span>
      </Link>

      <section className="mx-auto mt-20 max-w-md bg-[#fffdf8] p-7 shadow-sm md:mt-28 md:p-10">
        <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
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
              className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none focus:border-[#d83929]"
            />
          </label>

          <label className="block text-xs font-semibold">
            Password
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none focus:border-[#d83929]"
            />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-between bg-[#24211f] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#d83929] disabled:opacity-60"
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
