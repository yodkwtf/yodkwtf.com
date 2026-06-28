# My Portfolio - Official Website

A content-driven portfolio built with the Next.js App Router. It pulls structured
content (projects, skills, experience, about) from a headless CMS and renders
long-form writing from local MDX files, with static fallbacks so the site stays
up even when the CMS is unreachable.

## Live Preview

See it live at [yodkwtf.com](https://yodkwtf.com) and please feel free to share any feedbacks.

![yodkwtf.com](./public/og.png)

## Tech stack

| Area      | Choice                                                         |
| --------- | -------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, React Server Components)               |
| Language  | TypeScript, React 19                                           |
| Styling   | Tailwind CSS v4 with a CSS-variable design system              |
| Animation | Framer Motion                                                  |
| CMS       | Sanity (embedded Studio at `/admin`)                           |
| Blog      | MDX via `next-mdx-remote`, `gray-matter`, `rehype-pretty-code` |
| Hosting   | Netlify (`@netlify/plugin-nextjs`)                             |

## Features

- Structured content managed in Sanity, with typed GROQ queries and static
  fallback data for every section.
- MDX blog with syntax-highlighted code blocks (filename tabs, language icons,
  copy button), callouts, embeds, and an auto-generated table of contents.
- Light and dark themes backed by a custom theme provider — no flash on load.
- Incremental Static Regeneration so published CMS edits appear without a
  redeploy.
- Self-hosted fonts via `next/font` and image optimization with low-quality
  placeholders for fast, shift-free loads.
- SEO out of the box: sitemap, `robots.txt`, RSS feed, JSON-LD, and Open Graph
  / Twitter cards.

## Getting started

### Prerequisites

- Node.js 20.9 or newer
- A Sanity project (optional - the site renders fallback content without one)

### Installation

```bash
git clone https://github.com/yodkwtf/yodkwtf.com.git
cd yodkwtf.com
npm install
```

### Environment

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=            # only needed for write operations
NEXT_PUBLIC_SITE_URL=
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The Sanity Studio lives at
[http://localhost:3000/admin](http://localhost:3000/admin).

## Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the development server          |
| `npm run build` | Production build                      |
| `npm run start` | Serve the production build            |
| `npm run lint`  | Run ESLint                            |
| `npm run icons` | Regenerate code-block file-type icons |

## Project structure

```text
src/
  app/            Routes, layouts, API handlers, and the embedded Studio
  components/     UI, layout, section, and MDX components
  sanity/         Schemas, GROQ queries, and the configured client
  data/           Static fallback content used when the CMS is unavailable
  lib/            Blog loading, utilities, and logging
  config/         Single source of truth for site metadata
content/
  blogs/          MDX blog posts
```

## Content

- **CMS content** is edited in the Sanity Studio at `/admin` and fetched
  server-side through GROQ queries.
- **Blog posts** are MDX files in `content/blogs/`. Each file uses frontmatter
  for its title, description, publish date, tags, and cover image. Drafts and
  posts dated in the future are hidden from all listings.

## Deployment

The site deploys to Netlify using the official Next.js runtime. The build
command is `npm run build`; environment variables are configured in the Netlify
dashboard.

## License

Source is available for reference and learning. The brand, written content, and
imagery are not licensed for reuse.
