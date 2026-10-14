import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, commerce, web applications, growth systems, and practical AI automation for ambitious businesses in India.",
};

const services = [
  {
    number: "01",
    title: "Websites & commerce",
    description:
      "Fast, thoughtful websites that help Indian customers understand your business and take the next step.",
    details: ["Brand-led design", "Mobile-first performance", "UPI-ready commerce journeys"],
  },
  {
    number: "02",
    title: "Web applications",
    description:
      "Useful digital products that make complex workflows simpler for your team and customers across devices.",
    details: ["Customer portals", "Dashboards and tools", "Booking flows and integrations"],
  },
  {
    number: "03",
    title: "Growth systems",
    description:
      "Connected marketing and measurement that show what is working across local and national markets.",
    details: ["Local and national search", "Paid campaign strategy", "Content and analytics"],
  },
  {
    number: "04",
    title: "AI & automation",
    description:
      "Practical automation that reduces repetitive work while keeping people in control of the customer experience.",
    details: ["Workflow automation", "AI assistants with human handoff", "Data connections"],
  },
];

export default function ServicesPage() {
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
          <Link href="/services" className="text-[#d83929]">What we do</Link>
          <Link href="/about">Our story</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="bg-[#fffdf8] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
            GOOD WORK, BUILT AROUND YOU
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            One thoughtful team.
            <br />
            <span className="text-[#d83929]">Many ways forward.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#686159]">
            Start with the thing that needs fixing. We’ll bring the right mix of
            strategy, design and engineering to help.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-5 border-b border-black/15 py-8 md:grid-cols-[100px_1fr_1fr] md:gap-10 md:py-10"
            >
              <span className="text-xs text-[#d83929]">
                {service.number} / SERVICE
              </span>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[#686159]">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 text-sm text-[#5c5751]">
                {service.details.map((detail) => (
                  <li key={detail} className="border-b border-black/10 pb-3">
                    <span className="mr-3 text-[#d83929]">↗</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#d83929] px-6 py-14 text-white md:px-12 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] tracking-[0.18em] text-white/70">
              NOT SURE WHERE TO START?
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Let’s work it out together.
            </h2>
          </div>
          <Link
            href="/contact"
            className="w-fit bg-[#fffdf8] px-5 py-4 text-sm font-semibold text-[#24211f]"
          >
            Talk through your project <span className="ml-5">↗</span>
          </Link>
        </div>
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
