'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { TagPill } from '@/components/ui/TagPill';
import type { Project } from '@/types';

const ALL = 'All';

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState(ALL);

  const allTags = useMemo(() => {
    const techs = projects.flatMap((p) => p.techStack ?? []);
    return [ALL, ...Array.from(new Set(techs)).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchTag = activeTag === ALL || p.techStack?.includes(activeTag);
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary?.toLowerCase().includes(q) ||
        p.techStack?.some((t) => t.toLowerCase().includes(q));
      return matchTag && matchSearch;
    });
  }, [projects, activeTag, search]);

  return (
    <div className="space-y-6">
      {/* Search - full width */}
      <div className="relative">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
        />
        <input
          type="text"
          placeholder="Search by name or tech…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-9 py-3 rounded-xl border border-border bg-surface-card text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-500/60 focus:bg-accent-500/4 transition-colors"
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

      {/* Tag filters - separate row, wrap freely */}
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
        {activeTag !== ALL && ` using "${activeTag}"`}
        {search && ` matching "${search}"`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7 xl:gap-x-10">
          {filtered.map((project) => (
            <div key={project._id} className="reveal reveal-pop">
              <ProjectCard project={project} className="h-full" />
            </div>
          ))}
        </div>
      ) : (
        <div className="reveal reveal-fade py-24 text-center">
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
        </div>
      )}
    </div>
  );
}
