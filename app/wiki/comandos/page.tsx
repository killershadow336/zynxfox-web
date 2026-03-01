export default function ComandosWikiPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Lista de comandos</h1>
      <p>El bot incluye comandos de barra (slash) y algunos por prefijo. Usa <code>/help</code> o revisa el panel en Discord para ver los disponibles.</p>
      <ul>
        <li>Administración: <code>/config</code>.</li>
        <li>Moderación: <code>/ban</code>, <code>/kick</code>, <code>/timeout</code>, <code>/warn</code>.</li>
        <li>Utilidad: recordatorios, sorteos, info del bot.</li>
        <li>Diversión: rps, dados, etc.</li>
      </ul>
    </article>
  );
}
