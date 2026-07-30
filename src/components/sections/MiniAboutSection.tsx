import Link from 'next/link';
import { ArrowRight, MapPin, Coffee, Code2 } from 'lucide-react';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { siteConfig } from '@/config/site';
import { getAboutPage } from '@/sanity/lib/queries';
import { FALLBACK_SHORT_BIO, FALLBACK_STATS } from '@/data/fallback-about';
import { RichText, type RichTextValue } from '@/components/ui/RichText';
import { logger } from '@/lib/logger';

export async function MiniAboutSection() {
  let bio: RichTextValue = FALLBACK_SHORT_BIO;
  let stats: { num: string; label: string; sub: string }[] = FALLBACK_STATS;

  try {
    const about = await getAboutPage();
    if (about?.shortBio?.length) bio = about.shortBio;
    if (about?.stats?.length) stats = about.stats;
    logger.info('MiniAboutSection', 'Loaded about data from Sanity');
  } catch (err) {
    logger.warn(
      'MiniAboutSection',
      'Failed to fetch about data, using fallback',
      err,
    );
  }

  return (
    <section className='py-20 px-6 border-t border-border'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <AnimateIn>
            <div className='space-y-5'>
              <span className='font-mono text-xs uppercase tracking-widest text-accent-fg font-medium'>
                About Me
              </span>
              <h2 className='font-display text-3xl md:text-4xl text-ink leading-tight'>
                Bringing ideas to life through{' '}
                <span className='hidden lg:inline'>
                  <br />
                </span>
                <em className='not-italic text-gradient'>
                  code and creativity.
                </em>
              </h2>
              <RichText value={bio} />
              <div className='flex flex-wrap items-center gap-4 text-sm text-ink-muted pt-2'>
                <span className='flex items-center gap-1.5'>
                  <MapPin size={14} className='text-accent-fg' />
                  {siteConfig.location}
                </span>
                <span className='flex items-center gap-1.5'>
                  <Coffee size={14} className='text-accent-fg' />
                  Fueled by Chai
                </span>
                <span className='flex items-center gap-1.5'>
                  <Code2 size={14} className='text-accent-fg' />
                  Open to work
                </span>
              </div>
              <Link href='/about' className='btn btn-outline w-fit gap-2'>
                More about me <ArrowRight size={15} />
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className='grid grid-cols-2 gap-4'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='glass rounded-xl p-5 border border-border hover:border-accent-500/30 transition-colors space-y-1'
                >
                  <div className='font-display text-3xl text-gradient'>
                    {stat.num}
                  </div>
                  <div className='text-sm font-medium text-ink'>
                    {stat.label}
                  </div>
                  <div className='text-xs text-ink-faint'>{stat.sub}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
