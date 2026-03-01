export default function TroubleshootingWikiPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Solución de problemas</h1>
      <ul>
        <li>Revisa permisos del canal: Enviar mensajes y Insertar enlaces.</li>
        <li>Comprueba que el módulo esté activado en <code>/config</code>.</li>
        <li>Para TikTok, restablece con <code>/tiktok reset</code> y vuelve a probar.</li>
      </ul>
    </article>
  );
}
