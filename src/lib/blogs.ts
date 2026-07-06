import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogFrontmatter, BlogPost, BlogPostMeta } from "@/types";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, "").replace(/^\d+-/, ""));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const extensions = [".mdx", ".md"];
  let filePath: string | null = null;

  if (!fs.existsSync(BLOGS_DIR)) return null;

  const files = fs.readdirSync(BLOGS_DIR);

  for (const file of files) {
    for (const ext of extensions) {
      if (!file.endsWith(ext)) continue;
      const fileSlug = file.replace(/\.mdx?$/, "").replace(/^\d+-/, ""); // ← strip here too
      if (fileSlug === slug) {
        filePath = path.join(BLOGS_DIR, file);
        break;
      }
    }
    if (filePath) break;
  }

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const contentWithoutCode = content.replace(/```[\s\S]*?```/g, "");
  const rt = readingTime(contentWithoutCode, { wordsPerMinute: 265 });

  return {
    ...(data as BlogFrontmatter),
    slug,
    content,
    readingTime: rt.text,
  };
}

export function isPublishable(post: {
  draft?: boolean;
  publishedAt: string;
}): boolean {
  if (post.draft) return false;
  const published = new Date(post.publishedAt).getTime();
  return Number.isNaN(published) || published <= Date.now();
}

export function getAllBlogsMeta(): BlogPostMeta[] {
  const slugs = getBlogSlugs();
  return slugs
    .map((slug) => {
      const post = getBlogBySlug(slug);
      if (!post || !isPublishable(post)) return null;
      const { content, ...meta } = post;
      return meta as BlogPostMeta;
    })
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b!.publishedAt).getTime() - new Date(a!.publishedAt).getTime(),
    ) as BlogPostMeta[];
}

export function getFeaturedBlogs(limit = 3): BlogPostMeta[] {
  return getAllBlogsMeta()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getLatestBlogs(limit = 3): BlogPostMeta[] {
  return getAllBlogsMeta().slice(0, limit);
}

export function getBlogsByTag(tag: string): BlogPostMeta[] {
  return getAllBlogsMeta().filter((p) => p.tags?.includes(tag));
}

export function getAllBlogTags(): string[] {
  const posts = getAllBlogsMeta();
  const tags = posts.flatMap((p) => p.tags ?? []);
  return [...new Set(tags)].sort();
}
