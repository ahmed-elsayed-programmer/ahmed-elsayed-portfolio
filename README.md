# Ahmed Elsayed — Portfolio

A bilingual English/Arabic portfolio for Ahmed Elsayed, a Full-Stack Engineer specializing in Python, Django, React, and Next.js. It presents selected work across SaaS, automotive, e-commerce, education, and developer products.

## Current features

- English and Arabic routes at `/en` and `/ar`
- Responsive full-screen hero and project layouts
- Light and dark themes
- Reduced-motion-aware interactions
- Selected client work, private product work, and public repository links
- Client-focused services, delivery process, and separate project/role inquiry actions
- Localized First Group case study at `/en/work/first-group` and `/ar/work/first-group`
- Case-study metadata, Open Graph/Twitter cards, structured data, sitemap, and robots directives
- CV, GitHub, LinkedIn, and email contact paths

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS and custom CSS
- shadcn/ui primitives
- Framer Motion

## Local development

Prerequisites: Node.js 24 and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to the saved language when it is Arabic; otherwise it defaults to English.

## Production verification

```bash
pnpm build
pnpm start
```

The production build statically generates `/en`, `/ar`, and both localized First Group case-study routes.

## Project structure

- `src/app/[locale]/page.tsx` — localized portfolio entry point
- `src/lib/i18n.ts` — English and Arabic interface copy
- `src/lib/data.ts` — project, experience, and skill data
- `src/components/hero-section.tsx` — hero content and glass cards
- `src/components/portfolio-sections.tsx` — projects, about, experience, capabilities, and contact
- `src/components/case-study/first-group-case-study.tsx` — First Group case-study presentation
- `src/lib/case-studies.ts` — localized First Group case-study content
- `src/app/sitemap.ts` and `src/app/robots.ts` — crawl directives and route discovery
- `src/app/globals.css` — visual system, responsive behavior, and theme styles

## Content rules

Portfolio claims must be supported by public work, repository evidence, project documents, or Ahmed's confirmed facts. Do not add unverified user counts, revenue, performance improvements, team sizes, or business outcomes.
