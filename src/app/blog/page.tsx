import type { Metadata } from 'next';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { BlogListClient } from './BlogListClient';
import { getAllBlogsMeta, getAllBlogTags } from '@/lib/blogs';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Blog',
  description: `Writing by ${siteConfig.name} on web development, engineering, and modern software architecture.`,
  path: '/blog',
});

export const revalidate = 3600;

export default function BlogPage() {
  const posts = getAllBlogsMeta();
  const tags = getAllBlogTags();

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
