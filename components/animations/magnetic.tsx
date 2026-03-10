"use client";
import type React from "react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
	children: React.ReactNode;
	strength?: number; // pixeles de atracción
	className?: string;
};

export default function Magnetic({ children, strength = 6, className }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
	const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

	const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const dx = e.clientX - (rect.left + rect.width / 2);
		const dy = e.clientY - (rect.top + rect.height / 2);
		x.set((dx / rect.width) * strength);
		y.set((dy / rect.height) * strength);
	};

	const onLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={{ x: sx, y: sy }}>
			{children}
		</motion.div>
	);
}

