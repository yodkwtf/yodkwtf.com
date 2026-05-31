import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: siteConfig.links.resume, external: true },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="font-display text-xl text-ink">{siteConfig.name}</p>
            <p className="text-sm text-ink-muted max-w-xs">{siteConfig.description.slice(0, 80)}…</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 text-sm text-ink-muted hover:text-ink transition-colors underline-anim"
              >
                {link.label}
                {link.external && <ArrowUpRight size={12} />}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="btn-ghost p-2 rounded-lg text-ink-muted hover:text-accent-500 transition-colors">
              <GithubIcon size={17} />
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="btn-ghost p-2 rounded-lg text-ink-muted hover:text-accent-500 transition-colors">
              <TwitterIcon size={17} />
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="btn-ghost p-2 rounded-lg text-ink-muted hover:text-accent-500 transition-colors">
              <LinkedinIcon size={17} />
            </a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email"
              className="btn-ghost p-2 rounded-lg text-ink-muted hover:text-accent-500 transition-colors">
              <Mail size={17} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="text-xs text-ink-faint font-mono">Built with Next.js · Sanity · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
