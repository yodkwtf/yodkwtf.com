'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { BlogPostMeta } from '@/types';
import { cn } from '@/lib/utils';

const PLACEHOLDERS = [
  'from-accent-900/60 to-accent-700/30',
  'from-violet-900/60 to-violet-700/30',
  'from-sky-900/60 to-sky-700/30',
  'from-amber-900/60 to-amber-700/30',
  'from-rose-900/60 to-rose-700/30',
];
function gradientFor(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return PLACEHOLDERS[h % PLACEHOLDERS.length];
}

// ─── Featured variant: image on top, content below ────────────────────────────
function FeaturedBlogCard({
  post,
  className,
}: {
  post: BlogPostMeta;
  className?: string;
}) {
  const gradient = gradientFor(post.slug);

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'flex flex-col h-full rounded-xl border border-border bg-surface-card overflow-hidden',
          'hover:border-accent-500/40 hover:shadow-lg transition-all duration-300',
          'hover:shadow-[0_4px_24px_var(--glow)]',
          className,
        )}
      >
        {/* Top: image */}
        <div className="relative h-52 shrink-0 overflow-hidden bg-surface-subtle">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className={cn(
                'absolute inset-0 bg-linear-to-br dot-grid',
                gradient,
              )}
            >
              {post.category && (
                <span className="absolute bottom-2 right-2 font-mono text-[9px] text-white/20 uppercase tracking-widest">
                  {post.category}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Bottom: content */}
        <div className="flex flex-col flex-1 px-5 py-5 gap-2.5">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-ink-faint bg-surface-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-display text-xl leading-snug text-ink group-hover:text-accent-500 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-ink-muted line-clamp-3 leading-relaxed flex-1">
            {post.description}
          </p>

          <div className="flex items-center gap-3 text-xs text-ink-faint font-mono mt-auto pt-1">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {formatDate(post.publishedAt, 'MMM d, yyyy')}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readingTime}
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

// ─── Compact variant: no image, full-width content ────────────────────────────
function CompactBlogCard({
  post,
  className,
}: {
  post: BlogPostMeta;
  className?: string;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <motion.article
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'flex flex-col h-full rounded-xl border border-border bg-surface-card px-5 py-4',
          'hover:border-accent-500/40 hover:shadow-lg transition-all duration-300',
          'hover:shadow-[0_4px_24px_var(--glow)]',
          className,
        )}
      >
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-ink-faint bg-surface-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-display text-lg leading-snug text-ink group-hover:text-accent-500 transition-colors line-clamp-2 mb-1.5">
          {post.title}
        </h3>

        <p className="text-sm text-ink-muted line-clamp-2 leading-relaxed flex-1">
          {post.description}
        </p>

        <div className="flex items-center gap-3 text-xs text-ink-faint font-mono mt-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {formatDate(post.publishedAt, 'MMM d, yyyy')}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readingTime}
          </span>
        </div>
      </motion.article>
    </Link>
  );
}

// ─── Default variant: image on left, content on right ────────────────────────
export function BlogCard({
  post,
  className,
  variant = 'default',
}: {
  post: BlogPostMeta;
  className?: string;
  variant?: 'default' | 'featured' | 'compact';
}) {
  if (variant === 'featured')
    return <FeaturedBlogCard post={post} className={className} />;
  if (variant === 'compact')
    return <CompactBlogCard post={post} className={className} />;

  const gradient = gradientFor(post.slug);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <motion.article
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'flex gap-0 rounded-xl border border-border bg-surface-card overflow-hidden',
          'hover:border-accent-500/40 hover:shadow-lg transition-all duration-300',
          'hover:shadow-[0_4px_24px_var(--glow)]',
          className,
        )}
      >
        {/* Left: thumbnail - fixed width, full card height */}
        <div className="relative hidden w-48 shrink-0 self-stretch overflow-hidden bg-surface-subtle sm:block sm:w-64">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          ) : (
            <div
              className={cn(
                'absolute inset-0 bg-linear-to-br dot-grid',
                gradient,
              )}
            >
              {post.category && (
                <span className="absolute bottom-2 right-2 font-mono text-[9px] text-white/20 uppercase tracking-widest">
                  {post.category}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Right: content */}
        <div className="flex flex-col flex-1 min-w-0 px-5 py-5 gap-2.5">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-ink-faint bg-surface-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-display text-lg sm:text-xl leading-snug text-ink group-hover:text-accent-500 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-ink-muted line-clamp-2 leading-relaxed flex-1">
            {post.description}
          </p>

          <div className="flex items-center gap-3 text-xs text-ink-faint font-mono mt-auto pt-1">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {formatDate(post.publishedAt, 'MMM d, yyyy')}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readingTime}
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
