interface DCLogoProps {
  size?: number;
  className?: string;
}

/**
 * Angular "DC" monogram inspired by the site favicon.
 */
export function DCLogo({ size = 20, className }: DCLogoProps) {
  return (
    <svg
      width={Math.round(size * 1.65)}
      height={size}
      viewBox="0 0 100 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 10H63L54 19H30V45H54L63 54H15V10Z" fill="currentColor" />
      <path
        d="M88 10H68.5C59.5 10 53 14 47 22L31 43.5C27 49 31 54 39 54H59L68 45H46.5C43.5 45 42.5 43.5 44.5 41L58.5 22C60.5 19.5 63.5 19 67 19H79L88 10Z"
        fill="#34d399"
      />
    </svg>
  );
}
