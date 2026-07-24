// Resolves relative URLs in a rendered GitHub README against the repo,
// so images like `./screenshots/app.png`, `/public/og.png` and links like
// `docs/setup.md` work when the README is displayed outside GitHub.
//
// Must run AFTER rehype-raw so it also catches <img>/<a> written as raw HTML.
import type { Element, Nodes, Properties } from 'hast';
import type { GitHubRepo } from '@/lib/github';

// Elements whose URL attributes point at file contents (not rendered pages)
const MEDIA_TAGS = new Set(['img', 'source', 'video', 'audio', 'track', 'embed']);

/** URLs we should leave untouched: absolute, protocol-relative, anchors, etc. */
function isExternal(url: string): boolean {
  return (
    /^[a-z][a-z0-9+.-]*:/i.test(url) || // http:, https:, mailto:, data:, …
    url.startsWith('//') ||
    url.startsWith('#')
  );
}

function resolve(url: string, base: string): string {
  try {
    // GitHub treats a leading `/` as repo-root-relative (e.g. `/public/og.png`),
    // but `new URL` would resolve it against the host root — strip it so both
    // `/path` and `path` resolve inside the repo.
    return new URL(url.replace(/^\//, ''), base).href;
  } catch {
    return url;
  }
}

function resolveProp(props: Properties, name: string, base: string) {
  const value = props[name];
  if (typeof value === 'string' && value && !isExternal(value)) {
    props[name] = resolve(value, base);
  }
}

/** srcset is a comma-separated list of `url [descriptor]` candidates. */
function resolveSrcSet(props: Properties, base: string) {
  const value = props.srcSet;
  if (typeof value !== 'string' || !value) return;
  props.srcSet = value
    .split(',')
    .map((candidate) => {
      const [url, ...descriptor] = candidate.trim().split(/\s+/);
      if (!url || isExternal(url)) return candidate.trim();
      return [resolve(url, base), ...descriptor].join(' ');
    })
    .join(', ');
}

export function rehypeGithubUrls({ owner, repo }: GitHubRepo) {
  // raw.githubusercontent.com serves file contents (for images/media);
  // github.com/…/blob renders files (for links). HEAD = default branch.
  const rawBase = `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/`;
  const blobBase = `https://github.com/${owner}/${repo}/blob/HEAD/`;

  return (tree: Nodes) => {
    walk(tree, rawBase, blobBase);
  };
}

function walk(node: Nodes, rawBase: string, blobBase: string) {
  if (node.type === 'element') {
    rewrite(node, rawBase, blobBase);
  }
  if ('children' in node) {
    for (const child of node.children) {
      walk(child, rawBase, blobBase);
    }
  }
}

function rewrite(el: Element, rawBase: string, blobBase: string) {
  const props = el.properties ?? {};

  if (MEDIA_TAGS.has(el.tagName)) {
    resolveProp(props, 'src', rawBase);
    resolveProp(props, 'poster', rawBase);
    resolveSrcSet(props, rawBase);
  }

  if (el.tagName === 'a') {
    resolveProp(props, 'href', blobBase);
  }

  el.properties = props;
}
