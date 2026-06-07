/**
 * Fallback experience and education data used when Sanity is unreachable.
 */

export const FALLBACK_EXPERIENCE = [
  {
    company: 'Acme Corp',
    role: 'Senior Full-Stack Engineer',
    startDate: '2022-01-01',
    endDate: undefined,
    current: true,
    description: [
      'Lead engineer on the core product team',
      'Architected and shipped a real-time collaboration feature used by 100k+ users',
      'Reduced bundle size by 40% through code splitting and lazy loading',
      'Mentored 3 junior engineers',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'AWS',
    ],
    companyUrl: 'https://example.com',
    order: 1,
  },
  {
    company: 'Bright Labs',
    role: 'Full-Stack Developer',
    startDate: '2020-01-01',
    endDate: '2022-01-01',
    current: false,
    description: [
      'Built and maintained multiple client-facing SaaS products',
      'Owned the full frontend architecture migration from CRA to Next.js',
      'Integrated Stripe payments processing $2M+ annually',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
    companyUrl: 'https://example.com',
    order: 2,
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    startDate: '2019-01-01',
    endDate: '2020-01-01',
    current: false,
    description: [
      'Worked with 10+ clients across e-commerce, healthcare, and fintech',
      'Delivered full-stack web applications on time and within budget',
    ],
    techStack: ['React', 'Express', 'MySQL', 'Tailwind CSS'],
    companyUrl: undefined,
    order: 3,
  },
];

export const FALLBACK_EDUCATION = [
  {
    institution: 'University of California, Berkeley',
    degree: 'B.S. Computer Science',
    period: '2015 — 2019',
    note: "Dean's List · GPA 3.8",
  },
];
