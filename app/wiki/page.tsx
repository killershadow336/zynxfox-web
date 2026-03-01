export const metadata = {
  title: "Wiki",
  description: "Guías y ayuda de ZynxFox"
};

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a
      href={href}
      className="group block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
    >
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-zinc-300">{desc}</p>
      <span className="mt-3 inline-block text-sm text-brand-300 opacity-0 transition group-hover:opacity-100">
        Abrir →
      </span>
    </a>
  );
}

export default function WikiPage() {
  return (
    <div className="container py-10 sm:py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Centro de ayuda</h1>
        <p className="mt-2 max-w-2xl text-zinc-300">
          Documentación práctica para usar ZynxFox. Encuentra guías rápidas, módulos y
          soluciones a problemas comunes.
        </p>
      </header>

      {/* Guía rápida */}
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">Guía rápida</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Invitar el bot" desc="Cómo añadir ZynxFox a tu servidor." href="/wiki/instalacion" />
          <Card title="Configuración inicial" desc="Pasos recomendados tras invitarlo." href="/wiki/configuracion-inicial" />
          <Card title="Lista de comandos" desc="Consulta y busca comandos por categoría." href="/comandos" />
        </div>
      </section>

      {/* Módulos */}
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">Módulos</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Tickets" desc="Sistema de soporte con canales privados." href="/wiki/modulos/tickets" />
          <Card title="Moderación" desc="Expulsiones, baneos, advertencias y más." href="/wiki/modulos/moderacion" />
          <Card title="Niveles" desc="Experiencia por mensajes y roles por nivel." href="/wiki/modulos/niveles" />
          <Card title="Recordatorios y sorteos" desc="Programar avisos y gestionar giveaways." href="/wiki/modulos/recordatorios-giveaways" />
        </div>
      </section>

      {/* Soporte */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">Soporte</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Preguntas frecuentes" desc="Respuestas a dudas comunes." href="/wiki/preguntas-frecuentes" />
          <Card title="Solución de problemas" desc="Errores habituales y cómo resolverlos." href="/wiki/solucion-de-problemas" />
          <Card title="Privacidad y seguridad" desc="Cómo manejamos datos y permisos." href="/wiki/privacidad-y-seguridad" />
        </div>
      </section>
    </div>
  );
}
