"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const PARTICLE_COUNT = 54;

export function HeroBackdrop() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!rootRef.current || !canvasRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.body.dataset.homeScene = "true";

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;

    const pointer = { x: 0.5, y: 0.32 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let time = 0;

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00045,
      vy: (Math.random() - 0.5) * 0.00045,
      r: 1.5 + Math.random() * 2.4,
    }));

    function resize() {
      const root = rootRef.current;
      const canvas = canvasRef.current;
      if (!root || !canvas) return;

      const rect = root.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    function handlePointerMove(event: PointerEvent) {
      const root = rootRef.current;
      if (!root) return;

      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      pointer.x += (Math.min(Math.max(x, 0), 1) - pointer.x) * 0.18;
      pointer.y += (Math.min(Math.max(y, 0), 1) - pointer.y) * 0.18;
    }

    function drawGlow() {
      const spotlightX = pointer.x * width;
      const spotlightY = pointer.y * height;

      const gradientA = ctx.createRadialGradient(spotlightX, spotlightY, 0, spotlightX, spotlightY, width * 0.24);
      gradientA.addColorStop(0, "rgba(91, 84, 232, 0.34)");
      gradientA.addColorStop(1, "rgba(91, 84, 232, 0)");
      ctx.fillStyle = gradientA;
      ctx.fillRect(0, 0, width, height);

      const gradientB = ctx.createRadialGradient(
        spotlightX + width * 0.08,
        spotlightY - height * 0.04,
        0,
        spotlightX + width * 0.08,
        spotlightY - height * 0.04,
        width * 0.2
      );
      gradientB.addColorStop(0, "rgba(232, 84, 122, 0.24)");
      gradientB.addColorStop(1, "rgba(232, 84, 122, 0)");
      ctx.fillStyle = gradientB;
      ctx.fillRect(0, 0, width, height);
    }

    function drawSweep() {
      const sweepX = ((Math.sin(time * 0.55) + 1) / 2) * width;
      const gradient = ctx.createLinearGradient(sweepX - 160, 0, sweepX + 160, height);
      gradient.addColorStop(0, "rgba(91, 84, 232, 0)");
      gradient.addColorStop(0.45, "rgba(91, 84, 232, 0.06)");
      gradient.addColorStop(0.55, "rgba(232, 84, 122, 0.1)");
      gradient.addColorStop(1, "rgba(232, 84, 122, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function drawParticles() {
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -0.05 || particle.x > 1.05) particle.vx *= -1;
        if (particle.y < -0.05 || particle.y > 1.05) particle.vy *= -1;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        const ax = a.x * width;
        const ay = a.y * height;

        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const bx = b.x * width;
          const by = b.y * height;
          const distance = Math.hypot(ax - bx, ay - by);

          if (distance > 140) continue;

          ctx.strokeStyle = `rgba(232, 234, 246, ${0.1 - distance / 1800})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }

      for (const particle of particles) {
        const x = particle.x * width;
        const y = particle.y * height;
        const pulse = 0.75 + Math.sin(time * 2.1 + x * 0.01) * 0.25;

        ctx.beginPath();
        ctx.fillStyle = "rgba(232, 234, 246, 0.72)";
        ctx.shadowBlur = 18;
        ctx.shadowColor = "rgba(91, 84, 232, 0.45)";
        ctx.arc(x, y, particle.r * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    }

    function render() {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);
      drawGlow();
      drawSweep();
      drawParticles();
      frame = window.requestAnimationFrame(render);
    }

    resize();
    render();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(rootRef.current);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      delete document.body.dataset.homeScene;
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="hero-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="hero-backdrop__base" />
      <div className="hero-backdrop__grid" />
      <div className="hero-backdrop__halo hero-backdrop__halo--purple" />
      <div className="hero-backdrop__halo hero-backdrop__halo--pink" />
      <div className="hero-backdrop__ring hero-backdrop__ring--one" />
      <div className="hero-backdrop__ring hero-backdrop__ring--two" />
      <canvas ref={canvasRef} className="hero-backdrop__canvas" />
      <div className="hero-backdrop__noise" />
    </div>
  );
}
