"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: { widgets?: { load?: (el?: HTMLElement) => void } };
  }
}

export function XFeed({ username }: { username: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Inject a fresh <a> so Twitter widget.js can always find it,
    // bypassing any React hydration timing issues.
    el.innerHTML = `<a class="twitter-timeline"
      data-height="420"
      data-theme="dark"
      data-dnt="true"
      data-tweet-limit="5"
      href="https://twitter.com/${username}">
      Tweets by @${username}
    </a>`;

    const activate = () => window.twttr?.widgets?.load?.(el);

    if (window.twttr?.widgets) {
      activate();
      return;
    }

    const SCRIPT_ID = "twitter-wjs";
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.charset = "utf-8";
      s.onload = activate;
      document.head.appendChild(s);
    } else {
      // Script already appended but not yet loaded — poll briefly
      const t = setInterval(() => {
        if (window.twttr?.widgets) { activate(); clearInterval(t); }
      }, 200);
      setTimeout(() => clearInterval(t), 8000);
    }
  }, [username]);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden border border-border bg-surface-subtle min-h-80 flex items-center justify-center"
    >
      <span className="text-xs font-mono text-ink-faint">Loading X feed…</span>
    </div>
  );
}

// Backward-compat alias
export { XFeed as TwitterFeed };
