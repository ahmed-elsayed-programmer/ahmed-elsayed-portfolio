"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Mail,
  MapPin,
  Server,
  Workflow,
} from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { experiencesData, projectsData } from "@/lib/data";
import { getPortfolioCopy, type Locale } from "@/lib/i18n";

const emailUrl = "mailto:ahmedelsayed3157@gmail.com";
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

function ProjectCard({ copy, project, index }: { copy: PortfolioCopy; project: (typeof projectsData)[number]; index: number }) {
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
        <ul aria-label={`${project.title} ${copy.projectsSection.stackAriaLabel}`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {project.projectUrl ? (
          <a className="text-link" href={project.projectUrl} target="_blank" rel="noreferrer">
            {linkLabel} <ArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          <span className="project-note">{copy.projectsSection.privateWork}</span>
        )}
      </div>
    </article>
  );
}

function ProjectsSection({ copy }: { copy: PortfolioCopy }) {
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
            <ProjectCard copy={copy} project={project} index={index} />
          </Reveal>
        ))}
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
          <a className="contact-primary" href={emailUrl}><Mail aria-hidden="true" /> {copy.contact.email} <ArrowUpRight aria-hidden="true" /></a>
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
      <ProjectsSection copy={copy} />
      <AboutSection copy={copy} />
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
