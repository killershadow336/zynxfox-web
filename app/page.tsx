"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { buildInviteUrl } from "@/utils/inviteUrl";
import {
  ArrowRight,
  PawPrint,
  ShieldCheck,
  Ticket,
  BarChart3,
  BellRing,
  Wrench,
  SlidersHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/animations/magnetic";

function RotatingWords({ words, interval = 2800 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const list = useMemo(() => words.filter(Boolean), [words]);
  const longest = useMemo(() => list.reduce((a, b) => (b.length > a.length ? b : a), list[0] ?? ""), [list]);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [widthPx, setWidthPx] = useState<number | null>(null);
  useEffect(() => {
    if (list.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % list.length), interval);
    return () => clearInterval(id);
  }, [list, interval]);
  const word = list[index] ?? "completa";
  // Mide el ancho real según la palabra más larga para fijar el contenedor
  useEffect(() => {
    if (!measureRef.current) return;
    const ro = new ResizeObserver(() => {
      const w = measureRef.current?.getBoundingClientRect().width ?? 0;
      if (w) setWidthPx(Math.ceil(w));
    });
    ro.observe(measureRef.current);
    // Medición inicial
    const w0 = measureRef.current.getBoundingClientRect().width;
    if (w0) setWidthPx(Math.ceil(w0));
    return () => ro.disconnect();
  }, [longest]);
  return (
    <span
      className="relative ml-1 inline-flex items-baseline text-brand-300 whitespace-nowrap"
      style={{ width: widthPx ? `${widthPx}px` : undefined }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="absolute inset-y-0 left-0"
        >
          {word}
        </motion.span>
      </AnimatePresence>
      {/* Span oculto para medir el ancho de la palabra más larga con los mismos estilos */}
      <span ref={measureRef} className="invisible select-none whitespace-nowrap">
        {longest || word}
      </span>
    </span>
  );
}

export default function HomePage() {
  const invite = buildInviteUrl();
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "#";
  const donateUrl = process.env.NEXT_PUBLIC_DONATE_URL || "#";
  const [logoError, setLogoError] = useState(false);

  return (
  <div className="relative">
      {/* Fondo del hero más grande para evitar cortes en móvil */}
  {null}

      <div className="container relative flex min-h-[72vh] flex-col items-center justify-center py-14 text-center sm:min-h-[78vh] sm:py-20">
        {/* Logo del bot */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-6"
        >
          {logoError ? (
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-brand-400">
              <PawPrint aria-hidden size={28} />
            </div>
          ) : (
            <Image
              src="/logo.png"
              alt="Logo ZynxFox"
              width={72}
              height={72}
              priority
              className="rounded-2xl shadow-lg shadow-brand-500/10"
              onError={() => setLogoError(true)}
            />
          )}
        </motion.div>
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.1 }}
        >
          ZynxFox — Tu solución para tu comunidad
        </motion.h1>
        <motion.p
          className="mx-auto mt-3 inline-flex items-baseline gap-1 sm:gap-1.5 text-lg font-semibold text-brand-300 tracking-tight"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.18 }}
        >
          <span>Todo en uno:</span>
          <RotatingWords
            words={[
              "moderación",
              "seguridad",
              "antispam",
              "antilinks",
              "registros",
              "utilidades",
            ]}
          />
        </motion.p>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-zinc-300"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
        >
          Protege y gestiona tu comunidad con moderación avanzada, seguridad y utilidades esenciales. Rápido, confiable y listo para tu servidor.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <Magnetic>
            <Button href={invite} className="inline-flex items-center gap-2">
              Invitar al bot <ArrowRight size={18} />
            </Button>
          </Magnetic>
          <Button href={supportUrl} variant="ghost">Servidor de soporte</Button>
          <Button href={donateUrl} variant="ghost">Apoyar el proyecto</Button>
        </motion.div>
      </div>

      {/* Sección de características */}
      <section className="container pb-16">
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          <Feature icon={<ShieldCheck size={18} />} title="Moderación y seguridad" desc="Baneos, expulsiones, advertencias, timeouts y logs. Antispam y antilinks incluidos." />
          <Feature icon={<Wrench size={18} />} title="Herramientas útiles" desc="Comandos de utilidad para admins y usuarios: info, roles, limpieza y más." />
          <Feature icon={<BarChart3 size={18} />} title="Sistema de niveles" desc="XP por mensajes y roles por nivel para incentivar la participación." />
          <Feature icon={<BellRing size={18} />} title="Automatizaciones" desc="Recordatorios, avisos y otras tareas repetitivas, sin dolores de cabeza." />
          <Feature icon={<SlidersHorizontal size={18} />} title="Totalmente configurable" desc="Ajustes por servidor y paneles guiados en Discord." />
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10">
      <div className="mb-2 inline-flex items-center gap-2 text-brand-300">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/10 text-brand-300">
          {icon}
        </span>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-zinc-300">{desc}</p>
    </div>
  );
}
