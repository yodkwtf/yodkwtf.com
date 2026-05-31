import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar, Clock } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { TagPill } from "@/components/ui/TagPill";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { siteConfig } from "@/config/site";

// Dummy data fallback
const DUMMY_PROJECTS: Record<string, any> = {
  "horizon-saas": {
    _id: "1", title: "Horizon SaaS", slug: { current: "horizon-saas" },
    summary: "A multi-tenant SaaS platform with real-time collaboration built on Next.js 14, tRPC, and Supabase.",
    tags: ["SaaS", "B2B", "Open Source"],
    techStack: ["Next.js", "TypeScript", "tRPC", "Supabase", "Tailwind", "Redis", "Vercel"],
    featured: true, clientWork: false,
    githubUrl: "https://github.com", liveUrl: "https://example.com",
    publishedAt: "2024-03-01", timeline: "3 months",
    metrics: [
      { label: "Monthly Active Users", value: "50,000+" },
      { label: "Performance Score", value: "98/100" },
      { label: "Bundle Size Reduction", value: "40%" },
    ],
    challengeText: "Building a multi-tenant architecture that scales efficiently while keeping costs low was the primary engineering challenge. We needed real-time features without excessive infrastructure overhead.",
    solutionText: "Implemented a row-level security model in Supabase for tenant isolation. Used tRPC with optimistic updates for real-time feel without WebSockets. Deployed edge functions for low-latency global access.",
  },
};

interface Params { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = DUMMY_PROJECTS[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;

  let project = DUMMY_PROJECTS[slug] ?? null;

  if (!project) {
    try {
      const { getProjectBySlug } = await import("@/sanity/lib/queries");
      project = await getProjectBySlug(slug);
    } catch {}
  }

  if (!project) notFound();

  return (
    <div className="pt-28 pb-24">
      {/* Back */}
      <div className="px-6 mb-10">
        <div className="mx-auto max-w-4xl">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group">
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <AnimateIn className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tag: string) => <TagPill key={tag} label={tag} />)}
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-ink mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed max-w-2xl mb-6">
              {project.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {!project.clientWork && project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline gap-2 text-sm">
                  <GithubIcon size={15} /> View source
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary gap-2 text-sm">
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
              <div className="absolute inset-0 flex items-center justify-center dot-grid">
                <span className="font-display text-6xl text-ink-faint/30 select-none">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
          </AnimateIn>

          {/* Metrics */}
          {project.metrics?.length > 0 && (
            <AnimateIn delay={0.15} className="mb-12">
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.metrics.map((m: any, i: number) => (
                  <StaggerItem key={i}>
                    <div className="glass rounded-xl p-5 border border-border text-center">
                      <div className="font-display text-3xl text-gradient mb-1">{m.value}</div>
                      <div className="text-xs text-ink-muted font-mono uppercase tracking-wide">{m.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimateIn>
          )}

          {/* Tech stack */}
          <AnimateIn delay={0.2} className="mb-12">
            <h2 className="font-display text-2xl text-ink mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech: string) => (
                <span key={tech} className="tag-pill text-sm px-3 py-1.5">{tech}</span>
              ))}
            </div>
          </AnimateIn>

          {/* Challenge / Solution */}
          {(project.challengeText || project.solutionText) && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {project.challengeText && (
                <AnimateIn delay={0.25}>
                  <div className="glass rounded-xl p-6 border border-border h-full">
                    <h2 className="font-display text-xl text-ink mb-3">The Challenge</h2>
                    <p className="text-sm text-ink-muted leading-relaxed">{project.challengeText}</p>
                  </div>
                </AnimateIn>
              )}
              {project.solutionText && (
                <AnimateIn delay={0.3}>
                  <div className="glass rounded-xl p-6 border border-accent-500/20 bg-accent-500/3 h-full">
                    <h2 className="font-display text-xl text-ink mb-3">The Solution</h2>
                    <p className="text-sm text-ink-muted leading-relaxed">{project.solutionText}</p>
                  </div>
                </AnimateIn>
              )}
            </div>
          )}

          {/* CTA */}
          <AnimateIn delay={0.35}>
            <div className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-ink mb-1">Interested in working together?</p>
                <p className="text-sm text-ink-muted">I&apos;m always open to new projects and collaborations.</p>
              </div>
              <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">Get in touch</a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
