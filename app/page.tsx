import {
  ArrowRight,
  BellRing,
  ShieldCheck,
  Ticket,
  Trophy,
  Volume2,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CapabilityMarquee } from "@/components/home/capability-marquee";
import { HeroBackdrop } from "@/components/home/hero-backdrop";
import { CommandBadge } from "@/components/ui/command-badge";
import { GradientText } from "@/components/ui/gradient-text";
import { MediaSlot } from "@/components/ui/media-slot";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { buildInviteUrl } from "@/utils/inviteUrl";
import { withLocale } from "@/lib/site";

const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "#";

const featureCards = [
  {
    icon: ShieldCheck,
    title: "Moderación y seguridad",
    description: "Warns, sanciones, antispam, antilinks y flujos de moderación pensados para servidores activos.",
  },
  {
    icon: Ticket,
    title: "Tickets y soporte",
    description: "Sistema de tickets configurable desde Discord, con espacio reservado para documentación visual y tutoriales.",
  },
  {
    icon: Wrench,
    title: "Configuración en Discord",
    description: "La configuración principal sigue dentro de Discord con una ruta clara hacia /config para administradores.",
  },
  {
    icon: Trophy,
    title: "Niveles y sorteos",
    description: "XP automática, rangos, sorteos y dinámicas listas para mantener activo tu servidor sin montar sistemas aparte.",
  },
  {
    icon: Volume2,
    title: "TTS y voz",
    description: "Mensajes hablados, apoyo para canales de voz y herramientas útiles para comunidades que quieren algo más dinámico.",
  },
  {
    icon: BellRing,
    title: "Centro de Creadores",
    description: "Avisos de actividad para creadores y espacios pensados para comunidades que siguen streams, videos y novedades.",
  },
];

const featureRail = [
  "Logs y auditoria",
  "Sugerencias con votos",
  "Anti link configurable",
  "Anti spam automatico",
  "Ausencias y AFK",
  "Embeds y mensajes",
  "Giveaways",
  "Recordatorios",
  "Canales temporales",
  "Rangos y niveles",
  "Soporte por tickets",
  "Modmail",
  "Centro de Creadores",
  "TTS en voz",
  "Herramientas de staff",
  "Panel /config",
  "Info del servidor",
  "Comandos de utilidad",
];

export default function HomePage() {
  const inviteUrl = buildInviteUrl();

  return (
    <div className="relative z-10">
      <HeroBackdrop />
      <section className="container py-16 md:py-24">

        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border-subtle bg-surface-card/70 px-4 py-2 text-sm text-text-secondary backdrop-blur">
            <span>Bot para comunidades de Discord</span>
            <Badge variant="success" dot>
              Online
            </Badge>
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl font-heading text-hero font-extrabold tracking-tight text-balance text-text-primary">
            <GradientText>El bot que tu servidor necesitaba.</GradientText>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-body text-text-secondary text-balance">
            Moderación, niveles, tickets, TTS, sorteos y mucho más. Todo desde Discord, todo desde <CommandBadge command="/config" />.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={inviteUrl}>
              Invitar al bot{" "}
              <span className="button-arrow-loop" aria-hidden>
                <ArrowRight size={16} />
              </span>
            </Button>
            <Button href={withLocale("/wiki")} variant="secondary">
              Ver documentación
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="container py-8 md:py-12">
        <Reveal>
          <SectionHeader
            eyebrow="Capacidades reales"
            title="Todo lo que tu servidor necesita, sin complicaciones."
            subtitle="71 comandos slash, 13 módulos configurables y sistemas automáticos listos desde el primer minuto."
          />
        </Reveal>

        <Reveal>
          <CapabilityMarquee items={featureRail} />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <Reveal key={feature.title}>
              <Card className="card-lift h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-surface-elevated text-brand-purple">
                  <feature.icon aria-hidden size={20} />
                </div>
                <h2 className="mt-5 font-heading text-h3 font-bold text-text-primary">{feature.title}</h2>
                <p className="mt-3 text-body text-text-secondary">{feature.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <Reveal>
          <SectionHeader
            eyebrow="Guías y ayuda"
            title="Ayuda clara para configurar y aprovechar cada módulo"
            subtitle="Encuentra guías, capturas, tutoriales y ejemplos para usar el bot con más facilidad."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <MediaSlot
              title="Capturas del flujo de /config"
              description="Guías visuales para entender cada ajuste y dejar el servidor listo más rápido."
            />
          </Reveal>
          <Reveal>
            <MediaSlot
              title="Tutoriales y demos en video"
              description="Espacio pensado para mostrar funciones clave del bot de forma simple y directa."
              kind="video"
            />
          </Reveal>
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <Reveal>
          <Card className="card-lift flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-meta font-medium uppercase tracking-[0.24em] text-text-secondary">
                Soporte y comunidad
              </p>
              <h2 className="font-heading text-h2 font-bold text-text-primary">
                Si necesitas ayuda, el soporte oficial está a un clic.
              </h2>
              <p className="max-w-2xl text-body text-text-secondary">
                Encuentra guías, consulta comandos y, si lo necesitas, entra al soporte para resolver dudas o problemas con tu servidor.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={withLocale("/soporte")} variant="secondary">
                Abrir soporte
              </Button>
              <Button href={supportUrl}>Entrar al Discord</Button>
            </div>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}
