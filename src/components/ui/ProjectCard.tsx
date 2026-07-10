'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { TagPill } from '@/components/ui/TagPill';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/client';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  className?: string;
}

export function ProjectCard({
  project,
  featured,
  className,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative flex flex-col rounded-xl border border-border bg-surface-card overflow-hidden',
        'hover:border-accent-500/40 hover:shadow-lg transition-all duration-300',
        'hover:shadow-[0_8px_32px_var(--glow)]',
        featured && 'md:flex-row md:h-64',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-surface-subtle',
          featured ? 'md:w-2/5 h-52 md:h-full' : 'h-48',
        )}
      >
        {project.thumbnail ? (
          <Image
            src={typeof project.thumbnail === 'string' ? project.thumbnail : urlFor(project.thumbnail).width(640).height(360).url()}
            alt={typeof project.thumbnail === 'string' ? project.title : (project.thumbnail.alt ?? project.title)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center dot-grid">
            <span className="font-mono text-4xl text-ink-faint select-none">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 left-3 tag-pill bg-accent-500/90 text-white border-transparent text-[10px] tracking-wider uppercase">
            Featured
          </span>
        )}
        {project.clientWork && (
          <span className="absolute top-3 right-3 tag-pill bg-surface-card/90 text-ink-muted border-border text-[10px] tracking-wider uppercase backdrop-blur-sm">
            Client
          </span>
        )}
      </div>

      <div
        className={cn('flex flex-col flex-1 p-5 gap-3', featured && 'md:p-7')}
      >
        <div className="flex items-start justify-between gap-4">
          <h3
            className={cn(
              'font-display leading-snug transition-colors',
              featured ? 'text-xl md:text-2xl' : 'text-lg',
            )}
          >
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
          <div className="flex items-center gap-2 shrink-0">
            {!project.clientWork && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-ink-faint hover:text-ink transition-colors p-1"
                aria-label="GitHub"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-ink-faint hover:text-accent-500 transition-colors p-1"
                aria-label="Live site"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {project.summary && (
          <p className="text-sm text-ink-muted line-clamp-2 leading-relaxed flex-1">
            {project.summary}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techStack?.slice(0, 4).map((tech) => (
            <TagPill key={tech} label={tech} />
          ))}
          {(project.techStack?.length ?? 0) > 4 && (
            <span className="tag-pill text-ink-faint">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug.current}`}
          className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-accent-500 transition-colors mt-1 group/link w-fit"
        >
          View details
          <ArrowUpRight
            size={13}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}
