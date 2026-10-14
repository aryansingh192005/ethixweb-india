import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Services",
  "Websites and digital experiences, AI reception and automation, marketing and growth, plus integrations and support for businesses in India and global markets.",
  "/services"
);

const services = [
  {
    number: "01",
    title: "Websites & digital experiences",
    description:
      "Mobile-first digital experiences that make it easier for people to discover your business, complete a task and get the support they need, with regional-language and UPI journeys where they fit.",
    details: [
      "Websites and e-commerce",
      "Web applications and customer portals",
      "Booking flows and UPI-ready journeys",
    ],
  },
  {
    number: "02",
    title: "AI reception & automation",
    description:
      "AI voice and chat receptionists can answer, qualify, route and book enquiries, with people kept in control of the experience.",
    details: [
      "Voice and chat enquiry handling",
      "Lead qualification, routing and booking",
      "Workflow automation",
    ],
  },
  {
    number: "03",
    title: "Marketing & growth",
    description:
      "Campaigns and measurement to help you reach the right audiences and understand activity across India and global markets.",
    details: [
      "SEO and paid advertising",
      "Social and email campaigns",
      "Analytics and reporting",
    ],
  },
  {
    number: "04",
    title: "Integrations & support",
    description:
      "Connected systems and ongoing technical care to keep your day-to-day tools useful and working together.",
    details: [
      "CRM and other integrations",
      "Dashboards",
      "Maintenance and technical support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader active="services" />
      <main id="main-content" className="min-h-screen bg-[#f5f2eb] text-[#24211f]">

      <section className="bg-[#fffdf8] px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#746d64]">
            GOOD WORK, BUILT AROUND YOU
          </p>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
            One thoughtful team.
            <br />
            <span className="text-[#c53a2c]">Many ways forward.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#686159]">
            Start with the thing that needs fixing. We’ll bring the right mix of
            strategy, design and engineering to help.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 md:px-12 md:py-16">
        <div className="mx-auto max-w-[1440px]">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-5 border-b border-black/15 py-8 md:grid-cols-[110px_1fr_0.85fr] md:gap-10 md:py-12"
            >
              <span className="text-xs text-[#c53a2c]">
                {service.number} / SERVICE
              </span>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[#686159]">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 text-sm text-[#5c5751] md:pt-1">
                {service.details.map((detail) => (
                  <li key={detail} className="border-b border-black/10 pb-3">
                    <span className="mr-3 text-[#c53a2c]">↗</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#c53a2c] px-5 py-14 text-white sm:px-8 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
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

      </main>
      <SiteFooter />
    </>
  );
}
