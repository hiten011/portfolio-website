# AGENTS.md

This file provides guidance to coding agents working in this repository.

## Agent Skills

This file is the shared source of repository instructions. `CLAUDE.md` imports it with `@AGENTS.md`.

All repository skills live in `.agents/skills/<skill-name>/`. Agent-specific skill paths link to this shared location. Read a skill's `SKILL.md` before using it; resolve its references and scripts relative to that skill's directory. Agents without automatic skill discovery should inspect `.agents/skills/*/SKILL.md` for matching names and descriptions.

- Superpowers: start with `.agents/skills/using-superpowers/SKILL.md` for the engineering workflows.
- Ponytail: use `.agents/skills/ponytail/SKILL.md` for coding tasks.
- UI/UX: use `.agents/skills/ui-ux-pro-max/SKILL.md` for interface design and implementation, and `.agents/skills/bencium-controlled-ux-designer/SKILL.md` for design collaboration.
- Accessibility: use the `audit`, `scan`, or `diff` skill according to whether the task needs fixes, a report, or a comparison.

User instructions and repository conventions take precedence over skill defaults. Use the installed dependency versions and existing components when a skill's examples assume a different stack.

UI UX Pro Max's upstream examples use a Claude plugin path. In this repository, run its search tool from the repository root:

```bash
python3 -B .agents/skills/ui-ux-pro-max/scripts/search.py "keyboard focus modal" --domain ux
```

`skills-lock.json` records externally installed skills. The `audit`, `scan`, and `diff` skills are maintained directly in this repository. To restore the locked skills and Claude Code links:

```bash
npx skills install --agent universal claude-code --frozen-lockfile
```

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

**Portfolio content:** `client/src/constants/data.ts` exports personal info, projects, experience, education, skills, and social links. Start here for content changes.

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
