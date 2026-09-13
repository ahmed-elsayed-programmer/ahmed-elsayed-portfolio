import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/case-study/project-case-study";
import LocaleAttributes from "@/components/locale-attributes";
import PortfolioChrome from "@/components/portfolio-chrome";
import { caseStudySlugs, getCaseStudy, isCaseStudySlug, type CaseStudySlug } from "@/lib/case-studies";
import { isLocale, locales, type Locale } from "@/lib/i18n";

type CaseStudyPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

type CaseStudyAsset = {
  imageUrl: string;
  projectUrl: string;
};

const siteUrl = "https://ahmedelsayed.vercel.app";
const caseStudyAssets: Record<CaseStudySlug, CaseStudyAsset> = {
  "first-group": {
    imageUrl: "/first-auto-cover.jpeg",
    projectUrl: "https://firstautoeg.com/",
  },
  tijaraos: {
    imageUrl: "/inventory-cover.svg",
    projectUrl: "https://tijaraos.firstautoeg.com/",
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) => caseStudySlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale: localeCandidate, slug: slugCandidate } = await params;
  if (!isLocale(localeCandidate) || !isCaseStudySlug(slugCandidate)) return {};

  const copy = getCaseStudy(slugCandidate, localeCandidate);
  const imageUrl = caseStudyAssets[slugCandidate].imageUrl;
  const path = `/${localeCandidate}/work/${slugCandidate}`;
  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: {
      canonical: path,
      languages: {
        en: `/en/work/${slugCandidate}`,
        ar: `/ar/work/${slugCandidate}`,
        "x-default": `/en/work/${slugCandidate}`,
      },
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: path,
      type: "article",
      images: [{ url: imageUrl, alt: copy.hero.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: [imageUrl],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale: localeCandidate, slug: slugCandidate } = await params;
  if (!isLocale(localeCandidate) || !isCaseStudySlug(slugCandidate)) notFound();

  const locale: Locale = localeCandidate;
  const alternateLocale = locale === "en" ? "ar" : "en";
  const copy = getCaseStudy(slugCandidate, locale);
  const assets = caseStudyAssets[slugCandidate];
  const pageUrl = `${siteUrl}/${locale}/work/${slugCandidate}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: copy.hero.title,
    description: copy.metadata.description,
    url: pageUrl,
    image: `${siteUrl}${assets.imageUrl}`,
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
        alternateHref={`/${alternateLocale}/work/${slugCandidate}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ProjectCaseStudy copy={copy} locale={locale} imageUrl={assets.imageUrl} projectUrl={assets.projectUrl} />
    </div>
  );
}
