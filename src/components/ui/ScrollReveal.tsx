'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SELECTOR = '.reveal, .stagger-item';

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const pending = new Set<HTMLElement>();

    for (const el of document.querySelectorAll<HTMLElement>(SELECTOR)) {
      if (el.dataset.revealed) continue;
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.dataset.revealed = '1';
        continue;
      }
      el.classList.add('reveal-pending');
      pending.add(el);
    }

    if (!pending.size) return;

    let frame = 0;
    let resizeObserver: ResizeObserver | undefined;

    const stop = () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const sweep = () => {
      frame = 0;
      const limit = window.innerHeight;
      for (const el of pending) {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.remove('reveal-pending');
          el.dataset.revealed = '1';
          pending.delete(el);
        }
      }
      if (!pending.size) stop();
    };

    function schedule() {
      if (!frame) frame = requestAnimationFrame(sweep);
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(schedule);
      resizeObserver.observe(document.documentElement);
    }

    document.fonts?.ready.then(schedule).catch(() => {});
    schedule();

    return () => {
      stop();
      for (const el of pending) el.classList.remove('reveal-pending');
    };
  }, [pathname]);

  return null;
}
