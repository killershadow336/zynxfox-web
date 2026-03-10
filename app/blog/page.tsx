import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AuthorChip } from "@/components/blog/author-chip";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { getAllBlogPosts } from "@/lib/blog-content";
import { withLocale } from "@/lib/site";

export const metadata: Metadata = {
  title: "Updates",
  description: "Novedades y publicaciones oficiales de ZynxFox.",
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="container py-16 md:py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Updates"
          title="Novedades oficiales de ZynxFox"
          subtitle="Publicaciones cortas para anunciar cambios, mejoras y avances importantes del bot."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {posts.map((post) => (
          <Reveal key={post.slug}>
            <Card className="card-lift h-full p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">{post.formattedDate}</Badge>
                <Badge variant="new">{post.readingLabel}</Badge>
                {(post.tags ?? []).slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="beta">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h2 className="mt-5 font-heading text-h2 font-bold text-text-primary">
                <Link
                  className="transition-colors hover:text-brand-pink"
                  href={withLocale(`/blog/${post.slug}`) as any}
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-body text-text-secondary">{post.description}</p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <AuthorChip author={post.author} avatarUrl={post.authorAvatarUrl} />
                <Link
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-brand-pink"
                  href={withLocale(`/blog/${post.slug}`) as any}
                >
                  Leer update <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
