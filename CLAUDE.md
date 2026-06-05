# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Production server
npm run lint      # ESLint
```

No test suite is configured.

## Architecture Overview

This is a personal portfolio site built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**. Content comes from two separate sources managed independently:

- **Sanity CMS** — projects, skills, experience, about page, social links
- **Local MDX files** in `content/blogs/` — blog posts

### Data Flow

**Sanity data** is fetched server-side via `src/sanity/lib/client.ts` (`sanityFetch` wrapper) using GROQ queries defined in `src/sanity/lib/queries.ts`. Sanity Studio is embedded at `/admin` (route: `src/app/admin/[[...tool]]/page.tsx`).

**Blog posts** are read from the filesystem at build/request time via `src/lib/blogs.ts` using `gray-matter` for frontmatter and `next-mdx-remote` for rendering. Blog MDX files live in `content/blogs/*.mdx`.

### Key Files

- `src/config/site.ts` — single source of truth for all site metadata, nav links, social URLs, and the accent color theme
- `src/types/index.ts` — all shared TypeScript interfaces
- `src/app/globals.css` — CSS custom properties that power the design system (colors, radii, transitions)
- `src/sanity/schemas/` — Sanity document schemas (`project`, `skill`, `experience`, `about`, `socialLink`). The `about` schema's `resume` field is a **file upload** (not a URL); the GROQ query projects `resume.asset->url` into `resumeUrl` so consumers always get a plain string.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) for conditional class names

### RSC / Client Split

Pages are React Server Components. Interactive UI is extracted into `*Client.tsx` files that are `'use client'` and receive data as props:
- `src/app/projects/ProjectsClient.tsx` — client-side search and tag filtering for the projects grid
- `src/app/blog/BlogListClient.tsx` — client-side search and tag filtering for the blog list

`src/app/error.tsx` is the app-wide error boundary (must be `'use client'`). It receives `error` and `reset` props and renders a "Try again / Go home" UI.

### Fallback Data

When Sanity is unreachable, pages fall back to static data in `src/data/`:
- `fallback-projects.ts` — `FALLBACK_PROJECTS` (array) + `FALLBACK_PROJECT_MAP` (slug-keyed, with metrics/challenge/solution)
- `fallback-experience.ts` — `FALLBACK_EXPERIENCE` + `FALLBACK_EDUCATION`
- `fallback-skills.ts` — `FALLBACK_SKILLS` (Record\<category, string[]\>) + `SKILL_CATEGORY_COLORS`
- `fallback-about.ts` — `FALLBACK_BIO` (string[]) + `FALLBACK_STATS` (num/label/sub objects)

Every section that fetches from Sanity wraps the call in `try/catch` and substitutes the matching fallback on failure. `SkillsSection` is async and groups the flat `Skill[]` from Sanity into the category-keyed shape automatically.

The `about` Sanity document also stores `education[]` (institution/degree/period/note) and `stats[]` (num/label/sub) which the about page and `MiniAboutSection` use, falling back to their respective constants when absent.

### Sanity Image URLs

Use `urlFor` from `src/sanity/lib/client.ts` to build image URLs from `SanityImage` refs. It is safe to use in both server and client components (relies only on `NEXT_PUBLIC_` env vars):
```ts
import { urlFor } from "@/sanity/lib/client";
urlFor(image).width(800).url()
```

### Animation Primitives

`src/components/ui/AnimateIn.tsx` exports three Framer Motion wrappers:
- `AnimateIn` — fade-in with directional slide (`direction`: `up | down | left | right | none`)
- `StaggerContainer` + `StaggerItem` — orchestrated stagger for lists

### Theme Access in Client Components

`ThemeProvider` in `src/components/ui/ThemeProvider.tsx` is a **custom implementation** — do not install or import `next-themes`. To read or change the theme inside any `'use client'` component:

```ts
import { useTheme } from "@/components/ui/ThemeProvider";
const { resolvedTheme, toggleTheme, setTheme } = useTheme();
// resolvedTheme: "light" | "dark"
// theme: "light" | "dark" | "system"
```

### Styling System

Tailwind CSS v4 is used with a CSS-variable-based design system. Custom token names to know:

- Colors: `ink` (text), `ink-muted`, `ink-faint`; `surface`, `surface-subtle`, `surface-card`; `accent-{50–900}`; `border`, `border-subtle`
- Utility classes defined in `globals.css`: `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.tag-pill`, `.glass`, `.dot-grid`, `.text-gradient`, `.glow-accent`
- Dark mode uses the `.dark` class (toggled by `ThemeProvider`)
- **To change the accent color**: update `--accent-*` CSS variables in `globals.css` and the `accent` field in `siteConfig`
- Fonts: `font-display` (Instrument Serif), `font-mono` (DM Mono), `font-sans` (Outfit)

### TypeScript Gotcha — `siteConfig as const`

`src/config/site.ts` exports `siteConfig` with `as const`, so every string field is a **narrow literal type** (e.g. `"/resume.pdf"`, not `string`). When you initialise a `let` variable from one of those fields and later reassign it from a Sanity fetch, you must widen the declaration explicitly:

```ts
// ❌ infers as literal "/resume.pdf" — Sanity string won't fit
let resumeUrl = siteConfig.links.resume;

// ✅ widened to string
let resumeUrl: string = siteConfig.links.resume;
```

### Next.js 16 / React 19 Specifics

Page `params` and `searchParams` are **Promises** and must be awaited:
```ts
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}
```

`generateStaticParams` and `generateMetadata` follow the same pattern. Check `node_modules/next/dist/docs/` for API details before writing new pages.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=          # only needed for write operations
NEXT_PUBLIC_SITE_URL=
```

### MDX Custom Components

Available in all blog posts via `src/components/mdx/MDXComponents.tsx`:
- `<Callout type="info|warning|tip|error" title="">` — styled callout blocks
- `<YouTube id="..." />` — embedded YouTube player
- `<BlogImage src alt caption />` — optimized image with caption
- `<ImageGrid images={[{src, alt, caption}]} />` — 2-column image grid
- `<Details summary="">` — collapsible `<details>` element

Code blocks are syntax-highlighted via `rehype-pretty-code` with the `github-dark-default` theme. The background is always dark even in light mode (forced via `globals.css`). Add a filename comment at the top of a fenced code block to show a filename tab in the toolbar:
```
// filename: path/to/file.ts
```

### SEO Infrastructure

These files are already in place — don't recreate them:
- `src/app/sitemap.ts` — auto-generates XML sitemap (static pages + MDX blogs + Sanity projects)
- `src/app/robots.ts` — generates `robots.txt`
- `src/app/rss.xml/route.ts` — RSS feed served at `/rss.xml` (MDX posts only)
- `src/components/ui/JsonLd.tsx` — renders JSON-LD `<script>` tags; used on blog/project detail pages
- `src/app/not-found.tsx` — global 404 page

### Adding a Blog Post

Create `content/blogs/<slug>.mdx` with this frontmatter:
```mdx
---
title: ""
description: ""
publishedAt: "YYYY-MM-DD"
category: ""        # shown as a distinct pill in the blog list sidebar
tags: []
featured: false
draft: false
# optional: coverImage, youtubeId, updatedAt, author
---
```

Draft posts (`draft: true`) are excluded from all listings. The `readingTime` field is computed automatically.
