import Link from "next/link";
import { ArrowRight, MapPin, Coffee, Code2 } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { siteConfig } from "@/config/site";
import { getAboutPage } from "@/sanity/lib/queries";

const FALLBACK_BIO = [
  `I'm a full-stack engineer with 5+ years of experience crafting web applications that are fast, accessible, and a joy to use. I believe great software comes from caring equally about the user experience and the code quality underneath it.`,
  `When I'm not building, I'm writing about web development, contributing to open source, or exploring the latest in the JavaScript ecosystem.`,
];

export async function MiniAboutSection() {
  let bio: string[] = FALLBACK_BIO;

  try {
    const about = await getAboutPage();
    if (about?.bio?.length) {
      const extracted = (about.bio as { children?: { text: string }[] }[])
        .map((block) => block.children?.map((c) => c.text).join("") ?? "")
        .filter(Boolean);
      if (extracted.length) bio = extracted.slice(0, 2);
    }
  } catch {}

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <AnimateIn>
            <div className="space-y-5">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-500 font-medium">
                About Me
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                Building at the intersection of{" "}
                <em className="not-italic text-gradient">engineering and design</em>.
              </h2>
              {bio.map((para, i) => (
                <p key={i} className="text-ink-muted leading-relaxed">
                  {para}
                </p>
              ))}
              <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent-500" />
                  {siteConfig.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Coffee size={14} className="text-accent-500" />
                  Fueled by espresso
                </span>
                <span className="flex items-center gap-1.5">
                  <Code2 size={14} className="text-accent-500" />
                  Open to work
                </span>
              </div>
              <Link href="/about" className="btn btn-outline w-fit gap-2">
                More about me <ArrowRight size={15} />
              </Link>
            </div>
          </AnimateIn>

          {/* Right: stats grid */}
          <AnimateIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "5+", label: "Years of experience", sub: "Shipping production software" },
                { num: "40+", label: "Projects delivered", sub: "From startups to enterprises" },
                { num: "15+", label: "Happy clients", sub: "Across 8 countries" },
                { num: "∞", label: "Curiosity", sub: "Always learning, always building" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-5 border border-border hover:border-accent-500/30 transition-colors space-y-1"
                >
                  <div className="font-display text-3xl text-gradient">{stat.num}</div>
                  <div className="text-sm font-medium text-ink">{stat.label}</div>
                  <div className="text-xs text-ink-faint">{stat.sub}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
