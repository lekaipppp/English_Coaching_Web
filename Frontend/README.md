# Crosswire — Marketing Site

Marketing website for Crosswire, a communication training business for
international tech professionals and the outsourcing firms / Western
companies around them. Built with Next.js (App Router), statically
generated (SSG) throughout — no backend, no database, no auth.

## Stack

- Next.js 16 (App Router, static rendering by default — no page here uses
  a dynamic API, so `next build` prerenders every route to HTML)
- React 19 + Tailwind CSS v4 (design tokens live in `src/app/globals.css`)
- Fonts loaded via `next/font/google`: Fraunces (headlines), Work Sans (body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build — verify every route is still "○ Static"
npm run start   # serve the production build locally
npm run lint
```

## Project structure

```
src/
  app/            one folder per route (page.tsx + optional metadata)
  components/     Header, Footer, shared UI (Container, VoiceBars)
  data/           placeholder content (resources grid)
  lib/            constants (site URL, contact email, Calendly links)
```

The corporate-page tabs and the resources-page category filter are built
with a pure-CSS checkbox/radio + `peer` pattern (no client JS, no
`"use client"`), so all tab/filter content ships in the initial HTML for
crawlers and works with JS disabled. Same for the mobile nav menu.

## Before launching

A few placeholders need real values — search for them in `src/lib/constants.ts`:

- `SITE_URL` — currently a placeholder domain, used for the sitemap,
  robots.txt, and Open Graph URLs
- `CALENDLY_PROFESSIONALS_URL`, `CALENDLY_OUTSOURCING_URL`, `CALENDLY_WESTERN_URL`
  — placeholder Calendly links
- `CONTACT_EMAIL` — footer contact placeholder
- Pricing figures in `src/app/pricing/page.tsx` are placeholders
- `/login` is a non-functional UI placeholder (no auth wired up)

## Deploying to Vercel

Push to a Git repo and import it in Vercel, or run:

```bash
npx vercel
```

No environment variables are required for the site to build and run.
