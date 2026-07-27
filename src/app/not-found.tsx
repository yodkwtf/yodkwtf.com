'use client';

import type { CSSProperties } from 'react';
import { ArrowLeft, Home, Search } from 'lucide-react';
import Link from 'next/link';

const LINKS = [
  { label: '/', href: '/', icon: <Home size={14} /> },
  { label: '/projects', href: '/projects', icon: <Search size={14} /> },
  { label: '/blog', href: '/blog', icon: <Search size={14} /> },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-accent-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative text-center max-w-lg mx-auto space-y-8">
        {/* Glitchy 404 */}
        <div className="reveal reveal-zoom relative">
          <div
            className="font-display text-[10rem] md:text-[14rem] leading-none text-transparent select-none"
            style={{ WebkitTextStroke: '1px var(--border)' }}
          >
            404
          </div>
          <div
            className="pulse-glow absolute inset-0 font-display text-[10rem] md:text-[14rem] leading-none text-gradient select-none blur-sm"
            aria-hidden
          >
            404
          </div>
        </div>

        {/* Text */}
        <div
          className="reveal reveal-up space-y-3"
          style={{ '--reveal-delay': '0.2s' } as CSSProperties}
        >
          <h1 className="font-display text-2xl md:text-3xl text-ink">
            Page not found.
          </h1>
          <p className="text-ink-muted leading-relaxed">
            This page doesn&apos;t exist... or it did and I deleted it. Either
            way, there&apos;s nothing here.
          </p>
        </div>

        {/* Code block easter egg */}
        <div
          className="reveal reveal-up glass rounded-xl p-4 font-mono text-xs text-left border border-border"
          style={{ '--reveal-delay': '0.35s' } as CSSProperties}
        >
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-400/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
            <span className="w-2 h-2 rounded-full bg-green-400/70" />
            <span className="ml-2 text-ink-faint text-[10px]">error.log</span>
          </div>
          <div className="space-y-1">
            <div>
              <span className="text-red-400">ERROR</span>{' '}
              <span className="text-ink-muted">404: Page not found</span>
            </div>
            <div>
              <span className="text-amber-700 dark:text-amber-400/80">HINT</span>{' '}
              <span className="text-ink-muted">Did you mean one of these?</span>
            </div>
            {LINKS.map((l) => (
              <div key={l.href}>
                <span className="text-ink-faint"> →</span>{' '}
                <Link
                  href={l.href}
                  className="text-accent-fg hover:text-accent-strong transition-colors underline-anim"
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className="reveal reveal-up flex flex-wrap justify-center gap-3"
          style={{ '--reveal-delay': '0.5s' } as CSSProperties}
        >
          <Link href="/" className="btn btn-primary gap-2">
            <Home size={15} /> Go home
          </Link>
          <button
            onClick={() => history.back()}
            className="btn btn-outline gap-2"
          >
            <ArrowLeft size={15} /> Go back
          </button>
        </div>
      </div>
    </div>
  );
}
