"use client";

import { motion, useInView, type TargetAndTransition } from "framer-motion";
import { useRef, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * False on the server and during the first client render, true thereafter.
 * Before mount we render content in its *visible* state so the HTML that ships
 * is never blank — entrance animations are a progressive enhancement that kick
 * in once JS has hydrated. Uses `useSyncExternalStore` (instead of an effect +
 * setState) so React knows the server/client snapshots differ by design.
 */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const inView = useInView(ref, { once, margin: "-80px" });

  const offsets: Record<string, TargetAndTransition> = {
    up:    { opacity: 0, y: 24 },
    down:  { opacity: 0, y: -24 },
    left:  { opacity: 0, x: -24 },
    right: { opacity: 0, x: 24 },
    none:  { opacity: 0 },
  };
  const visible = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={!mounted || inView ? visible : offsets[direction]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
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
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={!mounted || inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function BounceBar({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    />
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
    <motion.div
      className={className}
      variants={{
        hidden: direction === "up" ? { opacity: 0, y: 20 } : direction === "left" ? { opacity: 0, x: -16 } : { opacity: 0 },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
