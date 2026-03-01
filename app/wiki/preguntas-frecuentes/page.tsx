export default function FAQWikiPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Preguntas frecuentes</h1>
      <h3>¿Por qué no veo notificaciones de TikTok?</h3>
      <p>Verifica que el módulo esté activado, que el canal exista y que el bot tenga permisos de enviar/embeds. Si persiste, usa <code>/tiktok reset</code>.</p>
      <h3>¿Puedo usar el bot en varios servidores?</h3>
      <p>Sí. La configuración es por servidor y no se usan IDs hardcodeados.</p>
    </article>
  );
}
