import type { Metadata } from "next";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagPill } from "@/components/ui/TagPill";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import { Briefcase, GraduationCap, ExternalLink, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — full-stack engineer, background, experience, and skills.`,
};

const EXPERIENCE = [
  {
    company: "Acme Corp", role: "Senior Full-Stack Engineer",
    period: "2022 — Present", current: true,
    description: "Lead engineer on the core product team. Architected and shipped a real-time collaboration feature used by 100k+ users. Reduced bundle size by 40% through code splitting and lazy loading. Mentored 3 junior engineers.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    url: "https://example.com",
  },
  {
    company: "Bright Labs", role: "Full-Stack Developer",
    period: "2020 — 2022", current: false,
    description: "Built and maintained multiple client-facing SaaS products. Owned the entire frontend architecture migration from CRA to Next.js. Integrated Stripe payments processing $2M+ annually.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
    url: "https://example.com",
  },
  {
    company: "Freelance", role: "Web Developer",
    period: "2019 — 2020", current: false,
    description: "Worked with 10+ clients across e-commerce, healthcare, and fintech industries. Delivered full-stack web applications on time and within scope.",
    tech: ["React", "Express", "MySQL", "Tailwind CSS"],
    url: null,
  },
];

const EDUCATION = [
  {
    institution: "University of California, Berkeley",
    degree: "B.S. Computer Science",
    period: "2015 — 2019",
    note: "Dean&apos;s List · GPA 3.8",
  },
];

const VALUES = [
  { title: "Ship, then improve", body: "I believe in getting real feedback from real users. Perfect is the enemy of shipped. Build, measure, learn." },
  { title: "Boring technology", body: "I reach for battle-tested tools over shiny new ones. The best technology is the one that solves the problem reliably." },
  { title: "Code is communication", body: "Code is read far more than it&apos;s written. I write for the next developer — even when that&apos;s future me." },
  { title: "Accessibility first", body: "The web is for everyone. I build with semantic HTML, proper ARIA, and keyboard navigation from day one." },
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-28 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <AnimateIn className="mb-16 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">About</span>
            <h1 className="font-display text-5xl md:text-6xl text-ink mt-3 mb-5 leading-tight">
              A bit about me.
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed">
              I&apos;m a full-stack engineer based in San Francisco. I build web applications that are
              fast, accessible, and thoughtfully designed. I care equally about the experience of
              the users who use the product and the developers who maintain it.
            </p>
            <div className="flex gap-3 mt-6">
              <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">Say hello</a>
              <a href={siteConfig.links.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2">
                <Download size={15} /> Resume
              </a>
            </div>
          </AnimateIn>

          {/* Experience */}
          <section className="mb-20">
            <SectionHeader label="Career" heading="Where I&apos;ve worked." />
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-5" />
              <StaggerContainer className="space-y-8 pl-14">
                {EXPERIENCE.map((exp, i) => (
                  <StaggerItem key={i} direction="left">
                    <div className="relative">
                      <div className="absolute -left-[2.95rem] top-1 w-3.5 h-3.5 rounded-full border-2 border-accent-500 bg-surface" />
                      {exp.current && (
                        <div className="absolute -left-[3.1rem] top-0.5 w-4 h-4 rounded-full bg-accent-500/20 animate-ping" />
                      )}
                      <div className="glass rounded-xl p-5 border border-border hover:border-accent-500/30 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-ink">{exp.role}</h3>
                              {exp.current && (
                                <span className="tag-pill bg-accent-500/10 text-accent-500 border-accent-500/20 text-[10px]">Current</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              {exp.url ? (
                                <a href={exp.url} target="_blank" rel="noopener noreferrer"
                                  className="text-sm text-ink-muted hover:text-accent-500 transition-colors flex items-center gap-1">
                                  {exp.company} <ExternalLink size={11} />
                                </a>
                              ) : (
                                <span className="text-sm text-ink-muted">{exp.company}</span>
                              )}
                            </div>
                          </div>
                          <span className="font-mono text-xs text-ink-faint">{exp.period}</span>
                        </div>
                        <p className="text-sm text-ink-muted leading-relaxed mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => <TagPill key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Education */}
          <section className="mb-20">
            <SectionHeader label="Education" heading="Academic background." />
            <StaggerContainer className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <StaggerItem key={i}>
                  <div className="glass rounded-xl p-5 border border-border flex flex-wrap items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-subtle border border-border flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={18} className="text-accent-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-ink">{edu.degree}</h3>
                      <p className="text-sm text-ink-muted">{edu.institution}</p>
                      {edu.note && <p className="text-xs text-ink-faint mt-0.5" dangerouslySetInnerHTML={{ __html: edu.note }} />}
                    </div>
                    <span className="font-mono text-xs text-ink-faint">{edu.period}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          {/* Philosophy */}
          <section className="mb-20">
            <SectionHeader label="Principles" heading="How I think about work." />
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {VALUES.map((v, i) => (
                <StaggerItem key={i}>
                  <div className="glass rounded-xl p-5 border border-border hover:border-accent-500/30 transition-colors h-full">
                    <h3 className="font-semibold text-ink mb-2">{v.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: v.body }} />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </div>
      </div>

      <CTASection />
    </>
  );
}
