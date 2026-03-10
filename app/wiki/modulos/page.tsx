import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const modules = [
  {
    title: "Moderación",
    href: "/wiki/modulos/moderacion",
    description: "Sanciones, limpieza, antilinks y antispam para mantener el orden del servidor.",
  },
  {
    title: "Tickets",
    href: "/wiki/modulos/tickets",
    description: "Soporte privado con paneles, logs y flujos más organizados para staff y usuarios.",
  },
  {
    title: "Niveles",
    href: "/wiki/modulos/niveles",
    description: "XP, roles por nivel y engagement para comunidades activas.",
  },
  {
    title: "Recordatorios y sorteos",
    href: "/wiki/modulos/recordatorios-giveaways",
    description: "Automatización de avisos, eventos temporales y dinámicas para la comunidad.",
  },
  {
    title: "Centro de Creadores",
    href: "/wiki/modulos/centro-de-creadores",
    description: "Avisos para creadores y cuentas de YouTube, Twitch y TikTok desde un solo módulo.",
  },
];

export default function ModulosPage() {
  return (
    <article className="doc-content">
      <h1>Módulos</h1>
      <p>
        ZynxFox organiza sus sistemas en módulos para que puedas activar solo lo que tu comunidad necesita y dejar
        fuera lo que no aporta valor.
      </p>

      <h2>Cómo conviene leer esta sección</h2>
      <p>
        Si todavía no configuraste nada, empieza por módulos operativos como moderación o tickets. Si tu servidor ya
        funciona bien y buscas más actividad, ve después a niveles, sorteos o Centro de Creadores.
      </p>

      <div className="not-prose mt-8 grid gap-4 md:grid-cols-2">
        {modules.map((module) => (
          <Card key={module.title} className="p-5">
            <h2 className="mt-0 font-heading text-h3 font-bold text-text-primary">{module.title}</h2>
            <p className="mt-3 text-body text-text-secondary">{module.description}</p>
            <Link
              href={module.href as any}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-purple transition-colors hover:text-brand-pink"
            >
              Ver guía <ArrowRight aria-hidden size={14} />
            </Link>
          </Card>
        ))}
      </div>

      <h2>Orden sugerido</h2>
      <ol>
        <li>Moderación</li>
        <li>Tickets</li>
        <li>Niveles</li>
        <li>Recordatorios y sorteos</li>
        <li>Centro de Creadores</li>
      </ol>
    </article>
  );
}
