import { Bug, LifeBuoy, MessageSquareMore, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CommandBadge } from "@/components/ui/command-badge";
import { SectionHeader } from "@/components/ui/section-header";

const supportBlocks = [
  {
    icon: LifeBuoy,
    title: "Ayuda general",
    description: "Dudas sobre instalacion, permisos, modulos, configuracion inicial y uso cotidiano del bot.",
  },
  {
    icon: Bug,
    title: "Errores o fallos",
    description: "Problemas con comandos, paneles, sistemas automaticos o comportamientos inesperados que necesiten revision.",
  },
  {
    icon: ShieldAlert,
    title: "Incidencias de moderacion",
    description: "Casos ligados a permisos, antispam, antilinks, tickets, modmail o acciones sensibles dentro del servidor.",
  },
];

export const metadata = {
  title: "Soporte",
  description: "Canales oficiales de ayuda y soporte de ZynxFox.",
};

export default function SoportePage() {
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "#";

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader
        eyebrow="Soporte oficial"
        title="Ayuda, incidencias y contacto"
        subtitle="Si algo falla, si necesitas orientacion o si un modulo no se comporta como esperabas, este es el punto de entrada oficial para resolverlo."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {supportBlocks.map((block) => (
          <Card key={block.title} className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-elevated text-brand-purple">
              <block.icon aria-hidden size={20} />
            </div>
            <h2 className="mt-5 font-heading text-h3 font-bold text-text-primary">{block.title}</h2>
            <p className="mt-3 text-body text-text-secondary">{block.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-elevated text-brand-purple">
            <MessageSquareMore aria-hidden size={20} />
          </div>
          <h2 className="mt-5 font-heading text-h3 font-bold text-text-primary">
            Que conviene revisar antes de pedir ayuda
          </h2>
          <ul className="mt-4 space-y-3 text-body text-text-secondary">
            <li>Confirma que el bot tenga permisos en el canal o sistema donde falla.</li>
            <li>Revisa si el modulo ya fue configurado desde <CommandBadge command="/config" />.</li>
            <li>Comprueba si la guia correspondiente ya cubre tu caso en la wiki.</li>
          </ul>
        </Card>

        <Card className="p-6">
          <div className="space-y-3">
            <h2 className="font-heading text-h3 font-bold text-text-primary">
              Canal oficial de soporte
            </h2>
            <p className="text-body text-text-secondary">
              El servidor de soporte es el lugar principal para resolver incidencias, pedir orientacion y seguir cambios del bot. La configuracion avanzada sigue en Discord; la web acompana y documenta ese flujo.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={supportUrl}>Entrar al soporte</Button>
              <Button href="/wiki" variant="secondary">
                Ver la wiki
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
