import type { Metadata } from 'next';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { BlogListClient } from './BlogListClient';
import { getAllBlogsMeta, getAllBlogTags } from '@/lib/blogs';
import { FALLBACK_BLOGS, FALLBACK_BLOG_TAGS } from '@/data/fallback-blogs';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Writing by ${siteConfig.name} on web development, engineering culture, and modern software architecture.`,
};

export default function BlogPage() {
  let posts = getAllBlogsMeta();
  if (!posts.length) posts = FALLBACK_BLOGS;

  const allTags = getAllBlogTags();
  const tags = allTags.length ? allTags : FALLBACK_BLOG_TAGS;

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimateIn className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
            Writing
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-ink mt-3 mb-4 leading-tight">
            Blog.
          </h1>
          <p className="text-ink-muted text-lg leading-relaxed">
            Thoughts on web development, software engineering, and building
            things that matter.{' '}
            <span className="text-accent-500 font-semibold">
              {posts.length} posts
            </span>{' '}
            and counting.
          </p>
        </AnimateIn>

        <BlogListClient posts={posts} allTags={tags} />
      </div>
    </div>
  );
}
