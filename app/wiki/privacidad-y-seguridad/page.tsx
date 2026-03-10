import Link from "next/link";
import { Callout } from "@/components/ui/callout";

export default function PrivacidadSeguridadWikiPage() {
  return (
    <article className="doc-content">
      <h1>Privacidad y seguridad</h1>
      <p>
        Aquí encontrarás una visión rápida sobre privacidad, seguridad y uso responsable del bot dentro del servidor.
      </p>

      <h2>Puntos importantes</h2>
      <ul>
        <li>La configuración del bot se organiza por servidor.</li>
        <li>Algunas funciones tratan datos propios de su flujo, como tickets, recordatorios, sorteos o soporte.</li>
        <li>Las páginas legales oficiales del sitio están disponibles en sus rutas dedicadas.</li>
        <li>El soporte oficial es el canal adecuado para consultas sensibles o incidencias importantes.</li>
      </ul>

      <h2>Buenas prácticas para administradores</h2>
      <ul>
        <li>Concede al bot solo los permisos realmente necesarios.</li>
        <li>No uses tickets o modmail para compartir información especialmente sensible.</li>
        <li>Revisa quién puede ver logs, tickets, paneles y canales internos.</li>
        <li>Configura exclusiones y roles de staff con criterio, no por comodidad.</li>
      </ul>

      <Callout variant="info" title="Transparencia básica">
        Si vas a activar sistemas automáticos de moderación, registros o atención interna, conviene informar a tu
        comunidad de que esos sistemas existen y cómo se usan dentro del servidor.
      </Callout>

      <h2>Lectura recomendada</h2>
      <p>
        Para el detalle legal completo revisa <Link href={"/privacidad" as any}>Política de Privacidad</Link> y{" "}
        <Link href={"/terminos" as any}>Términos de Servicio</Link>.
      </p>
    </article>
  );
}
