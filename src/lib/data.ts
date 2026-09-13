import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiStackLine } from "react-icons/ri";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    id: "swaqly",
    title: "Full Stack Developer",
    location: "Swaqly",
    description:
      "Building Django and Django REST Framework backends, authentication and authorization, database improvements, and React/Next.js product features for web and mobile clients.",
    icon: React.createElement(RiStackLine),
    date: "Mar 2025 - Present",
  },
  {
    id: "first-filter",
    title: "Full Stack Developer",
    location: "First Filter",
    description:
      "Delivered web and mobile systems for automotive filter data using Django, DRF, React, Next.js, React Native, PostgreSQL, and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - May 2025",
  },
  {
    id: "mega",
    title: "Full Stack Developer",
    location: "Mega Digital Agency",
    description:
      "Built responsive web applications, integrated third-party services, and prepared client work for reliable production deployment.",
    icon: React.createElement(RiStackLine),
    date: "Jan 2024 - Jun 2024",
  },
  {
    id: "valinteca",
    title: "Frontend Developer",
    location: "Valinteca",
    description:
      "Developed React e-commerce interfaces and reusable components, with attention to responsive design and frontend performance.",
    icon: React.createElement(FaReact),
    date: "Oct 2022 - Feb 2023",
  },
  {
    id: "amit",
    title: "Full Stack Engineer — Teaching & Mentoring",
    location: "AMIT Learning",
    description:
      "Taught and mentored learners in programming fundamentals through structured lessons and practical exercises.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2024 - Dec 2024",
  },
] as const;

export const projectsData = [
  {
    id: "otm-motors",
    title: "OTM Motors",
    type: "Automotive platform",
    description:
      "A bilingual automotive experience for vehicle discovery, bookings, finance tools, services, vehicle care, and AI-guided recommendations.",
    tags: ["Next.js", "Arabic / English", "Automotive", "Responsive UI"],
    imageUrl: "/otm-cover.webp",
    projectUrl: "https://www.otm.com.sa/",
    caseStudySlug: undefined,
    linkKind: "live",
  },
  {
    id: "first-group",
    title: "First Group",
    type: "Automotive commerce platform",
    description:
      "An end-to-end automotive catalogue and ordering platform delivered across web, API, and mobile applications.",
    tags: ["Django", "DRF", "Next.js", "TypeScript", "React Native", "PostgreSQL"],
    imageUrl: "/first-auto-cover.jpeg",
    projectUrl: "https://firstautoeg.com/",
    caseStudySlug: "first-group",
    linkKind: "live",
  },
  {
    id: "gold-boulevard",
    title: "Gold Boulevard",
    type: "Multi-vendor e-commerce",
    description:
      "An Arabic mobile-first marketplace for gold products, with product discovery, comparison, stores, cart, checkout, orders, and account workflows.",
    tags: ["React", "TypeScript", "Arabic UI", "E-commerce"],
    imageUrl: "/gold-boulevard-cover.png",
    projectUrl: "https://xd.adobe.com/view/292cbc7e-7c12-456d-8b39-3c814844be32-7c7f/grid",
    caseStudySlug: undefined,
    linkKind: "prototype",
  },
  {
    id: "inventory-sales",
    title: "TijaraOS",
    type: "Business SaaS",
    description:
      "A private retail-operations platform for tenant-aware access, branches, inventory, POS sales, customers, reporting, and release verification.",
    tags: ["Django", "DRF", "Next.js", "PostgreSQL", "Redis", "Docker"],
    imageUrl: "/inventory-cover.svg",
    projectUrl: "https://tijaraos.firstautoeg.com/",
    caseStudySlug: "tijaraos",
    linkKind: "live",
  },
  {
    id: "learning-platform",
    title: "Learning Management Platform",
    type: "Education platform",
    description:
      "A course platform with publishing, video, paid enrollment, learner progress, search, uploads, and teacher analytics.",
    tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Stripe"],
    imageUrl: "/lms-cover.svg",
    projectUrl: undefined,
    caseStudySlug: undefined,
    linkKind: "private",
  },
  {
    id: "dev-flow",
    title: "Dev Flow",
    type: "Community product",
    description:
      "A developer community application with authentication, validated forms, questions, tags, profiles, collections, and voting.",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Zod"],
    imageUrl: "/dev-flow-cover.svg",
    projectUrl: "https://github.com/ahmed-elsayed-programmer/dev-flow",
    caseStudySlug: undefined,
    linkKind: "repository",
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "Django REST Framework",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Redux",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Prisma",
  "Playwright",
  "Docker",
  "Git",
  "Linux",
] as const;
