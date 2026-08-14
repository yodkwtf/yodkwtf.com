'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

function useFillClamp(dep: unknown) {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [lines, setLines] = useState(3);

  useEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return;
    const measure = () => {
      const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
      if (!lineHeight) return;
      setLines(Math.max(1, Math.floor(box.clientHeight / lineHeight)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(box);
    return () => ro.disconnect();
  }, [dep]);

  return { boxRef, textRef, lines };
}

export function ProjectCard({
  project,
  featured,
  className,
}: ProjectCardProps) {
  const { boxRef, textRef, lines } = useFillClamp(project.summary);

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-xl border border-border bg-surface-card overflow-hidden',
        'hover:border-accent-500/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
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
            src={
              typeof project.thumbnail === 'string'
                ? project.thumbnail
                : urlFor(project.thumbnail).width(640).height(360).url()
            }
            alt={
              typeof project.thumbnail === 'string'
                ? project.title
                : (project.thumbnail.alt ?? project.title)
            }
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, 40vw'
          />
        ) : (
          <div className='absolute inset-0 flex items-center justify-center dot-grid'>
            <span className='font-mono text-4xl text-ink-faint select-none'>
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        {project.featured && (
          <span className='absolute top-3 left-3 tag-pill bg-accent-700/95 text-white border-transparent text-[10px] tracking-wider uppercase'>
            Featured
          </span>
        )}
        {project.clientWork && (
          <span className='absolute top-3 right-3 tag-pill bg-surface-card/90 text-ink-muted border-border text-[10px] tracking-wider uppercase backdrop-blur-sm'>
            Client
          </span>
        )}
      </div>

      <div
        className={cn('flex flex-col flex-1 p-5 gap-3', featured && 'md:p-7')}
      >
        <div className='flex items-start justify-between gap-4'>
          <h2
            className={cn(
              'font-display leading-snug transition-colors',
              featured ? 'text-xl md:text-2xl' : 'text-lg',
            )}
          >
            <Link
              href={`/projects/${project.slug.current}`}
              className='text-ink group-hover:text-accent-fg transition-colors after:absolute after:inset-0 after:content-[""]'
            >
              {project.title}
            </Link>
          </h2>
          <div className='relative z-10 flex items-center gap-2 shrink-0'>
            {!project.clientWork && project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-ink-faint hover:text-ink transition-colors p-1'
                aria-label={`${project.title} source on GitHub`}
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-ink-faint hover:text-accent-fg transition-colors p-1'
                aria-label={`${project.title} live site`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {project.summary && (
          <div ref={boxRef} className='flex-1 min-h-0 overflow-hidden'>
            <p
              ref={textRef}
              className='text-sm text-ink-muted leading-relaxed'
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: lines,
                overflow: 'hidden',
              }}
            >
              {project.summary}
            </p>
          </div>
        )}

        <div className='flex flex-wrap gap-1.5 mt-auto'>
          {project.techStack?.slice(0, 4).map((tech) => (
            <TagPill key={tech} label={tech} />
          ))}
          {(project.techStack?.length ?? 0) > 4 && (
            <span className='tag-pill text-ink-faint'>
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <span
          aria-hidden
          className='flex items-center gap-1 text-xs font-medium text-ink-muted group-hover:text-accent-fg transition-colors mt-1 w-fit'
        >
          View details
          <ArrowUpRight
            size={13}
            className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          />
        </span>
      </div>
    </article>
  );
}
