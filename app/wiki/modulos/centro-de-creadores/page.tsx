import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { CommandBadge } from "@/components/ui/command-badge";
import Link from "next/link";

export default function CentroDeCreadoresPage() {
  return (
    <article className="doc-content">
      <h1>Centro de Creadores</h1>
      <p>
        El Centro de Creadores reúne en un solo módulo los avisos de cuentas y creadores para YouTube, Twitch y TikTok,
        con configuración por proveedor, cuentas activas, eventos y canal de publicación.
      </p>

      <h2>Qué permite hacer</h2>
      <ul>
        <li>Activar o desactivar el centro completo o un proveedor concreto.</li>
        <li>Agregar cuentas de creadores y definir qué eventos quieres avisar.</li>
        <li>Elegir canal, mención y plantilla de aviso desde un solo flujo.</li>
        <li>Pausar cuentas, ajustar polling y trabajar varios proveedores a la vez.</li>
      </ul>

      <h2>Proveedores disponibles</h2>
      <p className="not-prose flex flex-wrap gap-2">
        <Badge variant="default">YouTube</Badge>
        <Badge variant="default">Twitch</Badge>
        <Badge variant="beta">TikTok beta</Badge>
      </p>

      <p>
        La configuración puede partir desde <CommandBadge command="/config" /> y el panel del módulo. También existen
        flujos orientados a creadores desde <CommandBadge command="/creadores" /> en el catálogo actual.
      </p>

      <Callout variant="info" title="En un solo lugar">
        Ahora puedes gestionar avisos para varios proveedores desde el mismo Centro de Creadores, sin separar cada plataforma en módulos distintos.
      </Callout>

      <h2>Qué revisa cada proveedor</h2>
      <ul>
        <li>
          <strong>YouTube:</strong> videos nuevos y directos.
        </li>
        <li>
          <strong>Twitch:</strong> inicio y fin de directos.
        </li>
        <li>
          <strong>TikTok beta:</strong> detección en modo best-effort.
        </li>
      </ul>

      <h2>Orden recomendado de configuración</h2>
      <ol>
        <li>Activa el Centro de Creadores.</li>
        <li>Elige primero el proveedor que realmente vas a usar.</li>
        <li>Agrega la cuenta o creador.</li>
        <li>Define el canal de publicación y la mención si corresponde.</li>
        <li>Elige los eventos que quieres anunciar.</li>
        <li>Haz una prueba con una cuenta real antes de sumar más creadores.</li>
      </ol>

      <h2>Detalles útiles del sistema</h2>
      <ul>
        <li>YouTube usa un intervalo de revisión más lento que Twitch por la naturaleza del proveedor.</li>
        <li>Twitch puede trabajar con eventos de inicio y fin de directo.</li>
        <li>TikTok sigue siendo la parte más experimental del centro.</li>
        <li>Las cuentas pueden quedar activas o pausadas sin necesidad de borrarlas.</li>
      </ul>

      <h2>Errores comunes</h2>
      <ul>
        <li>El centro está activo, pero el proveedor concreto sigue desactivado.</li>
        <li>La cuenta fue añadida, pero no tiene eventos marcados para anunciar.</li>
        <li>El canal o la mención están mal definidos y el aviso no sale como esperabas.</li>
        <li>TikTok no avisa de forma consistente porque sigue en beta y funciona en modo best-effort.</li>
      </ul>

      <Callout variant="warning" title="Importante">
        Configura solo cuentas o canales de creadores sobre los que exista autorización suficiente para publicar avisos.
        Eso es especialmente importante si el servidor usa el módulo como parte de una comunidad oficial o semioficial.
      </Callout>

      <h2>Qué sigue después</h2>
      <p>
        Si el servidor ya tiene avisos de creadores funcionando, puedes continuar con{" "}
        <Link href={"/wiki/modulos/niveles" as any}>Niveles</Link> o con{" "}
        <Link href={"/wiki/modulos/recordatorios-giveaways" as any}>Recordatorios y sorteos</Link>.
      </p>
    </article>
  );
}
