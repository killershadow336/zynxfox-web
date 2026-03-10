import type React from "react";
import type { Metadata } from "next";
import { DocLayout } from "@/components/layout/doc-layout";
import { WikiNav } from "@/components/wiki/wiki-nav";

export const metadata: Metadata = {
  title: "Wiki",
  description: "Documentación y guías de uso de ZynxFox.",
};

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return <DocLayout sidebar={<WikiNav />}>{children}</DocLayout>;
}
