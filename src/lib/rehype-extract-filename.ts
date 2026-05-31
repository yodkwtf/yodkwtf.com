// Rehype plugin: detects `// filename: path/to/file.ext` as the first line of a
// code block, strips it from the rendered code, and sets data-filename on <pre>.
// Must run BEFORE rehype-pretty-code so the filename line is removed from the
// raw text before shiki tokenises it.
export function rehypeExtractFilename() {
  return (tree: any) => {
    walk(tree);
  };
}

function walk(node: any) {
  if (node.type === "element" && node.tagName === "pre") {
    processPre(node);
    return;
  }
  if (Array.isArray(node.children)) {
    node.children.forEach(walk);
  }
}

function processPre(pre: any) {
  const code = pre.children?.find(
    (c: any) => c.type === "element" && c.tagName === "code",
  );
  if (!code) return;

  const textNode = code.children?.find((c: any) => c.type === "text");
  if (!textNode) return;

  const firstLine = textNode.value.split("\n")[0];
  // Matches:  // filename: app/blog/[slug]/page.tsx
  const match = firstLine.match(/^\/\/\s*filename:\s*(.+?)\s*$/);
  if (!match) return;

  pre.properties = pre.properties ?? {};
  pre.properties["data-filename"] = match[1].trim();

  // Remove the filename line and the newline that follows it
  textNode.value = textNode.value.slice(firstLine.length).replace(/^\n/, "");
}
