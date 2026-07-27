import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// CSS-only by design. Never animate these from JS with an `opacity: 0` initial
// state: it serializes into the SSR HTML and the page ships invisible.

type Direction = "up" | "down" | "left" | "right" | "none";

const DIRECTION_CLASS: Record<Direction, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  none: "reveal-fade",
};

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  /** No animation. Required above the fold: an element starting at opacity 0
   *  is ineligible for LCP. */
  eager?: boolean;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  eager = false,
}: AnimateInProps) {
  if (eager) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  return (
    <div
      className={cn("reveal", DIRECTION_CLASS[direction], className)}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-duration": `${duration}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <div
      className={cn("stagger", className)}
      style={{ "--stagger-step": `${stagger}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "none";
}) {
  return (
    <div
      className={cn(
        "stagger-item",
        direction === "left"
          ? "reveal-left"
          : direction === "none"
            ? "reveal-fade"
            : "reveal-up",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BounceBar({ className }: { className?: string }) {
  return <div className={cn("bounce-bar", className)} />;
}
