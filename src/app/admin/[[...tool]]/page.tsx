"use client";

export const dynamic = "force-dynamic";

import dynamic_import from "next/dynamic";

const NextStudio = dynamic_import(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false, loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-ink-muted font-mono text-sm">Loading Sanity Studio…</div>
    </div>
  )}
);

import sanityConfig from "@/sanity/sanity.config";

export default function AdminPage() {
  return <NextStudio config={sanityConfig} />;
}
