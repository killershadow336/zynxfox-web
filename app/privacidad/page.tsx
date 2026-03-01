export const metadata = {
  title: "Política de privacidad",
  description: "Cómo tratamos los datos cuando usas el bot ZynxFox y este sitio."
};

export default function PrivacidadPage() {
  const supportUrl = process.env.NEXT_PUBLIC_SUPPORT_URL || "/apoyo";
  const updated = new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "2-digit" });
  return (
    <div className="container py-12">
      <article className="prose prose-invert max-w-none">
        <h1>Política de privacidad</h1>
        <p className="lead">Esta política explica qué información procesa ZynxFox (el "bot") y este sitio web, con qué finalidad y cómo puedes ejercer tus derechos.
        </p>

        <h2>Ámbito de aplicación</h2>
        <p>
          Esta política aplica a: (a) el uso del bot dentro de servidores de Discord y (b) la navegación por este sitio. Al utilizar cualquiera de ellos, aceptas las prácticas descritas aquí.
        </p>

        <h2>Datos que procesamos</h2>
        <ul>
          <li>
            <strong>Identificadores técnicos</strong>: IDs de servidor, canal, rol y usuario que el bot necesita para operar comandos y guardar configuración por servidor.
          </li>
          <li>
            <strong>Configuración por servidor</strong>: preferencias de registro de eventos, sistema de tickets, advertencias/sanciones, recordatorios y sorteos. Se almacenan en una base de datos y sólo se usan para prestar el servicio.
          </li>
          <li>
            <strong>Eventos operativos</strong>: marcas temporales y contadores (p. ej., creación/cierre de tickets, ejecución de comandos) para que las funciones del bot trabajen correctamente y para detectar abusos.
          </li>
          <li>
            <strong>Contenido de mensajes</strong>: el bot no guarda contenido de mensajes de forma general. Sólo podría conservar extractos cuando una función lo requiera explícitamente (por ejemplo, transcripciones de tickets si el personal las solicita). Esta opción está desactivada por defecto y depende de los administradores del servidor.
          </li>
          <li>
            <strong>Datos del sitio web</strong>: básicos de uso (peticiones HTTP) y elementos necesarios para su funcionamiento. No realizamos perfiles publicitarios ni vendemos datos.
          </li>
        </ul>

        <h2>Finalidades del tratamiento</h2>
        <ul>
          <li>Prestar las funciones del bot (comandos, moderación, tickets, niveles, recordatorios y sorteos).</li>
          <li>Seguridad y prevención de abusos, incluyendo límites de uso y registros técnicos mínimos.</li>
          <li>Atención de soporte y mejora del servicio.</li>
        </ul>

        <h2>Base legal</h2>
        <ul>
          <li><strong>Ejecución del servicio</strong>: necesitamos procesar ciertos datos para ejecutar los comandos que solicitas.</li>
          <li><strong>Interés legítimo</strong>: mantener la seguridad, prevenir abusos y mejorar el servicio.</li>
          <li><strong>Consentimiento</strong>: para funciones opcionales que lo requieran (p. ej., transcripciones si se habilitan).</li>
        </ul>

        <h2>Conservación</h2>
        <p>
          Conservamos la configuración y datos operativos mientras el servidor use el bot. Si el bot abandona un servidor, podremos eliminar la configuración asociada. Los administradores pueden solicitar la eliminación de datos del servidor cuando corresponda.
        </p>

        <h2>Cookies y tecnologías similares</h2>
        <p>
          Este sitio utiliza lo mínimo imprescindible para su operación (por ejemplo, preferencias de interfaz). No usamos cookies de publicidad ni perfiles de terceros.
        </p>

        <h2>Compartición y terceros</h2>
        <p>
          No vendemos datos. Compartimos información con Discord a través de sus APIs para poder operar. Algunas funciones opcionales pueden integrar servicios de terceros; están desactivadas por defecto y sólo se activan por los administradores del servidor. En tal caso, se aplicarán también las políticas de dichos terceros.
        </p>

        <h2>Seguridad</h2>
        <p>
          Aplicamos controles razonables para proteger la información (accesos restringidos, registros por servidor, medidas de minimización de datos). Ningún sistema es 100% seguro, pero trabajamos para mitigar riesgos.
        </p>

        <h2>Tus derechos</h2>
        <ul>
          <li>Acceso y rectificación de la configuración de tu servidor (a través de los administradores).</li>
          <li>Eliminación de datos del servidor (a petición de los administradores).</li>
          <li>Información adicional sobre el tratamiento.</li>
        </ul>
        <p>
          Para cualquier solicitud, abre un ticket en el <a href={supportUrl}>servidor de soporte</a>.
        </p>

        <h2>Menores</h2>
        <p>
          ZynxFox está dirigido a comunidades de Discord que deben cumplir los Términos de Discord (13+ o la edad mínima aplicable en tu región). No recopilamos conscientemente información de menores de la edad mínima.
        </p>

        <h2>Cambios</h2>
        <p>
          Podemos actualizar esta política cuando sea necesario. Si los cambios son relevantes, lo comunicaremos por este sitio o mediante el servidor de soporte.
        </p>

        <p className="text-sm text-zinc-400">Última actualización: {updated}</p>
      </article>
    </div>
  );
}
