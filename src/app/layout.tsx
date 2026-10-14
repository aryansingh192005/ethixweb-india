import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteName} — Digital work that moves you forward`,
    template: `%s | ${siteName}`,
  },
  description:
    "Thoughtful websites, digital products and growth systems designed for Indian audiences and ambitious businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteName} — Digital work that moves you forward`,
    description:
      "Thoughtful websites, digital products and growth systems designed for Indian audiences and ambitious businesses.",
    url: siteUrl,
    siteName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${siteName} — Digital work that moves you forward`,
    description:
      "Thoughtful websites, digital products and growth systems designed for Indian audiences and ambitious businesses.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
