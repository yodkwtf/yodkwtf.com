import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

const SKILLS = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
  Backend:  ["Node.js", "Express", "Fastify", "REST APIs", "GraphQL", "tRPC"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM", "Supabase"],
  DevOps:   ["Docker", "Vercel", "AWS", "CI/CD", "GitHub Actions", "Linux"],
  Tools:    ["Git", "Figma", "Sanity CMS", "Stripe", "Sentry", "Posthog"],
};

const categoryColors: Record<string, string> = {
  Frontend: "text-accent-400",
  Backend:  "text-violet-400",
  Database: "text-amber-400",
  DevOps:   "text-sky-400",
  Tools:    "text-rose-400",
};

export function SkillsSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Technical Skills"
          heading="Tools of the trade."
          subheading="Technologies I work with daily to build reliable, scalable, and performant web applications."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <StaggerItem key={category}>
              <div className="glass rounded-xl p-5 h-full border border-border hover:border-accent-500/30 transition-colors group">
                <h3 className={cn("font-mono text-xs uppercase tracking-widest font-medium mb-4", categoryColors[category])}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-ink-muted bg-surface-subtle border border-border px-2.5 py-1 rounded-lg font-mono text-xs
                                 group-hover:border-border transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
