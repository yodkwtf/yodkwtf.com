// Runs AFTER rehype-pretty-code.
// rehype-pretty-code wraps every code block in <figure data-rehype-pretty-code-figure>
// and moves custom data-* attributes (like data-filename) from <pre> to that <figure>.
//
// This plugin reverses that: it lifts the <pre> out of the <figure>, moves
// data-filename back onto <pre>, and removes the now-empty <figure> wrapper.
// After this runs, the tree has plain <pre data-filename? data-language ...> elements
// which our React Pre override handles directly — no React context needed.
export function rehypeFlattenCodeFigure() {
  return (tree: any) => {
    walkParent(tree);
  };
}

function walkParent(node: any) {
  if (!Array.isArray(node.children)) return;

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];

    if (
      child.type === "element" &&
      child.tagName === "figure" &&
      child.properties != null &&
      "data-rehype-pretty-code-figure" in child.properties
    ) {
      // Extract filename that rehype-pretty-code promoted to the figure
      const filename = child.properties["data-filename"] as string | undefined;

      // Find the <pre> inside the figure (ignore figcaption title elements)
      const preEl = child.children?.find(
        (c: any) => c.type === "element" && c.tagName === "pre",
      );

      if (preEl) {
        // Put filename back on the <pre> so our React override can read it
        if (filename) {
          preEl.properties = preEl.properties ?? {};
          preEl.properties["data-filename"] = filename;
        }

        // Replace the <figure> with the bare <pre> in the parent's children array
        node.children[i] = preEl;
      }
      // If no <pre> found, leave the figure as-is
    } else {
      walkParent(child);
    }
  }
}
