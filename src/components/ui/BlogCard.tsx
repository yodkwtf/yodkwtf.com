"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { TagPill } from "@/components/ui/TagPill";
import { formatDate } from "@/lib/utils";
import type { BlogPostMeta } from "@/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured, className }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-surface-card overflow-hidden",
        "hover:border-accent-500/40 hover:shadow-lg transition-all duration-300",
        "hover:shadow-[0_8px_32px_var(--glow)]",
        className,
      )}
    >
      {post.coverImage && (
        <div className="relative h-44 overflow-hidden bg-surface-subtle">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex flex-wrap gap-1.5">
          {post.tags?.slice(0, 2).map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        <h3 className="font-display text-lg leading-snug text-ink group-hover:text-accent-500 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-ink-muted line-clamp-2 leading-relaxed flex-1">
          {post.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border-subtle">
          <div className="flex items-center gap-3 text-xs text-ink-faint font-mono">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {formatDate(post.publishedAt, "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readingTime}
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-accent-500 transition-colors group/link"
          >
            Read
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
