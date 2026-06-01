import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeaturedProjectCard } from '@/components/ui/FeaturedProjectCard';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { getFeaturedProjects } from '@/sanity/lib/queries';
import { FALLBACK_PROJECTS } from '@/data/fallback-projects';

export async function FeaturedProjectsSection() {
  let projects = FALLBACK_PROJECTS.filter((p) => p.featured).slice(0, 4);
  try {
    const fetched = await getFeaturedProjects();
    if (fetched?.length) projects = fetched;
  } catch {}

  return (
    <section className="py-20 bg-surface-subtle">
      {/* Centered header with px-6 */}
      <div className="px-6 mb-12">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <SectionHeader
            label="Selected Work"
            heading="Projects I'm proud of."
            subheading="A selection of projects that showcase my range — from scalable SaaS to open-source tools."
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

      {/* Card list aligned with the section max width */}
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6">
        {projects.map((project, i) => (
          <AnimateIn key={project._id}>
            <FeaturedProjectCard project={project} index={i} />
          </AnimateIn>
        ))}
      </div>

      <div className="mt-10 px-6 flex justify-center md:hidden">
        <Link href="/projects" className="btn btn-outline gap-2">
          View all projects <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
