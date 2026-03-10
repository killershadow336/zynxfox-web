import { CommandBadge } from "@/components/ui/command-badge";
import Link from "next/link";

export default function PreguntasFrecuentesPage() {
  return (
    <article className="doc-content">
      <h1>Preguntas frecuentes</h1>

      <h2>¿Dónde se configura el bot?</h2>
      <p>
        La configuración principal se hace desde <CommandBadge command="/config" /> dentro de Discord.
      </p>

      <h2>¿La web también sirve para configurar?</h2>
      <p>
        La web está pensada para presentar el bot, ayudarte con guías y reunir la información importante en un solo
        lugar. La configuración operativa del bot sigue viviendo dentro de Discord.
      </p>

      <h2>¿Por qué algunas funciones no hacen nada al principio?</h2>
      <p>
        Muchos módulos necesitan permisos, canales, roles o mensajes base antes de activarse por completo. Primero
        revisa la guía del módulo correspondiente.
      </p>

      <h2>¿Por qué un comando aparece pero no funciona?</h2>
      <p>
        Lo más común es que falten permisos, que el rol del bot esté por debajo del objetivo, o que el módulo
        relacionado todavía no tenga su configuración base terminada.
      </p>

      <h2>¿El bot guarda mensajes?</h2>
      <p>
        No guarda el chat ordinario de forma general, pero algunas funciones sí tratan contenido relacionado con su
        propio flujo, como tickets, recordatorios, sorteos, sugerencias, moderación o reportes al soporte. Para el
        detalle completo revisa <Link href={"/privacidad" as any}>Privacidad</Link>.
      </p>

      <h2>¿Qué pasa si el bot no puede enviarme mensajes privados?</h2>
      <p>
        Algunas funciones, como recordatorios o ciertos avisos, intentan usar DM. Si el DM falla, el comportamiento
        depende del sistema concreto; por ejemplo, algunos recordatorios intentan usar el canal original como fallback.
      </p>

      <h2>¿TikTok funciona igual que YouTube o Twitch?</h2>
      <p>
        No exactamente. Dentro del Centro de Creadores, TikTok sigue considerándose una parte más experimental y trabaja
        en modo best-effort, así que puede ser menos estable que otros proveedores.
      </p>

      <h2>¿Puedo usar solo una parte del bot?</h2>
      <p>
        Sí. La idea del sistema modular es precisamente activar solo lo que tu servidor necesita y dejar fuera el resto.
        Puedes empezar con moderación, tickets o niveles, y sumar más después.
      </p>

      <h2>¿Dónde pido ayuda si algo sigue fallando?</h2>
      <p>
        Entra a <Link href={"/soporte" as any}>Soporte</Link> o revisa{" "}
        <Link href={"/wiki/solucion-de-problemas" as any}>Solución de problemas</Link> antes de abrir un reporte.
      </p>
    </article>
  );
}
