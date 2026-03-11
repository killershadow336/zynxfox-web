import { CommandSearch } from "@/components/command-search";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { scanAllCommands } from "@/lib/scanCommands";

export const metadata = {
  title: "Comandos",
  description: "Catalogo publico de comandos de ZynxFox.",
};

export default async function ComandosPage() {
  const commands = scanAllCommands();
  const slashCount = commands.filter((command) => command.name.startsWith("/")).length;
  const prefixCount = commands.length - slashCount;
  const categories = Array.from(new Set(commands.map((command) => command.cat))).sort();

  return (
    <div className="container py-12 md:py-16">
      <SectionHeader
        eyebrow="Comandos"
        title="Todo lo que puedes hacer con ZynxFox"
        subtitle="Busca por nombre, revisa categorias y descubre que funciones estan disponibles para tu servidor."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <p className="text-meta font-medium uppercase tracking-[0.2em] text-text-secondary">
            Total
          </p>
          <p className="mt-3 font-heading text-h2 font-extrabold text-text-primary">{commands.length}</p>
          <p className="mt-2 text-sm text-text-secondary">Comandos publicados en el catalogo actual.</p>
        </Card>
        <Card className="p-5">
          <p className="text-meta font-medium uppercase tracking-[0.2em] text-text-secondary">
            Slash y prefix
          </p>
          <p className="mt-3 text-body text-text-primary">
            <span className="font-heading text-h3 font-bold">{slashCount}</span> slash y{" "}
            <span className="font-heading text-h3 font-bold">{prefixCount}</span> prefix.
          </p>
          <p className="mt-2 text-sm text-text-secondary">Todo organizado para que encuentres rapido lo que necesitas.</p>
        </Card>
        <Card className="p-5">
          <p className="text-meta font-medium uppercase tracking-[0.2em] text-text-secondary">
            Categorias
          </p>
          <p className="mt-3 font-heading text-h2 font-extrabold text-text-primary">{categories.length}</p>
          <p className="mt-2 text-sm text-text-secondary">Agrupadas por utilidad y tipo de sistema.</p>
        </Card>
      </div>

      {commands.length > 0 ? (
        <CommandSearch commands={commands} />
      ) : (
        <div className="surface-card mt-8 p-5 text-text-secondary">
          No se encontraron comandos en el catalogo actual.
        </div>
      )}
    </div>
  );
}
