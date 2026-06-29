import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogFrontmatter, BlogPost, BlogPostMeta } from '@/types';

const BLOGS_DIR = path.join(process.cwd(), 'content/blogs');

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '') // drop apostrophes: "don't" -> "dont"
    .replace(/[^a-z0-9]+/g, '-') // any run of non-alphanumerics -> single hyphen
    .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens
}

function getBlogFilenames(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

function readBlogFile(filename: string): BlogPost | null {
  const extensions = ['.mdx', '.md'];
  let filePath: string | null = null;

  for (const ext of extensions) {
    const p = path.join(BLOGS_DIR, `${filename}${ext}`);
    if (fs.existsSync(p)) {
      filePath = p;
      break;
    }
  }

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;
  const contentWithoutCode = content.replace(/```[\s\S]*?```/g, '');
  const rt = readingTime(contentWithoutCode, { wordsPerMinute: 265 });

  return {
    ...frontmatter,
    slug: slugify(frontmatter.title),
    content,
    readingTime: rt.text,
  };
}

export function getBlogBySlug(slug: string): BlogPost | null {
  for (const filename of getBlogFilenames()) {
    const post = readBlogFile(filename);
    if (post?.slug === slug) return post;
  }
  return null;
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
  return getBlogFilenames()
    .map((filename) => readBlogFile(filename))
    .filter((post): post is BlogPost => post !== null && isPublishable(post))
    .map(({ content, ...meta }) => meta as BlogPostMeta)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
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
