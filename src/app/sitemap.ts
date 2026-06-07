import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllBlogsMeta } from "@/lib/blogs";
import { logger } from "@/lib/logger";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,              lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${baseUrl}/about`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`,lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/blog`,    lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
  ];

  // Blog posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = getAllBlogsMeta();
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (err) {
    logger.warn('sitemap', 'Failed to generate blog pages for sitemap', err);
  }

  // Projects (from Sanity — best effort)
  let projectPages: MetadataRoute.Sitemap = [];
  try {
    const { getAllProjects } = await import("@/sanity/lib/queries");
    const projects = await getAllProjects();
    projectPages = projects.map((p) => ({
      url: `${baseUrl}/projects/${p.slug.current}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (err) {
    logger.warn('sitemap', 'Failed to generate project pages for sitemap', err);
  }

  return [...staticPages, ...blogPages, ...projectPages];
}
