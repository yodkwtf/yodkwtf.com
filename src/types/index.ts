import type { PortableTextBlock } from '@portabletext/react';

// ─── Sanity Image ────────────────────────────────────────────────────────────
export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
  caption?: string;
}

// ─── Project ─────────────────────────────────────────────────────────────────
export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  summary: string;
  description: PortableTextBlock[]; // Portable Text
  techStack: string[];
  featured: boolean;
  clientWork: boolean;
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: SanityImage | string | null;
  gallery?: SanityImage[];
  metrics?: { label: string; value: string }[];
  timeline?: string;
  challenges?: PortableTextBlock[];
  solutions?: PortableTextBlock[];
  challengeText?: string;
  solutionText?: string;
  architectureDetails?: PortableTextBlock[];
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
  description: PortableTextBlock[];
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
  bio: PortableTextBlock[];
  shortBio?: PortableTextBlock[];
  journey: PortableTextBlock[];
  philosophy: PortableTextBlock[];
  avatar?: SanityImage & {
    /** Projected from asset->metadata.dimensions */
    dimensions?: { width: number; height: number };
  };
  resumeUrl?: string;
  education?: {
    institution: string;
    degree: string;
    period: string;
    note?: string;
  }[];
  stats?: { num: string; label: string; sub: string }[];
}

// ─── Blog (MDX) ──────────────────────────────────────────────────────────────
export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category?: string;
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
