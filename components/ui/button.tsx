"use client";

import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button font-medium transition-all duration-fast ease-out-quint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "button-primary-enhanced bg-brand-gradient text-white hover:scale-[1.03] active:scale-[0.985]",
        secondary:
          "border border-border-subtle bg-transparent text-text-primary hover:border-brand-purple hover:bg-surface-card",
        ghost:
          "bg-transparent text-text-secondary hover:text-text-primary",
      },
      size: {
        default: "px-6 py-3 text-sm",
        compact: "px-4 py-2 text-sm",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      block: false,
    },
  }
);

type SharedProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
  href?: string;
  block?: boolean;
};

type ButtonAsButton = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;
type ButtonAsAnchor = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

export function Button({
  className,
  variant,
  size,
  block,
  href,
  children,
  ...props
}: ButtonAsButton | ButtonAsAnchor) {
  const classes = cn(buttonVariants({ variant, size, block }), className);
  const content =
    variant === "primary" ? <span className="button-primary-enhanced__label">{children}</span> : children;

  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a className={classes} href={href} {...anchorProps}>
          {content}
        </a>
      );
    }

    return (
      <Link className={classes} href={href as any} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

export { buttonVariants };
