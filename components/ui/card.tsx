import type React from "react";
import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border-subtle bg-surface-card transition-[border-color,box-shadow,transform] duration-fast ease-out-quint hover:border-brand-purple hover:shadow-brand-glow focus-within:border-brand-purple focus-within:shadow-brand-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
