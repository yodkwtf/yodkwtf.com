'use client';

import { useState, useMemo } from 'react';
import {
  Search,
  X,
  Clock,
  Calendar,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { NewsletterSignup } from '@/components/ui/NewsletterSignup';
import type { BlogPostMeta } from '@/types';

const ALL = 'All';
const PAGE_SIZE = 6; // posts to show initially and per load

function PostRow({ post, isLast }: { post: BlogPostMeta; isLast: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <motion.article
        whileHover={{ x: 2 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className={`py-7 border-b border-border/40 ${isLast ? 'border-b-0' : ''}`}
      >
        <div className="flex flex-wrap gap-1.5 mb-2">
          {post.category && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-accent-500/30 text-accent-500 bg-accent-500/5">
              {post.category}
            </span>
          )}
          {post.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-ink-faint bg-surface-subtle"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="font-display text-xl leading-snug text-ink group-hover:text-accent-500 transition-colors mb-1.5">
          {post.title}
        </h2>

        <p className="text-sm text-ink-muted leading-relaxed line-clamp-2 mb-3">
          {post.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-ink-faint font-mono">
          <span className="flex items-center gap-1">
            <Calendar size={10} />
            {formatDate(post.publishedAt, 'MMM d, yyyy')}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={10} />
            {post.readingTime}
          </span>
          <span className="ml-auto flex items-center gap-1 text-accent-500/60 group-hover:text-accent-500 transition-colors">
            Read <ArrowUpRight size={11} />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}

function FilterPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
        active
          ? 'border-accent-500/50 bg-accent-500/10 text-accent-500'
          : 'border-border text-ink-muted hover:border-accent-500/30 hover:text-ink bg-surface-subtle'
      }`}
    >
      {label}
      <span
        className={`text-[10px] ${active ? 'text-accent-500/70' : 'text-ink-faint'}`}
      >
        {count}
      </span>
    </button>
  );
}

export function BlogListClient({
  posts,
  allTags,
}: {
  posts: BlogPostMeta[];
  allTags: string[];
}) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [activeTag, setActiveTag] = useState(ALL);
  const [page, setPage] = useState(1);

  const allCategories = useMemo(() => {
    const cats = posts
      .map((p) => p.category)
      .filter((c): c is string => Boolean(c));
    return [...new Set(cats)].sort();
  }, [posts]);

  const categoryCounts = useMemo(() => {
    const c: Record<string, number> = {};
    posts.forEach((p) => {
      if (p.category) c[p.category] = (c[p.category] ?? 0) + 1;
    });
    return c;
  }, [posts]);

  const tagCounts = useMemo(() => {
    const c: Record<string, number> = {};
    posts.forEach((p) =>
      p.tags?.forEach((t) => {
        c[t] = (c[t] ?? 0) + 1;
      }),
    );
    return c;
  }, [posts]);

  const filtered = useMemo(
    () =>
      posts.filter((p) => {
        const matchCat =
          activeCategory === ALL || p.category === activeCategory;
        const matchTag = activeTag === ALL || p.tags?.includes(activeTag);
        const q = search.toLowerCase();
        return (
          matchCat &&
          matchTag &&
          (!q ||
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.tags?.some((t) => t.toLowerCase().includes(q)) ||
            p.category?.toLowerCase().includes(q))
        );
      }),
    [posts, activeCategory, activeTag, search],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const visible = useMemo(
    () => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filtered, page],
  );

  const updateSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const updateCategory = (category: string) => {
    setActiveCategory(category);
    setPage(1);
  };

  const updateTag = (tag: string) => {
    setActiveTag(tag);
    setPage(1);
  };

  return (
    // Mobile puts filters after the finite page of posts; desktop keeps them as a sidebar.
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-12 lg:gap-16 xl:gap-24 items-start">
      {/*  Post list  */}
      <div className="min-w-0 lg:max-w-3xl">
        <AnimatePresence mode="popLayout">
          {visible.length > 0 ? (
            <motion.div key="posts" layout>
              {visible.map((post, index) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <PostRow post={post} isLast={index === visible.length - 1} />
                </motion.div>
              ))}
              {totalPages > 1 && (
                <div className="flex items-center justify-between gap-3 pt-6">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="btn btn-outline gap-1.5 text-sm disabled:pointer-events-none disabled:opacity-40"
                  >
                    <ChevronLeft size={14} /> Previous
                  </button>
                  <span className="text-xs font-mono text-ink-faint">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="btn btn-outline gap-1.5 text-sm disabled:pointer-events-none disabled:opacity-40"
                  >
                    Next <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="font-display text-2xl text-ink-muted mb-2">
                No posts found.
              </p>
              <p className="text-sm text-ink-faint mb-4">
                Try adjusting your filters.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory(ALL);
                  setActiveTag(ALL);
                  setPage(1);
                }}
                className="btn btn-outline text-sm"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/*  Sidebar - sticky, does not scroll with the page  */}
      <aside className="self-start space-y-8 lg:sticky lg:top-28">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
          />
          <input
            type="text"
            placeholder="Search posts…"
            value={search}
            onChange={(e) => updateSearch(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-border bg-surface-card text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-500/60 focus:bg-accent-500/4 transition-colors"
          />
          {search && (
            <button
              onClick={() => updateSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {allCategories.length > 0 && (
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="All"
                count={posts.length}
                active={activeCategory === ALL}
                onClick={() => updateCategory(ALL)}
              />
              {allCategories.map((cat) => (
                <FilterPill
                  key={cat}
                  label={cat}
                  count={categoryCounts[cat] ?? 0}
                  active={activeCategory === cat}
                  onClick={() => updateCategory(cat)}
                />
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">
            Topic
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterPill
              label="All"
              count={posts.length}
              active={activeTag === ALL}
              onClick={() => updateTag(ALL)}
            />
            {allTags.map((tag) => (
              <FilterPill
                key={tag}
                label={tag}
                count={tagCounts[tag] ?? 0}
                active={activeTag === tag}
                onClick={() => updateTag(tag)}
              />
            ))}
          </div>
        </div>

        <NewsletterSignup />
      </aside>
    </div>
  );
}
