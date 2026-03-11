import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";
import { getLegalDocument } from "@/lib/legal-content";

export async function generateMetadata(): Promise<Metadata> {
  const document = await getLegalDocument("terminos");

  return {
    title: document.title,
    description: document.description,
    openGraph: {
      title: `${document.title} | ZynxFox`,
      description: document.description,
      type: "article",
      url: "/terminos",
    },
    twitter: {
      card: "summary_large_image",
      title: `${document.title} | ZynxFox`,
      description: document.description,
    },
  };
}

export default async function TerminosPage() {
  const document = await getLegalDocument("terminos");

  return (
    <LegalLayout
      title={document.title}
      description={document.description}
      toc={document.toc}
      updatedLabel={document.updatedLabel}
    >
      {document.content}
    </LegalLayout>
  );
}
