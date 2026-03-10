import { CommandBadge } from "@/components/ui/command-badge";
import { Callout } from "@/components/ui/callout";
import Link from "next/link";

export default function NivelesWikiPage() {
  return (
    <article className="doc-content">
      <h1>Niveles</h1>
      <p>
        El sistema de niveles añade progreso por actividad, leaderboard, recompensas y multiplicadores para mantener a
        la comunidad participando sin depender de un bot aparte.
      </p>

      <h2>Qué puedes ajustar</h2>
      <ul>
        <li>Ganancia de experiencia por mensaje y cooldown.</li>
        <li>Canal de anuncios o uso del mismo canal del mensaje.</li>
        <li>Mensaje de subida de nivel.</li>
        <li>Roles de recompensa por nivel.</li>
        <li>Listas negras por roles y canales.</li>
        <li>Boosters globales, por rol y por canal.</li>
      </ul>

      <p>
        La configuración arranca desde <CommandBadge command="/config" /> y luego el módulo de niveles para ajustes,
        listas negras, recompensas y boosters.
      </p>

      <h2>Comandos relacionados</h2>
      <p>
        Los comandos más visibles para la comunidad suelen ser <CommandBadge command="/rank" />,{" "}
        <CommandBadge command="/leaderboard" /> y <CommandBadge command="/nivel" />. El staff también cuenta con{" "}
        <CommandBadge command="/levels" /> para gestión más directa.
      </p>

      <h2>Valores base del sistema</h2>
      <p>
        El sistema trabaja con un rango configurable de XP por mensaje y un cooldown. En la configuración actual del
        bot, los límites normales parten de una base conservadora para evitar abuso y spam artificial.
      </p>

      <h2>Orden recomendado</h2>
      <ol>
        <li>Activa el módulo.</li>
        <li>Ajusta XP por mensaje y cooldown según la actividad real del servidor.</li>
        <li>Define si quieres un canal de anuncios o usar el mismo canal.</li>
        <li>Configura listas negras para canales de spam, bots o staff.</li>
        <li>Añade recompensas por nivel si tu comunidad las necesita.</li>
        <li>Usa boosters solo después de probar el ritmo normal del sistema.</li>
      </ol>

      <h2>Listas negras y boosters</h2>
      <ul>
        <li>
          <strong>Listas negras:</strong> excluyen roles y canales del sistema de niveles.
        </li>
        <li>
          <strong>Boosters globales:</strong> multiplican la ganancia de XP en todo el servidor.
        </li>
        <li>
          <strong>Boosters por rol:</strong> útiles para eventos, membresías o categorías especiales.
        </li>
        <li>
          <strong>Boosters por canal:</strong> ideales para incentivar zonas concretas del servidor.
        </li>
      </ul>

      <h2>Errores comunes</h2>
      <ul>
        <li>El sistema parece no dar XP porque el canal o el rol del usuario está en blacklist.</li>
        <li>Los anuncios no salen porque el canal configurado no existe o el bot no puede escribir allí.</li>
        <li>Las recompensas no se aplican porque el bot no puede gestionar el rol correspondiente.</li>
        <li>La progresión se siente rota porque el cooldown o los boosters quedaron demasiado altos.</li>
      </ul>

      <Callout variant="info" title="Uso recomendado">
        Primero deja estable la progresión base. Las recompensas y boosters funcionan mejor cuando ya viste cómo se
        comporta el ritmo natural de tu comunidad durante unos días.
      </Callout>

      <h2>Siguiente paso</h2>
      <p>
        Si ya configuraste niveles, puedes continuar con{" "}
        <Link href={"/wiki/modulos/recordatorios-giveaways" as any}>Recordatorios y sorteos</Link> o volver al{" "}
        <Link href={"/wiki/modulos" as any}>resumen de módulos</Link>.
      </p>
    </article>
  );
}
