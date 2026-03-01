export default function TicketsWikiPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Tickets</h1>
      <p>Gestiona solicitudes de soporte con canales privados por ticket.</p>
      <h2>Activación</h2>
      <ol>
        <li>Abre <code>/config</code> y entra a Tickets.</li>
        <li>Define el canal para abrir tickets y el rol del staff.</li>
      </ol>
      <h2>Uso</h2>
      <ul>
        <li>Los usuarios abren un ticket desde el panel de tickets.</li>
        <li>El staff atiende y cierra el ticket cuando termine.</li>
      </ul>
    </article>
  );
}
