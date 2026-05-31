import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BlogListClient } from "./BlogListClient";
import { getAllBlogsMeta, getAllBlogTags } from "@/lib/blogs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Writing by ${siteConfig.name} on web development, engineering culture, and modern software architecture.`,
};

// Seeded dummy posts if no MDX files exist yet
const DUMMY_POSTS = [
  {
    slug: "next-js-app-router-guide",
    title: "The Definitive Guide to Next.js App Router",
    description: "Everything you need to know about the App Router, Server Components, and the future of React rendering — with practical examples.",
    publishedAt: "2024-03-15", updatedAt: undefined,
    tags: ["Next.js", "React", "Tutorial"],
    coverImage: undefined, featured: true, readingTime: "12 min read",
  },
  {
    slug: "typescript-performance-tips",
    title: "10 TypeScript Patterns That Make Your Code Fly",
    description: "Practical TypeScript performance patterns I've learned shipping production applications — from discriminated unions to branded types.",
    publishedAt: "2024-02-20",
    tags: ["TypeScript", "Performance"],
    coverImage: undefined, featured: false, readingTime: "8 min read",
  },
  {
    slug: "trpc-vs-graphql",
    title: "tRPC vs GraphQL: When to Use Which",
    description: "A deep dive into when tRPC outshines GraphQL and vice versa. Real-world tradeoffs, not theory.",
    publishedAt: "2024-01-30",
    tags: ["Architecture", "API", "TypeScript"],
    coverImage: undefined, featured: false, readingTime: "10 min read",
  },
  {
    slug: "building-design-system",
    title: "Building a Component Library That Doesn't Suck",
    description: "Lessons learned building and maintaining a React component library used across 8 products. Accessibility, theming, and developer experience.",
    publishedAt: "2024-01-10",
    tags: ["React", "Design Systems", "Accessibility"],
    coverImage: undefined, featured: true, readingTime: "15 min read",
  },
  {
    slug: "postgres-performance",
    title: "PostgreSQL Query Performance: A Practical Guide",
    description: "EXPLAIN ANALYZE, indexes, N+1 queries, and everything else you need to make your Postgres database fast.",
    publishedAt: "2023-12-20",
    tags: ["Database", "PostgreSQL", "Performance"],
    coverImage: undefined, featured: false, readingTime: "11 min read",
  },
] as any[];

export default function BlogPage() {
  let posts = getAllBlogsMeta();
  if (!posts.length) posts = DUMMY_POSTS;

  const allTags = getAllBlogTags();
  const tags = allTags.length ? allTags : [...new Set(DUMMY_POSTS.flatMap((p) => p.tags))].sort() as string[];

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimateIn className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">Writing</span>
          <h1 className="font-display text-5xl md:text-6xl text-ink mt-3 mb-4 leading-tight">Blog.</h1>
          <p className="text-ink-muted text-lg leading-relaxed">
            Thoughts on web development, engineering craft, and building things that matter.
            {" "}{posts.length} posts and counting.
          </p>
        </AnimateIn>

        <BlogListClient posts={posts} allTags={tags} />
      </div>
    </div>
  );
}
