"use client";
import type React from "react";
import { useCallback, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type SpotlightProps = {
	className?: string;
	children: React.ReactNode;
	radius?: number; // px
};

export default function Spotlight({ className, children, radius = 200 }: SpotlightProps) {
	const ref = useRef<HTMLDivElement>(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);

		const bg = useTransform([mx, my], ([x, y]) => {
			return `radial-gradient(${radius}px ${radius}px at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 62%)`;
		});

	const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		mx.set(e.clientX - rect.left);
		my.set(e.clientY - rect.top);
	}, [mx, my]);

	return (
			<div ref={ref} onMouseMove={onMove} className={className}>
				<motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: bg, mixBlendMode: "screen" }} />
			{children}
		</div>
	);
}

