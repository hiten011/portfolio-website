# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Express + Vite HMR) on port 5000
npm run build      # Build: Vite bundles client → dist/public, esbuild bundles server → dist/index.js
npm run start      # Run production build
npm run check      # TypeScript type-check (no emit)
npm run db:push    # Push Drizzle schema to Neon PostgreSQL
```

No test suite exists. Type-check with `npm run check`.

## Architecture

**Frontend-only in practice.** The Express server (`server/index.ts`) exists as scaffolding but registers no API routes — it just serves static files in production and proxies to Vite in dev. All portfolio content is client-side.

**Content lives in one file:** `client/src/constants/data.ts` exports all personal info, projects, experience, education, skills, and social links. This is the only file to edit for content changes.

**Routing** uses Wouter (not React Router). Routes defined in `App.tsx`: `/`, `/projects`, `/experience`, `/about`, `/contact`, `/resume` (redirects to PDF in new tab).

**Theme system** — custom `ThemeContext` (not next-themes despite it being installed). Persists to `localStorage`, applies `light`/`dark` class on `<html>`. Default is dark.

**Path aliases** configured in `vite.config.ts`:
- `@` → `client/src`
- `@shared` → `shared`
- `@assets` → `attached_assets`

**UI components** are shadcn/ui (Radix primitives + Tailwind) in `client/src/components/ui/`. Custom portfolio components (`Navbar`, `Footer`, `ProjectCard`, `SkillBadge`, `SkillCard`) live in `client/src/components/`. Ignore the `components/examples/` directory — unused reference implementations.

**Animations** use Framer Motion throughout pages. Follow existing patterns: fade + Y-axis (20px), 0.3s ease-out, stagger 0.1s for lists.

**Skill icons** use `react-icons` (`SiXxx` from `react-icons/si`, `DiXxx` from `react-icons/di`). The `icon` field in `skillCategories` is a string name resolved at render time.

## Design System

See `design_guidelines.md` for full spec. Key constraints:
- Max content width: `max-w-7xl` (1280px)
- Section spacing: `py-16 md:py-24`
- Fonts: Inter (primary), JetBrains Mono (code/technical)
- No large hero images — use gradient/geometric patterns
- Animations must be subtle; no parallax or complex scroll effects

## Resume PDF

`client/public/resume.pdf` is served at `/resume.pdf`. The `/resume` route opens this URL in a new tab. To update the resume, replace this file.

## Database

`shared/schema.ts` defines a `users` table via Drizzle ORM (Neon PostgreSQL). This is unused scaffolding — the portfolio has no auth or database needs currently. `DATABASE_URL` env var required only if `db:push` is run.
