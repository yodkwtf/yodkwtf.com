import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
        mono: ["DM Mono", "Fira Code", "monospace"],
      },
      colors: {
        accent: {
          50:  "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
        },
        surface: {
          DEFAULT: "var(--bg)",
          subtle:  "var(--bg-subtle)",
          card:    "var(--bg-card)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle:  "var(--border-subtle)",
        },
        ink: {
          DEFAULT: "var(--text)",
          muted:   "var(--text-muted)",
          faint:   "var(--text-faint)",
        },
      },
      borderRadius: {
        sm:  "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        lg:  "var(--radius-lg)",
        xl:  "var(--radius-xl)",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":   "fadeIn 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "slide-in":  "slideIn 0.5s cubic-bezier(0.16,1,0.3,1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-16px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "68ch",
            fontSize: "1.0625rem",
            lineHeight: "1.75",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
