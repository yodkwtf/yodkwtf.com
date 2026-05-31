"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import Image from "next/image";
import { Check, Copy, Terminal, Info, AlertTriangle, Lightbulb, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Tells Pre "you're already inside a CodeBlock — just render <pre>"
const CodeFigureContext = createContext<string | null>(null);

const TERMINAL_LANGS = new Set(["bash", "sh", "shell", "zsh", "console", "terminal"]);

// ─── Code block with filename bar + copy ─────────────────────────────────────
export function CodeBlock({
  children,
  filename,
  terminal,
  className,
}: {
  children: React.ReactNode;
  filename?: string;
  terminal?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function copy() {
    const text = contentRef.current?.querySelector("code")?.textContent ?? "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className={cn("my-6 rounded-xl overflow-hidden border border-border", className)}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface-subtle border-b border-border">
        <div className="flex items-center gap-2">
          {terminal ? (
            <>
              <Terminal size={13} className="text-accent-500" />
              <span className="font-mono text-xs text-ink-muted">Terminal</span>
            </>
          ) : (
            <>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              </div>
              {filename && (
                <span className="font-mono text-xs text-ink-faint">{filename}</span>
              )}
            </>
          )}
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-xs font-mono text-ink-faint hover:text-ink transition-colors"
        >
          {copied ? (
            <>
              <Check size={12} className="text-accent-500" /> Copied
            </>
          ) : (
            <>
              <Copy size={12} /> Copy
            </>
          )}
        </button>
      </div>

      {/* Code area — no background here, shiki owns it via inline style on <pre> */}
      <div ref={contentRef} className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

// ─── Figure override ──────────────────────────────────────────────────────────
// rehype-pretty-code wraps every code block in <figure data-rehype-pretty-code-figure>.
// It also moves any custom data-* attributes (like data-filename) from <pre> up to <figure>.
function Figure({ children, ...props }: any) {
  if (!("data-rehype-pretty-code-figure" in props)) {
    return <figure {...props}>{children}</figure>;
  }

  const childArray = React.Children.toArray(children);

  // rehype-pretty-code moved data-filename from <pre> to <figure>
  const filename = props["data-filename"] as string | undefined;

  // figcaption present when user writes  ```ts title="file.ts"
  const figcaption = childArray.find(
    (c): c is React.ReactElement =>
      React.isValidElement(c) && (c as React.ReactElement).type === "figcaption",
  ) as React.ReactElement | undefined;

  const titleFilename = figcaption
    ? String(React.Children.toArray((figcaption.props as any).children).join(""))
    : undefined;

  // The pre element — everything that's not a figcaption.
  // We avoid `typeof type === "function"` because in RSC the type arrives as a
  // module-reference object, not the actual function.
  const preEl = childArray.find(
    (c): c is React.ReactElement =>
      React.isValidElement(c) && (c as React.ReactElement).type !== "figcaption",
  ) as React.ReactElement | undefined;

  // data-language lives on the <pre> element even after rehype-pretty-code
  const language = preEl
    ? ((preEl.props as any)["data-language"] as string | undefined)
    : undefined;

  const resolvedFilename = filename || titleFilename;
  const isTerminal = TERMINAL_LANGS.has(language ?? "");

  return (
    <CodeFigureContext.Provider value={language ?? null}>
      <CodeBlock
        filename={isTerminal ? undefined : resolvedFilename}
        terminal={isTerminal}
      >
        {preEl}
      </CodeBlock>
    </CodeFigureContext.Provider>
  );
}

// ─── Pre override ─────────────────────────────────────────────────────────────
// When called inside a Figure, just emit the native <pre> — CodeBlock is the wrapper.
// Standalone <pre> (literal MDX or non-figure code) gets wrapped in CodeBlock.
function Pre({ children, ...props }: any) {
  const insideFigure = useContext(CodeFigureContext);

  if (insideFigure !== null) {
    // Figure already wraps us in CodeBlock — render the raw pre with shiki styles
    return <pre {...props}>{children}</pre>;
  }

  const filename = props["data-filename"] as string | undefined;
  const language = props["data-language"] as string | undefined;
  const isTerminal = TERMINAL_LANGS.has(language ?? "");

  return (
    <CodeBlock filename={isTerminal ? undefined : filename} terminal={isTerminal}>
      {children}
    </CodeBlock>
  );
}

// ─── Callout ─────────────────────────────────────────────────────────────────
type CalloutType = "info" | "warning" | "tip" | "error";

const calloutConfig: Record<
  CalloutType,
  { icon: React.ReactNode; classes: string; labelClass: string; label: string }
> = {
  info: {
    icon: <Info size={15} />,
    classes: "border-sky-500/30 bg-sky-500/5",
    labelClass: "text-sky-500",
    label: "Note",
  },
  warning: {
    icon: <AlertTriangle size={15} />,
    classes: "border-amber-500/30 bg-amber-500/5",
    labelClass: "text-amber-500",
    label: "Warning",
  },
  tip: {
    icon: <Lightbulb size={15} />,
    classes: "border-accent-500/30 bg-accent-500/5",
    labelClass: "text-accent-500",
    label: "Tip",
  },
  error: {
    icon: <XCircle size={15} />,
    classes: "border-red-500/30 bg-red-500/5",
    labelClass: "text-red-500",
    label: "Error",
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}) {
  const cfg = calloutConfig[type];
  return (
    <div className={cn("my-6 rounded-xl border p-4 pl-5", cfg.classes)}>
      <div className={cn("flex items-center gap-2 font-semibold text-sm mb-2", cfg.labelClass)}>
        {cfg.icon}
        {title ?? cfg.label}
      </div>
      <div className="text-sm text-ink-muted leading-relaxed [&>p]:m-0">{children}</div>
    </div>
  );
}

// ─── YouTube embed ────────────────────────────────────────────────────────────
export function YouTube({ id }: { id: string }) {
  return (
    <div className="my-8 rounded-xl overflow-hidden border border-border aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        title="YouTube video"
      />
    </div>
  );
}

// ─── Blog Image ───────────────────────────────────────────────────────────────
export function BlogImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div className="relative rounded-xl overflow-hidden border border-border bg-surface-subtle">
        <Image src={src} alt={alt} width={800} height={450} className="w-full h-auto" />
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-ink-faint mt-3 font-mono italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── MDX component map ────────────────────────────────────────────────────────
export const mdxComponents = {
  figure: Figure,
  pre: Pre,

  // Block code (inside <pre>, shiki spans) vs inline code
  code: ({ children, className, ...rest }: any) => {
    if (rest["data-language"] !== undefined || className) {
      return (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    }
    return (
      <code className="bg-surface-subtle border border-border px-1.5 py-0.5 rounded text-sm font-mono text-accent-400">
        {children}
      </code>
    );
  },

  img: ({ src, alt }: { src?: string; alt?: string }) =>
    src ? <BlogImage src={src} alt={alt ?? ""} /> : null,

  // Named exports usable inside MDX files
  Callout,
  YouTube,
  CodeBlock,
  BlogImage,
};
