"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export type TocItem = {
  id: string;
  label: string;
  number?: string;
};

type TableOfContentsProps = {
  title?: string;
  mobileLabel?: string;
  items: TocItem[];
  className?: string;
};

export function TableOfContents({
  title = "Tabla de contenidos",
  mobileLabel = "Ver contenidos",
  items,
  className,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  useEffect(() => {
    if (!itemIds.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: [0.15, 0.4, 0.75],
        rootMargin: "-96px 0px -55% 0px",
      }
    );

    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [itemIds]);

  if (!items.length) return null;

  return (
    <nav aria-label={title} className={className}>
      <button
        className="flex w-full items-center justify-between rounded-card border border-border-subtle bg-surface-card px-4 py-3 text-left text-sm text-text-primary md:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-controls="toc-items"
        aria-expanded={open}
      >
        {mobileLabel}
        <ChevronDown
          aria-hidden
          size={16}
          className={cn("transition-transform duration-fast", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "mt-3 rounded-card border border-border-subtle bg-surface-card p-4 md:mt-0",
          !open && "hidden md:block"
        )}
      >
        <p className="mb-4 text-meta font-medium uppercase tracking-[0.2em] text-text-muted">
          {title}
        </p>
        <ul id="toc-items" className="space-y-1.5">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-start gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-fast",
                    active
                      ? "bg-brand-purple/10 text-brand-purple"
                      : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary"
                  )}
                  aria-current={active ? "true" : undefined}
                >
                  {item.number ? (
                    <span className="font-mono text-[0.72rem] text-text-muted">{item.number}</span>
                  ) : null}
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
