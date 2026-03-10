import { cache } from "react";
import type React from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Callout } from "@/components/ui/callout";
import type { TocItem } from "@/components/ui/table-of-contents";

const legalDirectory = path.join(process.cwd(), "content", "legal");

export type LegalSlug = "terminos" | "privacidad";

type LegalFrontmatter = {
  title: string;
  description: string;
  slug: string;
  lastUpdated: string;
  version: string;
};

type LegalDocument = LegalFrontmatter & {
  content: React.ReactNode;
  toc: TocItem[];
  updatedLabel: string;
};

function stripInlineMarkdown(value: string) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<\/?[^>]+>/g, "")
    .trim();
}

function slugHeading(value: string) {
  return new GithubSlugger().slug(stripInlineMarkdown(value));
}

function parseArticleHeading(value: string) {
  const cleanValue = stripInlineMarkdown(value);
  const match = cleanValue.match(/^Artículo\s+(\d+)\s+[—-]\s+(.+)$/i);

  if (!match) {
    return null;
  }

  return {
    number: match[1].padStart(2, "0"),
    title: match[2].trim(),
  };
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as { props?: { children?: React.ReactNode } }).props?.children);
  }

  return "";
}

function buildToc(source: string) {
  const matches = source.matchAll(/^##\s+(.+)$/gm);

  return Array.from(matches, ([, rawHeading]) => {
    const article = parseArticleHeading(rawHeading);

    return {
      id: slugHeading(rawHeading),
      label: article?.title ?? stripInlineMarkdown(rawHeading),
      number: article?.number,
    };
  });
}

function formatUpdatedLabel(frontmatter: LegalFrontmatter) {
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(frontmatter.lastUpdated));

  return `Versión ${frontmatter.version} · Actualizado el ${formattedDate}`;
}

function sanitizeLegalSource(source: string) {
  return source
    .replace(/^\uFEFF/, "")
    .replace(/^import\s.+$/gm, "")
    .replace(/^#\s+.+\n+/m, "")
    .replace(/^<div className="text-text-secondary text-sm mb-8">[\s\S]*?<\/div>\s*/m, "")
    .replace(/^---\s*\n+/m, "")
    .trim();
}

const legalMdxComponents = {
  Callout,
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const rawText = extractText(children).trim();
    const id = slugHeading(rawText);
    const article = parseArticleHeading(rawText);

    if (article) {
      return (
        <>
          <span className="article-number">{`Artículo ${article.number}`}</span>
          <h2 id={id} {...props}>
            {article.title}
          </h2>
        </>
      );
    }

    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    );
  },
};

export const getLegalDocument = cache(async (slug: LegalSlug): Promise<LegalDocument> => {
  const filePath = path.join(legalDirectory, `${slug}.mdx`);
  const rawSource = await readFile(filePath, "utf8");
  const { data, content } = matter(rawSource);
  const frontmatter = data as LegalFrontmatter;
  const sanitizedSource = sanitizeLegalSource(content);

  const { content: compiledContent } = await compileMDX({
    source: sanitizedSource,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components: legalMdxComponents,
  });

  return {
    ...frontmatter,
    toc: buildToc(sanitizedSource),
    content: compiledContent,
    updatedLabel: formatUpdatedLabel(frontmatter),
  };
});
