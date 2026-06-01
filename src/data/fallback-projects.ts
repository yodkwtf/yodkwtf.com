/**
 * Fallback project data used when Sanity is unreachable or not yet configured.
 */

export const FALLBACK_PROJECTS = [
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

// Slug-keyed map with extended detail fields for the project detail page
export const FALLBACK_PROJECT_MAP: Record<string, any> = {
  "horizon-saas": {
    ...FALLBACK_PROJECTS[0],
    timeline: "3 months",
    metrics: [
      { label: "Monthly Active Users", value: "50,000+" },
      { label: "Performance Score", value: "98/100" },
      { label: "Bundle Size Reduction", value: "40%" },
    ],
    challengeText: "Building a multi-tenant architecture that scales efficiently while keeping costs low was the primary engineering challenge. We needed real-time features without excessive infrastructure overhead.",
    solutionText: "Implemented a row-level security model in Supabase for tenant isolation. Used tRPC with optimistic updates for real-time feel without WebSockets. Deployed edge functions for low-latency global access.",
  },
  "pulse-analytics": {
    ...FALLBACK_PROJECTS[1],
    timeline: "10 weeks",
    metrics: [
      { label: "Query Latency", value: "<80ms" },
      { label: "Events Processed", value: "12M+" },
      { label: "Tracking Scripts", value: "3KB" },
    ],
    challengeText: "Teams needed product analytics without invasive tracking, cookie-heavy scripts, or slow dashboard queries across high-volume event streams.",
    solutionText: "Built a lean event collector backed by ClickHouse rollups, async ingestion, and a focused dashboard optimized for fast filtering and retention analysis.",
  },
  "shipkit-cli": {
    ...FALLBACK_PROJECTS[2],
    timeline: "6 weeks",
    metrics: [
      { label: "Starter Modules", value: "18" },
      { label: "Setup Time", value: "5 min" },
      { label: "Templates", value: "6" },
    ],
    challengeText: "Every new product started with repetitive setup: auth, payments, linting, deployment, environment validation, and documentation.",
    solutionText: "Created a composable CLI that asks a few setup questions, writes the correct files, validates environment choices, and leaves a project ready to deploy.",
  },
  "medico-ehr": {
    ...FALLBACK_PROJECTS[3],
    timeline: "5 months",
    metrics: [
      { label: "Clinics Onboarded", value: "12" },
      { label: "Appointments", value: "30K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    challengeText: "The provider needed a secure workflow for patient records, appointments, billing, and virtual visits without slowing clinical staff down.",
    solutionText: "Designed role-based workflows, audit-friendly record updates, encrypted storage, and focused dashboards for front desk, clinicians, and billing teams.",
  },
  "luminary-ecommerce": {
    ...FALLBACK_PROJECTS[4],
    timeline: "8 weeks",
    metrics: [
      { label: "Conversion Lift", value: "22%" },
      { label: "Lighthouse", value: "96" },
      { label: "Checkout Steps", value: "2" },
    ],
    challengeText: "The brand needed a storefront that felt premium while staying fast on mobile and easy for the team to merchandise.",
    solutionText: "Combined a headless Shopify checkout, Sanity-managed editorial content, optimized product imagery, and lightweight 3D previews for hero products.",
  },
  devnotes: {
    ...FALLBACK_PROJECTS[5],
    timeline: "4 weeks",
    metrics: [
      { label: "Cold Start", value: "<1s" },
      { label: "Offline First", value: "100%" },
      { label: "Editor Modes", value: "3" },
    ],
    challengeText: "Most note apps were either too heavy for quick developer notes or too limited for snippets, local search, and keyboard-first workflows.",
    solutionText: "Built a local-first markdown workspace with SQLite indexing, syntax highlighting, fast fuzzy search, and optional vim-style editing.",
  },
};
