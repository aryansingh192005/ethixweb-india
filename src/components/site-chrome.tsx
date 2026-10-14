import Link from "next/link";

type ActivePage = "services" | "about" | "contact";

const links: { href: string; label: string; page: ActivePage }[] = [
  { href: "/services", label: "What we do", page: "services" },
  { href: "/about", label: "Our story", page: "about" },
  { href: "/contact", label: "Contact", page: "contact" },
];

export function SiteHeader({ active }: { active?: ActivePage }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f5f2eb]/90 backdrop-blur-xl supports-[backdrop-filter]:bg-[#f5f2eb]/80">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3.5 sm:px-8 md:flex-nowrap md:px-12 md:py-4">
        <Link
          href="/"
          aria-label="Ethixweb India home"
          className="group flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-offset-4"
        >
          <span className="text-[19px] font-bold tracking-[-0.055em] text-[#24211f]">
            ethixweb<span className="text-[#c53a2c]">.</span>
          </span>
          <span className="border-l border-[#c53a2c]/35 pl-2.5 text-[9px] font-semibold tracking-[0.24em] text-[#a9362c]">
            INDIA
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="order-3 flex w-full items-center justify-between gap-4 border-t border-black/10 pt-3 text-[12px] text-[#5c5751] md:order-none md:w-auto md:justify-normal md:gap-8 md:border-0 md:pt-0 md:text-[13px]"
        >
          {links.map((link) => (
            <Link
              key={link.page}
              href={link.href}
              aria-current={active === link.page ? "page" : undefined}
              className={`relative py-1 transition-colors hover:text-[#a9362c] ${
                active === link.page ? "font-semibold text-[#a9362c]" : ""
              }`}
            >
              {link.label}
              {active === link.page && (
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#c53a2c]" />
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-3 border border-[#24211f]/55 px-3.5 py-2.5 text-[11px] font-semibold transition-colors hover:border-[#24211f] hover:bg-[#24211f] hover:text-[#fffdf8] sm:px-4 sm:text-xs"
        >
          Start a project
          <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#24211f] px-5 py-8 text-[#f5f2eb] sm:px-8 md:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-8 border-b border-white/15 pb-7 md:grid-cols-[1fr_1fr_auto] md:items-center">
        <Link href="/" className="w-fit text-lg font-bold tracking-[-0.045em]">
          ethixweb<span className="text-[#ed765b]">.</span>
          <span className="ml-2 text-[9px] font-semibold tracking-[0.22em] text-[#ed765b]">INDIA</span>
        </Link>
        <p className="max-w-[250px] text-sm leading-6 text-white/65">
          Thoughtful digital work for business in India and beyond.
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65">
          <Link className="transition-colors hover:text-white" href="/services">Services</Link>
          <Link className="transition-colors hover:text-white" href="/about">About</Link>
          <Link className="transition-colors hover:text-white" href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 pt-5 text-[10px] tracking-wide text-white/65 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Ethixweb India</span>
        <span>India-aware by design. Ready to work across markets.</span>
      </div>
    </footer>
  );
}
