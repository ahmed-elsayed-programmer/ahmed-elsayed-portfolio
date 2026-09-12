import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Database,
  Globe2,
  Server,
  Smartphone,
} from "lucide-react";
import type { CaseStudyCopy } from "@/lib/case-studies";
import type { Locale } from "@/lib/i18n";

type SectionIntroProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

type ProjectCaseStudyProps = {
  copy: CaseStudyCopy;
  locale: Locale;
  imageUrl: string;
  projectUrl: string;
};

function SectionIntro({ index, label, title, description }: SectionIntroProps) {
  return (
    <header className="case-section-intro">
      <span className="case-section-number" aria-hidden="true">{index}</span>
      <div>
        <p className="case-section-label">{label}</p>
        <h2>{title}</h2>
        {description ? <p className="case-section-description">{description}</p> : null}
      </div>
    </header>
  );
}

function CaseStudyHero({ copy, locale, imageUrl, projectUrl }: ProjectCaseStudyProps) {
  const DirectionalArrow = locale === "ar" ? ArrowRight : ArrowLeft;

  return (
    <header className="case-hero" id="home">
      <div className="case-hero-copy">
        <Link className="case-back-link" href={`/${locale}#projects`}>
          <DirectionalArrow aria-hidden="true" /> {copy.navigation.back}
        </Link>
        <p className="case-eyebrow">{copy.hero.eyebrow}</p>
        <h1>{copy.hero.title}</h1>
        <p className="case-hero-summary">{copy.hero.summary}</p>
        <p className="case-attribution">{copy.hero.attribution}</p>
      </div>
      <a className="case-hero-visual" href={projectUrl} target="_blank" rel="noreferrer">
        <Image
          className={imageUrl.endsWith(".svg") ? "case-visual-contain" : undefined}
          src={imageUrl}
          alt={copy.hero.imageAlt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 58vw"
        />
        <span>{copy.navigation.live}<ArrowUpRight aria-hidden="true" /></span>
      </a>
    </header>
  );
}

function CaseFacts({ facts }: { facts: CaseStudyCopy["facts"] }) {
  return (
    <dl className="case-facts">
      {facts.map(([term, value]) => (
        <div key={term}><dt>{term}</dt><dd>{value}</dd></div>
      ))}
    </dl>
  );
}

function OverviewSection({ copy }: { copy: CaseStudyCopy }) {
  return (
    <section className="case-section case-overview">
      <SectionIntro index={copy.overview.index} label={copy.overview.label} title={copy.overview.title} />
      <div className="case-prose">
        {copy.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function OwnershipSection({ copy }: { copy: CaseStudyCopy }) {
  return (
    <section className="case-section">
      <SectionIntro index={copy.ownership.index} label={copy.ownership.label} title={copy.ownership.title} />
      <div className="case-card-grid">
        {copy.ownership.items.map((item, index) => (
          <article className="case-detail-card" key={item.title}>
            <span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const architectureIcons = {
  web: Globe2,
  api: Server,
  data: Database,
  mobile: Smartphone,
} as const;

function ArchitectureNode({ id, node }: { id: keyof typeof architectureIcons; node: { label: string; value: string } }) {
  const Icon = architectureIcons[id];
  return (
    <article className={`architecture-node architecture-node-${id}`}>
      <Icon aria-hidden="true" /><span>{node.label}</span><p>{node.value}</p>
    </article>
  );
}

function ArchitectureSection({ copy }: { copy: CaseStudyCopy }) {
  return (
    <section className="case-section case-architecture-section">
      <SectionIntro index={copy.architecture.index} label={copy.architecture.label} title={copy.architecture.title} description={copy.architecture.description} />
      <div className="architecture-map" aria-label={copy.architecture.label}>
        {(Object.keys(architectureIcons) as Array<keyof typeof architectureIcons>).map((id) => (
          <ArchitectureNode id={id} node={copy.architecture.nodes[id]} key={id} />
        ))}
        <div className="architecture-connector connector-web" aria-hidden="true" />
        <div className="architecture-connector connector-mobile" aria-hidden="true" />
        <div className="architecture-connector connector-data" aria-hidden="true" />
      </div>
    </section>
  );
}

function ProductModelSection({ copy }: { copy: CaseStudyCopy }) {
  return (
    <section className="case-section">
      <SectionIntro index={copy.model.index} label={copy.model.label} title={copy.model.title} description={copy.model.description} />
      <div className="relationship-grid">
        {copy.model.relationships.map(([source, target]) => (
          <div className="relationship" key={`${source}-${target}`}>
            <strong>{source}</strong><ArrowRight aria-hidden="true" /><strong>{target}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductFlowSection({ copy }: { copy: CaseStudyCopy }) {
  return (
    <section className="case-section">
      <SectionIntro index={copy.flow.index} label={copy.flow.label} title={copy.flow.title} />
      <ol className="case-flow">
        {copy.flow.steps.map(([title, description], index) => (
          <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
        ))}
      </ol>
    </section>
  );
}

function DecisionsSection({ copy }: { copy: CaseStudyCopy }) {
  return (
    <section className="case-section">
      <SectionIntro index={copy.decisions.index} label={copy.decisions.label} title={copy.decisions.title} />
      <div className="case-decisions">
        {copy.decisions.items.map(([title, description]) => (
          <article key={title}><h3>{title}</h3><p>{description}</p></article>
        ))}
      </div>
    </section>
  );
}

function OutcomeSection({ copy }: { copy: CaseStudyCopy }) {
  return (
    <section className="case-section case-outcome">
      <SectionIntro index={copy.outcome.index} label={copy.outcome.label} title={copy.outcome.title} description={copy.outcome.description} />
      <div className="case-stack" aria-label={copy.stack.label}>
        <p>{copy.stack.label}</p>
        <ul>{copy.stack.items.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </div>
    </section>
  );
}

function CaseStudyContact({ copy, locale }: { copy: CaseStudyCopy; locale: Locale }) {
  return (
    <section className="case-contact">
      <p>{copy.contact.label}</p><h2>{copy.contact.title}</h2>
      <div>
        <a className="case-contact-primary" href="mailto:ahmedelsayed3157@gmail.com">{copy.contact.email}<ArrowUpRight aria-hidden="true" /></a>
        <Link href={`/${locale}#projects`}>{copy.contact.portfolio}</Link>
      </div>
    </section>
  );
}

export default function ProjectCaseStudy({ copy, locale, imageUrl, projectUrl }: ProjectCaseStudyProps) {
  return (
    <main className="case-study-page">
      <div className="case-study-shell">
        <CaseStudyHero copy={copy} locale={locale} imageUrl={imageUrl} projectUrl={projectUrl} />
        <CaseFacts facts={copy.facts} />
        <OverviewSection copy={copy} />
        <OwnershipSection copy={copy} />
        <ArchitectureSection copy={copy} />
        <ProductModelSection copy={copy} />
        <ProductFlowSection copy={copy} />
        <DecisionsSection copy={copy} />
        <OutcomeSection copy={copy} />
        <CaseStudyContact copy={copy} locale={locale} />
      </div>
    </main>
  );
}
