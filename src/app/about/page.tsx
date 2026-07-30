import type { Metadata } from 'next';
import Image from 'next/image';
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/AnimateIn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TagPill } from '@/components/ui/TagPill';
import { CTASection } from '@/components/sections/CTASection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';
import { GraduationCap, ExternalLink, Download, Briefcase } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { logger } from '@/lib/logger';
import { getAboutPage, getExperience } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/client';
import { toPlainText, type PortableTextBlock } from '@portabletext/react';
import {
  RichText,
  RichTextInline,
  type RichTextValue,
} from '@/components/ui/RichText';
import { FALLBACK_EXPERIENCE } from '@/data/fallback-experience';
import {
  FALLBACK_BIO,
  FALLBACK_AVATAR_URL,
  FALLBACK_EDUCATION,
} from '@/data/fallback-about';

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  note?: string;
};

type DescriptionItem = string | PortableTextBlock;

type ExperienceItem = {
  company: string;
  role: string;
  current: boolean;
  description: DescriptionItem[];
  techStack?: string[];
  tech?: string[];
  companyUrl?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  period?: string;
  order?: number;
};

export const revalidate = 300;

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description: `Learn more about ${siteConfig.name} - full-stack engineer. Background, work experience, education, and the skills and tools behind the work.`,
  path: '/about',
});

