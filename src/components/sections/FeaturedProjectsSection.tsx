import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeaturedProjectCard } from '@/components/ui/FeaturedProjectCard';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { getFeaturedProjects } from '@/sanity/lib/queries';

const DUMMY_PROJECTS = [
  {
    _id: '1',
    title: 'Horizon SaaS',
    slug: { current: 'horizon-saas' },
    summary:
      'A multi-tenant SaaS platform with real-time collaboration, built with Next.js 14, tRPC, and Supabase. Handles 50k+ monthly active users.',
    description: [],
    tags: ['SaaS', 'B2B'],
    techStack: ['Next.js', 'TypeScript', 'tRPC', 'Supabase', 'Tailwind'],
    featured: true,
    clientWork: false,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    thumbnail: null as any,
    publishedAt: '2024-01-01',
  },
  {
    _id: '2',
    title: 'Pulse Analytics',
    slug: { current: 'pulse-analytics' },
    summary:
      'Real-time web analytics dashboard replacing Google Analytics for privacy-focused teams. Built with ClickHouse for blazing-fast query performance.',
    description: [],
    tags: ['Analytics', 'Privacy'],
    techStack: ['React', 'Node.js', 'ClickHouse', 'Redis', 'Docker'],
    featured: true,
    clientWork: false,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    thumbnail: null as any,
    publishedAt: '2024-02-01',
  },
  {
    _id: '3',
    title: 'ShipKit CLI',
    slug: { current: 'shipkit-cli' },
    summary:
      'Developer CLI tool for scaffolding production-ready Next.js projects with auth, payments, email, and CI/CD pre-configured.',
    description: [],
    tags: ['Open Source', 'CLI'],
    techStack: ['Node.js', 'TypeScript', 'Oclif', 'Ink'],
    featured: true,
    clientWork: false,
    githubUrl: 'https://github.com',
    liveUrl: null as any,
    thumbnail: null as any,
    publishedAt: '2024-03-01',
  },
  {
    _id: '4',
    title: 'Medico EHR',
    slug: { current: 'medico-ehr' },
    summary:
      'HIPAA-compliant electronic health records system for a mid-sized healthcare provider with appointment scheduling, billing, and telehealth.',
    description: [],
    tags: ['Healthcare', 'Enterprise'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    featured: true,
    clientWork: true,
    githubUrl: null as any,
    liveUrl: 'https://example.com',
    thumbnail: null as any,
    publishedAt: '2023-11-01',
  },
] as any[];

export async function FeaturedProjectsSection() {
  let projects = DUMMY_PROJECTS;
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
