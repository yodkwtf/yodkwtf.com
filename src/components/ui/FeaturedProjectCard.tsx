'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/client';

interface FeaturedProjectCardProps {
  project: Project;
  /** Even index -> image left. Odd index -> image right. */
  index: number;
  className?: string;
}

export function FeaturedProjectCard({
  project,
  index,
  className,
}: FeaturedProjectCardProps) {
  const imageLeft = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-border',
        'md:relative md:block md:min-h-112 md:overflow-visible md:rounded-none md:border-0',
        className,
      )}
    >
      {/*  Image panel  */}
      <div
        className={cn(
          'relative h-64 sm:h-80 overflow-hidden bg-surface-subtle',
          'md:absolute md:inset-y-0 md:h-auto md:w-[62%] md:rounded-2xl md:border md:border-border',
          imageLeft ? 'md:left-0' : 'md:right-0',
        )}
      >
        {project.thumbnail ? (
          <Image
            src={
              typeof project.thumbnail === 'string'
                ? project.thumbnail
                : urlFor(project.thumbnail).width(1200).height(800).url()
            }
            alt={
              typeof project.thumbnail === 'string'
                ? project.title
                : (project.thumbnail.alt ?? project.title)
            }
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center dot-grid">
            <span className="font-display text-[8rem] text-ink-faint/10 select-none">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Subtle brand veil */}
        <div
          className="absolute inset-0 hidden bg-linear-to-br from-accent-900/35 via-accent-900/10 to-transparent transition-opacity duration-500 group-hover:opacity-0 md:block"
          aria-hidden
        />
      </div>

      {/*  Content */}
      <div
        className={cn(
          'relative z-10 px-6 py-6 bg-surface-subtle text-center',
          'md:absolute md:top-1/2 md:w-[46%] md:-translate-y-1/2 md:p-8 md:text-left',
          'md:rounded-2xl md:border md:border-border md:bg-surface-card',
          'md:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)]',
          imageLeft ? 'md:right-0' : 'md:left-0',
        )}
      >
        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-accent-500 transition-colors"
            >
              {project.title}
            </a>
          ) : (
            <span className="text-ink group-hover:text-accent-500 transition-colors">
              {project.title}
            </span>
          )}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-5 line-clamp-3">
          {project.summary}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-6">
          {project.techStack?.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-ink-muted bg-surface border border-border px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          {!project.clientWork && project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-ink-faint hover:text-ink transition-colors font-mono"
            >
              <GithubIcon size={13} /> Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-ink-faint hover:text-accent-500 transition-colors font-mono"
            >
              <ExternalLink size={13} /> Live
            </a>
          )}
          <Link
            href={`/projects/${project.slug.current}`}
            className="flex items-center gap-1 text-sm font-medium text-accent-500 hover:text-accent-400 transition-colors ml-auto"
          >
            Case study{' '}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
