"use client";

import { Link2, Check } from "lucide-react";
import { TwitterIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { useState } from "react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const tweetText = encodeURIComponent(`${title}\n\n${url}`);

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-ink-muted font-medium">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${tweetText}`}
        target="_blank" rel="noopener noreferrer"
        className="btn btn-outline text-xs gap-2 py-1.5 px-3"
      >
        <TwitterIcon size={13} /> Twitter
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
        target="_blank" rel="noopener noreferrer"
        className="btn btn-outline text-xs gap-2 py-1.5 px-3"
      >
        <LinkedinIcon size={13} /> LinkedIn
      </a>
      <button onClick={copyLink} className="btn btn-outline text-xs gap-2 py-1.5 px-3">
        {copied ? <><Check size={13} className="text-accent-500" /> Copied!</> : <><Link2 size={13} /> Copy link</>}
      </button>
    </div>
  );
}
