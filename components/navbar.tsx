"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buildInviteUrl } from "@/utils/inviteUrl";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const invite = buildInviteUrl();
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "#";
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú cuando cambia la ruta (evita overlays persistentes)
  useEffect(() => {
  setOpen(false);
  }, [pathname]);

  // Cierra el menú si se redimensiona a escritorio
  useEffect(() => {
    const onResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Bloquear el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const { body } = document;
    if (open) {
      const prev = body.style.overflow;
      body.style.overflow = 'hidden';
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <Image src="/logo.png" alt="Logo" width={24} height={24} className="rounded" />
          ZynxFox
        </Link>
        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white outline-none ring-brand-500/40 transition hover:bg-white/10 focus-visible:ring-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className="hidden items-center gap-4 text-sm sm:flex">
          <Link href="/wiki" className="text-zinc-300 hover:text-white">Wiki</Link>
          <Link href="/comandos" className="text-zinc-300 hover:text-white">Comandos</Link>
          <Link href="/apoyo" className="text-zinc-300 hover:text-white">Apoyo</Link>
          <Button href={invite} shine={false}>Invitar</Button>
          <Button href={supportUrl} variant="ghost">Soporte</Button>
        </nav>
      </div>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay para oscurecer el fondo y cerrar al pulsar */}
            <motion.button
              key="overlay"
              aria-hidden
              className="fixed inset-0 top-16 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
            />
            {/* Panel deslizante */}
            <motion.div
              key="mobile-panel"
              id="mobile-nav"
              className="fixed left-0 right-0 top-16 z-50 sm:hidden"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="border-b border-white/10 bg-zinc-900/95 shadow-lg shadow-black/30">
                <div className="container flex flex-col gap-3 py-4 text-sm">
                  <Link href="/wiki" className="text-zinc-300 hover:text-white" onClick={() => setOpen(false)}>
                    Wiki
                  </Link>
                  <Link href="/comandos" className="text-zinc-300 hover:text-white" onClick={() => setOpen(false)}>
                    Comandos
                  </Link>
                  <Link href="/apoyo" className="text-zinc-300 hover:text-white" onClick={() => setOpen(false)}>
                    Apoyo
                  </Link>
                  <div className="flex gap-2 pt-1">
                    <Button href={invite} shine={false} className="flex-1">
                      Invitar
                    </Button>
                    <Button href={supportUrl} variant="ghost" className="flex-1">
                      Soporte
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
