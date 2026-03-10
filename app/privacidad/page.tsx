import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";
import { getLegalDocument } from "@/lib/legal-content";

export async function generateMetadata(): Promise<Metadata> {
  const document = await getLegalDocument("privacidad");

  return {
    title: document.title,
    description: document.description,
    openGraph: {
      title: `${document.title} | ZynxFox`,
      description: document.description,
      type: "article",
      url: "/privacidad",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${document.title} | ZynxFox`,
      description: document.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function PrivacidadPage() {
  const document = await getLegalDocument("privacidad");

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
