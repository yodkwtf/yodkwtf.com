"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";
import { logger } from "@/lib/logger";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error('GlobalError', error.message, error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-center max-w-md mx-auto space-y-6"
      >
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <AlertTriangle size={28} className="text-red-400" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-display text-3xl text-ink">Something went wrong.</h1>
          <p className="text-ink-muted leading-relaxed">
            An unexpected error occurred. This has been noted and will be looked into.
          </p>
        </div>

        {error.digest && (
          <p className="font-mono text-xs text-ink-faint bg-surface-subtle border border-border rounded-lg px-3 py-2 inline-block">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="btn btn-primary gap-2">
            <RefreshCw size={14} /> Try again
          </button>
          <Link href="/" className="btn btn-outline gap-2">
            <Home size={14} /> Go home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
