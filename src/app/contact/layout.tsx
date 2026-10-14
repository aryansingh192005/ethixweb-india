import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Ethixweb about your next website, digital product, or growth challenge. We typically reply within one working day.",
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}
