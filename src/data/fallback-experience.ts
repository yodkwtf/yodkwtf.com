/**
 * Fallback experience and education data used when Sanity is unreachable.
 */

export const FALLBACK_EXPERIENCE = [
  {
    company: 'Konrad Group',
    role: 'Software Developer 2',
    startDate: '2025-07',
    endDate: undefined,
    current: true,
    description: [
      'Built AI-powered document processing workflows using OpenAI APIs, extracting structured data from PDFs through prompt engineering.',
      'Designed prompt strategies achieving 90%+ extraction consistency while integrating results with Cosmos DB for scalable storage.',
      'Developed subscription-based features across frontend and backend, enabling dynamic product capabilities based on plan tiers.',
      'Built a custom PDF preview and download experience using React PDF, eliminating reliance on native browser viewers.',
      'Improved application performance through intelligent client-side caching, reducing redundant API calls by over 50%.',
      'Implemented secure OAuth 2.0 + PKCE authentication in a Next.js SSR application alongside existing enterprise authentication systems.',
    ],
    techStack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'OpenAI',
      'OAuth 2.0',
      'Tailwind CSS',
    ],
    companyUrl: 'https://www.konrad.com',
    order: 1,
  },
  {
    company: 'Makse Group',
    role: 'Full Stack Developer',
    startDate: '2024-11',
    endDate: '2025-07',
    current: false,
    description: [
      'Received an Award for delivering a near-flawless app build, recognized and appreciated by Workday during the official Build Review.',
      'Built and deployed 3 HCM applications using Workday Extend, integrating Workday REST APIs, SOAP APIs, WQL, and third-party services.',
      'Designed synchronous, asynchronous, and business-process-triggered orchestrations to automate complex business workflows.',
      'Reduced manual effort by 99% through IBAN validation automation and task generation workflows.',
      'Built a real-time Twilio Segment connector using BP-triggered orchestration, reducing data sync latency to near-zero.',
      'Developed scalable PMDs and model-driven solutions with a strong focus on maintainability and flexibility.',
    ],
    techStack: [
      'Workday Extend',
      'REST APIs',
      'SOAP APIs',
      'WQL',
      'PMD',
      'JavaScript',
    ],
    companyUrl: 'https://www.maksegroup.com',
    order: 2,
  },
  {
    company: 'Hughes Systique Corporation',
    role: 'Associate Software Engineer',
    startDate: '2023-01',
    endDate: '2024-11',
    current: false,
    description: [
      'Top-rated team member with multiple awards for excellence during tenure.',
      'Built 30+ Node.js APIs powering software management, upgrades, and cloud-integrated workflows, including asynchronous file upload and download pipelines using Google Cloud Storage (GCS).',
      'Optimized PostgreSQL queries, improving database performance by up to 70% and significantly reducing execution times.',
      'Developed monitoring services for applications and Docker containers, providing visibility into resource utilization and system health.',
      'Converted Node.js applications into production-ready Linux services, achieving 99.9% uptime for critical systems.',
      'Refactored React applications and reduced cognitive complexity by 95%, improving maintainability and developer productivity.',
    ],
    techStack: [
      'Node.js',
      'React.js',
      'PostgreSQL',
      'Docker',
      'GCP',
      'Linux',
      'JavaScript',
    ],
    companyUrl: 'https://www.hsc.com',
    order: 3,
  },
];

export const FALLBACK_EDUCATION = [
  {
    institution: 'The NorthCap University',
    degree: 'B.Tech in Computer Science',
    period: '2019 — 2023',
    note: 'CGPA: 8.46 · Hands-on experience from internships, freelance work, and  100+ personal projects.',
  },
  {
    institution: 'Delhi Public School Ghaziabad Society (DPSG)',
    degree: 'Higher Secondary Education (PCM)',
    period: '2013 — 2019',
    note: 'Grade: 9.4 · Mathematics Topper for two consecutive years (11th & 12th)',
  },
];
