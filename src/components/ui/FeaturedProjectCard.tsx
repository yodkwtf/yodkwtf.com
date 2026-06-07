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
        'group flex flex-col md:flex-row min-h-105 border-b border-border last:border-0',
        className,
      )}
    >
      {/*  Image panel (60%)  */}
      <div
        className={cn(
          'relative md:w-[60%] min-h-70 md:min-h-0 overflow-hidden bg-surface-subtle',
          imageLeft ? 'md:order-1' : 'md:order-2',
        )}
      >
        {project.thumbnail ? (
          <Image
            src={urlFor(project.thumbnail).width(1200).height(675).url()}
            alt={project.thumbnail.alt ?? project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center dot-grid">
            <span className="font-display text-[8rem] text-ink-faint/10 select-none">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        {/* Subtle gradient edge toward content */}
        <div
          className={cn(
            'absolute inset-y-0 w-20 from-surface-subtle/0 to-transparent hidden md:block',
            imageLeft ? 'right-0 bg-linear-to-l' : 'left-0 bg-linear-to-r',
          )}
        />
      </div>

      {/*  Content panel (40%)  */}
      <div
        className={cn(
          'flex flex-col justify-center md:w-[40%] px-8 py-10 md:py-12 bg-surface-subtle',
          'text-center md:text-left',
          imageLeft ? 'md:order-2' : 'md:order-1',
        )}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-4">
          {project.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border border-border text-ink-faint bg-surface"
            >
              {tag}
            </span>
          ))}
        </div>

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
        <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-6">
          {project.techStack?.slice(0, 4).map((tech) => (
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
            className="flex items-center gap-1 text-sm font-medium text-accent-500 hover:text-accent-400 transition-colors ml-auto md:ml-0"
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
