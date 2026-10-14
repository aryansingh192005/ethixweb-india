import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Private workspace",
    template: "%s | Private workspace",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return children;
}
