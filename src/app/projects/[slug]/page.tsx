import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Calendar, Clock } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { GithubIcon } from '@/components/ui/SocialIcons';
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/AnimateIn';
import { siteConfig } from '@/config/site';
import { urlFor } from '@/sanity/lib/client';
import { FALLBACK_PROJECT_MAP } from '@/data/fallback-projects';
import { logger } from '@/lib/logger';

interface Params {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  let project = null;
  try {
    const { getProjectBySlug } = await import('@/sanity/lib/queries');
    project = await getProjectBySlug(slug);
  } catch (err) {
    logger.warn(
      'ProjectDetailPage.generateMetadata',
      `Failed to fetch project "${slug}" from Sanity`,
      err,
    );
  }

  if (!project) project = FALLBACK_PROJECT_MAP[slug];
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;

  let project = null;
  try {
    const { getProjectBySlug } = await import('@/sanity/lib/queries');
    project = await getProjectBySlug(slug);
  } catch (err) {
    logger.warn(
      'ProjectDetailPage',
      `Failed to fetch project "${slug}" from Sanity, using fallback`,
      err,
    );
  }

  if (!project) project = FALLBACK_PROJECT_MAP[slug] ?? null;

  if (!project) notFound();

  return (
    <div className="pt-28 pb-24">
      {/* Back */}
      <div className="px-6 mb-10">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to projects
          </Link>
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <AnimateIn className="mb-10">
            <h1 className="font-display text-4xl md:text-5xl text-ink mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl mb-6">
              {project.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {!project.clientWork && project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline gap-2 text-sm"
                >
                  <GithubIcon size={15} /> View source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary gap-2 text-sm"
                >
                  <ExternalLink size={15} /> Live site
                </a>
              )}
              <span className="font-mono text-xs text-ink-faint flex items-center gap-1">
                <Calendar size={12} /> {project.publishedAt?.slice(0, 7)}
              </span>
              {project.timeline && (
                <span className="font-mono text-xs text-ink-faint flex items-center gap-1">
                  <Clock size={12} /> {project.timeline}
                </span>
              )}
            </div>
          </AnimateIn>

          {/* Thumbnail */}
          <AnimateIn delay={0.1} className="mb-12">
            <div className="relative rounded-xl overflow-hidden border border-border bg-surface-subtle aspect-video">
              {project.thumbnail ? (
                <Image
                  src={typeof project.thumbnail === 'string' ? project.thumbnail : urlFor(project.thumbnail).width(896).height(504).url()}
                  alt={typeof project.thumbnail === 'string' ? project.title : (project.thumbnail.alt ?? project.title)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center dot-grid">
                  <span className="font-display text-6xl text-ink-faint/30 select-none">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </AnimateIn>

          {/* Description - full width, below the image */}
          {Array.isArray(project.description) &&
            project.description.length > 0 && (
              <AnimateIn delay={0.15} className="mb-12">
                <h2 className="font-display text-2xl text-ink mb-4">
                  About this project
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-ink-muted [&_p]:leading-relaxed [&_p]:mb-4 last:[&_p]:mb-0">
                  <PortableText value={project.description} />
                </div>
              </AnimateIn>
            )}

          {/* Metrics */}
          {project.metrics?.length > 0 && (
            <AnimateIn delay={0.2} className="mb-12">
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.metrics.map(
                  (m: { value: string; label: string }, i: number) => (
                    <StaggerItem key={i}>
                      <div className="glass rounded-xl p-5 border border-border text-center">
                        <div className="font-display text-3xl text-gradient mb-1">
                          {m.value}
                        </div>
                        <div className="text-xs text-ink-muted font-mono uppercase tracking-wide">
                          {m.label}
                        </div>
                      </div>
                    </StaggerItem>
                  ),
                )}
              </StaggerContainer>
            </AnimateIn>
          )}

          {/* Tech stack */}
          <AnimateIn delay={0.2} className="mb-12">
            <h2 className="font-display text-2xl text-ink mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech: string) => (
                <span key={tech} className="tag-pill text-sm px-3 py-1.5">
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>

          {/* Challenge / Solution */}
          {(project.challengeText || project.solutionText) && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {project.challengeText && (
                <AnimateIn delay={0.25}>
                  <div className="glass rounded-xl p-6 border border-border h-full">
                    <h2 className="font-display text-xl text-ink mb-3">
                      The Challenge
                    </h2>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {project.challengeText}
                    </p>
                  </div>
                </AnimateIn>
              )}
              {project.solutionText && (
                <AnimateIn delay={0.3}>
                  <div className="glass rounded-xl p-6 border border-accent-500/20 bg-accent-500/3 h-full">
                    <h2 className="font-display text-xl text-ink mb-3">
                      The Solution
                    </h2>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {project.solutionText}
                    </p>
                  </div>
                </AnimateIn>
              )}
            </div>
          )}

          {/* CTA */}
          <AnimateIn delay={0.35}>
            <div className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-ink mb-1">
                  Interested in working together?
                </p>
                <p className="text-sm text-ink-muted">
                  I&apos;m always open to new projects and collaborations.
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn btn-primary"
              >
                Get in touch
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
