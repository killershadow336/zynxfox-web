"use client";
import type React from "react";
import { useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
	children: React.ReactNode;
	className?: string;
	maxTilt?: number; // grados
};

export default function TiltCard({ children, className, maxTilt = 6 }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);

	const rx = useSpring(useTransform(my, [0, 1], [maxTilt, -maxTilt]), { stiffness: 180, damping: 12 });
	const ry = useSpring(useTransform(mx, [0, 1], [-maxTilt, maxTilt]), { stiffness: 180, damping: 12 });

	const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width; // 0..1
		const py = (e.clientY - rect.top) / rect.height; // 0..1
		mx.set(px);
		my.set(py);
	}, [mx, my]);

	const onLeave = () => {
		mx.set(0.5);
		my.set(0.5);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={onMove}
			onMouseLeave={onLeave}
			className={className}
			style={{
				transformStyle: "preserve-3d",
				rotateX: rx,
				rotateY: ry,
			}}
		>
			{children}
		</motion.div>
	);
}

