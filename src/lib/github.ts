import { logger } from '@/lib/logger';

export interface GitHubRepo {
  owner: string;
  repo: string;
}

/**
 * Extracts { owner, repo } from a GitHub repository URL like
 * `https://github.com/owner/repo` (trailing slashes/paths tolerated).
 */
export function parseGitHubRepo(url?: string): GitHubRepo | null {
  if (!url) return null;
  try {
    const { hostname, pathname } = new URL(url);
    if (hostname !== 'github.com' && hostname !== 'www.github.com') {
      return null;
    }
    const [owner, repo] = pathname.split('/').filter(Boolean);
    if (!owner || !repo) return null;
    return { owner, repo: repo.replace(/\.git$/, '') };
  } catch {
    return null;
  }
}

/**
 * Fetches the raw README markdown for a repo. Uses the GitHub API's
 * `/readme` endpoint (handles any filename/casing and the default branch),
 * falling back to raw.githubusercontent.com. Returns null when unavailable.
 *
 * READMEs change rarely, so the fetch is cached for an hour — this also
 * keeps us well under the unauthenticated API rate limit.
 */
export async function fetchReadme({
  owner,
  repo,
}: GitHubRepo): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: { Accept: 'application/vnd.github.raw+json' },
        next: { revalidate: 3600 },
      },
    );
    if (res.ok) return await res.text();
    logger.warn(
      'fetchReadme',
      `GitHub API returned ${res.status} for ${owner}/${repo}, trying raw fallback`,
    );
  } catch (err) {
    logger.warn('fetchReadme', `GitHub API failed for ${owner}/${repo}`, err);
  }

  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/README.md`,
      { next: { revalidate: 3600 } },
    );
    if (res.ok) return await res.text();
  } catch (err) {
    logger.warn(
      'fetchReadme',
      `Raw README fallback failed for ${owner}/${repo}`,
      err,
    );
  }

  return null;
}
