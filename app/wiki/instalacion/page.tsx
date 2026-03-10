import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { CommandBadge } from "@/components/ui/command-badge";
import { buildInviteUrl } from "@/utils/inviteUrl";

export default function InstalacionPage() {
  const inviteUrl = buildInviteUrl();

  return (
    <article className="doc-content">
      <h1>Instalación</h1>
      <p>
        Invita ZynxFox al servidor y deja listo el flujo base para empezar a configurar módulos desde Discord.
      </p>

      <Callout variant="info" title="Antes de empezar">
        La configuración pública del bot sigue viviendo en Discord. El punto de partida real es <CommandBadge command="/config" />.
      </Callout>

      <h2>Qué necesitas</h2>
      <ul>
        <li>Permisos para invitar aplicaciones al servidor.</li>
        <li>Capacidad de gestionar canales, roles o configuraciones según el módulo que vayas a activar.</li>
        <li>Un canal donde el bot pueda responder y mostrar paneles o mensajes de ayuda.</li>
      </ul>

      <h2>Pasos recomendados</h2>
      <ol>
        <li>Invita el bot con el enlace oficial.</li>
        <li>Comprueba que el rol del bot esté por encima de los usuarios o roles que deba gestionar.</li>
        <li>Abre <CommandBadge command="/config" /> y revisa los módulos que quieras activar primero.</li>
        <li>Haz una prueba básica de respuesta antes de tocar módulos más complejos.</li>
      </ol>

      <h2>Comprobación rápida después de invitarlo</h2>
      <ul>
        <li>El bot aparece online en el servidor.</li>
        <li>Puede responder en el canal elegido.</li>
        <li>Los embeds y botones se muestran correctamente.</li>
        <li>No hay bloqueos por jerarquía de roles.</li>
      </ul>

      <p>
        <Button href={inviteUrl}>Invitar ZynxFox</Button>
      </p>

      <p>
        Después de invitarlo, sigue con <Link href={"/wiki/configuracion-inicial" as any}>Configuración inicial</Link>.
      </p>
    </article>
  );
}
