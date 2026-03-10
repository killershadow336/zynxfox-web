import { Callout } from "@/components/ui/callout";
import { CommandBadge } from "@/components/ui/command-badge";
import Link from "next/link";

export default function ModeracionWikiPage() {
  return (
    <article className="doc-content">
      <h1>Moderación</h1>
      <p>
        El bloque de moderación reúne sanciones manuales, advertencias, limpieza y filtros automáticos para mantener
        el servidor bajo control sin depender de varios bots a la vez.
      </p>

      <h2>Qué cubre este módulo</h2>
      <ul>
        <li>Sanciones como ban, kick, timeout y advertencias.</li>
        <li>Antispam y antilink con ajustes desde el panel de configuración.</li>
        <li>Limpieza de mensajes y acciones operativas para el staff.</li>
        <li>Logs y automatizaciones ligadas al sistema de advertencias.</li>
      </ul>

      <h2>Comandos habituales</h2>
      <p>
        Entre los comandos más comunes están <CommandBadge command="/ban" />, <CommandBadge command="/kick" />,{" "}
        <CommandBadge command="/timeout" />, <CommandBadge command="/warn" />,{" "}
        <CommandBadge command="/warnings" />, <CommandBadge command="/purge" /> y{" "}
        <CommandBadge command="/nuke" />.
      </p>

      <h2>Qué conviene configurar primero</h2>
      <ol>
        <li>Rol del bot por encima de los roles que debe moderar.</li>
        <li>Canal de logs si quieres registrar acciones automáticas o advertencias.</li>
        <li>Listas de exclusión por roles o canales en antilink y antispam.</li>
        <li>Acciones automáticas del sistema de advertencias, si realmente las necesitas.</li>
      </ol>

      <h2>Ruta de configuración recomendada</h2>
      <p>
        La parte manual vive en comandos de moderación. La parte automática y los ajustes finos convienen dejarlos desde{" "}
        <CommandBadge command="/config" />.
      </p>
      <ul>
        <li>
          <strong>Advertencias:</strong> activar el sistema, definir log, mensajes y autoacciones.
        </li>
        <li>
          <strong>Antilink:</strong> permitir o bloquear dominios, definir roles exentos, canales exentos y acción.
        </li>
        <li>
          <strong>Antispam:</strong> umbrales de mensajes, repeticiones, menciones, emojis, mayúsculas y acción.
        </li>
      </ul>

      <h2>Sistema de advertencias</h2>
      <p>
        El sistema de warnings puede registrar advertencias por servidor, enviar notificaciones y ejecutar acciones
        automáticas por acumulación si el staff decide activarlas.
      </p>
      <ul>
        <li>Canal de log opcional.</li>
        <li>Notificación por DM opcional.</li>
        <li>Mensajes personalizados para staff y usuario.</li>
        <li>Acciones automáticas configurables según cantidad de advertencias.</li>
      </ul>

      <h2>Antilink y antispam</h2>
      <p>
        Estos filtros están pensados para reducir abuso sin castigar a todo el servidor por igual. Por eso conviene
        configurar bien exclusiones antes de activarlos.
      </p>
      <ul>
        <li>
          <strong>Antilink:</strong> dominios permitidos, fragmentos permitidos, borrado de mensaje, timeout opcional,
          roles y canales exentos.
        </li>
        <li>
          <strong>Antispam:</strong> mensajes por intervalo, repeticiones, menciones, emojis, mayúsculas, borrado de
          mensaje, timeout opcional, roles y canales exentos.
        </li>
      </ul>

      <h2>Errores comunes</h2>
      <ul>
        <li>El bot no puede sancionar porque su rol está por debajo del objetivo.</li>
        <li>Los filtros castigan de más porque no se definieron listas de exclusión.</li>
        <li>Las advertencias no registran nada porque falta canal de log o el módulo no quedó bien activado.</li>
        <li>Un comando manual falla por permisos del bot o del moderador que lo ejecuta.</li>
      </ul>

      <Callout variant="warning" title="Antes de activar sanciones">
        Asegúrate de que el rol del bot esté por encima de los usuarios o roles que deba moderar. Si no, ciertas
        acciones no podrán ejecutarse aunque el comando exista o el módulo esté activo.
      </Callout>

      <h2>Después de moderación</h2>
      <p>
        Si ya tienes control básico del servidor, lo siguiente suele ser activar{" "}
        <Link href={"/wiki/modulos/niveles" as any}>Niveles</Link> o volver al{" "}
        <Link href={"/wiki/modulos" as any}>resumen de módulos</Link> para seguir con la parte comunitaria.
      </p>
    </article>
  );
}
