// Shared heading utilities so the Table of Contents anchors and the rendered
// article heading ids are generated identically.

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
  /** 1-based source line (matches react-markdown node positions). */
  line: number;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** Recursively flatten React children / markdown nodes to plain text. */
export function nodeToText(children: unknown): string {
  if (children == null) return '';
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(nodeToText).join('');
  if (typeof children === 'object' && 'props' in (children as Record<string, unknown>)) {
    const props = (children as { props?: { children?: unknown } }).props;
    return nodeToText(props?.children);
  }
  return '';
}

/** Parse ## and ### headings out of raw markdown (ignoring fenced code). */
export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  const seen = new Map<string, number>();
  let inFence = false;
  const lines = markdown.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('```') || line.startsWith('~~~')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;

    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/[*_`]/g, '').trim();
    let id = slugify(text);
    // De-duplicate identical slugs.
    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;

    headings.push({ id, text, level, line: i + 1 });
  }

  return headings;
}
