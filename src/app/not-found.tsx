'use client';

import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            className="font-display text-[10rem] md:text-[14rem] leading-none text-transparent select-none"
            style={{ WebkitTextStroke: '1px var(--border)' }}
          >
            404
          </div>
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 font-display text-[10rem] md:text-[14rem] leading-none text-gradient select-none blur-sm"
            aria-hidden
          >
            404
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="font-display text-2xl md:text-3xl text-ink">
            Page not found.
          </h1>
          <p className="text-ink-muted leading-relaxed">
            This page doesn&apos;t exist... or it did and I deleted it. Either
            way, there&apos;s nothing here.
          </p>
        </motion.div>

        {/* Code block easter egg */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="glass rounded-xl p-4 font-mono text-xs text-left border border-border"
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
              <span className="text-amber-400/80">HINT</span>{' '}
              <span className="text-ink-muted">Did you mean one of these?</span>
            </div>
            {LINKS.map((l) => (
              <div key={l.href}>
                <span className="text-ink-faint"> →</span>{' '}
                <Link
                  href={l.href}
                  className="text-accent-400 hover:text-accent-300 transition-colors underline-anim"
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
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
        </motion.div>
      </div>
    </div>
  );
}
