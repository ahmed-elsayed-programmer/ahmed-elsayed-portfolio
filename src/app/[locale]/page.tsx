import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroSection from "@/components/hero-section";
import LocaleAttributes from "@/components/locale-attributes";
import PortfolioChrome from "@/components/portfolio-chrome";
import PortfolioSections from "@/components/portfolio-sections";
import { getPortfolioCopy, isLocale, locales, type Locale } from "@/lib/i18n";

type LocalizedPageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = "https://ahmedelsayed.vercel.app";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale: candidate } = await params;
  if (!isLocale(candidate)) return {};

  const copy = getPortfolioCopy(candidate);
  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: {
      canonical: `/${candidate}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: `/${candidate}`,
      type: "website",
      locale: candidate === "ar" ? "ar_EG" : "en_US",
      alternateLocale: candidate === "ar" ? ["en_US"] : ["ar_EG"],
      images: [{ url: "/hero-background-v2.png", alt: copy.hero.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: ["/hero-background-v2.png"],
    },
  };
}

export default async function LocalizedHome({ params }: LocalizedPageProps) {
  const { locale: candidate } = await params;
  if (!isLocale(candidate)) notFound();

  const locale: Locale = candidate;
  const copy = getPortfolioCopy(locale);
  const localizedUrl = `${siteUrl}/${locale}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Ahmed Elsayed",
        url: localizedUrl,
        jobTitle: "Full-Stack Engineer",
        sameAs: [
          "https://github.com/ahmed-elsayed-programmer",
          "https://www.linkedin.com/in/ahmed-elsayed-developer",
        ],
        knowsAbout: ["Python", "Django", "Django REST Framework", "React", "Next.js", "PostgreSQL"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: copy.metadata.title,
        url: localizedUrl,
        inLanguage: locale,
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
  return (
    <div className="localized-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <LocaleAttributes locale={locale} />
      <PortfolioChrome locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main>
        <HeroSection locale={locale} />
        <PortfolioSections locale={locale} />
      </main>
    </div>
  );
}
