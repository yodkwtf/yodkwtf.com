'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { TagPill } from '@/components/ui/TagPill';
import type { Project } from '@/types';

const ALL = 'All';

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState(ALL);

  const allTags = useMemo(() => {
    const tags = projects.flatMap((p) => p.tags ?? []);
    return [ALL, ...Array.from(new Set(tags)).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchTag = activeTag === ALL || p.tags?.includes(activeTag);
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.techStack?.some((t) => t.toLowerCase().includes(q)) ||
        p.tags?.some((t) => t.toLowerCase().includes(q));
      return matchTag && matchSearch;
    });
  }, [projects, activeTag, search]);

  return (
    <div className="space-y-6">
      {/* Search — full width */}
      <div className="relative">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
        />
        <input
          type="text"
          placeholder="Search by name, tech, or tag…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-9 py-3 rounded-xl border border-border bg-surface-card text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-500 transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Tag filters — separate row, wrap freely */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <TagPill
            key={tag}
            label={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </div>

      {/* Count */}
      <p className="text-xs font-mono text-ink-faint">
        {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        {activeTag !== ALL && ` tagged "${activeTag}"`}
        {search && ` matching "${search}"`}
      </p>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7 xl:gap-x-10"
          >
            {filtered.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} className="h-full" />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <p className="font-display text-2xl text-ink-muted mb-2">
              No projects found.
            </p>
            <p className="text-sm text-ink-faint">
              Try a different search or filter.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setActiveTag(ALL);
              }}
              className="btn btn-outline mt-4 text-sm"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
