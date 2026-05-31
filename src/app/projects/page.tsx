import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore projects built by ${siteConfig.name} — full-stack web applications, open-source tools, and client work.`,
};

const DUMMY_PROJECTS = [
  {
    _id: "1", title: "Horizon SaaS", slug: { current: "horizon-saas" },
    summary: "A multi-tenant SaaS platform with real-time collaboration, built with Next.js 14, tRPC, and Supabase. Handles 50k+ MAU.",
    description: [], tags: ["SaaS", "B2B", "Open Source"],
    techStack: ["Next.js", "TypeScript", "tRPC", "Supabase", "Tailwind"],
    featured: true, clientWork: false,
    githubUrl: "https://github.com", liveUrl: "https://example.com",
    thumbnail: null as any, publishedAt: "2024-03-01",
  },
  {
    _id: "2", title: "Pulse Analytics", slug: { current: "pulse-analytics" },
    summary: "Privacy-first web analytics dashboard built on ClickHouse. Replaces Google Analytics with a clean, fast, open-source alternative.",
    description: [], tags: ["Analytics", "Privacy", "Open Source"],
    techStack: ["React", "Node.js", "ClickHouse", "Redis", "Docker"],
    featured: true, clientWork: false,
    githubUrl: "https://github.com", liveUrl: "https://example.com",
    thumbnail: null as any, publishedAt: "2024-02-01",
  },
  {
    _id: "3", title: "ShipKit CLI", slug: { current: "shipkit-cli" },
    summary: "Developer CLI tool for scaffolding production-ready Next.js projects with auth, payments, email, and CI/CD pre-configured out of the box.",
    description: [], tags: ["CLI", "Open Source", "Developer Tools"],
    techStack: ["Node.js", "TypeScript", "Oclif", "Ink"],
    featured: true, clientWork: false,
    githubUrl: "https://github.com", liveUrl: null as any,
    thumbnail: null as any, publishedAt: "2024-01-15",
  },
  {
    _id: "4", title: "Medico EHR", slug: { current: "medico-ehr" },
    summary: "Electronic health records system for a mid-sized healthcare provider. HIPAA compliant, with appointment scheduling, billing, and telehealth.",
    description: [], tags: ["Healthcare", "Enterprise"],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    featured: false, clientWork: true,
    githubUrl: null as any, liveUrl: "https://example.com",
    thumbnail: null as any, publishedAt: "2023-11-01",
  },
  {
    _id: "5", title: "Luminary E-Commerce", slug: { current: "luminary-ecommerce" },
    summary: "High-performance e-commerce storefront for a DTC luxury candle brand. Features 3D product previews, subscription box, and custom CMS.",
    description: [], tags: ["E-Commerce", "Client Work"],
    techStack: ["Next.js", "Shopify", "Three.js", "Sanity"],
    featured: false, clientWork: true,
    githubUrl: null as any, liveUrl: "https://example.com",
    thumbnail: null as any, publishedAt: "2023-09-01",
  },
  {
    _id: "6", title: "DevNotes", slug: { current: "devnotes" },
    summary: "A minimal Markdown-based note taking app for developers. Features syntax highlighting, vim keybindings, and local-first storage.",
    description: [], tags: ["Open Source", "Developer Tools", "Productivity"],
    techStack: ["React", "Electron", "SQLite", "CodeMirror"],
    featured: false, clientWork: false,
    githubUrl: "https://github.com", liveUrl: "https://example.com",
    thumbnail: null as any, publishedAt: "2023-07-01",
  },
] as any[];

export default async function ProjectsPage() {
  let projects = DUMMY_PROJECTS;
  try {
    const { getAllProjects } = await import("@/sanity/lib/queries");
    const fetched = await getAllProjects();
    if (fetched?.length) projects = fetched;
  } catch {}

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-7xl">
        <AnimateIn className="mb-12 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">Work</span>
          <h1 className="font-display text-5xl md:text-6xl text-ink mt-3 mb-4 leading-tight">
            Projects.
          </h1>
          <p className="text-ink-muted text-lg leading-relaxed">
            A curated selection of projects — from production SaaS platforms and client work
            to open-source tools and side experiments.
          </p>
        </AnimateIn>

        <ProjectsClient projects={projects} />
      </div>
    </div>
  );
}
