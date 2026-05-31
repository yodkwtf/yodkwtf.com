export const siteConfig = {
  name: "Alex Rivera",
  title: "Alex Rivera — Full-Stack Engineer",
  description:
    "Full-stack engineer crafting performant, accessible, and beautiful digital experiences. Specializing in React, Next.js, and modern web architecture.",
  url: "https://alexrivera.dev",
  ogImage: "/og.png",
  author: "Alex Rivera",
  email: "hello@alexrivera.dev",
  location: "San Francisco, CA",
  // Primary accent — change this ONE value to re-theme the entire site
  accent: "emerald", // options: emerald | violet | sky | rose | amber
  links: {
    github: "https://github.com/alexrivera",
    twitter: "https://twitter.com/alexrivera",
    linkedin: "https://linkedin.com/in/alexrivera",
    resume: "/resume.pdf",
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
