// ─── Sanity Image ────────────────────────────────────────────────────────────
export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
  caption?: string;
}

// ─── Project ─────────────────────────────────────────────────────────────────
export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  description: any[]; // Portable Text
  tags: string[];
  techStack: string[];
  featured: boolean;
  clientWork: boolean;
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: SanityImage;
  gallery?: SanityImage[];
  metrics?: { label: string; value: string }[];
  timeline?: string;
  challenges?: any[];
  solutions?: any[];
  architectureDetails?: any[];
  publishedAt: string;
}

// ─── Skill ───────────────────────────────────────────────────────────────────
export interface Skill {
  _id: string;
  name: string;
  category: string;
  icon?: string;
  proficiency: number; // 1-5
  order: number;
}

// ─── Experience ──────────────────────────────────────────────────────────────
export interface Experience {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: any[];
  techStack: string[];
  companyUrl?: string;
  logo?: SanityImage;
  order: number;
}

// ─── Social Link ─────────────────────────────────────────────────────────────
export interface SocialLink {
  _id: string;
  platform: string;
  url: string;
  icon: string;
  order: number;
}

// ─── About Page ──────────────────────────────────────────────────────────────
export interface AboutPage {
  _id: string;
  headline: string;
  subheadline: string;
  bio: any[];
  journey: any[];
  philosophy: any[];
  avatar: SanityImage;
  resumeUrl?: string;
}

// ─── Blog (MDX) ──────────────────────────────────────────────────────────────
export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  coverImage?: string;
  featured?: boolean;
  youtubeId?: string;
  author?: string;
  draft?: boolean;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  readingTime: string;
  content: string;
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
  readingTime: string;
}
