import type React from "react";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-meta font-medium uppercase tracking-[0.24em] text-text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-heading text-h2 font-extrabold tracking-tight text-text-primary">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-2xl text-body text-text-secondary">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}
