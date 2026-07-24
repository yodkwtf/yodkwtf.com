'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const COMING_SOON = false;

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message ?? 'Something went wrong.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setEmail('');
    } catch {
      setErrorMsg('Could not connect. Please try again.');
      setStatus('error');
    }
  }

  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">
        Newsletter
      </p>
      <div className="glass rounded-xl p-4 border border-border space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-accent-500 shrink-0" />
            <p className="text-sm font-medium text-ink">Stay in the loop</p>
          </div>
          {COMING_SOON && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-accent-500/30 text-accent-500 bg-accent-500/5 shrink-0">
              Coming soon
            </span>
          )}
        </div>
        <p className="text-xs text-ink-muted leading-relaxed">
          New posts, projects, and the occasional dev thought — straight to your inbox. No spam.
        </p>

        {status === 'success' ? (
          <div className="flex items-center gap-2 text-accent-500 text-sm font-medium py-1">
            <Check size={15} />
            You&apos;re subscribed!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={COMING_SOON || status === 'loading'}
              className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-500/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={COMING_SOON || status === 'loading'}
              className="w-full btn btn-primary text-sm py-2 gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing…' : (
                <>Subscribe <ArrowRight size={14} /></>
              )}
            </button>
            {status === 'error' && (
              <p className="text-xs text-red-500">{errorMsg}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
