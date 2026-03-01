import type { Metadata } from "next";
import { WikiNav } from "@/components/wiki/wiki-nav";

export const metadata: Metadata = {
  title: "Wiki",
  description: "Documentación y guía de uso del bot ZynxFox."
};

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        <aside
          className="rounded-lg border border-white/10 bg-white/5 p-4 md:sticky md:top-[calc(var(--navbar-h)+1rem)] md:max-h-[calc(100dvh-var(--navbar-h)-2rem)] md:overflow-auto"
        >
          <WikiNav />
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
