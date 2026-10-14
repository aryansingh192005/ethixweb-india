import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: new URL("/", siteUrl).toString(), priority: 1 },
    { url: new URL("/services", siteUrl).toString(), priority: 0.8 },
    { url: new URL("/about", siteUrl).toString(), priority: 0.7 },
    { url: new URL("/contact", siteUrl).toString(), priority: 0.7 },
  ];
}
