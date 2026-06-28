import type { Metadata } from 'next';
import { ProjectsClient } from './ProjectsClient';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { FALLBACK_PROJECTS } from '@/data/fallback-projects';
import { logger } from '@/lib/logger';

export const revalidate = 300;

export const metadata: Metadata = pageMetadata({
  title: 'Projects',
  description: `Explore projects built by ${siteConfig.name} - full-stack web applications, open-source tools, and client work.`,
  path: '/projects',
});

export default async function ProjectsPage() {
  let projects = FALLBACK_PROJECTS;
  try {
    const { getAllProjects } = await import('@/sanity/lib/queries');
    const fetched = await getAllProjects();
    if (fetched?.length) projects = fetched;
  } catch (err) {
    logger.warn(
      'ProjectsPage',
      'Failed to fetch projects from Sanity, using fallback',
      err,
    );
  }

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimateIn className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
            Work
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-ink mt-3 mb-4 leading-tight">
            Projects.
          </h1>
          <p className="text-ink-muted text-lg leading-relaxed">
            Things I&apos;ve built, broken, improved, and shipped.
          </p>
        </AnimateIn>

        <ProjectsClient projects={projects} />
      </div>
    </div>
  );
}
