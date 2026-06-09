/**
 * Fallback skills data used when Sanity is unreachable or skills are hardcoded.
 */

export const FALLBACK_SKILLS: Record<string, string[]> = {
  Frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Gatsby',
  ],
  Backend: [
    'Node.js',
    'Express',
    'GraphQL',
    'REST APIs',
    'Python',
    'OpenAI APIs',
    'Workday Extend',
  ],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Cosmos DB', 'WQL', 'Prisma'],
  'Cloud & DevOps': ['Docker', 'GCP', 'Google Cloud Storage', 'CI/CD', 'Linux'],
  'Tools & Libraries': [
    'Git',
    'GitHub',
    'Figma',
    'Headless CMS',
    'Redux',
    'CSS Frameworks',
  ],
};

export const SKILL_CATEGORY_COLORS: Record<string, string> = {
  Frontend: 'text-accent-400',
  Backend: 'text-violet-400',
  Database: 'text-amber-400',
  'Cloud & DevOps': 'text-sky-400',
  'Tools & Libraries': 'text-rose-400',
};
