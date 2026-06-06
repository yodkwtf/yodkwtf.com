'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { TocHeading } from '@/lib/toc';

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeSlug, setActiveSlug] = useState('');

  useEffect(() => {
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
  }, [headings]);

  if (!headings.length) return null;

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
