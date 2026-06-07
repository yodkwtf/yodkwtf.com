interface DCLogoProps {
  size?: number;
  className?: string;
}

/**
 * Signature-style "DC" monogram. The D and C share visual space —
 * the C arc weaves through the D's curved right side, creating an
 * interlocked look. Uses currentColor so it inherits from the parent.
 */
export function DCLogo({ size = 20, className }: DCLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* D: vertical bar + right-facing curve */}
      <path
        d="M 2 2 L 2 18 L 7 18 C 15 18 15 2 7 2 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* C: open arc, leftmost point intersects D's curved right side */}
      <path
        d="M 18 6 C 15 2 10 3 10 10 C 10 17 15 18 18 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
