import { sanityFetch } from "./client";
import type { Project, Skill, Experience, AboutPage, SocialLink } from "@/types";

// ─── Projects ────────────────────────────────────────────────────────────────
const projectFields = `
  _id, title, slug, summary, description, tags, techStack,
  featured, clientWork, githubUrl, liveUrl,
  thumbnail { asset, alt, caption },
  gallery[] { asset, alt, caption },
  metrics, timeline, challenges, solutions, architectureDetails,
  publishedAt
`;

export async function getAllProjects(): Promise<Project[]> {
  return sanityFetch(
    `*[_type == "project"] | order(publishedAt desc) { ${projectFields} }`,
  );
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return sanityFetch(
    `*[_type == "project" && featured == true] | order(publishedAt desc)[0...3] { ${projectFields} }`,
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return sanityFetch(
    `*[_type == "project" && slug.current == $slug][0] { ${projectFields} }`,
    { slug },
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export async function getSkills(): Promise<Skill[]> {
  return sanityFetch(
    `*[_type == "skill"] | order(order asc) { _id, name, category, icon, proficiency, order }`,
  );
}

// ─── Experience ──────────────────────────────────────────────────────────────
export async function getExperience(): Promise<Experience[]> {
  return sanityFetch(
    `*[_type == "experience"] | order(order asc) {
      _id, company, role, startDate, endDate, current,
      description, techStack, companyUrl,
      logo { asset, alt },
      order
    }`,
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
export async function getAboutPage(): Promise<AboutPage | null> {
  return sanityFetch(
    `*[_type == "about"][0] {
      _id, headline, subheadline, bio, journey, philosophy,
      avatar { asset, alt },
      resumeUrl
    }`,
  );
}

// ─── Social Links ─────────────────────────────────────────────────────────────
export async function getSocialLinks(): Promise<SocialLink[]> {
  return sanityFetch(
    `*[_type == "socialLink"] | order(order asc) { _id, platform, url, icon, order }`,
  );
}
