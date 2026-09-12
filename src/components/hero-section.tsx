"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Code2, Database, Layers3, MapPin, Server } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";
import { getPortfolioCopy, type Locale } from "@/lib/i18n";

const ease = [0.16, 1, 0.3, 1] as const;
const emailUrl = "mailto:ahmedelsayed3157@gmail.com";
const projectEmailUrl = `${emailUrl}?subject=Project%20inquiry`;
type PortfolioCopy = ReturnType<typeof getPortfolioCopy>;

function AhmedAvatar() {
  return <Avatar className="profile-avatar size-16"><Image src="/man.png" alt="Ahmed Elsayed" fill sizes="64px" /></Avatar>;
}

function HeroMessage({ copy, reduceMotion }: { copy: PortfolioCopy; reduceMotion: boolean }) {
  return (
    <div className="hero-message">
      <motion.div className="availability" initial={false} whileHover={reduceMotion ? undefined : { y: -3 }} transition={{ duration: 0.2, ease }}>
        <Badge variant="outline"><span />{copy.hero.availability}</Badge>
      </motion.div>
      <motion.h1 id="hero-title" initial={false}>{copy.hero.titleLines[0]}<br />{copy.hero.titleLines[1]}</motion.h1>
      <motion.p initial={false}>{copy.hero.description}</motion.p>
      <div className="hero-actions">
        <a className="hero-action-primary" href="#projects">{copy.hero.viewWork}<ArrowUpRight aria-hidden="true" /></a>
        <a href={projectEmailUrl}>{copy.hero.discussProject}</a>
      </div>
    </div>
  );
}

function StackCard({ copy, reduceMotion }: { copy: PortfolioCopy; reduceMotion: boolean }) {
  return (
    <motion.aside className="stack-card glass-card" initial={false} transition={{ duration: 0.24, ease }} whileHover={reduceMotion ? undefined : { y: -7, scale: 1.01 }}>
      <div className="card-heading"><span>{copy.hero.stack.eyebrow}</span><Server aria-hidden="true" /></div>
      <h2>{copy.hero.stack.title}</h2>
      <p>{copy.hero.stack.description}</p>
      <div className="project-count"><strong>{String(projectsData.length).padStart(2, "0")}</strong><span>{copy.hero.stack.featuredLines[0]}<br />{copy.hero.stack.featuredLines[1]}</span></div>
      <div className="stack-row"><span><Code2 />DJANGO</span><span><Database />POSTGRESQL</span><span><Layers3 />NEXT.JS</span></div>
    </motion.aside>
  );
}

function ProfileCard({ copy, reduceMotion }: { copy: PortfolioCopy; reduceMotion: boolean }) {
  return (
    <motion.aside className="profile-card glass-card" initial={false} transition={{ duration: 0.24, ease }} whileHover={reduceMotion ? undefined : { y: -7, scale: 1.01 }}>
      <div className="profile-heading"><AhmedAvatar /><div><h2>{copy.name}</h2><p><MapPin />{copy.hero.profile.location}</p></div><a href={emailUrl} aria-label={copy.hero.profile.emailAriaLabel}><ArrowUpRight /></a></div>
      <p className="profile-summary">{copy.hero.profile.summary}</p>
      <div className="profile-meta"><span><BriefcaseBusiness />{copy.hero.profile.available}</span><span>{copy.hero.profile.remote}</span></div>
      <a className="profile-cta" href={emailUrl}>{copy.hero.profile.cta}<ArrowUpRight /></a>
    </motion.aside>
  );
}

export default function HeroSection({ locale }: { locale: Locale }) {
  const reduceMotion = Boolean(useReducedMotion());
  const copy = getPortfolioCopy(locale);

  return (
    <section className="hero-page" id="home">
      <motion.section className="hero-frame" initial={false} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.4, ease }} aria-labelledby="hero-title">
        <Image className="hero-background" src="/hero-background-v2.png" alt={copy.hero.imageAlt} fill priority sizes="100vw" />
        <div className="hero-overlay" aria-hidden="true" />
        <HeroMessage copy={copy} reduceMotion={reduceMotion} />
        <div className="hero-cards" id="featured-work"><StackCard copy={copy} reduceMotion={reduceMotion} /><div className="brand-mark" aria-hidden="true"><span>AE</span></div><ProfileCard copy={copy} reduceMotion={reduceMotion} /></div>
      </motion.section>
    </section>
  );
}
