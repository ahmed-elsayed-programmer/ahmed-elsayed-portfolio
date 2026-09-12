import type { MetadataRoute } from "next";

const siteUrl = "https://ahmedelsayed.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/en`, lastModified: new Date("2026-09-12"), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/ar`, lastModified: new Date("2026-09-12"), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/en/work/first-group`, lastModified: new Date("2026-09-12"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/ar/work/first-group`, lastModified: new Date("2026-09-12"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
