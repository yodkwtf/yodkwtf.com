import { SectionHeader } from '@/components/ui/SectionHeader';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { cn } from '@/lib/utils';
import { FALLBACK_SKILLS, SKILL_CATEGORY_COLORS } from '@/data/fallback-skills';
import { getSkills } from '@/sanity/lib/queries';

export async function SkillsSection() {
  let skills = FALLBACK_SKILLS;

  try {
    const fetched = await getSkills();
    if (fetched?.length) {
      // Group flat Sanity skill documents into Record<category, name[]>
      const grouped: Record<string, string[]> = {};
      for (const skill of fetched) {
        if (!grouped[skill.category]) grouped[skill.category] = [];
        grouped[skill.category].push(skill.name);
      }
      skills = grouped;
    }
  } catch {}

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Technical Skills"
          heading="Tools of the trade."
          subheading="Technologies I work with daily to build reliable, scalable, and performant web applications."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, skillList]) => (
            <StaggerItem key={category}>
              <div className="glass rounded-xl p-5 h-full border border-border hover:border-accent-500/30 transition-colors group">
                <h3
                  className={cn(
                    'font-mono text-xs uppercase tracking-widest font-medium mb-4',
                    SKILL_CATEGORY_COLORS[category] ?? 'text-ink-muted',
                  )}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-ink-muted bg-surface-subtle border border-border px-2.5 py-1 rounded-lg font-mono
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
