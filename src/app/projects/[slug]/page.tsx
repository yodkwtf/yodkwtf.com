import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Lock } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import { GithubIcon } from '@/components/ui/SocialIcons';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { mdxComponents } from '@/components/mdx/MDXComponents';
import { BlogCodeEnhancer } from '@/components/mdx/BlogCodeEnhancer';
import { siteConfig } from '@/config/site';
import { urlFor } from '@/sanity/lib/client';
import { FALLBACK_PROJECT_MAP } from '@/data/fallback-projects';
import { parseGitHubRepo, fetchReadme } from '@/lib/github';
import { rehypeGithubUrls } from '@/lib/rehype-github-urls';
import { rehypeFlattenCodeFigure } from '@/lib/rehype-flatten-code-figure';
import { logger } from '@/lib/logger';

export const revalidate = 300;

interface Params {
  params: Promise<{ slug: string }>;
}

const MDX_NODE_TYPES = [
  'mdxFlowExpression',
  'mdxJsxFlowElement',
  'mdxJsxTextElement',
  'mdxTextExpression',
  'mdxjsEsm',
];

const readmeComponents = {
  ...mdxComponents,
  img: ({ src, alt }: { src?: string; alt?: string }) =>
    src ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt ?? ''} loading="lazy" className="max-w-full" />
    ) : null,
  a: ({ href, children, ...rest }: React.ComponentPropsWithoutRef<'a'>) => {
    const external = href ? /^https?:/i.test(href) : false;
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  },
};

function Readme({
  source,
  owner,
  repo,
}: {
  source: string;
  owner: string;
  repo: string;
}) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            format: 'md',
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [rehypeRaw, { passThrough: MDX_NODE_TYPES }],
              [rehypeGithubUrls, { owner, repo }],
              rehypeSlug,
              [
                rehypePrettyCode,
                { theme: 'github-dark-default', keepBackground: true },
              ],
              rehypeFlattenCodeFigure,
            ],
          },
        }}
        components={readmeComponents}
      />
      <BlogCodeEnhancer />
    </div>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  let project = null;
  try {
    const { getProjectBySlug } = await import('@/sanity/lib/queries');
    project = await getProjectBySlug(slug);
  } catch (err) {
    logger.warn(
      'ProjectDetailPage.generateMetadata',
      `Failed to fetch project "${slug}" from Sanity`,
      err,
    );
  }

  if (!project) project = FALLBACK_PROJECT_MAP[slug];
  if (!project) return { title: 'Project Not Found' };

  const thumb = project.thumbnail;
  const image =
    typeof thumb === 'string'
      ? thumb
      : thumb
        ? urlFor(thumb).width(1200).height(630).url()
        : siteConfig.ogImage;
  const url = `${siteConfig.url}/projects/${slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      url,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;

  let project = null;
  try {
    const { getProjectBySlug } = await import('@/sanity/lib/queries');
    project = await getProjectBySlug(slug);
  } catch (err) {
    logger.warn(
      'ProjectDetailPage',
      `Failed to fetch project "${slug}" from Sanity, using fallback`,
      err,
    );
  }

  if (!project) project = FALLBACK_PROJECT_MAP[slug] ?? null;

  if (!project) notFound();

  const repo = parseGitHubRepo(project.githubUrl);
  const readme = repo ? await fetchReadme(repo) : null;

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="shrink-0 transition-transform group-hover:-translate-x-1"
            />
            <span className="hidden sm:inline">Back to projects</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline gap-2 text-xs py-2 px-3"
                aria-label="View source on GitHub"
              >
                <GithubIcon size={14} />
                <span className="hidden sm:inline">View source</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2 text-xs py-2 px-3"
                aria-label="Open live site"
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">Live site</span>
              </a>
            )}
          </div>
        </div>

        {/* README (carries its own title); title/summary only as fallback */}
        {readme && repo ? (
          <AnimateIn className="mb-16">
            <Readme source={readme} owner={repo.owner} repo={repo.repo} />
          </AnimateIn>
        ) : (
          <>
            <AnimateIn className="mb-12">
              <h1 className="font-display text-4xl md:text-5xl text-ink mb-4 leading-tight">
                {project.title}
              </h1>
              {project.summary && (
                <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
                  {project.summary}
                </p>
              )}
            </AnimateIn>
            {project.clientWork ? (
              <AnimateIn delay={0.1} className="mb-16">
                <div className="glass rounded-xl p-6 border border-border text-sm text-ink-muted flex items-start gap-3">
                  <Lock size={16} className="shrink-0 mt-0.5 text-ink-faint" />
                  <p className="leading-relaxed">
                    This project was built as client work, so the source
                    repository is private and there&apos;s no public README to
                    show.
                    {project.liveUrl && (
                      <>
                        {' '}
                        You can still explore the{' '}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-fg hover:underline"
                        >
                          live site
                        </a>
                        .
                      </>
                    )}
                  </p>
                </div>
              </AnimateIn>
            ) : (
              repo && (
                <AnimateIn delay={0.1} className="mb-16">
                  <div className="glass rounded-xl p-6 border border-border text-sm text-ink-muted">
                    Couldn&apos;t load the README for this project.{' '}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-fg hover:underline"
                    >
                      View it on GitHub
                    </a>
                    .
                  </div>
                </AnimateIn>
              )
            )}
          </>
        )}

        {/* CTA */}
        <AnimateIn delay={0.15}>
          <div className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-ink mb-1">
                Interested in working together?
              </p>
              <p className="text-sm text-ink-muted">
                I&apos;m always open to new projects and collaborations.
              </p>
            </div>
            <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">
              Get in touch
            </a>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
