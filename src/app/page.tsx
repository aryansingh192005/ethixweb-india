import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const services = [
  {
    title: "Websites & digital experiences",
    description:
      "Mobile-first websites, e-commerce and useful web products built around the way your customers browse, decide and buy.",
    tag: "Design · Build · Commerce",
  },
  {
    title: "AI reception & automation",
    description:
      "Thoughtful voice, chat and workflow automation that helps your team respond sooner and spend time where it matters.",
    tag: "AI · Workflows · Booking",
  },
  {
    title: "Marketing & growth",
    description:
      "Search, campaigns and clear measurement that connect your business with the people already looking for what you do.",
    tag: "SEO · Campaigns · Analytics",
  },
  {
    title: "Integrations & support",
    description:
      "Connected tools, practical dashboards and ongoing care that keep your digital foundations useful after launch.",
    tag: "CRM · Data · Support",
  },
];

const steps = [
  ["01", "Listen first", "We learn about your goals, your customers and what success means to you."],
  ["02", "Make a clear plan", "We agree on priorities, milestones and what happens next."],
  ["03", "Build with care", "We share progress often and sweat the details that make the experience work."],
  ["04", "Keep getting better", "After launch, we learn from real use and help you improve."],
];

const principles = [
  ["01", "India-aware by design", "We consider regional languages, mobile habits, payment journeys and the contexts that shape how people use the web."],
  ["02", "People close to the work", "Strategy, design and engineering stay connected, with clear communication and fewer handoffs."],
  ["03", "Made for the long run", "Fast, accessible foundations make it easier to maintain, improve and grow your digital presence."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#24211f]">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1fr_0.92fr] md:items-center md:gap-14 md:px-12 md:py-24 lg:gap-20 lg:py-28">
          <div className="relative z-10">
            <p className="hero-reveal hero-reveal--1 mb-6 flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-[#746d64] sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-[#628467]" />
              DIGITAL PARTNER · INDIA & BEYOND
            </p>
            <h1 className="hero-reveal hero-reveal--2 max-w-[760px] text-[clamp(3.3rem,7.8vw,7rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
              Make your next move <span className="text-[#c53a2c]">mean more.</span>
            </h1>
            <p className="hero-reveal hero-reveal--3 mt-7 max-w-[570px] text-[15px] leading-7 text-[#686159] sm:text-lg sm:leading-8">
              We build digital foundations and growth systems that help ambitious businesses go further—with care for local customers and the ambition to scale anywhere.
            </p>
            <div className="hero-reveal hero-reveal--4 mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/contact" className="group inline-flex min-h-12 items-center gap-8 bg-[#c53a2c] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#b92e22]">
                Let’s talk about it <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
              </Link>
              <a href="#services" className="group text-sm font-medium text-[#4d4842]">
                Explore what we do <span className="ml-2 text-[#c53a2c] transition-transform group-hover:translate-y-1">↓</span>
              </a>
            </div>
            <div className="hero-reveal hero-reveal--5 mt-12 grid max-w-[550px] grid-cols-2 gap-5 border-t border-black/10 pt-5 text-xs leading-5 text-[#746d64] sm:mt-14">
              <p>Thoughtful work.<br />Clear communication.</p>
              <p>Built with India in mind.<br />Ready for anywhere.</p>
            </div>
          </div>

          <div className="hero-reveal hero-reveal--art sunrise-grid relative isolate aspect-[1/0.9] min-h-[300px] overflow-hidden bg-[#bd372a] shadow-[0_24px_70px_-40px_rgba(70,32,21,0.65)] sm:min-h-[420px] md:aspect-[0.98/1] md:min-h-[480px]">
            <div aria-hidden="true" className="sunrise-sun absolute left-1/2 top-[43%] h-[53%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#ffd477] via-[#f4a342] to-[#e66c37] shadow-[0_0_100px_14px_rgba(249,179,82,0.2)]" />
            <div aria-hidden="true" className="absolute inset-x-0 top-[52%] h-[31%] bg-[repeating-linear-gradient(to_bottom,rgba(166,43,34,0.78)_0,rgba(166,43,34,0.78)_11px,transparent_11px,transparent_23px)]" />
            <div aria-hidden="true" className="sunrise-orbit absolute left-[4%] top-[34%] h-[35%] w-[94%] rounded-[50%] border border-white/55" />
            <span className="absolute left-5 top-5 text-[9px] tracking-[0.2em] text-white/75 sm:left-7 sm:top-7 sm:text-[10px]">28.6139° N</span>
            <span className="absolute right-5 top-5 text-[9px] tracking-[0.2em] text-white/75 sm:right-7 sm:top-7 sm:text-[10px]">NEW DELHI · INDIA</span>
            <p className="absolute bottom-5 left-5 text-xs leading-5 text-white sm:bottom-7 sm:left-7 sm:text-sm">A little more possibility,<br />every day.</p>
            <span aria-hidden="true" className="absolute bottom-5 right-6 text-2xl text-[#ffce78] sm:bottom-7 sm:right-7 sm:text-3xl">✳</span>
          </div>
        </div>
      </section>

      <div className="motion-strip border-b border-black/10 bg-[#eee8dc] py-4" role="img" aria-label="Strategy, design, engineering. Made to move business forward.">
        <div className="motion-strip__track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="motion-strip__group" key={copy}>
              {["STRATEGY", "DESIGN", "ENGINEERING", "MADE TO MOVE BUSINESS FORWARD"].map((word) => (
                <span className="inline-flex items-center gap-5" key={word}>
                  <span>{word}</span>
                  <span className="text-[#c53a2c]" aria-hidden="true">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="services" className="scroll-mt-20 bg-[#fffdf8] px-5 py-14 sm:px-8 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] text-[#746d64]">GOOD WORK STARTS WITH GOOD THINKING</p>
              <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-4xl md:text-5xl">
                One thoughtful team. <span className="text-[#c53a2c]">Many ways forward.</span>
              </h2>
            </div>
            <Link href="/services" className="group w-fit border-b border-black/20 pb-2 text-sm font-medium transition-colors hover:border-[#c53a2c] hover:text-[#a9362c]">
              See how we can help <span className="ml-2 text-[#c53a2c] transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Link key={service.title} href="/services" className="motion-reveal group flex min-h-[235px] flex-col border border-black/10 bg-[#fffdf8] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#c53a2c]/45 hover:bg-[#f8f4ed] hover:shadow-[0_18px_45px_-32px_rgba(50,38,28,0.5)] sm:p-6">
                <span className="text-xs text-[#c53a2c]">0{index + 1} <span className="text-[#746d64]">/ SERVICE</span></span>
                <h3 className="mt-8 text-lg font-semibold leading-snug tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#746d64]">{service.description}</p>
                <span className="mt-auto pt-6 text-[10px] font-medium uppercase tracking-[0.13em] text-[#746d64]">{service.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#24211f] px-5 py-16 text-[#f5f2eb] sm:px-8 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <p className="text-[10px] font-medium tracking-[0.2em] text-white/50">A CLEAR WAY FORWARD</p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-5xl md:text-6xl">Less theatre.<br /><span className="text-[#ed765b]">More momentum.</span></h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">Good work needs a clear plan, honest conversations and people who see it through.</p>
          </div>
          <div>
            {steps.map(([number, title, description]) => (
              <article key={number} className="motion-reveal grid grid-cols-[34px_1fr] gap-4 border-t border-white/15 py-6 sm:grid-cols-[44px_1fr] sm:py-7">
                <span className="pt-1 text-xs text-[#ed765b]">{number}</span>
                <div><h3 className="text-base font-semibold">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/60">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf8] px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] font-medium tracking-[0.2em] text-[#746d64]">A GLIMPSE OF HOW WE THINK</p>
          <div className="motion-reveal mt-8 grid overflow-hidden bg-[#eee8dc] md:grid-cols-2">
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#d9cabb] sm:min-h-[390px]">
              <div aria-hidden="true" className="absolute h-56 w-56 rounded-full bg-gradient-to-br from-[#f6bd68] to-[#db5938] sm:h-72 sm:w-72" />
              <div className="relative z-10 w-52 -rotate-3 bg-[#fffdf8] p-5 shadow-[0_24px_55px_-24px_rgba(38,27,18,0.42)] sm:w-60 sm:p-6">
                <div className="flex justify-between text-[9px] tracking-[0.16em] text-[#c53a2c]"><span>FIELD NOTES</span><span>01 / 04</span></div>
                <div className="mt-5 flex h-28 items-center justify-center bg-[#e8ded1] sm:h-32"><span className="text-3xl font-semibold tracking-tight text-[#704e3d]">mitti</span></div>
                <p className="mt-4 text-sm font-semibold">Made close to home.</p>
                <p className="mt-1 text-[10px] text-[#746d64]">A storefront concept for India</p>
              </div>
              <span className="absolute bottom-5 right-5 rounded-full bg-[#24211f] px-4 py-3 text-center text-[9px] leading-4 tracking-wider text-white">CONCEPT<br />STUDY</span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12 lg:p-16">
              <p className="text-[10px] font-medium tracking-[0.18em] text-[#746d64]">INDEPENDENT CONCEPT STUDY</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">A storefront for <span className="text-[#c53a2c]">what’s next.</span></h2>
              <p className="mt-5 text-sm leading-7 text-[#686159]">A self-directed exploration of an Indian direct-to-consumer brand: mobile-first browsing, thoughtful product storytelling and a clearer path to checkout.</p>
              <p className="mt-3 text-xs leading-5 text-[#746d64]">Illustrative concept — not a client engagement.</p>
              <Link href="/contact" className="group mt-7 w-fit border-b border-black/20 pb-2 text-sm font-medium transition-colors hover:border-[#c53a2c] hover:text-[#a9362c]">Build something for your business <span className="ml-2 text-[#c53a2c] transition-transform group-hover:translate-x-1">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2eb] px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-7 md:grid-cols-[1fr_0.75fr] md:items-end md:gap-14">
            <div><p className="text-[10px] font-medium tracking-[0.2em] text-[#746d64]">WHY ETHIXWEB</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl">Good work should <span className="text-[#c53a2c]">move you forward.</span></h2></div>
            <p className="max-w-lg text-sm leading-7 text-[#686159]">Thoughtful digital work comes from understanding the people it serves, communicating clearly and caring about what happens after launch.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {principles.map(([number, title, description]) => (
              <article key={number} className="motion-reveal border-t border-black/15 py-5"><span className="text-xs text-[#c53a2c]">{number}</span><h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-[#746d64]">{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#c53a2c] px-5 py-14 text-white sm:px-8 md:px-12 md:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><p className="text-[10px] font-medium tracking-[0.2em] text-white/70">GOOD THINGS START WITH A CONVERSATION</p><h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl">What could we<br /><span className="text-[#ffcf88]">make possible?</span></h2></div>
          <Link href="/contact" className="group inline-flex min-h-12 w-fit items-center gap-7 bg-[#fffdf8] px-5 py-4 text-sm font-semibold text-[#24211f] transition-colors hover:bg-white">Tell us what’s on your mind <span className="transition-transform group-hover:translate-x-1">↗</span></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
