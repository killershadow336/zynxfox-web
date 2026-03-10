import Link from "next/link";
import { Callout } from "@/components/ui/callout";
import { CommandBadge } from "@/components/ui/command-badge";

export default function ConfiguracionInicialPage() {
  return (
    <article className="doc-content">
      <h1>Configuración inicial</h1>
      <p>
        Esta guía reúne la puesta en marcha recomendada para dejar ZynxFox funcionando bien desde el primer día,
        sin activar módulos a ciegas ni dejar permisos a medias.
      </p>

      <h2>Antes de empezar</h2>
      <p>
        Lo más importante es que el bot pueda ver el canal donde lo vas a configurar y que tenga permisos suficientes
        para responder, enviar embeds y operar los módulos que realmente vayas a usar.
      </p>
      <ul>
        <li>Invítalo con permisos acordes a tu servidor, no con permisos al azar.</li>
        <li>Haz la configuración inicial en un canal tranquilo, idealmente de staff o pruebas.</li>
        <li>Decide primero qué módulos necesitas de verdad para no llenar el servidor de sistemas innecesarios.</li>
      </ul>

      <h2>Abrir el panel base</h2>
      <p>
        Usa <CommandBadge command="/config" /> en un canal donde el bot pueda responder. Desde ahí puedes entrar al
        panel principal, revisar módulos activos, abrir subpaneles y guardar la configuración inicial del servidor.
      </p>
      <p>
        Si el panel no aparece, casi siempre el problema está en permisos del canal, embeds bloqueados o en que el bot
        no puede responder interacciones en ese lugar.
      </p>

      <h2>Permisos que conviene revisar primero</h2>
      <p>
        No todos los servidores necesitan lo mismo, pero hay un bloque base que conviene revisar antes de activar
        cualquier sistema:
      </p>
      <ul>
        <li>Ver canales y enviar mensajes.</li>
        <li>Insertar enlaces y usar embeds para paneles, logs y mensajes configurables.</li>
        <li>Leer historial para módulos que revisan actividad o necesitan contexto.</li>
        <li>Gestionar mensajes si vas a usar limpieza, antispam o antilink.</li>
        <li>Gestionar roles y moderar miembros si vas a usar advertencias, sanciones o recompensas automáticas.</li>
        <li>Gestionar canales si usarás tickets o canales temporales de voz.</li>
      </ul>

      <Callout variant="warning" title="Evita este error común">
        Dar permisos muy altos no sustituye una buena configuración. Si el bot puede hacer demasiado pero no tiene bien
        definidos sus canales, roles o listas de exclusión, lo normal es que el problema siga ahí.
      </Callout>

      <h2>Orden recomendado de configuración</h2>
      <p>
        Si vas paso a paso, es mucho más fácil detectar qué funciona y qué te falta ajustar.
      </p>
      <ol>
        <li>
          <strong>Revisa permisos y canal de trabajo.</strong> Asegúrate de que el bot responde bien en el canal donde
          vas a usar <CommandBadge command="/config" />.
        </li>
        <li>
          <strong>Activa lo operativo.</strong> Si tu servidor ya tiene movimiento, empieza por logs, moderación,
          advertencias, antilink o antispam.
        </li>
        <li>
          <strong>Activa lo comunitario.</strong> Después suma tickets, niveles, sorteos, sugerencias o TTS según el
          tipo de comunidad.
        </li>
        <li>
          <strong>Haz una prueba real.</strong> Crea un ticket, manda mensajes de prueba, revisa anuncios y confirma que
          los logs están llegando al sitio correcto.
        </li>
      </ol>

      <h2>Módulos que suelen activarse primero</h2>
      <p>
        No todos los servidores usan lo mismo, pero este suele ser un punto de partida sólido:
      </p>
      <ul>
        <li>
          <strong>Logs:</strong> para tener trazabilidad básica del servidor.
        </li>
        <li>
          <strong>Moderación y advertencias:</strong> si ya hay actividad y necesitas orden desde el inicio.
        </li>
        <li>
          <strong>Tickets:</strong> si tu comunidad necesita soporte interno o atención del staff.
        </li>
        <li>
          <strong>Niveles:</strong> si quieres incentivar participación desde temprano.
        </li>
        <li>
          <strong>Centro de Creadores:</strong> si tu comunidad gira en torno a streams, videos o creadores.
        </li>
      </ul>

      <h2>Checklist de salida</h2>
      <ul>
        <li>El bot responde correctamente a <CommandBadge command="/config" />.</li>
        <li>Los canales y roles básicos ya están definidos.</li>
        <li>Los módulos activos tienen pruebas reales y no solo configuración guardada.</li>
        <li>Los logs, mensajes y permisos fueron revisados una vez terminada la puesta en marcha.</li>
      </ul>

      <Callout variant="success" title="Ruta recomendada">
        Si no sabes por dónde empezar, deja primero estable la base operativa: permisos, logs y moderación. Después
        añade tickets, niveles, sorteos u otros módulos según la necesidad real del servidor.
      </Callout>

      <h2>Qué hacer después</h2>
      <p>
        Cuando termines esta parte, entra al <Link href={"/wiki/modulos" as any}>resumen de módulos</Link> y continúa
        con la guía del sistema que vayas a usar primero. Si tu prioridad es atención al usuario, sigue con{" "}
        <Link href={"/wiki/modulos/tickets" as any}>Tickets</Link>. Si tu prioridad es orden y control, sigue con{" "}
        <Link href={"/wiki/modulos/moderacion" as any}>Moderación</Link>.
      </p>
    </article>
  );
}
