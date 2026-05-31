"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-accent-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-400/4 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">
          {/* Left: text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/25 bg-accent-500/8 text-accent-500 text-xs font-mono font-medium tracking-wide">
                <Sparkles size={11} />
                Available for new opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink leading-[1.05] tracking-tight">
                Hi, I&apos;m <span className="text-gradient">{siteConfig.name}</span>
              </h1>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink-muted leading-[1.1] tracking-tight">
                I build for the web.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-ink-muted text-lg leading-relaxed max-w-lg"
            >
              Full-stack engineer specializing in{" "}
              <span className="text-ink font-medium">React, Next.js, and Node.js</span>.
              I care deeply about performance, accessibility, and shipping products people love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link href="/projects" className="btn btn-primary gap-2">
                View my work <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn btn-outline">About me</Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-3">
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"
                  className="text-ink-faint hover:text-accent-500 transition-colors p-1" aria-label="GitHub">
                  <GithubIcon size={19} />
                </a>
                <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer"
                  className="text-ink-faint hover:text-accent-500 transition-colors p-1" aria-label="Twitter">
                  <TwitterIcon size={19} />
                </a>
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-ink-faint hover:text-accent-500 transition-colors p-1" aria-label="LinkedIn">
                  <LinkedinIcon size={19} />
                </a>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-5 text-sm text-ink-muted font-mono">
                {[["5+", "Years exp"], ["40+", "Projects"], ["15+", "Clients"]].map(([num, label]) => (
                  <div key={label} className="flex items-baseline gap-1.5">
                    <span className="text-ink font-semibold text-base">{num}</span>
                    <span className="text-xs text-ink-faint">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: floating code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="glass rounded-xl p-5 font-mono text-xs leading-6 shadow-xl glow-accent-sm">
              <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 dark:bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-2 text-ink-faint text-[11px]">developer.ts</span>
              </div>
              <div className="space-y-0.5">
                <div><span className="text-accent-400">const</span> <span className="text-ink">dev</span> <span className="text-ink-muted">=</span> <span className="text-accent-300">&#123;</span></div>
                <div className="pl-4"><span className="text-ink-muted">name:</span> <span className="text-amber-600 dark:text-amber-400/80">&quot;{siteConfig.name}&quot;</span><span className="text-ink-muted">,</span></div>
                <div className="pl-4"><span className="text-ink-muted">role:</span> <span className="text-amber-600 dark:text-amber-400/80">&quot;Full-Stack Engineer&quot;</span><span className="text-ink-muted">,</span></div>
                <div className="pl-4"><span className="text-ink-muted">stack:</span> <span className="text-accent-300">[</span></div>
                <div className="pl-8"><span className="text-amber-600 dark:text-amber-400/80">&quot;Next.js&quot;</span><span className="text-ink-muted">,</span></div>
                <div className="pl-8"><span className="text-amber-600 dark:text-amber-400/80">&quot;TypeScript&quot;</span><span className="text-ink-muted">,</span></div>
                <div className="pl-8"><span className="text-amber-600 dark:text-amber-400/80">&quot;Node.js&quot;</span><span className="text-ink-muted">,</span></div>
                <div className="pl-4"><span className="text-accent-300">]</span><span className="text-ink-muted">,</span></div>
                <div className="pl-4"><span className="text-ink-muted">available:</span> <span className="text-accent-400">true</span></div>
                <div><span className="text-accent-300">&#125;</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-ink-faint uppercase tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-ink-faint to-transparent"
        />
      </motion.div>
    </section>
  );
}
