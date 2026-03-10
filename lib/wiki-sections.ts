import { withLocale } from "@/lib/site";

export type WikiNavItem = { href: string; label: string };
export type WikiNavSection = { title: string; items: WikiNavItem[] };

export const wikiSections: WikiNavSection[] = [
  {
    title: "Primeros pasos",
    items: [
      { href: withLocale("/wiki"), label: "Centro de ayuda" },
      { href: withLocale("/wiki/instalacion"), label: "Instalación" },
      { href: withLocale("/wiki/configuracion-inicial"), label: "Configuración inicial" },
      { href: withLocale("/comandos"), label: "Catálogo de comandos" },
    ],
  },
  {
    title: "Módulos",
    items: [
      { href: withLocale("/wiki/modulos"), label: "Resumen de módulos" },
      { href: withLocale("/wiki/modulos/tickets"), label: "Tickets" },
      { href: withLocale("/wiki/modulos/moderacion"), label: "Moderación" },
      { href: withLocale("/wiki/modulos/niveles"), label: "Niveles" },
      { href: withLocale("/wiki/modulos/recordatorios-giveaways"), label: "Recordatorios y sorteos" },
      { href: withLocale("/wiki/modulos/centro-de-creadores"), label: "Centro de Creadores" },
    ],
  },
  {
    title: "Soporte",
    items: [
      { href: withLocale("/wiki/preguntas-frecuentes"), label: "Preguntas frecuentes" },
      { href: withLocale("/wiki/solucion-de-problemas"), label: "Solución de problemas" },
      { href: withLocale("/wiki/privacidad-y-seguridad"), label: "Privacidad y seguridad" },
    ],
  },
];
