"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type Section = { id: string; title: string };

export default function Toc({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);

  // Scrollspy con IntersectionObserver
  useEffect(() => {
    if (!sections?.length) return;
    const TOP_OFFSET_PX = 64; // altura aprox. del navbar (h-16)
    let observer: IntersectionObserver | null = null;
    try {
      observer = new IntersectionObserver(
      (entries) => {
        // Priorizar el elemento con mayor intersección visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = (visible[0].target as HTMLElement).id;
          if (id && id !== activeId) setActiveId(id);
          return;
        }

        // Fallback: el más cercano al top cuando no hay intersección clara
        const nearest = [...entries].sort(
          (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        )[0];
        const id = (nearest?.target as HTMLElement | undefined)?.id;
        if (id && id !== activeId) setActiveId(id);
      },
        {
          // Zona caliente que descuenta el navbar sticky
          root: null,
          threshold: [0.1, 0.25, 0.5, 0.75],
          rootMargin: `-${TOP_OFFSET_PX}px 0px -55% 0px`,
        }
      );
    } catch {
      // En navegadores con soporte inconsistente, no usar scrollspy
      observer = null;
    }

    const elements: HTMLElement[] = [];
    if (observer) {
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          observer.observe(el);
          elements.push(el);
        }
      }
    }

    return () => {
      if (observer) {
        for (const el of elements) observer.unobserve(el);
        observer.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);
  return (
    <nav aria-label="Tabla de contenidos" className="select-none">
      {/* Móvil: botón para desplegar */}
      <button
        className="flex w-full items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white sm:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="toc-list"
      >
        Guía rápida
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      <ul
        id="toc-list"
        className={`mt-2 space-y-1 ${open ? "block" : "hidden"} sm:mt-0 sm:block sm:space-y-2`}
      >
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <li key={s.id}>
              <Link
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={
                  "block rounded-md px-2 py-1 text-sm transition-colors " +
                  (isActive
                    ? "bg-white/10 text-white font-medium"
                    : "text-zinc-300 hover:bg-white/10 hover:text-white")
                }
              >
                {s.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
