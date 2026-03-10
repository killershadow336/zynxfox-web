import { Callout } from "@/components/ui/callout";
import { CommandBadge } from "@/components/ui/command-badge";

export default function RecordatoriosGiveawaysWikiPage() {
  return (
    <article className="doc-content">
      <h1>Recordatorios y sorteos</h1>
      <p>
        ZynxFox incluye sistemas para automatizar avisos personales y montar dinámicas de comunidad con sorteos, sin
        depender de varios bots a la vez.
      </p>

      <h2>Recordatorios</h2>
      <p>
        El sistema de recordatorios permite programar avisos y gestionarlos después. La base del flujo pasa por{" "}
        <CommandBadge command="/remind" /> y la revisión por <CommandBadge command="/reminders" />.
      </p>
      <ul>
        <li>Tiempo mínimo: 10 segundos.</li>
        <li>Tiempo máximo: 24 días.</li>
        <li>El intento principal es por DM al usuario.</li>
        <li>Si el DM falla, el bot intenta usar el canal original como fallback.</li>
      </ul>

      <h2>Qué puedes hacer con recordatorios</h2>
      <ul>
        <li>Programar un recordatorio personal con mensaje y tiempo.</li>
        <li>Listar recordatorios activos.</li>
        <li>Modificar o cancelar recordatorios ya creados.</li>
      </ul>

      <h2>Sorteos</h2>
      <p>
        El sistema de giveaways se maneja desde <CommandBadge command="/giveaway" /> y permite crear sorteos
        persistentes con duración, premio, ganadores, requisitos y mensajes de premio.
      </p>
      <ul>
        <li>Crear un sorteo en un canal concreto.</li>
        <li>Editar, cancelar o finalizar sorteos.</li>
        <li>Hacer reroll y revisar detalles por ID.</li>
        <li>Definir requisitos de participación y mensaje por DM para ganadores.</li>
      </ul>

      <h2>Casos comunes</h2>
      <ul>
        <li>Avisos personales programados para tareas o eventos.</li>
        <li>Sorteos temporales para dinamizar la comunidad.</li>
        <li>Dinámicas que reducen tareas repetitivas del staff.</li>
      </ul>

      <h2>Errores comunes</h2>
      <ul>
        <li>El usuario no recibe el recordatorio por DM porque tiene bloqueados los mensajes privados.</li>
        <li>El sorteo existe, pero no se puede gestionar porque se perdió el ID o el mensaje original.</li>
        <li>Los requisitos de participación son demasiado restrictivos y casi nadie entra.</li>
        <li>Se crea un giveaway sin revisar bien premio, duración o cantidad de ganadores.</li>
      </ul>

      <Callout variant="warning" title="Antes de publicar sorteos">
        El bot gestiona la dinámica, pero el cumplimiento del premio sigue siendo responsabilidad del servidor o del
        staff que lo organiza.
      </Callout>

      <h2>Consejo práctico</h2>
      <p>
        Si tu comunidad recién está empezando, usa primero recordatorios y sorteos simples. Después puedes volver a
        combinarlos con módulos como niveles o tickets según el tipo de actividad que quieras incentivar.
      </p>
    </article>
  );
}
