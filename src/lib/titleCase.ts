import type { ReactNode } from "react";

export function titleCase(str: string): string {
  return str
    .split(/\s+/)
    .map((word) => {
      if (!word) return word;
      // Preserve acronyms like CSE, ATME, UG, PG, BE
      if (/^[A-Z]{2,}$/.test(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function titleCaseNode(node: ReactNode): ReactNode {
  if (typeof node === "string") return titleCase(node);
  if (Array.isArray(node)) return node.map(titleCaseNode);
  return node;
}

export function stripMdEmphasis(s: string): string {
  return s
    .replace(/\*+/g, "")
    .replace(/(^|\s)_+|_+(\s|$)/g, "$1$2")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Title-case every markdown heading line (e.g. `# **cse news**` → `# Cse News`). */
export function titleCaseMarkdownHeadings(md: string): string {
  return md.replace(/^(#{1,6}\s+)(.+)$/gm, (_, prefix: string, text: string) => {
    return prefix + titleCase(stripMdEmphasis(text));
  });
}
