import type React from "react";
import { cn } from "@/utils/cn";

type GradientTextProps = React.HTMLAttributes<HTMLSpanElement>;

export function GradientText({ className, children, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-brand-gradient bg-clip-text text-transparent supports-[not(background-clip:text)]:text-brand-purple",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
