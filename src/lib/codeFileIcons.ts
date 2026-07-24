import { EXT_TO_ICON, FILE_ICON_SVGS } from './codeFileIcons.generated';

const CODE_ICON =
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<rect width="16" height="16" rx="3.5" fill="#30363d"/>' +
  '<path d="M6.2 5.4 3.7 8l2.5 2.6M9.8 5.4 12.3 8l-2.5 2.6" stroke="#8b949e" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Extract the lowercase extension (handles `Dockerfile`, `.env`, `a.b.ts`). */
function getExtension(filename: string): string {
  const base = filename.split(/[\\/]/).pop() ?? filename;
  if (/^dockerfile$/i.test(base)) return 'dockerfile';
  const dot = base.lastIndexOf('.');
  // Dotfiles like `.env` -> `env`; files with no dot -> no extension.
  if (dot <= 0) return base.startsWith('.') ? base.slice(1).toLowerCase() : '';
  return base.slice(dot + 1).toLowerCase();
}

function renderFallbackBadge(ext: string): string {
  const label = ext.toUpperCase().slice(0, 4);
  const fontSize = label.length <= 2 ? 7 : label.length === 3 ? 5.6 : 4.8;
  return (
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<rect width="16" height="16" rx="3.5" fill="#6e7681"/>' +
    `<text x="8" y="8.4" dominant-baseline="central" text-anchor="middle" ` +
    `font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="${fontSize}" font-weight="700" fill="#ffffff">` +
    `${escapeXml(label)}</text>` +
    '</svg>'
  );
}

export function getFileIconSvg(filename?: string | null): string {
  if (!filename) return CODE_ICON;
  const ext = getExtension(filename);
  if (!ext) return CODE_ICON;
  const iconName = EXT_TO_ICON[ext];
  if (iconName && FILE_ICON_SVGS[iconName]) return FILE_ICON_SVGS[iconName];
  return renderFallbackBadge(ext);
}
