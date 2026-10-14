import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Ethixweb about your next website, digital product, or growth challenge. We typically reply within one working day.",
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return (
    <>
      <SiteHeader active="contact" />
      {children}
      <SiteFooter />
    </>
  );
}
