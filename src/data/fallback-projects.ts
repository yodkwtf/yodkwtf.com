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
    description: [],
    techStack: ['React.js', 'Node.js', 'MongoDB'],
    featured: true,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/cinematica-mern',
    liveUrl: 'https://cinematica-mern.vercel.app/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800483/yodkwtf.com/projects/cinematica_o1lctj.png',
    gallery: [],
    timeline: '',
    challenges: [],
    solutions: [],
    architectureDetails: [],
    publishedAt: '2023',
  },

  {
    _id: 'nexus-chat',
    title: 'Nexus - Chat Application',
    slug: { current: 'nexus' },
    summary:
      'A modern real-time chat application featuring direct messaging, group conversations, social authentication, online presence indicators, and profile customization.',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    featured: true,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/nexus-chat-application',
    liveUrl: 'https://nexus-dk.vercel.app/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800522/yodkwtf.com/projects/Screenshot_2023-09-23_223421-min_zkvto4.png',
    gallery: [],
    timeline: '',
    challenges: [],
    solutions: [],
    architectureDetails: [],
    publishedAt: '2023',
  },

  {
    _id: 'devbysid',
    title: 'DevBySid',
    slug: { current: 'devbysid' },
    summary:
      'A freelance portfolio website for a game developer built with Gatsby, Contentful CMS, GraphQL, and Framer Motion, featuring custom content modeling and advanced SEO.',
    description: [],
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
    gallery: [],
    timeline: '',
    challenges: [],
    solutions: [],
    architectureDetails: [],
    publishedAt: '2022',
  },

  {
    _id: 'edvault',
    title: 'EdVault',
    slug: { current: 'edvault' },
    summary:
      'An online marketplace platform built with Next.js, allowing users to browse, manage, and access educational resources through a modern web experience.',
    description: [],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: false,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/ed-vault-nextjs',
    liveUrl: 'https://ed-vault.up.railway.app/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1754175463/yodkwtf.com/projects/thumbnail-min_hazyzb.jpg',
    gallery: [],
    timeline: '',
    challenges: [],
    solutions: [],
    architectureDetails: [],
    publishedAt: '2024',
  },

  {
    _id: 'codepencil',
    title: 'CodePencil',
    slug: { current: 'codepencil' },
    summary:
      'An online code editor inspired by CodePen that enables users to write, preview, and experiment with HTML, CSS, and JavaScript directly in the browser.',
    description: [],
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    featured: false,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/codepencil-with-react',
    liveUrl: 'https://www.codepencil.me/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1711800527/yodkwtf.com/projects/Screenshot_620_-min_hxpdxq.png',
    gallery: [],
    timeline: '',
    challenges: [],
    solutions: [],
    architectureDetails: [],
    publishedAt: '2023',
  },

  {
    _id: 'astro-tech-blog',
    title: 'The Astro Tech Blog',
    slug: { current: 'the-astro-tech-blog' },
    summary:
      'A markdown-powered technical blog built with Astro for sharing development notes, tutorials, cheatsheets, and learnings from different technologies.',
    description: [],
    techStack: ['Astro', 'TypeScript', 'Markdown', 'CSS'],
    featured: false,
    clientWork: false,
    githubUrl: 'https://github.com/yodkwtf/the-astro-tech-blog',
    liveUrl: 'https://thetechblog-dk.netlify.app/',
    thumbnail:
      'https://res.cloudinary.com/dds18bzdy/image/upload/v1754175462/yodkwtf.com/projects/og-image-min_kmmsni.png',
    gallery: [],
    timeline: '',
    challenges: [],
    solutions: [],
    architectureDetails: [],
    publishedAt: '2024',
  },
];

// Slug-keyed map with extended detail fields for the project detail page
function ptBlock(key: string, text: string) {
  return {
    _key: key,
    _type: 'block',
    style: 'normal',
    children: [{ _key: `${key}s`, _type: 'span', text }],
  };
}

