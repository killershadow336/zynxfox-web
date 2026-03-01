export default function NivelesWikiPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Niveles</h1>
      <p>El sistema de niveles da experiencia por chatear y sube de nivel a los usuarios.</p>
      <h2>Activación</h2>
      <ul>
        <li>Activa niveles en <code>/config</code>.</li>
        <li>Opcional: define canales excluidos.</li>
      </ul>
      <h2>Uso</h2>
      <ul>
        <li>Los usuarios pueden ver su nivel con comandos del servidor.</li>
      </ul>
    </article>
  );
}
