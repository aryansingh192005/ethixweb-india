"use client";

import { useState } from "react";

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
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14 md:px-12 md:py-20 lg:gap-20">
        <div>
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#746d64]">
            YOUR NEXT CHAPTER STARTS HERE
          </p>
          <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
            Tell us what
            <br />
            you’re <span className="text-[#c53a2c]">thinking.</span>
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
            <p className="text-[10px] tracking-[0.16em] text-[#746d64]">
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
          className="border border-black/[0.06] bg-[#fffdf8] p-5 shadow-[0_18px_55px_-42px_rgba(36,33,31,0.55)] sm:p-7 md:p-9"
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
                className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none transition focus:border-[#c53a2c] focus-visible:ring-2 focus-visible:ring-[#c53a2c]/25"
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
                className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none transition focus:border-[#c53a2c] focus-visible:ring-2 focus-visible:ring-[#c53a2c]/25"
              />
            </label>

            <label className="text-xs font-semibold">
              Phone <span className="font-normal text-[#746d64]">(optional)</span>
              <input
                name="phone"
                type="tel"
                maxLength={20}
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none transition focus:border-[#c53a2c] focus-visible:ring-2 focus-visible:ring-[#c53a2c]/25"
              />
            </label>

            <label className="text-xs font-semibold">
              What do you need?
              <select
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none transition focus:border-[#c53a2c] focus-visible:ring-2 focus-visible:ring-[#c53a2c]/25"
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
              className="mt-2 w-full resize-y border border-black/15 bg-[#f9f7f2] px-3 py-3 text-sm font-normal outline-none transition focus:border-[#c53a2c] focus-visible:ring-2 focus-visible:ring-[#c53a2c]/25"
            />
          </label>

          <label className="absolute -left-[9999px]" aria-hidden="true">
            Leave this field empty
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="mt-5 flex w-full items-center justify-between bg-[#24211f] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#c53a2c] disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send enquiry"}
            <span>↗</span>
          </button>

          <p aria-live="polite" className="mt-3 min-h-5 text-xs text-[#686159]">
            {status || "We’ll only use your details to respond to this enquiry."}
          </p>
        </form>
      </section>

    </main>
  );
}
