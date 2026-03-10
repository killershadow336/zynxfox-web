import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const calloutVariants = cva("rounded-card border px-4 py-4 text-sm leading-7", {
  variants: {
    variant: {
      info: "border-brand-purple/30 bg-brand-purple/8 border-l-[3px] border-l-brand-purple text-text-secondary",
      warning: "border-warning/30 bg-warning/8 border-l-[3px] border-l-warning text-text-secondary",
      danger: "border-danger/30 bg-danger/8 border-l-[3px] border-l-danger text-text-secondary",
      success: "border-success/30 bg-success/8 border-l-[3px] border-l-success text-text-secondary",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

type CalloutProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof calloutVariants> & {
    title?: string;
  };

export function Callout({
  variant,
  title,
  className,
  children,
  ...props
}: CalloutProps) {
  return (
    <div className={cn(calloutVariants({ variant }), className)} {...props}>
      {title ? <p className="mb-2 font-medium text-text-primary">{title}</p> : null}
      <div>{children}</div>
    </div>
  );
}
