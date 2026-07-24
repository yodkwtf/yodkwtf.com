import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  heading,
  subheading,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3 mb-12", align === "center" && "text-center mx-auto max-w-2xl", className)}>
      {label && (
        <AnimateIn delay={0}>
          <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
            {label}
          </span>
        </AnimateIn>
      )}
      <AnimateIn delay={0.05}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
          {heading}
        </h2>
      </AnimateIn>
      {subheading && (
        <AnimateIn delay={0.1}>
          <p className="text-ink-muted text-base md:text-lg max-w-2xl leading-relaxed">
            {subheading}
          </p>
        </AnimateIn>
      )}
    </div>
  );
}
