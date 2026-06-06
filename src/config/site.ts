export const siteConfig = {
  name: 'Durgesh',
  title: 'Durgesh Chaudhary — Full-Stack Engineer',
  username: 'yodkwtf',
  description:
    'Full-stack engineer crafting performant, accessible, and beautiful digital experiences. Specializing in React, Next.js, and modern web architecture.',
  url: 'https://yodkwtf.com',
  ogImage: '/og.png',
  author: 'Durgesh Chaudhary',
  email: '48durgesh.chaudhary@gmail.com',
  location: 'Gurgaon, India',
  // Primary accent — change this ONE value to re-theme the entire site
  accent: 'emerald', // options: emerald | violet | sky | rose | amber
  links: {
    github: 'https://github.com/yodkwtf',
    twitter: 'https://twitter.com/yodkwtf',
    linkedin: 'https://linkedin.com/in/durgesh-chaudhary',
    resume: '/resume.pdf',
    repo: 'https://github.com/yodkwtf/yodkwtf.com',
  },
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
