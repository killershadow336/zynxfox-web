export default function ModeracionWikiPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Moderación</h1>
      <p>Herramientas para mantener el orden: bans, kicks, warns, anti-spam y anti-links.</p>
      <h2>Requisitos</h2>
      <ul>
        <li>Otorga al bot un rol por encima de los usuarios a moderar.</li>
        <li>Permisos: Banear, Expulsar, Gestionar mensajes.</li>
      </ul>
      <h2>Comandos comunes</h2>
      <ul>
        <li><code>/ban</code>, <code>/kick</code>, <code>/timeout</code></li>
        <li>Panel de warns y limpieza de mensajes.</li>
      </ul>
    </article>
  );
}
