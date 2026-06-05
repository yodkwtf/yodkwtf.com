import type { BlogPostMeta } from "@/types";

export const FALLBACK_BLOGS: BlogPostMeta[] = [
  {
    slug: "next-js-app-router-guide",
    title: "The Definitive Guide to Next.js App Router",
    description:
      "Everything you need to know about the App Router, Server Components, and the future of React rendering — with practical examples.",
    publishedAt: "2024-03-15",
    tags: ["Next.js", "React", "Tutorial"],
    featured: true,
    readingTime: "12 min read",
  },
  {
    slug: "typescript-performance-tips",
    title: "10 TypeScript Patterns That Make Your Code Fly",
    description:
      "Practical TypeScript performance patterns I've learned shipping production applications — from discriminated unions to branded types.",
    publishedAt: "2024-02-20",
    tags: ["TypeScript", "Performance"],
    featured: false,
    readingTime: "8 min read",
  },
  {
    slug: "trpc-vs-graphql",
    title: "tRPC vs GraphQL: When to Use Which",
    description:
      "A deep dive into when tRPC outshines GraphQL and vice versa. Real-world tradeoffs, not theory.",
    publishedAt: "2024-01-30",
    tags: ["Architecture", "API", "TypeScript"],
    featured: false,
    readingTime: "10 min read",
  },
  {
    slug: "building-design-system",
    title: "Building a Component Library That Doesn't Suck",
    description:
      "Lessons learned building and maintaining a React component library used across 8 products. Accessibility, theming, and developer experience.",
    publishedAt: "2024-01-10",
    tags: ["React", "Design Systems", "Accessibility"],
    featured: true,
    readingTime: "15 min read",
  },
  {
    slug: "postgres-performance",
    title: "PostgreSQL Query Performance: A Practical Guide",
    description:
      "EXPLAIN ANALYZE, indexes, N+1 queries, and everything else you need to make your Postgres database fast.",
    publishedAt: "2023-12-20",
    tags: ["Database", "PostgreSQL", "Performance"],
    featured: false,
    readingTime: "11 min read",
  },
];

export const FALLBACK_BLOG_TAGS: string[] = [
  ...new Set(FALLBACK_BLOGS.flatMap((p) => p.tags)),
].sort();
