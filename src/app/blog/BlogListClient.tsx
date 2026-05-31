"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogCard } from "@/components/ui/BlogCard";
import { TagPill } from "@/components/ui/TagPill";
import type { BlogPostMeta } from "@/types";

const ALL = "All";

export function BlogListClient({ posts, allTags }: { posts: BlogPostMeta[]; allTags: string[] }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(ALL);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchTag = activeTag === ALL || p.tags?.includes(activeTag);
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q));
      return matchTag && matchSearch;
    });
  }, [posts, activeTag, search]);

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            placeholder="Search posts…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-border bg-surface-card text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-500 transition-colors"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink">
              <X size={14} />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {[ALL, ...allTags].map((tag) => (
            <TagPill key={tag} label={tag} active={activeTag === tag} onClick={() => setActiveTag(tag)} />
          ))}
        </div>
      </div>

      {/* Featured */}
      <AnimatePresence mode="popLayout">
        {featured.length > 0 && (
          <motion.div key="featured" layout className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">Featured</p>
            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((post) => (
                <motion.div key={post.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <BlogCard post={post} featured className="h-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All posts */}
        {rest.length > 0 && (
          <motion.div key="rest" layout className="space-y-4">
            {featured.length > 0 && <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">All posts</p>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <motion.div key={post.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.22 }}>
                  <BlogCard post={post} className="h-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {filtered.length === 0 && (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
            <p className="font-display text-2xl text-ink-muted mb-2">No posts found.</p>
            <button onClick={() => { setSearch(""); setActiveTag(ALL); }} className="btn btn-outline mt-4 text-sm">Clear filters</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
