export const metadata = {
  title: "Términos de servicio",
  description: "Condiciones de uso del bot ZynxFox y de este sitio."
};

export default function TerminosPage() {
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "/apoyo";
  const updated = new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "2-digit" });
  return (
    <div className="container py-12">
      <article className="prose prose-invert max-w-none">
        <h1>Términos de servicio</h1>
        <p className="lead">
          Estos términos regulan el uso del bot ZynxFox (el "servicio") y de este sitio web. Al utilizar el servicio, aceptas estas condiciones.
        </p>

        <h2>1. Definiciones</h2>
        <p>
          «Bot» o «servicio» se refiere a ZynxFox dentro de la plataforma Discord. «Servidor» es una comunidad de Discord. «Administradores» son los usuarios con permisos para configurar el bot en un servidor.
        </p>

        <h2>2. Elegibilidad y cumplimiento de normas</h2>
        <ul>
          <li>Debes cumplir los <a href="https://discord.com/terms" target="_blank" rel="noreferrer">Términos de Discord</a> y sus <a href="https://discord.com/guidelines" target="_blank" rel="noreferrer">Normas de la Comunidad</a>.</li>
          <li>Los administradores son responsables de que el uso del bot en su servidor cumpla la ley aplicable y estas condiciones.</li>
        </ul>

        <h2>3. Licencia de uso</h2>
        <p>
          Te concedemos una licencia limitada, revocable, no exclusiva y no transferible para usar el bot en tu(s) servidor(es) de Discord, conforme a estos términos.
        </p>

        <h2>4. Usos prohibidos</h2>
        <ul>
          <li>Spam, automatización abusiva, scraping de datos o evasión de límites.</li>
          <li>Acoso, discurso de odio, fraude, suplantación o difusión de malware.</li>
          <li>Modificar, descompilar o intentar extraer el código fuente del bot.</li>
          <li>Interferir con el funcionamiento del servicio o de Discord.</li>
        </ul>

        <h2>5. Límites y fair use</h2>
        <p>
          Podemos aplicar límites razonables a la frecuencia de comandos, creación de tickets, sorteos u otras funciones para proteger la estabilidad del servicio. Estos límites pueden variar y ajustarse sin previo aviso.
        </p>

        <h2>6. Configuración por servidor</h2>
        <p>
          El bot guarda la configuración necesaria para operar en cada servidor (p. ej., canales de logs, reglas de moderación, ajustes de tickets). Los administradores pueden cambiarla o solicitar su eliminación si el bot deja el servidor.
        </p>

        <h2>7. Medidas ante incumplimientos</h2>
        <ul>
          <li>Advertencias técnicas, limitación temporal del uso o bloqueo de funciones.</li>
          <li>Suspensión del bot en el servidor cuando exista abuso reiterado o riesgo para otros usuarios o la plataforma.</li>
          <li>Comunicación a Discord si detectamos conductas graves que violen sus políticas.</li>
        </ul>

        <h2>8. Disponibilidad, mantenimiento y soporte</h2>
        <p>
          Ofrecemos el servicio «tal cual», sin garantías de disponibilidad ininterrumpida. Puede haber mantenimientos programados o caídas imprevistas. Daremos avisos razonables a través del sitio o del servidor de soporte cuando sea posible.
        </p>
        <p>
          Soporte: puedes solicitar ayuda o reportar problemas en el <a href={supportUrl}>servidor de soporte</a>. No se garantizan tiempos de respuesta específicos, pero procuraremos responder con prontitud.
        </p>

        <h2>9. Privacidad</h2>
        <p>
          Consulta la <a href="/privacidad">Política de privacidad</a> para conocer cómo tratamos la información al usar el bot y este sitio.
        </p>

        <h2>10. Propiedad intelectual</h2>
        <p>
          El bot, el sitio, sus nombres, marcas y logotipos pertenecen a sus titulares. No adquieres ningún derecho de propiedad intelectual por usar el servicio.
        </p>

        <h2>11. Descargos y limitación de responsabilidad</h2>
        <p>
          En la máxima medida permitida por la ley, no seremos responsables de daños indirectos, incidentales, especiales, punitivos o consecuenciales derivados del uso o imposibilidad de uso del servicio.
        </p>

        <h2>12. Cambios en los términos</h2>
        <p>
          Podemos actualizar estas condiciones. Si los cambios son relevantes, lo comunicaremos por este sitio o el servidor de soporte. El uso continuado tras la actualización implica la aceptación de los nuevos términos.
        </p>

        <h2>13. Disposiciones generales</h2>
        <ul>
          <li>Si alguna cláusula resultara inválida, las restantes seguirán siendo aplicables.</li>
          <li>Estos términos constituyen el acuerdo completo respecto al uso del bot.</li>
        </ul>

        <h2>Contacto</h2>
        <p>
          Para dudas, notificaciones o reportes de abuso, usa el <a href={supportUrl}>servidor de soporte</a>.
        </p>

        <p className="text-sm text-zinc-400">Última actualización: {updated}</p>
      </article>
    </div>
  );
}
