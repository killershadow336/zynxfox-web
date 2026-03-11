import {
  BellRing,
  CheckCircle2,
  CircleDot,
  MessagesSquare,
  Shield,
  Twitch,
  Youtube,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CommandBadge } from "@/components/ui/command-badge";

export function ShowcaseGrid() {
  return (
    <div className="mt-8 grid gap-4 xl:grid-cols-[1.25fr_0.9fr]">
      <Card className="showcase-shell card-lift p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default">Todo desde Discord</Badge>
          <Badge variant="new">Flujo guiado</Badge>
          <Badge variant="success">Configuracion rapida</Badge>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="showcase-panel">
            <p className="showcase-panel__eyebrow">Modulos</p>
            <div className="mt-3 space-y-2">
              {["Moderacion", "Tickets", "Centro de Creadores", "Niveles", "Sorteos"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`showcase-nav-item ${index === 1 ? "is-active" : ""}`}
                  >
                    <span className="showcase-dot" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="showcase-panel">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="showcase-panel__eyebrow">Tickets y soporte</p>
                <h3 className="mt-1 font-heading text-h3 font-bold text-text-primary">
                  Ajustes listos para abrir soporte real
                </h3>
              </div>
              <CommandBadge command="/config" />
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="showcase-stat">
                <span className="showcase-stat__label">Canal de tickets</span>
                <strong>#soporte</strong>
              </div>
              <div className="showcase-stat">
                <span className="showcase-stat__label">Logs y cierre</span>
                <strong>Activos</strong>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="showcase-row">
                <span className="showcase-row__label">Mensaje principal</span>
                <Badge variant="success">Publicado</Badge>
              </div>
              <div className="showcase-row">
                <span className="showcase-row__label">Roles con acceso</span>
                <span className="showcase-chip">@Staff y @Mod</span>
              </div>
              <div className="showcase-row">
                <span className="showcase-row__label">Transcripciones</span>
                <span className="showcase-chip">HTML + registros</span>
              </div>
              <div className="showcase-row">
                <span className="showcase-row__label">Respuesta al usuario</span>
                <span className="showcase-chip">Directo desde Discord</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4">
        <Card className="showcase-shell card-lift p-5 md:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="showcase-panel__eyebrow">Centro de Creadores</p>
              <h3 className="mt-1 font-heading text-h3 font-bold text-text-primary">
                Un solo espacio para varios proveedores
              </h3>
            </div>
            <BellRing className="text-brand-pink" size={20} aria-hidden />
          </div>

          <div className="mt-5 space-y-3">
            <div className="showcase-provider">
              <div className="showcase-provider__label">
                <Youtube size={16} aria-hidden />
                <span>YouTube</span>
              </div>
              <Badge variant="success">Listo</Badge>
            </div>
            <div className="showcase-provider">
              <div className="showcase-provider__label">
                <Twitch size={16} aria-hidden />
                <span>Twitch</span>
              </div>
              <Badge variant="success">Listo</Badge>
            </div>
            <div className="showcase-provider">
              <div className="showcase-provider__label">
                <CircleDot size={16} aria-hidden />
                <span>TikTok</span>
              </div>
              <Badge variant="beta">Beta</Badge>
            </div>
          </div>
        </Card>

        <Card className="showcase-shell card-lift p-5 md:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="showcase-panel__eyebrow">En accion</p>
              <h3 className="mt-1 font-heading text-h3 font-bold text-text-primary">
                Lo esencial del servidor en el mismo bot
              </h3>
            </div>
            <Shield className="text-brand-purple" size={20} aria-hidden />
          </div>

          <div className="mt-5 space-y-3">
            <div className="showcase-list-item">
              <Shield size={16} aria-hidden />
              <span>Moderacion automatica y manual</span>
            </div>
            <div className="showcase-list-item">
              <MessagesSquare size={16} aria-hidden />
              <span>Tickets, modmail y soporte guiado</span>
            </div>
            <div className="showcase-list-item">
              <CheckCircle2 size={16} aria-hidden />
              <span>Niveles, sorteos y recordatorios listos</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
