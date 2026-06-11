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

- `src/config/site.ts` — single source of truth for all site metadata, nav links, social URLs, and the accent color theme. Notable fields: `username` (GitHub handle), `links.repo` (portfolio source repo URL)
- `src/types/index.ts` — all shared TypeScript interfaces
- `src/app/globals.css` — CSS custom properties that power the design system (colors, radii, transitions)
- `src/sanity/schemas/` — Sanity document schemas (`project`, `skill`, `experience`, `about`, `socialLink`, `heroConfig`). The `about` schema's `resume` field is a **file upload** (not a URL); the GROQ query projects `resume.asset->url` into `resumeUrl` so consumers always get a plain string. The `heroConfig` schema is a singleton document controlling the hero section's stats and stack independently from the about page stats.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) for conditional class names

### RSC / Client Split

Pages and home-page sections are React Server Components that own their own data fetching. Interactive UI that needs browser APIs is extracted into `*Client.tsx` files:
- `src/app/projects/ProjectsClient.tsx` — client-side search and tag filtering for the projects grid
- `src/app/blog/BlogListClient.tsx` — client-side search and tag filtering for the blog list

Sections like `HeroSection`, `FeaturedProjectsSection`, and `MiniAboutSection` are **single-file async RSCs** — they fetch their own data and use `AnimateIn` for animations rather than calling `motion.*` directly. This avoids needing a `'use client'` split. Only add a `*Client.tsx` companion when a section needs direct Framer Motion calls, hooks, or browser events.

`src/app/error.tsx` is the app-wide error boundary (must be `'use client'`). It receives `error` and `reset` props and renders a "Try again / Go home" UI.

### Fallback Data

When Sanity is unreachable, pages fall back to static data in `src/data/`:
- `fallback-projects.ts` — `FALLBACK_PROJECTS` (array) + `FALLBACK_PROJECT_MAP` (slug-keyed, with metrics/challenge/solution)
- `fallback-experience.ts` — `FALLBACK_EXPERIENCE` + `FALLBACK_EDUCATION`
- `fallback-skills.ts` — `FALLBACK_SKILLS` (Record\<category, string[]\>) + `SKILL_CATEGORY_COLORS`
- `fallback-about.ts` — `FALLBACK_SHORT_BIO` (string[], 1–2 sentences for the home page mini-about) + `FALLBACK_BIO` (string[], full multi-paragraph version for the about page) + `FALLBACK_STATS` (`{ num, label, sub }[]`)
- `fallback-hero.ts` — `FALLBACK_HERO_STATS` (`{ num, label }[]` — concise, no `sub`) + `FALLBACK_HERO_STACK` (`string[]`) — used only by `HeroSection`
- `fallback-blogs.ts` — `FALLBACK_BLOGS` + `FALLBACK_BLOG_TAGS` — shown when no MDX files exist yet

**Note:** Hero stats (`fallback-hero.ts`) and about stats (`fallback-about.ts`) are intentionally separate. Hero stats are concise `{ num, label }` pairs; about stats include a `sub` subtitle line.

Every section that fetches from Sanity wraps the call in `try/catch` and substitutes the matching fallback on failure. `SkillsSection` is async and groups the flat `Skill[]` from Sanity into the category-keyed shape automatically.

The `about` Sanity document stores two separate bio fields: `bio` (full, shown on the about page) and `shortBio` (concise 1–2 paragraphs, shown in `MiniAboutSection` on the home page). Both are Portable Text arrays; both have fallback constants. Never use `bio` in `MiniAboutSection` or vice-versa.

It also stores `education[]` (institution/degree/period/note) and `stats[]` (num/label/sub) which the about page and `MiniAboutSection` use, falling back to their respective constants when absent.

The `getAboutPage()` GROQ query projects avatar image dimensions alongside the asset ref:
```groq
avatar {
  asset,
  "dimensions": asset->metadata.dimensions,
  alt
}
```
The about page reads `about.avatar.dimensions.width/height` and passes them to `<Image>` so the natural aspect ratio is preserved without forcing a square crop. The `AboutPage` type reflects this: `avatar?: SanityImage & { dimensions?: { width: number; height: number } }`.

### Sanity Image URLs

Use `urlFor` from `src/sanity/lib/client.ts` to build image URLs from `SanityImage` refs. It is safe to use in both server and client components (relies only on `NEXT_PUBLIC_` env vars):
```ts
import { urlFor } from "@/sanity/lib/client";
urlFor(image).width(800).url()
```

### Animation Primitives

`src/components/ui/AnimateIn.tsx` exports four Framer Motion wrappers:
- `AnimateIn` — fade-in with directional slide (`direction`: `up | down | left | right | none`)
- `StaggerContainer` + `StaggerItem` — orchestrated stagger for lists
- `BounceBar` — a `motion.div` that loops `y: [0, 6, 0]` indefinitely; used for the hero scroll indicator

