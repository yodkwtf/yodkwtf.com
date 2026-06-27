import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogFrontmatter, BlogPost, BlogPostMeta } from '@/types';

const BLOGS_DIR = path.join(process.cwd(), 'content/blogs');

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const extensions = ['.mdx', '.md'];
  let filePath: string | null = null;

  for (const ext of extensions) {
    const p = path.join(BLOGS_DIR, `${slug}${ext}`);
    if (fs.existsSync(p)) {
      filePath = p;
      break;
    }
  }

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const contentWithoutCode = content.replace(/```[\s\S]*?```/g, '');
  const rt = readingTime(contentWithoutCode, { wordsPerMinute: 265 });

  return {
    ...(data as BlogFrontmatter),
    slug,
    content,
    readingTime: rt.text,
  };
}

export function getAllBlogsMeta(): BlogPostMeta[] {
  const slugs = getBlogSlugs();
  return slugs
    .map((slug) => {
      const post = getBlogBySlug(slug);
      if (!post || post.draft) return null;
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
