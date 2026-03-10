"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { wikiSections } from "@/lib/wiki-sections";

export function WikiNav() {
  const pathname = usePathname();

  return (
    <div className="surface-card p-4">
      <p className="mb-4 text-meta font-medium uppercase tracking-[0.2em] text-text-muted">
        Wiki ZynxFox
      </p>
      <nav className="space-y-3" aria-label="Navegación de la wiki">
        {wikiSections.map((section) => {
          const hasActiveItem = section.items.some((item) => item.href === pathname);
          return (
            <details
              key={section.title}
              open={hasActiveItem}
              className="group rounded-card border border-border-subtle bg-surface-elevated/60"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-text-primary marker:hidden">
                <span>{section.title}</span>
                <ChevronDown
                  aria-hidden
                  size={16}
                  className="transition-transform duration-fast group-open:rotate-180"
                />
              </summary>
              <ul className="space-y-1 px-2 pb-2">
                {section.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href as any}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm transition-colors duration-fast",
                          active
                            ? "bg-brand-purple/10 text-brand-purple"
                            : "text-text-secondary hover:bg-surface-card hover:text-text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })}
      </nav>
    </div>
  );
}
