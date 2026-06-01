/**
 * Fallback skills data used when Sanity is unreachable or skills are hardcoded.
 */

export const FALLBACK_SKILLS: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
  Backend:  ["Node.js", "Express", "Fastify", "REST APIs", "GraphQL", "tRPC"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM", "Supabase"],
  DevOps:   ["Docker", "Vercel", "AWS", "CI/CD", "GitHub Actions", "Linux"],
  Tools:    ["Git", "Figma", "Sanity CMS", "Stripe", "Sentry", "Posthog"],
};

export const SKILL_CATEGORY_COLORS: Record<string, string> = {
  Frontend: "text-accent-400",
  Backend:  "text-violet-400",
  Database: "text-amber-400",
  DevOps:   "text-sky-400",
  Tools:    "text-rose-400",
};
