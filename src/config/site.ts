export const siteConfig = {
  name: 'Durgesh',
  title: 'Durgesh Chaudhary - SDE 2 @ Konrad Group | Full Stack Developer',
  username: 'yodkwtf',
  description:
    'Full-Stack Software Engineer passionate about turning ideas into products through code and creativity. Building scalable, high-performance applications with React.js, Next.js, Node.js, TypeScript, and modern cloud technologies.',
  url: 'https://yodkwtf.com',
  ogImage: '/og.png',
  author: 'Durgesh Chaudhary',
  email: '48durgesh.chaudhary@gmail.com',
  location: 'Gurgaon, India',
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