export const FALLBACK_PROJECT_MAP: Record<string, Project> = {
  cinematica: {
    ...FALLBACK_PROJECTS.find((p) => p.slug.current === 'cinematica')!,

    description: [
      ptBlock(
        'c1',
        "Cinematica is a full-stack movie and TV tracking application built with the MERN stack. It allows users to maintain personalized watchlists, track what they've watched, rediscover their favorite content, and manage their entertainment preferences through a clean and intuitive interface.",
      ),
      ptBlock(
        'c2',
        'The application features authentication, protected routes, CRUD operations, API documentation through Swagger, and a scalable backend architecture built with Express and MongoDB. It was one of the first large-scale projects where I brought together frontend, backend, database design, and deployment into a single product.',
      ),
      ptBlock(
        'c3',
        'Building Cinematica taught me a lot about structuring full-stack applications, designing APIs, managing application state, and creating products that solve real user problems rather than just serving as coding exercises.',
      ),
    ],

    timeline: '5 weeks',

    metrics: [
      { label: 'Architecture', value: 'MERN' },
      { label: 'Authentication', value: 'JWT' },
      { label: 'API Docs', value: 'Swagger' },
    ],

    challengeText:
      'Creating a scalable full-stack architecture while keeping the user experience simple and responsive across different workflows.',

    solutionText:
      'Designed a modular Express backend, implemented JWT-based authentication, and structured the frontend around reusable React components and predictable state management.',
  },

  nexus: {
    ...FALLBACK_PROJECTS.find((p) => p.slug.current === 'nexus')!,

    description: [
      ptBlock(
        'n1',
        'Nexus is a modern real-time chat application built with Next.js, TypeScript, Prisma, MongoDB, and NextAuth. The goal was to explore modern full-stack development patterns while creating a polished messaging experience.',
      ),
      ptBlock(
        'n2',
        'The platform supports direct messaging, group conversations, profile customization, online presence indicators, and multiple authentication providers including Google and GitHub.',
      ),
      ptBlock(
        'n3',
        'This project helped me gain deeper experience with the Next.js ecosystem, authentication flows, database modeling with Prisma, and building production-ready user experiences.',
      ),
    ],

    timeline: '4 weeks',

    metrics: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Authentication', value: 'NextAuth' },
    ],

    challengeText:
      'Managing complex authentication flows and real-time user interactions while maintaining a clean and intuitive UI.',

    solutionText:
      'Leveraged NextAuth for authentication, Prisma for data modeling, and modern React patterns to keep state and user interactions predictable.',
  },

  devbysid: {
    ...FALLBACK_PROJECTS.find((p) => p.slug.current === 'devbysid')!,

    description: [
      ptBlock(
        'd1',
        'A freelance portfolio website built for a game developer. The project focused heavily on performance, content management, SEO, and creating a polished visual experience.',
      ),
      ptBlock(
        'd2',
        'Built using Gatsby, Contentful CMS, GraphQL, and Framer Motion, the website allows content to be managed without touching code while maintaining excellent performance and accessibility.',
      ),
      ptBlock(
        'd3',
        'This project gave me valuable experience working directly with a client, translating requirements into technical solutions, and balancing design expectations with engineering constraints.',
      ),
    ],

    timeline: 'Client Project',

    metrics: [
      { label: 'Project Type', value: 'Freelance' },
      { label: 'CMS', value: 'Contentful' },
      { label: 'Animations', value: 'Framer Motion' },
    ],

    challengeText:
      'Creating a highly customized portfolio experience while ensuring content remained easy for the client to manage independently.',

    solutionText:
      'Used Contentful for content management, GraphQL for data retrieval, and Framer Motion for performant animations without sacrificing SEO.',
  },

  edvault: {
    ...FALLBACK_PROJECTS.find((p) => p.slug.current === 'edvault')!,

    description: [
      ptBlock(
        'e1',
        'EdVault is an online marketplace platform built with Next.js. The project was designed to explore marketplace workflows, modern React patterns, and full-stack application architecture.',
      ),
      ptBlock(
        'e2',
        'The platform provides an organized experience for browsing, discovering, and managing educational resources through a responsive and user-friendly interface.',
      ),
      ptBlock(
        'e3',
        'Building EdVault helped strengthen my understanding of larger application structures, route management, reusable component systems, and deployment workflows.',
      ),
    ],

    timeline: '7 weeks',

    metrics: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Category', value: 'Marketplace' },
    ],

    challengeText:
      'Designing a marketplace experience that remained simple and easy to navigate while supporting future scalability.',

    solutionText:
      'Focused on component reusability, clean route structures, and a scalable application architecture from the beginning.',
  },

  codepencil: {
    ...FALLBACK_PROJECTS.find((p) => p.slug.current === 'codepencil')!,

    description: [
      ptBlock(
        'cp1',
        'CodePencil is an online code editor inspired by platforms like CodePen. It allows developers to experiment with HTML, CSS, and JavaScript directly in the browser.',
      ),
      ptBlock(
        'cp2',
        'The application provides a live preview environment, enabling instant feedback while writing code and making frontend experimentation significantly faster.',
      ),
      ptBlock(
        'cp3',
        'This project was a fun challenge in state management, editor synchronization, and building interactive developer tooling.',
      ),
    ],

    timeline: '2 Days',

    metrics: [
      { label: 'Category', value: 'Developer Tool' },
      { label: 'Preview', value: 'Live' },
    ],

    challengeText:
      'Keeping editor inputs and rendered output synchronized while maintaining a smooth user experience.',

    solutionText:
      'Implemented efficient state updates and isolated rendering logic to ensure responsive live previews.',
  },

  'the-astro-tech-blog': {
    ...FALLBACK_PROJECTS.find((p) => p.slug.current === 'the-astro-tech-blog')!,

    description: [
      ptBlock(
        'a1',
        'The Astro Tech Blog is a content-focused platform built with Astro and Markdown. It serves as a place to share notes, tutorials, cheatsheets, and lessons learned while exploring different technologies.',
      ),
      ptBlock(
        'a2',
        "The blog uses a content collection approach, allowing articles to be written entirely in Markdown while benefiting from Astro's performance-focused architecture.",
      ),
      ptBlock(
        'a3',
        'This project introduced me to Astro and reinforced my appreciation for content-first workflows, static generation, and developer experience.',
      ),
    ],

    timeline: '5 Days',

    metrics: [
      { label: 'Framework', value: 'Astro' },
      { label: 'Content', value: 'Markdown' },
      { label: 'Type', value: 'Technical Blog' },
    ],

    challengeText:
      'Creating a maintainable blogging workflow that made publishing content simple without sacrificing performance.',

    solutionText:
      'Used Astro content collections and Markdown-driven content management to create a fast and scalable publishing experience.',
  },
};
