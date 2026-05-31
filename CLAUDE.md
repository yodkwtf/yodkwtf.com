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
- `src/sanity/schemas/` — Sanity document schemas (`project`, `skill`, `experience`, `about`, `socialLink`)

### Styling System

Tailwind CSS v4 is used with a CSS-variable-based design system. Custom token names to know:

- Colors: `ink` (text), `ink-muted`, `ink-faint`; `surface`, `surface-subtle`, `surface-card`; `accent-{50–900}`; `border`, `border-subtle`
- Utility classes defined in `globals.css`: `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.tag-pill`, `.glass`, `.dot-grid`, `.text-gradient`, `.glow-accent`
- Dark mode uses the `.dark` class (toggled by `ThemeProvider`)
- **To change the accent color**: update `--accent-*` CSS variables in `globals.css` and the `accent` field in `siteConfig`
- Fonts: `font-display` (Instrument Serif), `font-mono` (DM Mono), `font-sans` (Outfit)

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

### Adding a Blog Post

Create `content/blogs/<slug>.mdx` with this frontmatter:
```mdx
---
title: ""
description: ""
publishedAt: "YYYY-MM-DD"
tags: []
featured: false
draft: false
# optional: coverImage, youtubeId, updatedAt, author
---
```

Draft posts (`draft: true`) are excluded from all listings. The `readingTime` field is computed automatically.
