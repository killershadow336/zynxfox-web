"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type ButtonProps = {
	variant?: "primary" | "ghost";
	className?: string;
	children: React.ReactNode;
	href?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	disabled?: boolean;
	target?: string;
	rel?: string;
	shine?: boolean; // permite desactivar el brillo por botón
} & React.ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
	({ variant = "primary", className, children, href, disabled, target, rel, shine = true, ...rest }, ref) => {
		const base = variant === "primary" ? `btn-primary ${shine ? "btn-shine" : ""}` : "btn-ghost hover:border-white/20";

		const MotionEl: any = href ? motion.a : motion.button;

		return (
			<MotionEl
				ref={ref as any}
				href={href}
				target={target}
				rel={rel}
				className={cn(base, "will-change-transform", className)}
			whileHover={{ y: -0.5, scale: 1.01 }}
				whileTap={{ scale: 0.98 }}
				aria-disabled={disabled}
				{...rest}
			>
				{children}
			</MotionEl>
		);
	}
);

Button.displayName = "Button";

