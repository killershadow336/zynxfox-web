"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string };

const sections: { title: string; items: Item[] }[] = [
  {
    title: "Guía rápida",
    items: [
      { href: "/wiki/instalacion", label: "Instalación (invitar)" },
      { href: "/wiki/configuracion-inicial", label: "Configuración inicial" },
  { href: "/comandos", label: "Lista de comandos" }
    ]
  },
  {
    title: "Módulos",
    items: [
      { href: "/wiki/modulos", label: "Resumen de módulos" },
      { href: "/wiki/modulos/tickets", label: "Tickets" },
      { href: "/wiki/modulos/moderacion", label: "Moderación" },
      { href: "/wiki/modulos/niveles", label: "Niveles" },
      { href: "/wiki/modulos/recordatorios-giveaways", label: "Recordatorios y sorteos" }
    ]
  },
  {
    title: "Soporte",
    items: [
      { href: "/wiki/preguntas-frecuentes", label: "Preguntas frecuentes" },
      { href: "/wiki/solucion-de-problemas", label: "Solución de problemas" },
      { href: "/wiki/privacidad-y-seguridad", label: "Privacidad y seguridad" },
      
    ]
  }
];

export function WikiNav() {
  const pathname = usePathname();
  return (
    <nav className="space-y-6">
      {sections.map((sec) => (
        <div key={sec.title}>
          <h3 className="text-xs uppercase tracking-wider text-zinc-400">{sec.title}</h3>
          <ul className="mt-2 space-y-1">
            {sec.items.map((it) => {
              const active = pathname === it.href;
              return (
                <li key={it.href}>
                  <Link
                    href={it.href as any}
                    className={
                      "block rounded px-2 py-1 text-sm " +
                      (active
                        ? "bg-white/10 text-white"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white")
                    }
                  >
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
