import { Callout } from "@/components/ui/callout";
import { CommandBadge } from "@/components/ui/command-badge";
import Link from "next/link";

export default function SolucionProblemasPage() {
  return (
    <article className="doc-content">
      <h1>Solución de problemas</h1>
      <p>
        Si algo no funciona como esperabas, revisa primero estos puntos antes de abrir un reporte.
      </p>

      <h2>Checklist rápido</h2>
      <ul>
        <li>El bot tiene permisos suficientes en el canal o módulo afectado.</li>
        <li>El rol del bot está por encima de los roles que debe gestionar.</li>
        <li>El módulo fue activado o configurado correctamente desde Discord.</li>
        <li>El sistema depende de un canal, categoría o rol que todavía existe.</li>
      </ul>

      <h2>Si falla un comando</h2>
      <ul>
        <li>Comprueba si el comando requiere permisos de moderación o gestión que tu cuenta no tiene.</li>
        <li>Revisa si el sistema asociado ya fue activado desde <CommandBadge command="/config" />.</li>
        <li>Si el comando afecta a un usuario o rol, confirma jerarquía de roles.</li>
      </ul>

      <h2>Si falla un módulo</h2>
      <ul>
        <li>
          <strong>Tickets:</strong> revisa canal del panel, categoría, roles de soporte y permisos para embeds.
        </li>
        <li>
          <strong>Moderación:</strong> revisa jerarquía de roles, exclusiones y canales de log.
        </li>
        <li>
          <strong>Niveles:</strong> revisa blacklist, canal de anuncios y recompensas.
        </li>
        <li>
          <strong>Centro de Creadores:</strong> revisa proveedor activo, cuenta, eventos y canal de salida.
        </li>
      </ul>

      <h2>Si algo no responde como esperabas</h2>
      <ol>
        <li>Haz una prueba en un canal controlado.</li>
        <li>Reduce la configuración a lo mínimo para descartar conflictos.</li>
        <li>Vuelve a entrar al panel del módulo y revisa si quedó realmente guardado.</li>
        <li>Confirma si el problema afecta a todo el servidor o solo a un canal/rol concreto.</li>
      </ol>

      <Callout variant="danger" title="Si el problema persiste">
        Reúne el comando que falló, el módulo implicado y una explicación corta del caso antes de ir al soporte. Eso acelera bastante el diagnóstico.
      </Callout>

      <h2>Qué conviene llevar al soporte</h2>
      <ul>
        <li>Comando exacto o módulo implicado.</li>
        <li>Qué esperabas que ocurriera.</li>
        <li>Qué ocurrió en realidad.</li>
        <li>Si hubo error visible, captura o texto exacto.</li>
        <li>Canal, rol o sistema relacionado si aplica.</li>
      </ul>

      <p>
        Si necesitas ayuda humana, entra a <Link href={"/soporte" as any}>Soporte</Link>. Si lo que necesitas es una
        referencia rápida, vuelve a <Link href={"/wiki/preguntas-frecuentes" as any}>Preguntas frecuentes</Link>.
      </p>
    </article>
  );
}
