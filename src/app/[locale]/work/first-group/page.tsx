import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FirstGroupCaseStudy from "@/components/case-study/first-group-case-study";
import LocaleAttributes from "@/components/locale-attributes";
import PortfolioChrome from "@/components/portfolio-chrome";
import { getFirstGroupCaseStudy } from "@/lib/case-studies";
import { isLocale, locales, type Locale } from "@/lib/i18n";

type CaseStudyPageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://ahmedelsayed.vercel.app";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale: candidate } = await params;
  if (!isLocale(candidate)) return {};

  const copy = getFirstGroupCaseStudy(candidate);
  const path = `/${candidate}/work/first-group`;
  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: {
      canonical: path,
      languages: { en: "/en/work/first-group", ar: "/ar/work/first-group", "x-default": "/en/work/first-group" },
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: path,
      type: "article",
      images: [{ url: "/first-auto-cover.jpeg", alt: copy.hero.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: ["/first-auto-cover.jpeg"],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale: candidate } = await params;
  if (!isLocale(candidate)) notFound();

  const locale: Locale = candidate;
  const alternateLocale = locale === "en" ? "ar" : "en";
  const copy = getFirstGroupCaseStudy(locale);
  const pageUrl = `${siteUrl}/${locale}/work/first-group`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: copy.hero.title,
    description: copy.metadata.description,
    url: pageUrl,
    image: `${siteUrl}/first-auto-cover.jpeg`,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: "Ahmed Elsayed",
      url: siteUrl,
    },
  };

  return (
    <div className="localized-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <LocaleAttributes locale={locale} />
      <PortfolioChrome
        locale={locale}
        basePath={`/${locale}`}
        alternateHref={`/${alternateLocale}/work/first-group`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <FirstGroupCaseStudy locale={locale} />
    </div>
  );
}
