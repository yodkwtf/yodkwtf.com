import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  PortableText,
  toPlainText,
  type PortableTextBlock,
  type PortableTextComponents,
} from '@portabletext/react';

/**
 * Sanity returns Portable Text; the fallback constants in `src/data/` are plain
 * strings. Accept both so callers never have to branch on the source.
 */
export type RichTextValue = readonly (PortableTextBlock | string)[];

/**
 * Authors leave blank lines in the Sanity editor, which arrive as text blocks
 * with no content. Rendering those as empty `<p>`s would double the gaps under
 * the caller's `space-y-*`, so drop them — but keep non-text blocks (images,
 * custom objects), which legitimately have no plain text.
 */
function hasContent(block: PortableTextBlock): boolean {
  if (block._type !== 'block') return true;
  return toPlainText(block).trim().length > 0;
}

/** Wrap fallback strings as single-span `normal` blocks so there is one render path. */
function toBlocks(value: RichTextValue): PortableTextBlock[] {
  return value
    .map((item, i) =>
      typeof item === 'string'
        ? {
            _type: 'block',
            _key: `fallback-${i}`,
            style: 'normal',
            markDefs: [],
            children: [
              {
                _type: 'span',
                _key: `fallback-${i}-0`,
                // Trimmed: a stray newline in the constant would otherwise
                // become a <br/>, since PortableText treats \n as a hard break.
                text: item.trim(),
                marks: [],
              },
            ],
          }
        : item,
    )
    .filter(hasContent);
}

const LINK_CLASS =
  'text-accent-fg underline underline-offset-2 decoration-accent-500/40 hover:decoration-accent-500 hover:text-accent-strong transition-colors';

/** Decorators and annotations render identically in both variants. */
const marks: PortableTextComponents['marks'] = {
  strong: ({ children }) => (
    <strong className='font-semibold text-ink'>{children}</strong>
  ),
  em: ({ children }) => <em className='italic'>{children}</em>,
  underline: ({ children }) => (
    <span className='underline underline-offset-2'>{children}</span>
  ),
  'strike-through': ({ children }) => (
    <span className='line-through'>{children}</span>
  ),
  // Mirrors `.prose code:not(pre code)` in globals.css so inline code is
  // consistent between MDX posts and CMS copy.
  code: ({ children }) => (
    <code className='rounded border border-border bg-surface-subtle px-[0.4em] py-[0.15em] font-mono text-[0.875em]'>
      {children}
    </code>
  ),
  link: ({ children, value }) => {
    const href = typeof value?.href === 'string' ? value.href : undefined;
    if (!href) return <>{children}</>;

    return href.startsWith('/') ? (
      <Link href={href} className={LINK_CLASS}>
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={LINK_CLASS}
      >
        {children}
      </a>
    );
  },
};

const blockComponents: PortableTextComponents = {
  marks,
  block: {
    normal: ({ children }) => (
      <p className='text-ink-muted leading-relaxed'>{children}</p>
    ),
    // Pages own their single <h1>, so an authored h1 steps down to h2.
    h1: ({ children }) => (
      <h2 className='font-display text-2xl text-ink'>{children}</h2>
    ),
    h2: ({ children }) => (
      <h2 className='font-display text-2xl text-ink'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='font-display text-xl text-ink'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='font-semibold text-ink'>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-2 border-accent-500/40 pl-4 text-ink-muted italic'>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className='list-disc space-y-1.5 pl-5 text-ink-muted'>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='list-decimal space-y-1.5 pl-5 text-ink-muted'>
        {children}
      </ol>
    ),
  },
  listItem: ({ children }) => (
    <li className='leading-relaxed marker:text-accent-fg'>{children}</li>
  ),
};

const Passthrough = ({ children }: { children?: ReactNode }) => <>{children}</>;

/** Strips every block/list wrapper so content can sit inside an existing element. */
const inlineComponents: PortableTextComponents = {
  marks,
  block: Passthrough,
  list: Passthrough,
  listItem: Passthrough,
};

type RichTextProps = {
  value: RichTextValue;
  /** Rendered when `value` has no content. */
  fallback?: ReactNode;
};

/**
 * Block-level Portable Text: emits `<p>`, headings, lists and blockquotes as
 * siblings, so the caller controls vertical rhythm (e.g. a `space-y-4` wrapper).
 */
export function RichText({ value, fallback = null }: RichTextProps) {
  const blocks = toBlocks(value ?? []);
  if (!blocks.length) return <>{fallback}</>;

  return (
    <PortableText
      value={blocks}
      components={blockComponents}
      onMissingComponent={false}
    />
  );
}

/**
 * Inline Portable Text: keeps marks and links but emits no block wrapper, for
 * use inside an element the caller already renders (a custom `<li>`, a `<span>`).
 * Pass a single block — multiple blocks would run together with no separator.
 */
export function RichTextInline({ value, fallback = null }: RichTextProps) {
  const blocks = toBlocks(value ?? []);
  if (!blocks.length) return <>{fallback}</>;

  return (
    <PortableText
      value={blocks}
      components={inlineComponents}
      onMissingComponent={false}
    />
  );
}
