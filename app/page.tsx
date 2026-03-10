import {
  ArrowRight,
  BellRing,
  ShieldCheck,
  Ticket,
  Trophy,
  Volume2,
  Wrench,
} from "lucide-react";
import { CapabilityMarquee } from "@/components/home/capability-marquee";
import { HeroBackdrop } from "@/components/home/hero-backdrop";
import { ShowcaseGrid } from "@/components/home/showcase-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CommandBadge } from "@/components/ui/command-badge";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { getAllBlogPosts } from "@/lib/blog-content";
import { buildInviteUrl } from "@/lib/inviteUrl";
import { withLocale } from "@/lib/site";

const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "#";

const featureCards = [
  {
    icon: ShieldCheck,
    title: "Moderacion y seguridad",
    description:
      "Warns, sanciones, antispam, antilinks y flujos de moderacion pensados para servidores activos.",
  },
  {
    icon: Ticket,
    title: "Tickets y soporte",
    description:
      "Sistema de tickets configurable desde Discord, con espacio para ayuda clara y seguimiento real.",
  },
  {
    icon: Wrench,
    title: "Configuracion en Discord",
    description:
      "La configuracion principal sigue dentro de Discord con una ruta clara hacia /config para administradores.",
  },
  {
    icon: Trophy,
    title: "Niveles y sorteos",
    description:
      "XP automatica, rangos, sorteos y dinamicas listas para mantener activo tu servidor sin montar sistemas aparte.",
  },
  {
    icon: Volume2,
    title: "TTS y voz",
    description:
      "Mensajes hablados, apoyo para canales de voz y herramientas utiles para comunidades que quieren algo mas dinamico.",
  },
  {
    icon: BellRing,
    title: "Centro de Creadores",
    description:
      "Avisos de actividad para creadores y espacios pensados para comunidades que siguen streams, videos y novedades.",
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

export default async function HomePage() {
  const inviteUrl = buildInviteUrl();
  const latestPosts = (await getAllBlogPosts()).slice(0, 2);

  return (
    <div className="relative z-10">
      <HeroBackdrop />

      <section className="container py-14 md:py-24">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-card/70 px-3 py-2 text-xs text-text-secondary backdrop-blur sm:gap-3 sm:px-4 sm:text-sm">
            <span>Bot para comunidades de Discord</span>
            <Badge variant="success" dot>
              Online
            </Badge>
          </div>

          <h1 className="mx-auto mt-8 max-w-4xl font-heading text-hero font-extrabold tracking-tight text-balance text-text-primary">
            <GradientText>El bot que tu servidor necesitaba.</GradientText>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-body text-text-secondary text-balance">
            Moderacion, niveles, tickets, TTS, sorteos y mucho mas. Todo desde Discord, todo desde{" "}
            <CommandBadge command="/config" />.
          </p>

          <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={inviteUrl} className="w-full sm:w-auto">
              Invitar al bot{" "}
              <span className="button-arrow-loop" aria-hidden>
                <ArrowRight size={16} />
              </span>
            </Button>
            <Button href={withLocale("/wiki")} variant="secondary" className="w-full sm:w-auto">
              Ver documentacion
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="container py-8 md:py-12">
        <Reveal>
          <SectionHeader
            eyebrow="Capacidades reales"
            title="Todo lo que tu servidor necesita, sin complicaciones."
            subtitle="71 comandos slash, 13 modulos configurables y sistemas automaticos listos desde el primer minuto."
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
            eyebrow="Vista general"
            title="Pensado para que entiendas el bot antes de configurarlo"
            subtitle="Todo sigue pasando dentro de Discord, pero la web te ayuda a ver mejor el flujo, los modulos y lo que puedes activar."
          />
        </Reveal>

        <Reveal>
          <ShowcaseGrid />
        </Reveal>
      </section>

      <section className="container py-4 md:py-8">
        <Reveal>
          <SectionHeader
            eyebrow="Updates"
            title="Novedades para seguirle el ritmo al bot"
            subtitle="Publicaciones cortas para enterarte de cambios, modulos nuevos y avances importantes."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {latestPosts.map((post) => (
            <Reveal key={post.slug}>
              <Card className="card-lift h-full p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default">{post.formattedDate}</Badge>
                  <Badge variant="new">{`${post.readingMinutes} min`}</Badge>
                </div>
                <h2 className="mt-5 font-heading text-h3 font-bold text-text-primary">{post.title}</h2>
                <p className="mt-3 text-body text-text-secondary">{post.description}</p>
                <div className="mt-5">
                  <Button href={withLocale(`/blog/${post.slug}`)} variant="secondary">
                    Leer update
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 flex justify-start">
          <Button href={withLocale("/blog")} variant="ghost" className="px-0">
            Ver todos los updates <ArrowRight size={16} aria-hidden />
          </Button>
        </Reveal>
      </section>

      <section className="container pb-16 md:pb-24">
        <Reveal>
          <Card className="card-lift flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-meta font-medium uppercase tracking-[0.24em] text-text-secondary">
                Soporte y comunidad
              </p>
              <h2 className="font-heading text-h2 font-bold text-text-primary">
                Si necesitas ayuda, el soporte oficial esta a un clic.
              </h2>
              <p className="max-w-2xl text-body text-text-secondary">
                Encuentra guias, consulta comandos y, si lo necesitas, entra al soporte para resolver dudas o problemas con tu servidor.
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
