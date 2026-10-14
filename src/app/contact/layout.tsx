import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Tell Ethixweb about your next website, digital product, or growth challenge. We typically reply within one working day.",
  "/contact"
);

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return (
    <>
      <SiteHeader active="contact" />
      {children}
      <SiteFooter />
    </>
  );
}
