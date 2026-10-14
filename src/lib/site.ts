import type { Metadata } from "next";

export const siteUrl = new URL("https://ethixweb-india-six.vercel.app");

export const siteName = "Ethixweb India";

export function pageMetadata(
  title: string,
  description: string,
  pathname: string
): Metadata {
  const pageTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title: pageTitle,
      description,
      url: new URL(pathname, siteUrl),
      siteName,
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary", title: pageTitle, description },
  };
}
