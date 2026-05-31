import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { getFeaturedProjects } from "@/sanity/lib/queries";

// Fallback dummy data if Sanity not configured
const DUMMY_PROJECTS = [
  {
    _id: "1", title: "Horizon SaaS", slug: { current: "horizon-saas" },
    summary: "A multi-tenant SaaS platform with real-time collaboration, built with Next.js 14, tRPC, and Supabase. Handles 50k+ monthly active users.",
    description: [], tags: ["SaaS", "B2B"], techStack: ["Next.js", "TypeScript", "tRPC", "Supabase", "Tailwind"],
    featured: true, clientWork: false, githubUrl: "https://github.com", liveUrl: "https://example.com",
    thumbnail: null as any, publishedAt: "2024-01-01",
  },
  {
    _id: "2", title: "Pulse Analytics", slug: { current: "pulse-analytics" },
    summary: "Real-time web analytics dashboard replacing Google Analytics for privacy-focused teams. Built with ClickHouse for blazing-fast query performance.",
    description: [], tags: ["Analytics", "Privacy"], techStack: ["React", "Node.js", "ClickHouse", "Redis"],
    featured: true, clientWork: false, githubUrl: "https://github.com", liveUrl: "https://example.com",
    thumbnail: null as any, publishedAt: "2024-02-01",
  },
  {
    _id: "3", title: "ShipKit CLI", slug: { current: "shipkit-cli" },
    summary: "Developer CLI tool for scaffolding production-ready Next.js projects with auth, payments, email, and CI/CD pre-configured.",
    description: [], tags: ["Open Source", "CLI"], techStack: ["Node.js", "TypeScript", "Oclif"],
    featured: true, clientWork: false, githubUrl: "https://github.com", liveUrl: null as any,
    thumbnail: null as any, publishedAt: "2024-03-01",
  },
] as any[];

export async function FeaturedProjectsSection() {
  let projects = DUMMY_PROJECTS;
  try {
    const fetched = await getFeaturedProjects();
    if (fetched?.length) projects = fetched;
  } catch {}

  return (
    <section className="py-24 px-6 bg-surface-subtle">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            label="Selected Work"
            heading="Projects I&apos;m proud of."
            subheading="A selection of projects that showcase my range — from scalable SaaS to open-source tools."
            className="mb-0"
          />
          <Link href="/projects" className="hidden md:flex btn btn-ghost gap-1.5 text-sm flex-shrink-0">
            All projects <ArrowRight size={15} />
          </Link>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <StaggerItem key={project._id}>
              <ProjectCard project={project} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/projects" className="btn btn-outline gap-2">
            View all projects <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
