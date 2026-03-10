import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[0.75rem] font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border-subtle bg-surface-elevated text-text-secondary",
        success: "border-success/35 bg-success/10 text-text-primary",
        warning: "border-warning/35 bg-warning/10 text-text-primary",
        danger: "border-danger/35 bg-danger/10 text-text-primary",
        beta: "border-brand-purple/35 bg-brand-purple/10 text-text-primary",
        new: "border-brand-pink/35 bg-brand-pink/10 text-text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const dotVariants: Record<NonNullable<VariantProps<typeof badgeVariants>["variant"]>, string> = {
  default: "bg-text-muted",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  beta: "bg-brand-purple",
  new: "bg-brand-pink",
};

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    dot?: boolean;
  };

export function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  const key = variant ?? "default";

  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot ? (
        <span
          aria-hidden
          className={cn(
            "inline-flex h-2 w-2 rounded-full",
            key === "success" && "animate-status-pulse",
            dotVariants[key]
          )}
        />
      ) : null}
      {children}
    </span>
  );
}
