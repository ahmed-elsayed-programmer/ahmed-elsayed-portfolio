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
  };
}

export default async function LocalizedHome({ params }: LocalizedPageProps) {
  const { locale: candidate } = await params;
  if (!isLocale(candidate)) notFound();

  const locale: Locale = candidate;
  return (
    <div className="localized-site" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <LocaleAttributes locale={locale} />
      <PortfolioChrome locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <PortfolioSections locale={locale} />
      </main>
    </div>
  );
}
