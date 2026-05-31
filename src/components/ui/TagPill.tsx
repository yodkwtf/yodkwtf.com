import { cn } from "@/lib/utils";

interface TagPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function TagPill({ label, active, onClick, className }: TagPillProps) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn("tag-pill cursor-pointer", active && "active", className)}
      >
        {label}
      </button>
    );
  }
  return (
    <span className={cn("tag-pill", active && "active", className)}>
      {label}
    </span>
  );
}
