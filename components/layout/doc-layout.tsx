import type React from "react";
import { TableOfContents, type TocItem } from "@/components/ui/table-of-contents";
import { cn } from "@/lib/cn";

type DocLayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  toc?: TocItem[];
  className?: string;
};

export function DocLayout({ sidebar, children, toc = [], className }: DocLayoutProps) {
  return (
    <div className={cn("container py-10 md:py-12", className)}>
      <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,720px)_240px]">
        <aside className="xl:sticky xl:top-24 xl:h-fit">{sidebar}</aside>
        <main className="min-w-0">{children}</main>
        <aside className="hidden xl:block xl:sticky xl:top-24 xl:h-fit">
          <TableOfContents items={toc} title="En esta guía" mobileLabel="En esta guía" />
        </aside>
      </div>
    </div>
  );
}
