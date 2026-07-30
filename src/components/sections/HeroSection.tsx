import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimateIn, BounceBar } from '@/components/ui/AnimateIn';
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from '@/components/ui/SocialIcons';
import { siteConfig } from '@/config/site';
import { getHeroConfig } from '@/sanity/lib/queries';
import { FALLBACK_HERO_STATS, FALLBACK_HERO_STACK } from '@/data/fallback-hero';
import { logger } from '@/lib/logger';

export async function HeroSection() {
  let stats = FALLBACK_HERO_STATS;
  let stack = FALLBACK_HERO_STACK;

  try {
    const hero = await getHeroConfig();
    if (hero?.stats?.length) stats = hero.stats;
    if (hero?.stack?.length) stack = hero.stack;
  } catch (err) {
    logger.warn(
      'HeroSection',
      'Failed to fetch hero config from Sanity, using fallback',
      err,
    );
  }

  return (
    <section className='relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden'>
      <div className='absolute inset-0 dot-grid opacity-40 pointer-events-none' />
      <div
        className='hero-glow hero-glow-primary pointer-events-none'
        aria-hidden
      />
      <div
        className='hero-glow hero-glow-secondary pointer-events-none'
        aria-hidden
      />

      <div className='relative mx-auto max-w-7xl w-full'>
        <div className='grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center'>
          <div className='space-y-8'>
            <AnimateIn eager>
              <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/25 bg-accent-500/8 text-accent-fg text-xs font-mono font-medium tracking-wide'>
                <Sparkles size={11} />
                <span>
                  Currently building software at{' '}
                  <a
                    href='https://konrad.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline underline-offset-2 decoration-accent-500/40 hover:decoration-accent-500 hover:text-accent-strong transition-colors'
                  >
                    Konrad
                  </a>
                </span>
              </span>
            </AnimateIn>

            <AnimateIn eager className='space-y-2'>
              <h1 className='font-display text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.05] tracking-tight'>
                Hi, I&apos;m{' '}
                <span className='text-gradient'>{siteConfig.name}</span>
                <span className='text-accent-fg'>.</span>
              </h1>
              <h2 className='font-display text-4xl sm:text-5xl md:text-6xl text-ink-muted leading-[1.1] tracking-tight'>
                I build the web.
              </h2>
            </AnimateIn>

            <AnimateIn eager>
              <p className='text-ink-muted text-lg leading-relaxed max-w-lg'>
                Full-stack software engineer specializing in{' '}
                <span className='text-ink font-medium'>
                  React.js, Next.js, and Node.js
                </span>
                . I care deeply about performance, accessibility, and shipping
                products people love.
              </p>
            </AnimateIn>

            <AnimateIn eager>
              <div className='flex flex-wrap items-center gap-3'>
                <Link href='/projects' className='btn btn-primary gap-2'>
                  View my work <ArrowRight size={16} />
                </Link>
                <Link href='/about' className='btn btn-outline'>
                  About me
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn eager>
              <div className='flex flex-wrap items-center gap-6 pt-2'>
                <div className='flex items-center gap-3'>
                  <a
                    href={siteConfig.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-ink-faint hover:text-accent-fg transition-colors p-1'
                    aria-label='GitHub'
                  >
                    <GithubIcon size={19} />
                  </a>
                  <a
                    href={siteConfig.links.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-ink-faint hover:text-accent-fg transition-colors p-1'
                    aria-label='Twitter'
                  >
                    <TwitterIcon size={19} />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-ink-faint hover:text-accent-fg transition-colors p-1'
                    aria-label='LinkedIn'
                  >
                    <LinkedinIcon size={19} />
                  </a>
                </div>
                <div className='h-4 w-px bg-border' />
                <div className='flex items-center gap-5 text-sm text-ink-muted font-mono'>
                  {stats.map(({ num, label }) => (
                    <div key={label} className='flex items-baseline gap-1.5'>
                      <span className='text-ink font-semibold text-base'>
                        {num}
                      </span>
                      <span className='text-xs text-ink-faint'>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn eager className='hidden lg:block'>
            <div className='glass rounded-xl p-5 font-mono text-xs leading-6 shadow-xl glow-accent-sm'>
              <div className='flex items-center gap-1.5 mb-4 pb-3 border-b border-border'>
                <span className='w-2.5 h-2.5 rounded-full bg-red-400/80' />
                <span className='w-2.5 h-2.5 rounded-full bg-yellow-500/90 dark:bg-yellow-400/80' />
                <span className='w-2.5 h-2.5 rounded-full bg-green-400/80' />
                <span className='ml-2 text-ink-faint text-[11px]'>
                  developer.ts
                </span>
              </div>
              <div className='space-y-0.5'>
                <div>
                  <span className='text-accent-fg'>const</span>{' '}
                  <span className='text-ink'>dev</span>{' '}
                  <span className='text-ink-muted'>=</span>{' '}
                  <span className='text-accent-strong'>&#123;</span>
                </div>
                <div className='pl-4'>
                  <span className='text-ink-muted'>name:</span>{' '}
                  <span className='text-amber-700 dark:text-amber-400/80'>
                    &quot;{siteConfig.author}&quot;
                  </span>
                  <span className='text-ink-muted'>,</span>
                </div>
                <div className='pl-4'>
                  <span className='text-ink-muted'>role:</span>{' '}
                  <span className='text-amber-700 dark:text-amber-400/80'>
                    &quot;Software Engineer&quot;
                  </span>
                  <span className='text-ink-muted'>,</span>
                </div>
                <div className='pl-4'>
                  <span className='text-ink-muted'>stack:</span>{' '}
                  <span className='text-accent-strong'>[</span>
                </div>
                {stack.map((item) => (
                  <div key={item} className='pl-8'>
                    <span className='text-amber-700 dark:text-amber-400/80'>
                      &quot;{item}&quot;
                    </span>
                    <span className='text-ink-muted'>,</span>
                  </div>
                ))}
                <div className='pl-4'>
                  <span className='text-accent-strong'>]</span>
                  <span className='text-ink-muted'>,</span>
                </div>
                <div className='pl-4'>
                  <span className='text-ink-muted'>available:</span>{' '}
                  <span className='text-accent-fg'>true</span>
                </div>
                <div>
                  <span className='text-accent-strong'>&#125;</span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <AnimateIn
        direction='none'
        delay={1.2}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
      >
        <span className='text-[10px] font-mono text-ink-faint uppercase tracking-widest'>
          scroll
        </span>
        <BounceBar className='w-px h-8 bg-linear-to-b from-ink-faint to-transparent' />
      </AnimateIn>
    </section>
  );
}
