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
function ptBlock(key: string, text: string) {
  return { _key: key, _type: 'block', style: 'normal', children: [{ _key: `${key}s`, _type: 'span', text }] };
}

export const FALLBACK_PROJECT_MAP: Record<string, any> = {
  "horizon-saas": {
    ...FALLBACK_PROJECTS[0],
    description: [
      ptBlock('h1', 'Horizon is a multi-tenant SaaS platform built for teams that need real-time collaboration without sacrificing performance. It handles 50,000+ monthly active users across hundreds of isolated workspaces.'),
      ptBlock('h2', 'The architecture uses row-level security in Supabase for tenant isolation, tRPC for end-to-end type-safe APIs, and edge functions for low-latency access globally. The frontend is built with Next.js App Router and optimistic UI updates to keep the experience snappy even on slow connections.'),
      ptBlock('h3', 'This project pushed me to think deeply about multi-tenancy trade-offs, cost-efficient real-time patterns, and building a product that scales without the infrastructure bill spiralling out of control.'),
    ],
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
    description: [
      ptBlock('p1', 'Pulse is a privacy-first web analytics platform built as a lightweight, open-source alternative to Google Analytics. It was designed from the ground up to be cookieless, GDPR-compliant, and genuinely fast to query.'),
      ptBlock('p2', 'The event pipeline ingests millions of events per day asynchronously, stores them in ClickHouse with pre-aggregated rollups, and serves sub-80ms dashboard queries even across long date ranges. The tracking script is under 3KB and does not require user consent banners.'),
      ptBlock('p3', 'Building on ClickHouse for the first time was a steep but rewarding learning curve — the columnar storage model and materialized views turned out to be a perfect fit for time-series analytics workloads.'),
    ],
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
    description: [
      ptBlock('s1', 'ShipKit is a developer CLI that scaffolds production-ready Next.js projects in under five minutes. Instead of copy-pasting boilerplate across every new project, you run one command and answer a handful of questions.'),
      ptBlock('s2', 'It supports 18 composable modules — auth (NextAuth, Clerk, or Supabase), payments (Stripe), email (Resend), observability (Sentry), and more. Each module drops in clean, wired-up code rather than bare templates you still have to integrate yourself.'),
      ptBlock('s3', 'The CLI is built with Oclif and Ink for a polished terminal UI. The real engineering challenge was making the module system composable — modules need to know about each other and generate correct cross-wiring code without conflicts.'),
    ],
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
