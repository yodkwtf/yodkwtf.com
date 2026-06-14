import type { CSSProperties, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  once?: boolean;
}

export function AnimateIn({
  children,
  className,
  delay,
  duration,
  direction = 'up',
}: AnimateInProps) {
  const style: CSSProperties = {};
  if (delay) style.transitionDelay = `${delay}s`;
  if (duration) style.transitionDuration = `${duration}s`;

  return (
    <div
      data-animate={direction}
      className={className}
      style={Object.keys(style).length ? style : undefined}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <div data-stagger className={className} suppressHydrationWarning>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'none';
}) {
  return <div className={className}>{children}</div>;
}

export function BounceBar({ className }: { className?: string }) {
  return <div data-bounce className={className} />;
}
