import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Rooted in India and open to everywhere: a digital team designing for the many contexts, customers, and ways people use the web.",
};

const values = [
  {
    title: "Start by listening",
    text: "We take time to understand the business, the people it serves and what needs to change.",
  },
  {
    title: "Make the complex clear",
    text: "Good digital experiences should feel straightforward, useful and easy to trust.",
  },
  {
    title: "Stay accountable",
    text: "We communicate clearly, follow through on commitments and care about the details.",
  },
];

export default function AboutPage() {
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
          <Link href="/about" className="text-[#d83929]">Our story</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="bg-[#fffdf8] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
            ROOTED HERE. OPEN TO EVERYWHERE.
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Built for India.
            <br />
            <span className="text-[#d83929]">Open to everywhere.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#686159] md:text-lg">
            India isn’t one market, one language or one kind of customer. This
            India-focused edition of Ethixweb is designed around the many
            contexts people bring with them.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div className="relative flex min-h-[340px] items-end overflow-hidden bg-[#bb3528] p-7 text-white md:min-h-[430px]">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#f6c66f] to-[#e67b38] md:h-72 md:w-72" />
            <p className="relative text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              India, in
              <br />
              motion.
            </p>
            <p className="absolute right-6 top-6 text-right text-[10px] leading-5 tracking-wider text-white/75">
              INDIA
              <br />
              IN FOCUS
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
              OUR POINT OF VIEW
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              The best work begins by paying attention.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#686159]">
              People across India use the web in different languages, on
              different devices and for different reasons. Good digital work
              starts by understanding those differences: from regional content
              and mobile performance to familiar ways of paying and getting in
              touch.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#686159]">
              Ethixweb’s senior-led, outcomes-focused approach is adapted here
              for Indian businesses, with clear strategy, considered design and
              technology made to work in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf8] px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#81796f]">
            HOW WE LIKE TO WORK
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.title} className="border-t border-black/15 pt-5">
                <span className="text-xs text-[#d83929]">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#746d64]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d83929] px-6 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-semibold">Have a good challenge?</h2>
          <Link
            href="/contact"
            className="w-fit bg-[#fffdf8] px-5 py-4 text-sm font-semibold text-[#24211f]"
          >
            Tell us about it <span className="ml-5">↗</span>
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
