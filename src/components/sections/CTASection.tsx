import { AnimateIn } from '@/components/ui/AnimateIn';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/config/site';
import { ArrowUpRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <AnimateIn>
        <div className="mx-auto max-w-3xl text-center space-y-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-accent-500/10 blur-3xl rounded-full pointer-events-none" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
            Let&apos;s work together
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-tight relative">
            Have a project in mind?
            <br />
            <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed max-w-xl mx-auto relative">
            I&apos;m always excited to explore new projects, collaborations, and
            conversations. Whether you have a clear brief or just a spark of an
            idea, feel free to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2 relative">
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary gap-2 text-base px-6 py-3"
            >
              <Mail size={17} /> Say hello
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2 text-base px-6 py-3"
            >
              <GithubIcon size={17} /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="text-xs text-ink-faint font-mono pt-2 relative">
            {siteConfig.email} · Usually responds within 24h
          </p>
        </div>
      </AnimateIn>
    </section>
  );
}
