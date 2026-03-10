import type React from "react";
import { TableOfContents, type TocItem } from "@/components/ui/table-of-contents";

type LegalLayoutProps = {
  title: string;
  description?: string;
  toc: TocItem[];
  children: React.ReactNode;
  updatedLabel?: string;
};

export function LegalLayout({
  title,
  description,
  toc,
  children,
  updatedLabel,
}: LegalLayoutProps) {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,800px)_260px] lg:items-start">
        <article className="min-w-0">
          <header className="mb-10 space-y-4">
            <p className="text-meta font-medium uppercase tracking-[0.24em] text-text-secondary">
              Legal
            </p>
            <div className="space-y-3">
              <h1 className="font-heading text-h1 font-extrabold tracking-tight text-text-primary">
                {title}
              </h1>
              {description ? (
                <p className="max-w-2xl text-body text-text-secondary">{description}</p>
              ) : null}
              {updatedLabel ? <p className="text-sm text-text-muted">{updatedLabel}</p> : null}
            </div>
          </header>
          <div className="legal-content">{children}</div>
        </article>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <TableOfContents title="Artículos" mobileLabel="Ver artículos" items={toc} />
        </aside>
      </div>
    </div>
  );
}
