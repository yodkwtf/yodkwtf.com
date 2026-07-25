/**
 * Generates PNG icons for the email signature, output to public/email/.
 *
 * Contact glyphs (mail, phone, globe) are hand-authored in the same
 * feather-style stroke look as the globe icon in generate-newsletter-icons.mjs.
 * Brand marks (linkedin, x, github) are sourced from the offline
 * @iconify-json/simple-icons collection via @iconify/utils, the same
 * pattern generate-file-icons.mjs uses for vscode-icons.
 *
 * Everything is exported at 2x its display size so it stays crisp on
 * retina: contact glyphs display at 14px -> 28x28 files; brand marks and
 * the logo display at 28px/60px -> 56x56/120x120 files.
 *
 * Run: npm run signature:icons
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { getIconData, iconToSVG } from '@iconify/utils';
import simpleIcons from '@iconify-json/simple-icons/icons.json' with { type: 'json' };

const OUT_DIR = path.join(process.cwd(), 'public', 'email');
fs.mkdirSync(OUT_DIR, { recursive: true });

const CONTACT_SIZE = 28; // 2x — displayed at 14px
const BRAND_SIZE = 56; // 2x — displayed at 28px
const CONTACT_GLYPH = '#10b981';
const BRAND_GLYPH = '#059669';
const BRAND_BG = '#ecfdf5';
const BRAND_RADIUS = 8;

// 24x24 viewBox, feather-style stroke icons — matches the hand-drawn globe
// icon in generate-newsletter-icons.mjs.
const strokeIcons = {
  mail: `
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22 6 12 13 2 6"/>`,
  phone: `
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>`,
  globe: `
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
};

// contact icon occupies 24px inside the 28px canvas -> 2px padding, scale 1
const CONTACT_PAD = 2;
const CONTACT_SCALE = (CONTACT_SIZE - CONTACT_PAD * 2) / 24;

function contactBadge(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CONTACT_SIZE}" height="${CONTACT_SIZE}" viewBox="0 0 ${CONTACT_SIZE} ${CONTACT_SIZE}">
    <g transform="translate(${CONTACT_PAD} ${CONTACT_PAD}) scale(${CONTACT_SCALE})" fill="none" stroke="${CONTACT_GLYPH}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</g>
  </svg>`;
}

// brand glyph occupies ~34px inside the 56px canvas
const BRAND_PAD = 11;
const BRAND_SCALE = (BRAND_SIZE - BRAND_PAD * 2) / 24;

function brandBadge(iconName) {
  const data = getIconData(simpleIcons, iconName);
  if (!data) throw new Error(`Icon not found in simple-icons: ${iconName}`);
  const { body } = iconToSVG(data, { height: 24 });
  const glyph = body.replace('currentColor', BRAND_GLYPH);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${BRAND_SIZE}" height="${BRAND_SIZE}" viewBox="0 0 ${BRAND_SIZE} ${BRAND_SIZE}">
    <rect width="${BRAND_SIZE}" height="${BRAND_SIZE}" rx="${BRAND_RADIUS}" fill="${BRAND_BG}"/>
    <g transform="translate(${BRAND_PAD} ${BRAND_PAD}) scale(${BRAND_SCALE})">${glyph}</g>
  </svg>`;
}

const icons = {
  mail: contactBadge(strokeIcons.mail),
  phone: contactBadge(strokeIcons.phone),
  globe: contactBadge(strokeIcons.globe),
  linkedin: brandBadge('linkedin'),
  x: brandBadge('x'),
  github: brandBadge('github'),
};

for (const [name, svg] of Object.entries(icons)) {
  const file = path.join(OUT_DIR, `${name}.png`);
  await sharp(Buffer.from(svg)).png().toFile(file);
  console.log(`wrote ${path.relative(process.cwd(), file)}`);
}

// Logo: reuse the existing rounded-square treatment already baked into
// public/logo.png, just resized to the signature's 120x120 (2x of 60px display).
const LOGO_SIZE = 120;
const logoSrc = path.join(process.cwd(), 'public', 'logo.png');
const logoOut = path.join(OUT_DIR, 'logo.png');
await sharp(logoSrc)
  .resize(LOGO_SIZE, LOGO_SIZE, { fit: 'cover' })
  .png()
  .toFile(logoOut);
console.log(`wrote ${path.relative(process.cwd(), logoOut)}`);
