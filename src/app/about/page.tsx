import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Our story",
  "Rooted in India and open to everywhere: a digital team designing for the many contexts, customers, and ways people use the web.",
  "/about"
);

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
    <>
      <SiteHeader active="about" />
      <main id="main-content" className="min-h-screen bg-[#f5f2eb] text-[#24211f]">

      <section className="bg-[#fffdf8] px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#746d64]">
            ROOTED HERE. OPEN TO EVERYWHERE.
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]">
            Built for India.
            <br />
            <span className="text-[#c53a2c]">Open to everywhere.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#686159] md:text-lg">
            India isn’t one market, one language or one kind of customer. This
            India-focused edition of Ethixweb is designed around the many
            contexts people bring with them.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-2 md:items-center md:gap-14">
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
            <p className="text-[10px] font-medium tracking-[0.18em] text-[#746d64]">
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

      <section className="bg-[#fffdf8] px-5 py-14 sm:px-8 md:px-12 md:py-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] font-medium tracking-[0.18em] text-[#746d64]">
            HOW WE LIKE TO WORK
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.title} className="border-t border-black/15 pt-5">
                <span className="text-xs text-[#c53a2c]">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#746d64]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#c53a2c] px-5 py-12 text-white sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-semibold">Have a good challenge?</h2>
          <Link
            href="/contact"
            className="w-fit bg-[#fffdf8] px-5 py-4 text-sm font-semibold text-[#24211f]"
          >
            Tell us about it <span className="ml-5">↗</span>
          </Link>
        </div>
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
