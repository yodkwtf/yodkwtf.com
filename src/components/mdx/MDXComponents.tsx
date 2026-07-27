import React from "react";
import Image from "next/image";
import { Info, AlertTriangle, Lightbulb, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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
    labelClass: "text-accent-fg",
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
    <div className={cn("my-6 rounded-xl border p-4 pl-5 not-prose", cfg.classes)}>
      <div className={cn("mb-2 flex items-center gap-2 text-sm font-semibold", cfg.labelClass)}>
        {cfg.icon}
        {title ?? cfg.label}
      </div>
      <div className="text-sm leading-relaxed text-ink-muted [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}

export function YouTube({ id }: { id: string }) {
  return (
    <div className="my-8 aspect-video overflow-hidden rounded-xl border border-border not-prose">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
        title="YouTube video"
      />
    </div>
  );
}

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
    <figure className="my-8 not-prose">
      <div className="relative overflow-hidden rounded-xl border border-border bg-surface-subtle">
        <Image src={src} alt={alt} width={800} height={450} className="h-auto w-full" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-mono text-xs italic text-ink-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ImageGrid({
  images,
  children,
}: {
  images?: { src: string; alt: string; caption?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2 not-prose">
      {images
        ? images.map((image) => (
            <figure key={image.src}>
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface-subtle">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={500}
                  className="h-auto w-full"
                />
              </div>
              {image.caption && (
                <figcaption className="mt-2 text-center font-mono text-xs italic text-ink-faint">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))
        : children}
    </div>
  );
}

export function Details({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className="my-6 rounded-xl border border-border bg-surface-card p-4 not-prose">
      <summary className="cursor-pointer font-medium text-ink">{summary}</summary>
      <div className="mt-3 text-sm leading-relaxed text-ink-muted [&>p]:m-0">
        {children}
      </div>
    </details>
  );
}

export const mdxComponents = {
  code: ({
    children,
    className,
    ...rest
  }: React.ComponentPropsWithoutRef<"code"> & Record<string, unknown>) => {
    if (rest["data-language"] !== undefined || className) {
      return (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    }

    return (
      <code className="rounded border border-border bg-surface-subtle px-1.5 py-0.5 font-mono text-sm text-accent-fg">
        {children}
      </code>
    );
  },

  img: ({ src, alt }: { src?: string; alt?: string }) =>
    src ? <BlogImage src={src} alt={alt ?? ""} /> : null,

  Callout,
  YouTube,
  BlogImage,
  ImageGrid,
  Details,
};