### Blog Detail Page — TOC and Layout

The blog detail page (`src/app/blog/[slug]/page.tsx`) uses a two-column grid at the `xl` breakpoint: all content (back link, header, cover image, prose, tags, related posts) lives in the left `1fr` column; a sticky `TableOfContents` occupies the right `220px` column. The TOC is only rendered when the post has 2+ headings.

**Heading extraction** — `src/lib/toc.ts` parses raw MDX content server-side with a regex, skipping code fences and stripping inline Markdown from heading text. It mirrors `github-slugger` deduplication (first occurrence → `slug`, second → `slug-1`) to match the IDs `rehype-slug` writes into the DOM.

**`TableOfContents`** (`src/components/ui/TableOfContents.tsx`) is `'use client'` and uses `IntersectionObserver` with `rootMargin: "-10% 0% -80% 0%"` to track the active heading. The active item gets an `accent-500` left-border indicator. Sticky positioning lives on the `<aside>` grid item (`xl:sticky xl:top-28 xl:self-start`) — `self-start` is required; without it the grid stretches the aside to full column height and sticky has no room to scroll.

**Anchor scroll offset** — `globals.css` sets `scroll-margin-top: 6rem` on `.prose h1/h2/h3` so that clicking a TOC link doesn't hide the heading behind the fixed navbar.

### Portable Text Typing (About Page)

`src/app/about/page.tsx` renders `description` fields that can be either plain `string[]` (fallback) or Sanity Portable Text blocks. The file-level types handle both:

```ts
type PortableTextChild = { text: string };
type DescriptionItem = string | { children?: PortableTextChild[] };
```

When consuming, discriminate on `typeof item === 'string'`; otherwise join `.children.map(c => c.text)`.

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

`src/components/mdx/BlogCodeEnhancer.tsx` is a `'use client'` null-render component mounted in the blog detail page. On mount it scans `.prose pre` elements, reads `pre.dataset.filename` (set by `rehype-pretty-code` from the `// filename:` comment), wraps each `<pre>` in a dark toolbar container, and injects a copy-to-clipboard button. It marks processed blocks with `data-code-enhanced` to be idempotent.

### Logging

Use `src/lib/logger.ts` for all diagnostic output — never `console.log/warn/error` directly:

```ts
import { logger } from "@/lib/logger";
logger.info("ComponentName", "message", optionalData);   // dev only
logger.warn("ComponentName", "message", err);            // dev only
logger.error("ComponentName", "message", err);           // dev + prod
```

`info` and `warn` are silenced in production. `error` always surfaces and is the right level for unexpected failures that aren't covered by a Sanity fallback.

### Brand Assets & Icons

`src/components/ui/DCLogo.tsx` — the "DC" signature monogram used in `Navbar` and `Footer`. It renders as a non-square SVG (`width = size * 1.65, height = size`). The D letterform uses `currentColor` so it inherits the parent's text color; the C letterform is hardcoded `#34d399` (accent-300). Both components wrap it in a small dark (`bg-[#20201f]`) rounded square.

Static icon files follow Next.js App Router conventions:
- `src/app/icon.svg` — SVG favicon; Next.js auto-generates `<link rel="icon" type="image/svg+xml">` from this
- `src/app/favicon.ico` — ICO fallback for old browsers
- `public/og.png` — Open Graph / Twitter card image (1200×630); manually referenced in `layout.tsx` via `siteConfig.ogImage`
- `public/logo.png` — standalone PNG for future branding use

Do not move `icon.svg` / `favicon.ico` to `public/` — they must stay in `src/app/` for Next.js to wire them automatically.

### Resume URL — Fetched Once in Layout

`getResumeUrl()` is called **once** in `src/app/layout.tsx` and the result is passed as a `resumeUrl: string` prop to both `<Navbar>` and `<Footer>`. Neither component fetches it independently. The about page gets `resumeUrl` as part of its own `getAboutPage()` call (which returns the full about document anyway), so that is a separate fetch and is correct.

### Newsletter Integration

`src/components/ui/NewsletterSignup.tsx` has a `const COMING_SOON = true` flag at the top of the file that disables the form. When integrating with an email service, flip it to `false` and fill in `src/app/api/newsletter/route.ts` — the route already validates the email and has commented-out examples for Resend, Mailchimp, and ConvertKit.

### `next.config.ts` Notes

- `/resume` redirects to `/resume.pdf` (permanent: false) so short links work.
- `images.remotePatterns` allows `cdn.sanity.io`, `images.unsplash.com`, `res.cloudinary.com`, `i.imgur.com`, and two GitHub image hosts. Add new domains here if `<Image>` throws a hostname error.

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
