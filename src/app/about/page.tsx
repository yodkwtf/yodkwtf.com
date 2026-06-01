import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagPill } from "@/components/ui/TagPill";
import { CTASection } from "@/components/sections/CTASection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { siteConfig } from "@/config/site";
import { GraduationCap, ExternalLink, Download } from "lucide-react";
import { getAboutPage, getExperience } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/client";
import { FALLBACK_EXPERIENCE, FALLBACK_EDUCATION } from "@/data/fallback-experience";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — full-stack engineer, background, experience, and skills.`,
};

export default async function AboutPage() {
  let experience = FALLBACK_EXPERIENCE as any[];
  let education: typeof FALLBACK_EDUCATION = FALLBACK_EDUCATION;
  let avatarUrl: string | null = null;
  let resumeUrl = siteConfig.links.resume;

  try {
    const [fetchedExp, about] = await Promise.all([getExperience(), getAboutPage()]);
    if (fetchedExp?.length) experience = fetchedExp;
    if (about?.avatar) avatarUrl = urlFor(about.avatar).width(480).height(480).url();
    if (about?.resumeUrl) resumeUrl = about.resumeUrl;
    if (about?.education?.length) education = about.education;
  } catch {}

  return (
    <>
      {/* ── Page header ─────────────────────────────── */}
      <div className="pt-32 pb-8 px-6">
        <div className="mx-auto max-w-5xl">

          {/* ── Header: two-column — text left, profile image right ── */}
          <AnimateIn>
            <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-center">
              <div className="space-y-5 max-w-xl">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">About</span>
                <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
                  A bit about me.
                </h1>
                <p className="text-ink-muted text-lg leading-relaxed">
                  I&apos;m a full-stack engineer based in {siteConfig.location}. I build web
                  applications that are fast, accessible, and thoughtfully designed — and care
                  equally about the people using them and the developers maintaining them.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">Say hello</a>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline gap-2"
                  >
                    <Download size={15} /> Resume
                  </a>
                </div>
              </div>

              {/* Circular profile image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-1.5 rounded-full bg-linear-to-br from-accent-400 to-accent-700 opacity-25 blur-lg" />
                  <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-accent-500/30 bg-surface-subtle">
                    {avatarUrl ? (
                      <Image
                        src={avatarUrl}
                        alt={siteConfig.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 208px, 256px"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center dot-grid">
                        <span className="font-display text-5xl text-gradient select-none">
                          {siteConfig.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* ── Skills (full-width section) ─────────────── */}
      <SkillsSection />

      {/* ── Experience + Education ──────────────────── */}
      <div className="py-16 px-6">
        <div className="mx-auto max-w-5xl">

          {/* ── Experience ── */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto">
            <SectionHeader label="Career" heading="Where I've worked." />
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-2 sm:ml-5" />
              <StaggerContainer className="space-y-6 pl-8 sm:pl-14">
                {experience.map((exp: any, i: number) => (
                  <StaggerItem key={i} direction="left">
                    <div className="relative">
                      <div className="absolute left-[-1.9rem] top-1 w-3.5 h-3.5 rounded-full border-2 border-accent-500 bg-surface sm:left-[-2.95rem]" />
                      {exp.current && (
                        <div className="absolute left-[-2.05rem] top-0.5 w-4 h-4 rounded-full bg-accent-500/20 animate-ping sm:left-[-3.1rem]" />
                      )}
                      <div className="glass rounded-xl p-4 border border-border hover:border-accent-500/30 transition-colors sm:p-5">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-semibold text-ink">{exp.role}</h3>
                              {exp.current && (
                                <span className="tag-pill bg-accent-500/10 text-accent-500 border-accent-500/20 text-[10px]">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              {exp.companyUrl || exp.url ? (
                                <a
                                  href={exp.companyUrl ?? exp.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-ink-muted hover:text-accent-500 transition-colors flex items-center gap-1"
                                >
                                  {exp.company} <ExternalLink size={11} />
                                </a>
                              ) : (
                                <span className="text-sm text-ink-muted">{exp.company}</span>
                              )}
                            </div>
                          </div>
                          <span className="w-full font-mono text-xs text-ink-faint sm:w-auto sm:shrink-0">
                            {exp.period ??
                              `${exp.startDate?.slice(0, 4)} — ${exp.current ? "Present" : exp.endDate?.slice(0, 4) ?? ""}`}
                          </span>
                        </div>

                        {/* Bullet-point description */}
                        {Array.isArray(exp.description) && exp.description.length > 0 && (
                          <ul className="mb-4 space-y-1.5">
                            {exp.description.map((item: any, j: number) => {
                              const text =
                                typeof item === "string"
                                  ? item
                                  : item?.children?.map((c: any) => c.text).join("") ?? "";
                              return text ? (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-sm text-ink-muted leading-relaxed"
                                >
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-500/60 shrink-0" />
                                  {text}
                                </li>
                              ) : null;
                            })}
                          </ul>
                        )}

                        <div className="flex flex-wrap gap-1.5">
                          {(exp.techStack ?? exp.tech ?? []).map((t: string) => (
                            <TagPill key={t} label={t} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            </div>
          </section>

          {/* ── Education ── */}
          <section>
            <div className="max-w-3xl mx-auto">
            <SectionHeader label="Education" heading="Academic background." />
            <StaggerContainer className="space-y-4">
              {education.map((edu, i) => (
                <StaggerItem key={i}>
                  <div className="glass rounded-xl p-5 border border-border flex flex-wrap items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-subtle border border-border flex items-center justify-center shrink-0">
                      <GraduationCap size={18} className="text-accent-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-ink">{edu.degree}</h3>
                      <p className="text-sm text-ink-muted">{edu.institution}</p>
                      {edu.note && (
                        <p className="text-xs text-ink-faint mt-0.5">{edu.note}</p>
                      )}
                    </div>
                    <span className="font-mono text-xs text-ink-faint">{edu.period}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            </div>
          </section>

        </div>
      </div>

      <CTASection />
    </>
  );
}
