import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeExtractFilename } from "@/lib/rehype-extract-filename";
import { getBlogBySlug, getAllBlogsMeta } from "@/lib/blogs";
import { formatDate } from "@/lib/utils";
import { TagPill } from "@/components/ui/TagPill";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { BlogCard } from "@/components/ui/BlogCard";
import { siteConfig } from "@/config/site";

interface Params { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = getAllBlogsMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title, description: post.description,
      type: "article", publishedTime: post.publishedAt, modifiedTime: post.updatedAt,
      authors: [siteConfig.author],
      images: post.coverImage ? [post.coverImage] : [siteConfig.ogImage],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogsMeta();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.tags?.some((t) => post.tags?.includes(t)))
    .slice(0, 2);

  const postUrl = `${siteConfig.url}/blog/${slug}`;

  return (
    <div className="pt-28 pb-24">
      <div className="px-6 mb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group">
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
            Back to blog
          </Link>
        </div>
      </div>

      <article>
        <AnimateIn className="px-6 mb-10">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags?.map((tag) => <TagPill key={tag} label={tag} />)}
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-ink mb-5 leading-tight">{post.title}</h1>
            <p className="text-ink-muted text-lg leading-relaxed mb-6">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-accent-500/20 border border-accent-500/30 flex items-center justify-center text-xs font-mono text-accent-500 font-medium">
                  {siteConfig.name.slice(0, 1)}
                </div>
                <span className="text-sm text-ink font-medium">{siteConfig.name}</span>
              </div>
              <span className="text-ink-faint text-sm font-mono flex items-center gap-1">
                <Calendar size={12} /> {formatDate(post.publishedAt)}
              </span>
              <span className="text-ink-faint text-sm font-mono flex items-center gap-1">
                <Clock size={12} /> {post.readingTime}
              </span>
              {post.updatedAt && (
                <span className="text-ink-faint text-xs font-mono italic">
                  Updated {formatDate(post.updatedAt)}
                </span>
              )}
            </div>
          </div>
        </AnimateIn>

        {post.coverImage && (
          <AnimateIn delay={0.1} className="px-6 mb-10">
            <div className="mx-auto max-w-4xl">
              <div className="relative rounded-xl overflow-hidden border border-border aspect-video">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
              </div>
            </div>
          </AnimateIn>
        )}

        {post.youtubeId && (
          <AnimateIn delay={0.1} className="px-6 mb-10">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl overflow-hidden border border-border aspect-video">
                <iframe src={`https://www.youtube.com/embed/${post.youtubeId}`} allowFullScreen className="w-full h-full" title={post.title} />
              </div>
            </div>
          </AnimateIn>
        )}

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      rehypeExtractFilename,
                      [rehypePrettyCode, { theme: "github-dark", keepBackground: true }],
                    ],
                  },
                }}
                components={mdxComponents}
              />
            </div>
          </div>
        </div>

        <div className="px-6 mt-16">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-border mb-8">
              <span className="text-xs font-mono text-ink-faint uppercase tracking-wide">Tags:</span>
              {post.tags?.map((tag) => <TagPill key={tag} label={tag} />)}
            </div>
            <div className="mb-12">
              <ShareButtons url={postUrl} title={post.title} />
            </div>
            {related.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-ink mb-6">Related posts</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((p) => <BlogCard key={p.slug} post={p} />)}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
