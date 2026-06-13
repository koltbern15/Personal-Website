# Personal Website

An interactive, resume-style personal site built to highlight engineering work —
animated impact metrics, a scroll-driven career timeline, expandable project
case studies, and a minimal, easy-on-the-eyes dark theme.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and
**Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Make it yours

Almost everything lives in one file:

- **`lib/content.ts`** — your name, role, taglines, impact metrics, timeline
  (work + education), projects, and skills. Edit the data here and the whole
  site updates. TypeScript keeps the shape correct.

Other things you might want to change:

- **Theme / colors** — `tailwind.config.ts`. The palette (`base`, `ink`,
  `accent`, `line`) is defined in one place; change `accent.DEFAULT` to
  re-tint the whole site.
- **Résumé download** — drop a `resume.pdf` into `public/` and set
  `resumeUrl: "/resume.pdf"` in `lib/content.ts`.
- **Domain** — set `siteUrl` in `lib/content.ts` (used for SEO + social cards).

## Structure

```
app/
  layout.tsx      # fonts, metadata
  page.tsx        # assembles the sections
  globals.css     # theme tokens + base styles
components/
  Hero, Metrics, Timeline, Projects, Skills, About, Contact, Footer, Navbar
  ui/             # Section + Reveal helpers
lib/
  content.ts      # ← edit your info here
```

## Deploy

The easiest path is [Vercel](https://vercel.com): import the repo, accept the
defaults (it auto-detects Next.js), and every push deploys. Netlify and
Cloudflare Pages work too.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```