export default async function AboutPage() {
  let experience: ExperienceItem[] = FALLBACK_EXPERIENCE;
  let education: EducationItem[] = FALLBACK_EDUCATION;
  let avatarUrl: string | null = FALLBACK_AVATAR_URL || null;
  let avatarWidth = 640;
  let avatarHeight = 800;
  let avatarBlur: string | undefined;
  let resumeUrl: string = siteConfig.links.resume;
  let bio: RichTextValue = FALLBACK_BIO;

  try {
    const [fetchedExp, about] = await Promise.all([
      getExperience(),
      getAboutPage(),
    ]);
    if (fetchedExp?.length) experience = fetchedExp;
    if (about?.avatar) {
      avatarUrl = urlFor(about.avatar).width(640).url();
      if (about.avatar.dimensions?.width && about.avatar.dimensions?.height) {
        avatarWidth = about.avatar.dimensions.width;
        avatarHeight = about.avatar.dimensions.height;
      }
      if (about.avatar.lqip) avatarBlur = about.avatar.lqip;
    }
    if (about?.resumeUrl) resumeUrl = about.resumeUrl;
    if (about?.education?.length) education = about.education;
    if (about?.bio?.length) bio = about.bio;
    logger.info('AboutPage', 'Loaded about and experience data from Sanity');
  } catch (err) {
    logger.warn(
      'AboutPage',
      'Failed to fetch about/experience data, using fallback',
      err,
    );
  }

  return (
    <>
      <div className='pt-32 pb-8 px-6'>
        <div className='mx-auto max-w-5xl'>
          <AnimateIn>
            <div className='grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-16 items-center'>
              <div className='space-y-5'>
                <span className='font-mono text-xs uppercase tracking-widest text-accent-fg font-medium'>
                  About
                </span>
                <h1 className='font-display text-5xl md:text-6xl text-ink leading-tight'>
                  A bit about me.
                </h1>
                <div className='space-y-4 max-w-2xl'>
                  <RichText value={bio} />
                </div>
                <div className='flex flex-wrap gap-3 pt-1'>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className='btn btn-primary'
                  >
                    Say hello
                  </a>
                  <a
                    href={resumeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-outline gap-2'
                  >
                    <Download size={15} /> Resume
                  </a>
                </div>
              </div>

              <div className='flex justify-center mt-4 lg:mt-0'>
                <div className='relative w-full max-w-[288px] lg:max-w-none'>
                  <div className='absolute -inset-1.5 rounded-2xl bg-linear-to-br from-accent-400 to-accent-700 opacity-25 blur-lg' />
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt={siteConfig.name}
                      width={avatarWidth}
                      height={avatarHeight}
                      className='relative w-full h-auto rounded-2xl border-2 border-accent-500/30 object-cover'
                      sizes='(max-width: 1024px) 288px, 320px'
                      priority
                      placeholder={avatarBlur ? 'blur' : undefined}
                      blurDataURL={avatarBlur}
                    />
                  ) : (
                    <div className='relative aspect-4/5 rounded-2xl border-2 border-accent-500/30 bg-surface-subtle flex items-center justify-center dot-grid'>
                      <span className='font-display text-5xl text-gradient select-none'>
                        {siteConfig.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <SkillsSection />

      <div className='py-16 px-6'>
        <div className='mx-auto max-w-5xl'>
          <section className='mb-16'>
            <div className='max-w-3xl mx-auto'>
              <SectionHeader label='Career' heading="Where I've worked." />
              <div className='relative'>
                <div className='absolute left-4.5 top-0 bottom-0 w-px bg-border' />
                <StaggerContainer className='space-y-6'>
                  {experience.map((exp: ExperienceItem, i: number) => (
                    <StaggerItem key={i} direction='left'>
                      <div className='relative flex gap-3 sm:gap-5'>
                        <div className='relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface'>
                          <Briefcase size={16} className='text-accent-fg' />
                          {exp.current && (
                            <span className='absolute inset-0 rounded-full border border-accent-500 animate-ping opacity-40' />
                          )}
                        </div>

                        <div className='glass flex-1 rounded-xl border border-border p-4 transition-colors hover:border-accent-500/30 sm:p-5'>
                          <div className='mb-3 flex flex-wrap items-start justify-between gap-3'>
                            <div className='min-w-0'>
                              <div className='flex flex-wrap items-center gap-2'>
                                <h3 className='font-semibold text-ink'>
                                  {exp.role}
                                </h3>
                                {exp.current && (
                                  <span className='tag-pill border-accent-500/20 bg-accent-500/10 text-[10px] text-accent-fg'>
                                    Current
                                  </span>
                                )}
                              </div>
                              <div className='mt-0.5'>
                                {exp.companyUrl || exp.url ? (
                                  <a
                                    href={exp.companyUrl ?? exp.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-sm text-ink-muted hover:text-accent-fg transition-colors flex items-center gap-1'
                                  >
                                    {exp.company} <ExternalLink size={11} />
                                  </a>
                                ) : (
                                  <span className='text-sm text-ink-muted'>
                                    {exp.company}
                                  </span>
                                )}
                              </div>
                            </div>
                            <span className='w-full font-mono text-xs text-ink-faint sm:w-auto sm:shrink-0'>
                              {exp.period ??
                                `${exp.startDate ? formatDate(exp.startDate, 'MMM yyyy') : ''} – ${exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate, 'MMM yyyy') : ''}`}
                            </span>
                          </div>

                          {Array.isArray(exp.description) &&
                            exp.description.length > 0 && (
                              <ul className='mb-4 space-y-1.5'>
                                {exp.description.map(
                                  (item: DescriptionItem, j: number) => {
                                    const text =
                                      typeof item === 'string'
                                        ? item
                                        : toPlainText(item);
                                    if (!text.trim()) return null;

                                    return (
                                      <li
                                        key={j}
                                        className='flex items-start gap-2 text-sm leading-relaxed text-ink-muted'
                                      >
                                        <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500/60' />
                                        <span>
                                          <RichTextInline value={[item]} />
                                        </span>
                                      </li>
                                    );
                                  },
                                )}
                              </ul>
                            )}

                          <div className='flex flex-wrap gap-1.5'>
                            {(exp.techStack ?? exp.tech ?? []).map(
                              (t: string) => (
                                <TagPill key={t} label={t} />
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </section>

          <section>
            <div className='max-w-3xl mx-auto'>
              <SectionHeader label='Education' heading='Academic background.' />
              <div className='relative'>
                <div className='absolute left-4.5 top-0 bottom-0 w-px bg-border' />

                <StaggerContainer className='space-y-8'>
                  {education.map((edu, i) => (
                    <StaggerItem key={i}>
                      <div className='relative flex gap-3 sm:gap-5'>
                        <div className='relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface'>
                          <GraduationCap size={16} className='text-accent-fg' />
                        </div>

                        <div className='glass flex-1 rounded-2xl border border-border p-4 sm:p-5'>
                          <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                            <h3 className='font-semibold text-base sm:text-lg text-ink'>
                              {edu.degree}
                            </h3>
                            <span className='font-mono text-xs text-ink-faint'>
                              {edu.period}
                            </span>
                          </div>
                          <p className='mt-1 text-sm text-ink-muted'>
                            {edu.institution}
                          </p>
                          {edu.note && (
                            <p className='mt-3 text-sm leading-relaxed text-ink-faint'>
                              {edu.note}
                            </p>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CTASection />
    </>
  );
}
