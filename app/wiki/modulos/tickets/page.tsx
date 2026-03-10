import { Callout } from "@/components/ui/callout";
import { CommandBadge } from "@/components/ui/command-badge";
import Link from "next/link";

export default function TicketsWikiPage() {
  return (
    <article className="doc-content">
      <h1>Tickets</h1>
      <p>
        El módulo de tickets permite abrir canales privados de soporte dentro del servidor, asignar roles de atención,
        enviar un panel público de apertura y registrar eventos importantes del flujo.
      </p>

      <h2>Qué hace este módulo</h2>
      <p>
        Cuando está configurado, ZynxFox publica un menú con botón de apertura y crea un ticket privado cuando un
        usuario lo usa. Desde ahí el staff puede atender el caso y, si así lo definiste, registrar eventos de creación,
        reclamo, cierre o eliminación.
      </p>

      <h2>Qué conviene definir primero</h2>
      <p>Antes de enviar el menú, deja cerrados estos puntos:</p>
      <ol>
        <li>Canal donde irá el menú de tickets.</li>
        <li>Categoría donde se crearán los tickets.</li>
        <li>Roles de soporte que tendrán acceso.</li>
        <li>Canal de logs si quieres registrar eventos del sistema.</li>
        <li>Si usarás recordatorios para tickets inactivos y cada cuántas horas.</li>
      </ol>

      <h2>Ruta de configuración</h2>
      <p>
        La configuración parte desde <CommandBadge command="/config" />. Dentro del módulo de tickets, el bot ya
        separa la gestión en bloques claros:
      </p>
      <ul>
        <li>
          <strong>Estado:</strong> activar o desactivar el sistema.
        </li>
        <li>
          <strong>Mensajes:</strong> mensaje del panel de apertura y mensaje de bienvenida dentro del ticket.
        </li>
        <li>
          <strong>Menú:</strong> canal del panel, categoría de tickets y roles de soporte.
        </li>
        <li>
          <strong>Registros:</strong> canal de logs y eventos a registrar.
        </li>
        <li>
          <strong>Notificaciones:</strong> recordatorios para tickets inactivos.
        </li>
      </ul>

      <h2>Paso a paso recomendado</h2>
      <ol>
        <li>Activa el módulo de tickets.</li>
        <li>Define el canal donde se publicará el menú.</li>
        <li>Selecciona la categoría donde se crearán los canales de soporte.</li>
        <li>Configura los roles de soporte que deben ver y atender tickets.</li>
        <li>Personaliza el mensaje del panel y el mensaje de bienvenida.</li>
        <li>Si quieres trazabilidad, define el canal de logs y marca los eventos que quieres guardar.</li>
        <li>Envía el menú de tickets y prueba la apertura con una cuenta real.</li>
      </ol>

      <h2>Eventos de logs disponibles</h2>
      <p>El sistema puede registrar estos eventos cuando el canal de logs está configurado:</p>
      <ul>
        <li>Creación del ticket.</li>
        <li>Reclamo por parte del staff.</li>
        <li>Cierre.</li>
        <li>Eliminación con transcripción.</li>
      </ul>

      <Callout variant="warning" title="Importante">
        Si activas logs de eliminación, el sistema puede generar transcripciones del ticket. No uses este módulo para
        compartir información sensible que no deba quedar registrada en Discord o en los registros del servidor.
      </Callout>

      <h2>Recordatorios de inactividad</h2>
      <p>
        Los recordatorios son opcionales. Si los activas, puedes definir un intervalo entre 1 y 168 horas. Esto sirve
        para no dejar tickets olvidados cuando el staff tarda en responder o cerrar un caso.
      </p>

      <h2>Errores comunes</h2>
      <ul>
        <li>El menú se envía, pero nadie puede abrir tickets porque el sistema sigue desactivado.</li>
        <li>El ticket se crea sin visibilidad para el staff porque faltan roles de soporte.</li>
        <li>El panel no se puede enviar porque el bot no tiene permisos para escribir o insertar enlaces en el canal.</li>
        <li>Los logs no llegan porque no se definió un canal o no se marcaron eventos.</li>
        <li>Los recordatorios no funcionan como esperabas porque el sistema o los recordatorios siguen desactivados.</li>
      </ul>

      <Callout variant="info" title="Uso recomendado">
        Monta primero la estructura mínima: estado, canal, categoría y roles. Después ajusta mensajes, logs y
        recordatorios. Así confirmas rápido que el flujo principal ya está funcionando antes de pulir detalles.
      </Callout>

      <h2>Siguiente paso</h2>
      <p>
        Si ya dejaste tickets funcionando, lo normal es continuar con{" "}
        <Link href={"/wiki/modulos/moderacion" as any}>Moderación</Link> o volver al{" "}
        <Link href={"/wiki/modulos" as any}>resumen de módulos</Link> para activar el siguiente sistema importante del
        servidor.
      </p>
    </article>
  );
}
