/**
 * Sends a newsletter email (via Resend Broadcasts) for every published blog
 * post that hasn't been emailed yet. Sent posts are tracked by slug in
 * scripts/newsletter-sent.json, which the GitHub Action commits back.
 *
 * Usage:
 *   npx tsx scripts/send-newsletter.ts             # send unsent posts
 *   npx tsx scripts/send-newsletter.ts --dry-run   # show what would be sent
 *   npx tsx scripts/send-newsletter.ts --seed      # mark all current posts as sent (no emails)
 *   npx tsx scripts/send-newsletter.ts --force     # bypass the >3-posts safety check
 *
 * Env: RESEND_API_KEY, RESEND_AUDIENCE_ID, optional NEWSLETTER_FROM
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { getAllBlogsMeta } from '../src/lib/blogs';
import { siteConfig } from '../src/config/site';
import { formatDate } from '../src/lib/utils';
import type { BlogPostMeta } from '../src/types';

const SENT_FILE = path.join(process.cwd(), 'scripts', 'newsletter-sent.json');
const RESEND_API = 'https://api.resend.com';
const FROM =
  process.env.NEWSLETTER_FROM ?? `${siteConfig.author} <durgesh@yodkwtf.com>`;

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const SEED = args.includes('--seed');
const FORCE = args.includes('--force');

function readSentLog(): string[] {
  if (!fs.existsSync(SENT_FILE)) return [];
  return JSON.parse(fs.readFileSync(SENT_FILE, 'utf-8'));
}

function writeSentLog(slugs: string[]) {
  fs.writeFileSync(SENT_FILE, JSON.stringify(slugs.sort(), null, 2) + '\n');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildEmailHtml(post: BlogPostMeta): string {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const icon = (name: string) => `${siteConfig.url}/newsletter/${name}.png`;
  const cover = post.coverImage
    ? post.coverImage.startsWith('/')
      ? `${siteConfig.url}${post.coverImage}`
      : post.coverImage
    : null;

  const meta = [
    post.publishedAt ? formatDate(post.publishedAt, 'MMM d, yyyy') : null,
    post.readingTime,
  ]
    .filter(Boolean)
    .join('&nbsp;&nbsp;&middot;&nbsp;&nbsp;');

  const coverBlock = cover
    ? `<tr>
        <td style="padding:0 0 28px;">
          <a href="${url}" target="_blank" style="text-decoration:none;">
            <img src="${cover}" alt="${escapeHtml(post.title)}" width="536" style="display:block;width:100%;max-width:536px;height:auto;border-radius:12px;" />
          </a>
        </td>
      </tr>`
    : '';

  const categoryBlock = post.category
    ? `<tr>
        <td style="padding:0 0 14px;">
          <span style="display:inline-block;font-size:11px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;color:#059669;background-color:#ecfdf5;border:1px solid #a7f3d0;border-radius:999px;padding:5px 12px;">${escapeHtml(post.category)}</span>
        </td>
      </tr>`
    : '';

  const socialCell = (name: string, href: string, label: string) =>
    `<td style="padding:0 5px;">
      <a href="${href}" target="_blank" style="text-decoration:none;">
        <img src="${icon(name)}" width="36" height="36" alt="${label}" style="display:block;border:0;border-radius:999px;" />
      </a>
    </td>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light only" />
  <title>${escapeHtml(post.title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(post.description)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;border:1px solid #e9e9ec;box-shadow:0 1px 2px rgba(24,24,27,0.04),0 8px 24px rgba(24,24,27,0.06);overflow:hidden;">
          <!-- eyebrow -->
          <tr>
            <td style="padding:32px 40px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:8px;">
                    <span style="display:inline-block;width:7px;height:7px;border-radius:999px;background-color:#10b981;"></span>
                  </td>
                  <td>
                    <span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#10b981;font-weight:700;">New post</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- body -->
          <tr>
            <td style="padding:24px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${coverBlock}
                ${categoryBlock}
                <tr>
                  <td style="padding:0 0 12px;">
                    <h1 style="margin:0;font-size:30px;line-height:1.25;letter-spacing:-0.02em;color:#18181b;font-weight:700;">${escapeHtml(post.title)}</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 18px;">
                    <span style="font-size:13px;color:#a1a1aa;">${meta}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 28px;">
                    <p style="margin:0;font-size:16px;line-height:1.7;color:#52525b;">${escapeHtml(post.description)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 36px;">
                    <a href="${url}" target="_blank" style="display:inline-block;background-color:#059669;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:13px 26px;border-radius:10px;box-shadow:0 2px 8px rgba(5,150,105,0.28);">Read full article &rarr;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- footer -->
          <tr>
            <td style="padding:0 40px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #eeeef0;">
                <tr>
                  <td align="center" style="padding:28px 0 4px;">
                    <p style="margin:0;font-size:15px;font-weight:600;color:#18181b;">${siteConfig.author}</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:0 0 18px;">
                    <p style="margin:0;font-size:13px;color:#a1a1aa;">Full-Stack Software Engineer</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:0 0 22px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                      <tr>
                        ${socialCell('github', siteConfig.links.github, 'GitHub')}
                        ${socialCell('x', siteConfig.links.twitter, 'X')}
                        ${socialCell('linkedin', siteConfig.links.linkedin, 'LinkedIn')}
                        ${socialCell('website', siteConfig.url, 'Website')}
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:12px;line-height:1.6;color:#b4b4bb;">You're receiving this because you subscribed at <a href="${siteConfig.url}" target="_blank" style="color:#b4b4bb;text-decoration:none;">yodkwtf.com</a>.<br /><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#71717a;text-decoration:underline;">Unsubscribe</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function resendFetch(pathname: string, body: unknown) {
  const res = await fetch(`${RESEND_API}${pathname}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      `Resend ${pathname} failed (${res.status}): ${JSON.stringify(data)}`,
    );
  }
  return data as { id?: string };
}

async function sendBroadcast(post: BlogPostMeta) {
  const created = await resendFetch('/broadcasts', {
    audience_id: process.env.RESEND_AUDIENCE_ID,
    from: FROM,
    subject: post.title,
    html: buildEmailHtml(post),
    name: `Blog: ${post.title}`,
  });
  if (!created.id) throw new Error('Broadcast created but no id returned');
  await resendFetch(`/broadcasts/${created.id}/send`, {});
}

async function main() {
  const posts = getAllBlogsMeta(); // published, non-draft only
  const sent = readSentLog();
  const unsent = posts.filter((p) => !sent.includes(p.slug));

  if (SEED) {
    writeSentLog(posts.map((p) => p.slug));
    console.log(
      `Seeded sent log with ${posts.length} post(s) — no emails sent.`,
    );
    return;
  }

  if (unsent.length === 0) {
    console.log('No new posts to send. ✓');
    return;
  }

  console.log(`Found ${unsent.length} unsent post(s):`);
  unsent.forEach((p) => console.log(`  - ${p.slug} (${p.publishedAt})`));

  if (DRY_RUN) {
    console.log('\nDry run — no emails sent.');
    return;
  }

  if (unsent.length > 3 && !FORCE) {
    console.error(
      `\nRefusing to send ${unsent.length} posts at once (safety check — did the sent log get lost?). Re-run with --force to override.`,
    );
    process.exit(1);
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
    console.error(
      'Missing RESEND_API_KEY and/or RESEND_AUDIENCE_ID environment variables.',
    );
    process.exit(1);
  }

  let failed = false;
  for (const post of unsent) {
    try {
      await sendBroadcast(post);
      sent.push(post.slug);
      writeSentLog(sent); // persist after every success
      console.log(`Sent: ${post.slug} ✓`);
    } catch (err) {
      failed = true;
      console.error(`Failed to send ${post.slug}:`, err);
    }
  }

  if (failed) process.exit(1);
}

// Only run when executed directly (not when imported for its exports)
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
