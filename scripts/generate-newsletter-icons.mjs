/**
 * Generates circular PNG social-icon badges for the newsletter email.
 * Email clients (Gmail especially) strip inline SVG, so the icons are
 * baked into PNGs hosted in public/newsletter/ and referenced by absolute URL.
 *
 * Run: npm run newsletter:icons
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const OUT_DIR = path.join(process.cwd(), 'public', 'newsletter');
fs.mkdirSync(OUT_DIR, { recursive: true });

const SIZE = 96; // 2x — displayed at 36–40px
const CIRCLE = '#18181b'; // near-black badge
const GLYPH = '#ffffff';

// 24x24 viewBox icon paths (filled unless noted)
const filled = {
  github:
    'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z',
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};

// Globe drawn with strokes (feather-style)
const globeSvgInner = `
  <g fill="none" stroke="${GLYPH}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </g>`;

// icon occupies ~46px inside the 96px badge → padding 25, scale 46/24
const PAD = 25;
const SCALE = (SIZE - PAD * 2) / 24;

function badge(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">
    <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="${CIRCLE}"/>
    <g transform="translate(${PAD} ${PAD}) scale(${SCALE})">${inner}</g>
  </svg>`;
}

const icons = {
  github: badge(`<path fill="${GLYPH}" d="${filled.github}"/>`),
  x: badge(`<path fill="${GLYPH}" d="${filled.x}"/>`),
  linkedin: badge(`<path fill="${GLYPH}" d="${filled.linkedin}"/>`),
  website: badge(globeSvgInner),
};

for (const [name, svg] of Object.entries(icons)) {
  const file = path.join(OUT_DIR, `${name}.png`);
  await sharp(Buffer.from(svg)).png().toFile(file);
  console.log(`wrote ${path.relative(process.cwd(), file)}`);
}
