import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/lib/case-studies";
import { locales } from "@/lib/i18n";

const siteUrl = "https://ahmedelsayed.vercel.app";
const lastModified = new Date("2026-09-13");

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  }));
  const caseStudyRoutes: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    caseStudySlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  );

  return [...portfolioRoutes, ...caseStudyRoutes];
}
