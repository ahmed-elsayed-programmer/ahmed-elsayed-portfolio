"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Languages,
  Mail,
  MapPin,
  PlugZap,
  Server,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { experiencesData, projectsData } from "@/lib/data";
import { getPortfolioCopy, type Locale } from "@/lib/i18n";

const emailUrl = "mailto:ahmedelsayed3157@gmail.com";
const projectEmailUrl = `${emailUrl}?subject=Project%20inquiry`;
const roleEmailUrl = `${emailUrl}?subject=Full-Stack%20role%20inquiry`;
const githubUrl = "https://github.com/ahmed-elsayed-programmer";
const linkedinUrl = "https://www.linkedin.com/in/ahmed-elsayed-developer";
const revealTransition = { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };

const capabilityGroups = [
  {
    id: "backend",
    icon: Server,
    skills: ["Python", "Django", "Django REST Framework", "REST APIs", "Redis"],
  },
  {
    id: "reliability",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite", "Playwright", "GitHub Actions"],
  },
  {
    id: "interfaces",
    icon: Code2,
    skills: ["TypeScript", "React", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    id: "delivery",
    icon: Workflow,
    skills: ["Docker", "Linux", "Nginx", "Gunicorn", "Git"],
  },
] as const;

const serviceIcons = [Boxes, ShoppingBag, PlugZap, Languages] as const;

type PortfolioCopy = ReturnType<typeof getPortfolioCopy>;
type ProjectLinkKind = (typeof projectsData)[number]["linkKind"];

function getProjectLinkLabel(copy: PortfolioCopy, linkKind: ProjectLinkKind) {
  const linkLabels: Record<ProjectLinkKind, string> = {
    live: copy.projectsSection.liveSite,
    prototype: copy.projectsSection.prototype,
    repository: copy.projectsSection.repository,
    private: copy.projectsSection.privateWork,
  };

  return linkLabels[linkKind];
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={revealTransition}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ copy, project, index, locale }: { copy: PortfolioCopy; project: (typeof projectsData)[number]; index: number; locale: Locale }) {
  const localizedProject = copy.projects[project.id];
  const linkLabel = getProjectLinkLabel(copy, project.linkKind);
  return (
    <article className={`project-showcase project-showcase-${index + 1}`}>
      <div className="project-visual">
        <Image src={project.imageUrl} alt={`${project.title} — ${copy.projectsSection.imagePreview}`} fill sizes="(max-width: 760px) 100vw, 50vw" />
      </div>
      <div className="project-copy">
        <div className="project-label"><span>{localizedProject.type}</span><span>0{index + 1}</span></div>
        <h3>{project.title}</h3>
        <p>{localizedProject.description}</p>
        <dl className="project-evidence">
          <div><dt>{copy.projectsSection.roleLabel}</dt><dd>{localizedProject.role}</dd></div>
          <div><dt>{copy.projectsSection.evidenceLabel}</dt><dd>{localizedProject.evidence}</dd></div>
        </dl>
        <ul aria-label={`${project.title} ${copy.projectsSection.stackAriaLabel}`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-actions">
          {project.caseStudySlug ? (
            <Link className="text-link text-link-primary" href={`/${locale}/work/${project.caseStudySlug}`}>
              {copy.projectsSection.caseStudy} <ArrowUpRight aria-hidden="true" />
            </Link>
          ) : null}
          {project.projectUrl ? (
            <a className="text-link" href={project.projectUrl} target="_blank" rel="noreferrer">
              {linkLabel} <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="project-note">{copy.projectsSection.privateWork}</span>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection({ copy, locale }: { copy: PortfolioCopy; locale: Locale }) {
  return (
    <section className="portfolio-section" id="projects">
      <Reveal>
        <SectionHeading
          eyebrow={copy.projectsSection.eyebrow}
          title={copy.projectsSection.title}
          description={copy.projectsSection.description}
        />
      </Reveal>
      <div className="projects-layout">
        {projectsData.map((project, index) => (
          <Reveal className={`project-slot project-slot-${index + 1}`} key={project.title}>
            <ProjectCard copy={copy} project={project} index={index} locale={locale} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="portfolio-section" id="services">
      <Reveal>
        <SectionHeading
          eyebrow={copy.servicesSection.eyebrow}
          title={copy.servicesSection.title}
          description={copy.servicesSection.description}
        />
      </Reveal>
      <div className="services-grid">
        {copy.services.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <Reveal className="service-card" key={service.title}>
              <div className="service-card-heading"><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
              <h3>{service.title}</h3><p>{service.description}</p><strong>{service.proof}</strong>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function AboutSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="portfolio-section about-section" id="about">
      <Reveal className="about-intro">
        <span className="section-index">{copy.about.eyebrow}</span>
        <h2>{copy.about.title}</h2>
      </Reveal>
      <Reveal className="about-grid">
        <div className="about-copy">
          {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <dl className="about-facts">
          {copy.about.facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
        </dl>
      </Reveal>
    </section>
  );
}

function ProcessSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="portfolio-section" id="process">
      <Reveal>
        <SectionHeading
          eyebrow={copy.processSection.eyebrow}
          title={copy.processSection.title}
          description={copy.processSection.description}
        />
      </Reveal>
      <div className="process-list">
        {copy.processSection.steps.map(([title, description], index) => (
          <Reveal className="process-step" key={title}>
            <article><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="portfolio-section" id="experience">
      <Reveal>
        <SectionHeading
          eyebrow={copy.experienceSection.eyebrow}
          title={copy.experienceSection.title}
          description={copy.experienceSection.description}
        />
      </Reveal>
      <div className="experience-list">
        {experiencesData.map((experience, index) => {
          const localizedExperience = copy.experiences[experience.id];
          return (
          <Reveal className="experience-row" key={`${experience.location}-${experience.date}`}>
            <span className="experience-number">0{index + 1}</span>
            <div className="experience-role">
              <h3>{localizedExperience.title}</h3>
              <p>{experience.location}</p>
            </div>
            <p className="experience-description">{localizedExperience.description}</p>
            <time>{localizedExperience.date}</time>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function CapabilitiesSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="portfolio-section" id="capabilities">
      <Reveal>
        <SectionHeading
          eyebrow={copy.capabilitiesSection.eyebrow}
          title={copy.capabilitiesSection.title}
          description={copy.capabilitiesSection.description}
        />
      </Reveal>
      <div className="capabilities-grid">
        {capabilityGroups.map(({ id, icon: Icon, skills }) => {
          const capability = copy.capabilities[id];
          return (
          <Reveal className="capability-card" key={id}>
            <div className="capability-icon"><Icon aria-hidden="true" /></div>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <ul>{skills.map((skill) => <li key={skill}><CheckCircle2 aria-hidden="true" />{skill}</li>)}</ul>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ContactSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <section className="portfolio-section contact-section" id="contact">
      <Reveal className="contact-panel">
        <div>
          <span className="section-index">{copy.contact.eyebrow}</span>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.description}</p>
        </div>
        <div className="contact-actions">
          <a className="contact-primary" href={projectEmailUrl}><Mail aria-hidden="true" /> {copy.contact.projectInquiry} <ArrowUpRight aria-hidden="true" /></a>
          <a href={roleEmailUrl}><BriefcaseBusiness aria-hidden="true" /> {copy.contact.roleInquiry}</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer"><BsLinkedin aria-hidden="true" /> {copy.linkedin}</a>
          <a href={githubUrl} target="_blank" rel="noreferrer"><BsGithub aria-hidden="true" /> {copy.github}</a>
        </div>
        <div className="contact-meta">
          <span><MapPin aria-hidden="true" /> {copy.contact.location}</span>
          <span><BriefcaseBusiness aria-hidden="true" /> {copy.contact.availability}</span>
        </div>
      </Reveal>
    </section>
  );
}

export default function PortfolioSections({ locale }: { locale: Locale }) {
  const copy = getPortfolioCopy(locale);
  return (
    <div className="portfolio-content">
      <ProjectsSection copy={copy} locale={locale} />
      <ServicesSection copy={copy} />
      <AboutSection copy={copy} />
      <ProcessSection copy={copy} />
      <ExperienceSection copy={copy} />
      <CapabilitiesSection copy={copy} />
      <ContactSection copy={copy} />
      <footer className="portfolio-footer">
        <span>{copy.footer}</span>
        <span>{copy.technologies}</span>
      </footer>
    </div>
  );
}
