/**
 * Fallback project data used when Sanity is unreachable or not yet configured.
 */

import type { Project } from '@/types';

export const FALLBACK_PROJECTS: Project[] = [
  {
    _id: 'cinematica',
    title: 'Cinematica',
    slug: { current: 'cinematica' },
    summary:
      'A full-stack movie and TV tracking platform built with the MERN stack, featuring authentication, watchlists, reviews, and personalized content management.',
    techStack: ['React.js', 'Node.js', 'MongoDB'],
    featured: true,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/cinematica-mern',
    liveUrl: 'https://cinematica-mern.vercel.app/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800483/yodkwtf.com/projects/cinematica_o1lctj.png',
  },

  {
    _id: 'nexus-chat',
    title: 'Nexus - Chat Application',
    slug: { current: 'nexus' },
    summary:
      'A modern real-time chat application featuring direct messaging, group conversations, social authentication, online presence indicators, and profile customization.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    featured: true,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/nexus-chat-application',
    liveUrl: 'https://nexus-dk.vercel.app/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800522/yodkwtf.com/projects/Screenshot_2023-09-23_223421-min_zkvto4.png',
  },

  {
    _id: 'devbysid',
    title: 'DevBySid',
    slug: { current: 'devbysid' },
    summary:
      'A freelance portfolio website for a game developer built with Gatsby, Contentful CMS, GraphQL, and Framer Motion, featuring custom content modeling and advanced SEO.',
    techStack: [
      'Gatsby',
      'GraphQL',
      'Contentful',
      'Framer Motion',
      'Styled Components',
    ],
    featured: true,
    clientWork: true,
    githubUrl: '',
    liveUrl: 'https://devbysid.com/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800496/yodkwtf.com/projects/Screenshot_584_-min_x3qimm.jpg',
  },

  {
    _id: 'edvault',
    title: 'EdVault',
    slug: { current: 'edvault' },
    summary:
      'An online marketplace platform built with Next.js, allowing users to browse, manage, and access educational resources through a modern web experience.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/ed-vault-nextjs',
    liveUrl: 'https://ed-vault.up.railway.app/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1754175463/yodkwtf.com/projects/thumbnail-min_hazyzb.jpg',
  },

  {
    _id: 'codepencil',
    title: 'CodePencil',
    slug: { current: 'codepencil' },
    summary:
      'An online code editor inspired by CodePen that enables users to write, preview, and experiment with HTML, CSS, and JavaScript directly in the browser.',
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    featured: false,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/codepencil-with-react',
    liveUrl: 'https://www.codepencil.me/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800527/yodkwtf.com/projects/Screenshot_620_-min_hxpdxq.png',
  },

  {
    _id: 'astro-tech-blog',
    title: 'The Astro Tech Blog',
    slug: { current: 'the-astro-tech-blog' },
    summary:
      'A markdown-powered technical blog built with Astro for sharing development notes, tutorials, cheatsheets, and learnings from different technologies.',
    techStack: ['Astro', 'TypeScript', 'Markdown', 'CSS'],
    featured: false,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/the-astro-tech-blog',
    liveUrl: 'https://thetechblog-dk.netlify.app/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1754175462/yodkwtf.com/projects/og-image-min_kmmsni.png',
  },
];

// Slug-keyed lookup derived from the single source of truth above.
export const FALLBACK_PROJECT_MAP: Record<string, Project> = Object.fromEntries(
  FALLBACK_PROJECTS.map((project) => [project.slug.current, project]),
);
