import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorChip } from "@/components/blog/author-chip";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog-content";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Update no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-16 md:py-20">
      <Reveal className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">{post.formattedDate}</Badge>
          <Badge variant="new">{post.readingLabel}</Badge>
          {(post.tags ?? []).map((tag) => (
            <Badge key={tag} variant="beta">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="mt-6 font-heading text-h1 font-extrabold tracking-tight text-text-primary">
          {post.title}
        </h1>
        <p className="mt-4 max-w-2xl text-body text-text-secondary">{post.description}</p>
        <div className="mt-5">
          <AuthorChip author={post.author} avatarUrl={post.authorAvatarUrl} size="md" />
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-10 max-w-3xl">
        <Card className="card-lift p-6 md:p-8">
          <article className="prose">{post.content}</article>
        </Card>
      </Reveal>
    </div>
  );
}
