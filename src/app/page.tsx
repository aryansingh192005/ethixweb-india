import Link from "next/link";

const services = [
  "Websites & commerce",
  "Web applications",
  "Growth systems",
  "AI & automation",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#24211f]">
      <header className="flex flex-wrap items-center justify-between gap-y-3 border-b border-black/10 px-6 py-4 md:flex-nowrap md:px-12 md:py-5">
        <Link href="/" aria-label="Ethixweb India home" className="text-xl font-bold tracking-tight">
          ethixweb<span className="text-[#d83929]">.</span>
          <span className="ml-2 text-[10px] font-medium tracking-[0.2em] text-[#d83929]">
            INDIA
          </span>
        </Link>

        <nav aria-label="Main navigation" className="order-3 flex w-full justify-between border-t border-black/10 pt-3 text-xs text-[#5c5751] md:order-none md:w-auto md:justify-normal md:gap-9 md:border-0 md:pt-0 md:text-sm">
          <Link href="/services" className="hover:text-[#d83929]">What we do</Link>
          <Link href="/about" className="hover:text-[#d83929]">Our story</Link>
          <Link href="/contact" className="hover:text-[#d83929]">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-sm border border-[#24211f] px-4 py-3 text-xs font-semibold transition hover:bg-[#24211f] hover:text-white"
        >
          Start a project <span className="ml-4">↗</span>
        </Link>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:px-12 md:py-24">
        <div>
          <p className="mb-7 flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] text-[#746d64]">
            <span className="h-2 w-2 rounded-full bg-[#628467]" />
            DIGITAL PARTNER · INDIA
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl md:text-7xl">
            Make your next move{" "}
            <span className="text-[#d83929]">mean more.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-7 text-[#686159] md:text-lg">
            We build mobile-first websites, useful digital products and growth
            systems for ambitious Indian businesses—made for local customers
            and ready to scale anywhere.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="bg-[#d83929] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#b92e22]"
            >
              Let’s talk about it <span className="ml-8">↗</span>
            </Link>
            <a href="#services" className="text-sm font-medium text-[#4d4842]">
              Explore what we do <span className="ml-2 text-[#d83929]">↓</span>
            </a>
          </div>

          <div className="mt-14 flex gap-8 border-t border-black/10 pt-5 text-xs leading-5 text-[#746d64]">
            <p>Thoughtful work.<br />Clear communication.</p>
            <p>Built for India.<br />Ready for anywhere.</p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#bb3528] md:min-h-[480px]"
        >
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-[#f6c66f] via-[#ef9b42] to-[#dc6335] shadow-[0_0_80px_20px_rgba(246,190,99,0.2)] md:h-80 md:w-80" />
          <div className="absolute h-36 w-[115%] translate-y-20 bg-[repeating-linear-gradient(to_bottom,#a92e24_0px,#a92e24_13px,transparent_13px,transparent_22px)]" />
          <div className="absolute h-44 w-[90%] rotate-[-18deg] rounded-[50%] border border-white/50" />
          <div className="absolute left-5 top-5 text-[10px] tracking-[0.16em] text-white/75">
            INDIA, IN FOCUS
          </div>
          <div className="absolute right-5 top-5 text-[10px] tracking-[0.16em] text-white/75">
            BUILT FOR INDIA
          </div>
          <p className="absolute bottom-5 left-5 text-sm leading-5 text-white">
            A little more possibility,<br />every day.
          </p>
          <span className="absolute bottom-5 right-6 text-3xl text-[#f3bd68]">✳</span>
        </div>
      </section>

      <section id="services" className="border-t border-black/10 bg-[#fffdf8] px-6 py-14 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
            GOOD WORK STARTS WITH GOOD THINKING
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            One thoughtful team.{" "}
            <span className="text-[#d83929]">Many ways forward.</span>
          </h2>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <a
                key={service}
              href="/contact"
                className="border border-black/10 p-5 transition hover:-translate-y-1 hover:bg-[#f5f2eb]"
              >
                <span className="text-xs text-[#d83929]">0{index + 1}</span>
                <h3 className="mt-8 text-lg font-semibold">{service}</h3>
                <p className="mt-3 text-sm text-[#746d64]">Explore what we can make possible ↗</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#24211f] px-6 py-16 text-[#f5f2eb] md:px-12 md:py-20">
  <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
    <div>
      <p className="text-[10px] font-medium tracking-[0.18em] text-white/50">
        A CLEAR WAY FORWARD
      </p>
      <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Less theatre.
        <br />
        <span className="text-[#ed765b]">More momentum.</span>
      </h2>
      <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
        Good work needs a clear plan, honest conversations and people who see it
        through.
      </p>
    </div>

    <div>
      {[
        ["01", "Listen first", "We learn about your goals, your customers and what success means to you."],
        ["02", "Make a clear plan", "We agree on priorities, milestones and what happens next."],
        ["03", "Build with care", "We share progress often and sweat the details that make the experience work."],
        ["04", "Keep getting better", "After launch, we learn from real use and help you improve."],
      ].map(([number, title, description]) => (
        <article
          key={number}
          className="grid grid-cols-[34px_1fr] gap-4 border-t border-white/15 py-5"
        >
          <span className="pt-1 text-xs text-[#ed765b]">{number}</span>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="bg-[#fffdf8] px-6 py-16 md:px-12 md:py-20">
  <div className="mx-auto max-w-7xl">
    <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
      A GLIMPSE OF HOW WE THINK
    </p>

    <div className="mt-8 grid overflow-hidden bg-[#eee8dc] md:grid-cols-2">
      <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#d9cabb]">
        <div className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-[#f6bd68] to-[#db5938]" />
        <div className="relative z-10 w-56 -rotate-3 bg-[#fffdf8] p-5 shadow-2xl">
          <div className="flex justify-between text-[9px] tracking-[0.16em] text-[#d83929]">
            <span>FIELD NOTES</span>
            <span>01 / 04</span>
          </div>
          <div className="mt-5 flex h-28 items-center justify-center bg-[#e8ded1]">
            <span className="text-3xl font-semibold tracking-tight text-[#704e3d]">
              mitti
            </span>
          </div>
          <p className="mt-4 text-sm font-semibold">Made close to home.</p>
          <p className="mt-1 text-[10px] text-[#746d64]">A storefront concept for India</p>
        </div>
        <span className="absolute bottom-5 right-5 rounded-full bg-[#24211f] px-4 py-3 text-center text-[9px] leading-4 tracking-wider text-white">
          CONCEPT
          <br />
          STUDY
        </span>
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className="text-[10px] font-medium tracking-[0.16em] text-[#81796f]">
          INDEPENDENT CONCEPT STUDY
        </p>
        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          A storefront for{" "}
          <span className="text-[#d83929]">what’s next.</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-[#686159]">
          A self-directed exploration of an Indian direct-to-consumer brand:
          mobile-first browsing, thoughtful product storytelling and a clearer
          path to checkout.
        </p>
        <p className="mt-3 text-xs text-[#81796f]">
          Illustrative concept — not a client engagement.
        </p>
        <a
          href="/contact"
          className="mt-7 w-fit border-b border-black/20 pb-2 text-sm font-medium"
        >
          Build something for your business <span className="ml-3 text-[#d83929]">↗</span>
        </a>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#f5f2eb] px-6 py-16 md:px-12 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-8 md:grid-cols-2 md:items-end">
      <div>
        <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
          WHY ETHIXWEB
        </p>
        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Good work should{" "}
          <span className="text-[#d83929]">move you forward.</span>
        </h2>
      </div>
      <p className="max-w-lg text-sm leading-7 text-[#686159]">
        Thoughtful digital work comes from understanding the people it serves,
        communicating clearly and caring about what happens after launch.
      </p>
    </div>

    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {[
        ["01", "India-aware by design", "We consider regional languages, mobile habits, UPI journeys and the different contexts that shape how people use the web."],
        ["02", "Senior people, direct access", "Work directly with the senior team doing the work—without account-manager handoffs."],
        ["03", "Outcomes over noise", "We connect the work to useful outcomes like enquiries, bookings and revenue—not vanity metrics."],
      ].map(([number, title, description]) => (
        <article key={number} className="border-t border-black/15 py-5">
          <span className="text-xs text-[#d83929]">{number}</span>
          <h3 className="mt-6 text-lg font-semibold">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#746d64]">
            {description}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

      <section id="contact" className="bg-[#d83929] px-6 py-16 text-white md:px-12 md:py-20">
  <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="text-[10px] font-medium tracking-[0.18em] text-white/70">
        GOOD THINGS START WITH A CONVERSATION
      </p>
      <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
        What could we
        <br />
        <span className="text-[#ffcf88]">make possible?</span>
      </h2>
    </div>
    <a
      href="/contact"
      className="w-fit bg-[#fffdf8] px-5 py-4 text-sm font-semibold text-[#24211f] transition hover:bg-white"
    >
      Tell us what’s on your mind <span className="ml-6">↗</span>
    </a>
  </div>
</section>

<footer className="bg-[#24211f] px-6 py-8 text-[#f5f2eb] md:px-12">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 border-b border-white/15 pb-7 md:flex-row md:items-center md:justify-between">
    <Link href="/" className="text-lg font-bold tracking-tight">
      ethixweb<span className="text-[#ed765b]">.</span>
      <span className="ml-2 text-[10px] font-medium tracking-[0.2em] text-[#ed765b]">
        INDIA
      </span>
    </Link>
    <p className="text-sm leading-6 text-white/60">
      Good work should move
      <br />
      your business forward.
    </p>
    <nav className="flex gap-5 text-xs text-white/70">
      <Link href="/services" className="hover:text-white">Services</Link>
      <Link href="/about" className="hover:text-white">About</Link>
      <Link href="/contact" className="hover:text-white">Contact</Link>
    </nav>
  </div>

  <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-5 text-[10px] text-white/45 sm:flex-row sm:justify-between">
    <span>© 2026 Ethixweb India</span>
    <span>Built for the way India does business.</span>
  </div>
</footer>
    </main>
  );
}
