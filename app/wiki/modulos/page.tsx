import Link from "next/link";

export default function ModulosIndexPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Módulos disponibles</h1>
      <p>Un resumen de las principales funcionalidades del bot.</p>
      <ul>
        <li><Link href={"/wiki/modulos/tickets" as any}>Tickets</Link>: Gestión de soporte con canales privados.</li>
        <li><Link href={"/wiki/modulos/moderacion" as any}>Moderación</Link>: Herramientas para mantener tu servidor limpio.</li>
        <li><Link href={"/wiki/modulos/niveles" as any}>Niveles</Link>: Sistema de experiencia y niveles por chat.</li>
        <li><Link href={"/wiki/modulos/recordatorios-giveaways" as any}>Recordatorios y sorteos</Link>: Recordatorios programados y sorteos.</li>
      </ul>
    </article>
  );
}
