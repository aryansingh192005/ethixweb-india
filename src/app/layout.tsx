import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ethixweb India — Digital work that moves you forward",
    template: "%s | Ethixweb India",
  },
  description:
    "Thoughtful websites, digital products and growth systems designed for Indian audiences and ambitious businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
