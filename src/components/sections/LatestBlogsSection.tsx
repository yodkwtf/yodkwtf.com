import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { getLatestBlogs } from "@/lib/blogs";

export function LatestBlogsSection() {
  const posts = getLatestBlogs(3);

  if (!posts.length) return null;

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            label="Writing"
            heading="Thoughts on the craft."
            subheading="I write about web development, software architecture, and engineering culture."
            className="mb-0"
          />
          <Link href="/blog" className="hidden md:flex btn btn-ghost gap-1.5 text-sm flex-shrink-0">
            All posts <ArrowRight size={15} />
          </Link>
        </div>

        <StaggerContainer className="flex flex-col gap-10 max-w-3xl mx-auto">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/blog" className="btn btn-outline gap-2">
            All posts <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
