export interface TocHeading {
  level: number;
  text: string;
  slug: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links → label
    .replace(/`([^`]+)`/g, '$1')             // inline code
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1') // bold / italic
    .trim();
}

export function extractHeadings(content: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const slugCounts: Record<string, number> = {};
  let inCodeBlock = false;

  for (const line of content.split('\n')) {
    if (line.trimStart().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = line.match(/^(#{1,3})\s+(.+)$/);
    if (!match) continue;

    const level = match[1].length;
    const text = stripMarkdown(match[2].trim());
    const base = slugify(text);

    // mirror github-slugger deduplication used by rehype-slug
    const count = slugCounts[base] ?? 0;
    const slug = count === 0 ? base : `${base}-${count}`;
    slugCounts[base] = count + 1;

    headings.push({ level, text, slug });
  }

  return headings;
}
