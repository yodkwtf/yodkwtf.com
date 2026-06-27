import type { Element, Nodes, Text } from "hast";

// Rehype plugin: detects a `filename: path/to/file.ext` directive as the first
// line of a code block, strips it from the rendered code, and sets data-filename
// on <pre>. The directive may use any common comment syntax so it works across
// languages, e.g.:
//   // filename: app/page.tsx      (JS/TS, C, Go, Rust, …)
//   # filename: script.py          (Python, Ruby, Bash, YAML, …)
//   -- filename: schema.sql        (SQL, Lua, Haskell)
//   <!-- filename: index.html -->  (HTML, XML, Markdown)
//   /* filename: styles.css */     (CSS, C)
//   ; filename: config.ini         (INI, Lisp, asm)
//   % filename: main.tex           (LaTeX, Erlang)
// Must run BEFORE rehype-pretty-code so the filename line is removed from the
// raw text before shiki tokenises it.

// Leading comment token (line or block opener) + `filename:` + path, with an
// optional block-comment closer (`*/` or `-->`). Case-insensitive on `filename`.
const FILENAME_DIRECTIVE =
  /^\s*(?:\/\/|\/\*|#|--|;|%|<!--)\s*filename:\s*(.+?)\s*(?:\*\/|-->)?\s*$/i;

export function rehypeExtractFilename() {
  return (tree: Nodes) => {
    walk(tree);
  };
}

function walk(node: Nodes) {
  if (node.type === "element" && node.tagName === "pre") {
    processPre(node);
    return;
  }
  if ("children" in node) {
    node.children.forEach(walk);
  }
}

function processPre(pre: Element) {
  const code = pre.children.find(
    (c): c is Element => c.type === "element" && c.tagName === "code",
  );
  if (!code) return;

  const textNode = code.children.find((c): c is Text => c.type === "text");
  if (!textNode) return;

  const firstLine = textNode.value.split("\n")[0];
  const match = firstLine.match(FILENAME_DIRECTIVE);
  if (!match) return;

  pre.properties = pre.properties ?? {};
  pre.properties["data-filename"] = match[1].trim();

  // Remove the filename line and the newline that follows it
  textNode.value = textNode.value.slice(firstLine.length).replace(/^\n/, "");
}
