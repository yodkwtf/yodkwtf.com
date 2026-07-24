'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TocHeading } from '@/lib/toc';

export function TableOfContents({
  headings,
  variant = 'sidebar',
}: {
  headings: TocHeading[];
  variant?: 'sidebar' | 'inline';
}) {
  const isSidebar = variant === 'sidebar';
  const [activeSlug, setActiveSlug] = useState('');

  useEffect(() => {
    if (!isSidebar) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: '-10% 0% -80% 0%', threshold: 0 },
    );

    headings.forEach(({ slug }) => {
      const el = document.getElementById(slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, isSidebar]);

  if (!headings.length) return null;

  // Inline variant — a collapsible index shown above the article on tablet/
  // mobile. Links are simply styled as links (no active tracking).
  if (variant === 'inline') {
    return (
      <details className="group rounded-xl border border-border bg-surface-subtle/50 px-4 py-3">
        <summary className="flex cursor-pointer items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-faint list-none [&::-webkit-details-marker]:hidden">
          On this page
          <ChevronDown
            size={14}
            className="text-ink-faint transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <nav className="mt-3 space-y-0.5">
          {headings.map(({ slug, text, level }) => (
            <a
              key={slug}
              href={`#${slug}`}
              className={cn(
                'block py-1 leading-snug text-accent-600 hover:text-accent-500 transition-colors',
                level === 2 ? 'text-[13px]' : 'pl-3 text-[12px]',
              )}
            >
              {text}
            </a>
          ))}
        </nav>
      </details>
    );
  }

  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-4">
        On this page
      </p>
      <nav className="space-y-0.5 border-l border-border">
        {headings.map(({ slug, text, level }) => (
          <a
            key={slug}
            href={`#${slug}`}
            className={cn(
              'block py-1 pr-2 leading-snug transition-all duration-150 border-l-2 -ml-px',
              level === 2 ? 'pl-3 text-[13px]' : 'pl-5 text-[12px]',
              activeSlug === slug
                ? 'border-accent-500 text-accent-500'
                : 'border-transparent text-ink-faint hover:text-ink hover:border-border',
            )}
          >
            {text}
          </a>
        ))}
      </nav>
    </div>
  );
}
