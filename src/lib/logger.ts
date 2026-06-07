const isDev = process.env.NODE_ENV === 'development';

const C = {
  info: '\x1b[36m',   // cyan
  warn: '\x1b[33m',   // yellow
  error: '\x1b[31m',  // red
  ctx: '\x1b[90m',    // dim gray
  reset: '\x1b[0m',
} as const;

function fmt(level: string, color: string, ctx: string, msg: string) {
  const ctxPart = ctx ? ` ${C.ctx}[${ctx}]${C.reset}` : '';
  return `${color}[${level}]${C.reset}${ctxPart} ${msg}`;
}

function extractMsg(data: unknown): string {
  if (data instanceof Error) return data.message;
  if (typeof data === 'string') return data;
  return String(data);
}

export const logger = {
  info(ctx: string, msg: string, data?: unknown) {
    if (!isDev) return;
    const extra = data !== undefined ? [extractMsg(data)] : [];
    console.log(fmt('INFO', C.info, ctx, msg), ...extra);
  },

  warn(ctx: string, msg: string, err?: unknown) {
    if (!isDev) return;
    const extra = err !== undefined ? [extractMsg(err)] : [];
    console.warn(fmt('WARN', C.warn, ctx, msg), ...extra);
  },

  /** Errors that should always surface — dev + production. */
  error(ctx: string, msg: string, err?: unknown) {
    const extra = err !== undefined ? [extractMsg(err)] : [];
    console.error(fmt('ERROR', C.error, ctx, msg), ...extra);
    // TODO: forward to error-tracking service (Sentry, Axiom, etc.)
  },
};
