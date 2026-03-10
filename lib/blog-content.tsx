import { cache } from "react";
import type React from "react";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Callout } from "@/components/ui/callout";
import { CommandBadge } from "@/components/ui/command-badge";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  tags?: string[];
  published?: boolean;
};

export type BlogPostSummary = Omit<BlogFrontmatter, "tags"> & {
  tags: string[];
  formattedDate: string;
  readingMinutes: number;
};

export type BlogPost = BlogPostSummary & {
  content: React.ReactNode;
};

function sanitizeSource(source: string) {
  return source.replace(/^\uFEFF/, "").replace(/^import\s.+$/gm, "").trim();
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-BO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function countReadingMinutes(source: string) {
  const plainText = source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/[#>*_[\]\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = plainText ? plainText.split(" ").length : 0;
  return Math.max(1, Math.ceil(words / 220));
}

const blogComponents = {
  Callout,
  CommandBadge,
};

async function readPostFile(fileName: string) {
  const filePath = path.join(blogDirectory, fileName);
  const rawSource = await readFile(filePath, "utf8");
  const { data, content } = matter(rawSource);
  const frontmatter = data as BlogFrontmatter;
  const sanitizedSource = sanitizeSource(content);

  return {
    frontmatter,
    sanitizedSource,
  };
}

export const getAllBlogPosts = cache(async (): Promise<BlogPostSummary[]> => {
  const files = await readdir(blogDirectory);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const { frontmatter, sanitizedSource } = await readPostFile(file);
        if (frontmatter.published === false) return null;

        return {
          ...frontmatter,
          tags: frontmatter.tags ?? [],
          formattedDate: formatDate(frontmatter.date),
          readingMinutes: countReadingMinutes(sanitizedSource),
        } satisfies BlogPostSummary;
      })
  );

  const publishedPosts = posts.filter((post): post is BlogPostSummary => post !== null);
  return publishedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  const files = await readdir(blogDirectory);

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const { frontmatter, sanitizedSource } = await readPostFile(file);
    if (frontmatter.slug !== slug || frontmatter.published === false) continue;

    const { content } = await compileMDX({
      source: sanitizedSource,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
      components: blogComponents,
    });

    return {
      ...frontmatter,
      tags: frontmatter.tags ?? [],
      formattedDate: formatDate(frontmatter.date),
      readingMinutes: countReadingMinutes(sanitizedSource),
      content,
    };
  }

  return null;
});
