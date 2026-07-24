import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface PageMetaInput {
  /** Page title without the site-name suffix (the layout template adds it). */
  title: string;
  description: string;
  /** Absolute path beginning with "/", e.g. "/about". */
  path: string;
  /** Optional OG/Twitter image; defaults to the site OG image. */
  image?: string;
  type?: 'website' | 'article';
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;
  const fullTitle = `${title} — ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@yodkwtf',
    },
  };
}
