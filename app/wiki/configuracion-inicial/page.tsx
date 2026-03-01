import Link from "next/link";

export default function ConfigInicialPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Configuración inicial</h1>
      <p>Estos son los ajustes básicos que recomendamos al instalar el bot.</p>
      <h2>Abrir el panel</h2>
      <p>Usa el comando <code>/config</code> dentro del servidor (necesitas permisos de administración).</p>
      <h2>Seleccionar canal de anuncios</h2>
      <p>En el panel, define el canal donde el bot podrá enviar embeds (notificaciones TikTok, tickets, etc.).</p>
      <h2>Permisos mínimos</h2>
      <ul>
        <li>Enviar mensajes</li>
        <li>Insertar enlaces</li>
        <li>Adjuntar archivos (opcional)</li>
      </ul>
      <p>Luego revisa los <Link href={"/wiki/modulos" as any}>módulos</Link> para activar los que quieras.</p>
    </article>
  );
}
