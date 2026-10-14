"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  setSending(true);
  setStatus("");

  try {
    const formData = Object.fromEntries(new FormData(form).entries());

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Please try again.");
    }

    setStatus("Thanks — your enquiry is with our team.");
    form.reset();
  } catch (error) {
    setStatus(
      error instanceof Error
        ? error.message
        : "We couldn’t send your enquiry. Please try again."
    );
  } finally {
    setSending(false);
  }
}

  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#24211f]">
      <header className="flex flex-wrap items-center justify-between gap-y-3 border-b border-black/10 px-6 py-4 md:flex-nowrap md:px-12 md:py-5">
        <Link href="/" aria-label="Ethixweb India home" className="text-xl font-bold tracking-tight">
          ethixweb<span className="text-[#d83929]">.</span>
          <span className="ml-2 text-[10px] font-medium tracking-[0.2em] text-[#d83929]">
            INDIA
          </span>
        </Link>
        <nav aria-label="Main navigation" className="flex w-full justify-between border-t border-black/10 pt-3 text-xs text-[#5c5751] md:w-auto md:justify-normal md:gap-8 md:border-0 md:pt-0 md:text-sm">
          <Link href="/services">What we do</Link>
          <Link href="/about">Our story</Link>
          <Link href="/contact" className="text-[#d83929]">Contact</Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[0.85fr_1.15fr] md:px-12 md:py-20">
        <div>
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
            YOUR NEXT CHAPTER STARTS HERE
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Tell us what
            <br />
            you’re <span className="text-[#d83929]">thinking.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#686159]">
            A new idea, a stubborn problem or a website that needs a rethink:
            tell us a little about it and we’ll take it from there.
          </p>
          <p className="mt-8 flex items-center gap-3 text-sm text-[#686159]">
            <span className="h-2 w-2 rounded-full bg-[#628467]" />
            A real person will follow up about your enquiry
          </p>
          <div className="mt-12 border-t border-black/15 pt-5">
            <p className="text-[10px] tracking-[0.16em] text-[#81796f]">
              INDIA-FOCUSED, GLOBALLY READY
            </p>
            <p className="mt-3 text-sm leading-6 text-[#686159]">
              Working across time zones.
              <br />
              Happy to meet you where you are.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#fffdf8] p-6 shadow-sm md:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-semibold">
              Your name
              <input
                name="name"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Aarav Mehta"
                className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none focus:border-[#d83929]"
              />
            </label>

            <label className="text-xs font-semibold">
              Work email
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="you@company.in"
                className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none focus:border-[#d83929]"
              />
            </label>

            <label className="text-xs font-semibold">
              Phone <span className="font-normal text-[#81796f]">(optional)</span>
              <input
                name="phone"
                type="tel"
                maxLength={20}
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none focus:border-[#d83929]"
              />
            </label>

            <label className="text-xs font-semibold">
              What do you need?
              <select
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none focus:border-[#d83929]"
              >
                <option value="" disabled>Select a service</option>
                <option>Website or e-commerce</option>
                <option>Web application</option>
                <option>Growth and marketing</option>
                <option>AI and automation</option>
                <option>Something else</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block text-xs font-semibold">
            Tell us a little about the project
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={3000}
              rows={5}
              placeholder="What are you building, and what would success look like?"
              className="mt-2 w-full resize-y border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none focus:border-[#d83929]"
            />
          </label>

          <label className="absolute -left-[9999px]" aria-hidden="true">
            Leave this field empty
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="mt-5 flex w-full items-center justify-between bg-[#24211f] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#d83929] disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send enquiry"}
            <span>↗</span>
          </button>

          <p aria-live="polite" className="mt-3 min-h-5 text-xs text-[#686159]">
            {status || "We’ll only use your details to respond to this enquiry."}
          </p>
        </form>
      </section>

      <footer className="bg-[#24211f] px-6 py-6 text-xs text-white/60 md:px-12">
        <div className="mx-auto flex max-w-7xl justify-between">
          <Link href="/" className="font-semibold text-white">
            ethixweb<span className="text-[#ed765b]">.</span> INDIA
          </Link>
          <Link href="/">Back to home ↑</Link>
        </div>
      </footer>
    </main>
  );
}
