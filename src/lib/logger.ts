const isDev = process.env.NODE_ENV === 'development';

function fmt(level: string, ctx: string, msg: string) {
  return `[${level}]${ctx ? ` [${ctx}]` : ''} ${msg}`;
}

export const logger = {
  /** Informational events — dev only. */
  info(ctx: string, msg: string, data?: unknown) {
    if (!isDev) return;
    console.log(fmt('INFO', ctx, msg), ...(data !== undefined ? [data] : []));
  },

  /** Non-critical issues (e.g. Sanity unreachable, falling back to static data) — dev only. */
  warn(ctx: string, msg: string, data?: unknown) {
    if (!isDev) return;
    console.warn(fmt('WARN', ctx, msg), ...(data !== undefined ? [data] : []));
  },

  /** Errors that should always surface — dev + production. */
  error(ctx: string, msg: string, err?: unknown) {
    console.error(fmt('ERROR', ctx, msg), ...(err !== undefined ? [err] : []));
    // TODO: forward to an error-tracking service (Sentry, Axiom, etc.) here
  },
};
