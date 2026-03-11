import Link from "next/link";
import { ArrowRight, BookOpenText, LifeBuoy, Settings2, Sparkles, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CommandBadge } from "@/components/ui/command-badge";
import { SectionHeader } from "@/components/ui/section-header";
import { wikiSections } from "@/lib/wiki-sections";

const highlights = [
  {
    icon: Settings2,
    title: "Primeros pasos",
    description: "Invitacion, permisos basicos y puesta en marcha desde /config para dejar el bot util desde el minuto uno.",
    href: "/wiki/configuracion-inicial",
  },
  {
    icon: Wrench,
    title: "Modulos y sistemas",
    description: "Tickets, moderacion, niveles, Centro de Creadores, sorteos, TTS y otras funciones organizadas por guias.",
    href: "/wiki/modulos",
  },
  {
    icon: LifeBuoy,
    title: "Ayuda y resolucion",
    description: "Preguntas frecuentes, errores comunes y ruta directa al soporte oficial si algo no sale como esperabas.",
    href: "/wiki/solucion-de-problemas",
  },
];

export const metadata = {
  title: "Wiki",
  description: "Centro de ayuda, documentacion publica y guias de configuracion de ZynxFox.",
  openGraph: {
    title: "Wiki de ZynxFox",
    description: "Guias publicas para instalar, configurar modulos y resolver dudas de ZynxFox.",
    url: "/wiki",
    images: ["/opengraph-image?v=fox-logo-v2"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiki de ZynxFox",
    description: "Guias publicas para instalar, configurar modulos y resolver dudas de ZynxFox.",
    images: ["/twitter-image?v=fox-logo-v2"],
  },
};

export default function WikiPage() {
  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Centro de ayuda"
        title="Documentacion publica de ZynxFox"
        subtitle="Guias reales para instalar el bot, activar modulos, configurar sistemas desde Discord y resolver problemas comunes."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-elevated text-brand-purple">
              <item.icon aria-hidden size={20} />
            </div>
            <h2 className="mt-5 font-heading text-h3 font-bold text-text-primary">{item.title}</h2>
            <p className="mt-3 text-body text-text-secondary">{item.description}</p>
            <Link
              href={item.href as any}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-purple transition-colors hover:text-brand-pink"
            >
              Abrir guia <ArrowRight aria-hidden size={14} />
            </Link>
          </Card>
        ))}
      </div>

      <Card className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-elevated text-brand-pink">
            <Sparkles aria-hidden size={20} />
          </span>
          <div className="space-y-4">
            <h2 className="font-heading text-h3 font-bold text-text-primary">
              Que vas a encontrar aqui
            </h2>
            <p className="text-body text-text-secondary">
              La wiki esta pensada para acompanar el uso real del bot, con guias claras para configurar modulos, revisar comandos y resolver dudas frecuentes.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
              <span>Punto de partida:</span>
              <CommandBadge command="/config" />
              <span>para modulos, permisos y sistemas automaticos.</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        {wikiSections.map((section) => (
          <Card key={section.title} className="p-5">
            <p className="text-meta font-medium uppercase tracking-[0.2em] text-text-secondary">
              {section.title}
            </p>
            <ul className="mt-5 space-y-3">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href as any}
                    className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors duration-fast hover:bg-surface-elevated hover:text-text-primary"
                  >
                    <span>{item.label}</span>
                    <ArrowRight aria-hidden size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-elevated text-brand-purple">
            <BookOpenText aria-hidden size={20} />
          </span>
          <div className="space-y-3">
            <h2 className="font-heading text-h3 font-bold text-text-primary">
              Mas guias y recursos visuales
            </h2>
            <p className="text-body text-text-secondary">
              Esta seccion seguira sumando capturas, ejemplos y tutoriales para que usar cada modulo sea todavia mas simple.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
