import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeaturedProjectCard } from '@/components/ui/FeaturedProjectCard';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { getFeaturedProjects } from '@/sanity/lib/queries';
import { FALLBACK_PROJECTS } from '@/data/fallback-projects';
import { byPublishedDesc } from '@/lib/utils';
import { logger } from '@/lib/logger';

export async function FeaturedProjectsSection() {
  let projects = FALLBACK_PROJECTS.filter((p) => p.featured);
  try {
    const fetched = await getFeaturedProjects();
    if (fetched?.length) projects = fetched;
  } catch (err) {
    logger.warn(
      'FeaturedProjectsSection',
      'Failed to fetch projects from Sanity, using fallback',
      err,
    );
  }

  projects = [...projects].sort(byPublishedDesc).slice(0, 4);

  return (
    <section className="py-20 bg-surface-subtle">
      <div className="px-6 mb-12">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <SectionHeader
            label="Selected Work"
            heading="Projects I'm proud of."
            subheading="A mix of client work, personal projects, and open-source contributions."
            className="mb-0"
          />
          <Link
            href="/projects"
            className="hidden md:flex btn btn-ghost gap-1.5 text-sm shrink-0"
          >
            All projects <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-10 md:gap-y-16">
          {projects.map((project, i) => (
            <AnimateIn key={project._id}>
              <FeaturedProjectCard project={project} index={i} />
            </AnimateIn>
          ))}
        </div>
      </div>

      <div className="mt-10 px-6 flex justify-center md:hidden">
        <Link href="/projects" className="btn btn-outline gap-2">
          View all projects <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
