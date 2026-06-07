'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';
import { DCLogo } from '@/components/ui/DCLogo';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Navbar({ resumeUrl }: { resumeUrl: string }) {
  const pathname = usePathname();
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 border-b',
          scrolled
            ? 'py-3 glass-nav border-border/60'
            : 'py-5 bg-transparent border-transparent',
        )}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Durgesh Chaudhary — home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#20201f] text-white transition-transform group-hover:scale-105">
              <DCLogo size={16} />
            </span>
            <span className="font-display text-lg text-ink hidden sm:block">
              Durgesh
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                    active
                      ? 'text-accent-500 bg-accent-500/8'
                      : 'text-ink-muted hover:text-ink hover:bg-surface-subtle',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="btn-ghost rounded-lg p-2 transition-all"
              aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={resolvedTheme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {resolvedTheme === 'dark' ? (
                    <Sun size={17} className="text-ink-muted" />
                  ) : (
                    <Moon size={17} className="text-ink-muted" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn btn-outline text-sm py-1.5 px-4"
            >
              Resume
            </Link>

            <button
              className="md:hidden btn-ghost p-2 -mr-2 rounded-lg"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-15 z-40 bg-surface/95 backdrop-blur-md border-b border-border md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {siteConfig.nav.map((item, i) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + '/');
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                        active
                          ? 'text-accent-500 bg-accent-500/8'
                          : 'text-ink-muted hover:text-ink hover:bg-surface-subtle',
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
