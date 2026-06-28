import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BlogCard } from '@/components/ui/BlogCard';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { getFeaturedBlogs } from '@/lib/blogs';
import { cn } from '@/lib/utils';

export function LatestBlogsSection() {
  const posts = getFeaturedBlogs(3);

  if (!posts.length) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            label="Writing"
            heading="Thoughts on the craft."
            subheading="Thoughts on web development, software architecture, and engineering."
            className="mb-0"
          />
          <Link
            href="/blog"
            className="hidden md:flex btn btn-ghost gap-1.5 text-sm shrink-0"
          >
            All posts <ArrowRight size={15} />
          </Link>
        </div>

        {posts.length > 2 ? (
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <AnimateIn className="h-full">
              <BlogCard post={featured} variant="featured" className="h-full" />
            </AnimateIn>

            <div className="flex flex-col gap-6">
              {rest.map((post, i) => (
                <AnimateIn
                  key={post.slug}
                  delay={0.08 * (i + 1)}
                  className="flex-1"
                >
                  <BlogCard post={post} variant="compact" className="h-full" />
                </AnimateIn>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={cn(
              'grid gap-6 items-stretch',
              posts.length === 2 && 'md:grid-cols-2',
            )}
          >
            {posts.map((post, i) => (
              <AnimateIn key={post.slug} delay={0.08 * i} className="h-full">
                <BlogCard post={post} variant="featured" className="h-full" />
              </AnimateIn>
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/blog" className="btn btn-outline gap-2">
            All posts <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
