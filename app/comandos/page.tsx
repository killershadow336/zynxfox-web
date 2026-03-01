import { CommandSearch } from "@/components/command-search";
import { scanAllCommands } from "@/lib/scanCommands";

export const metadata = {
  title: "Comandos",
  description: "Listado de comandos del bot ZynxFox con búsqueda."
};

export default async function ComandosPage() {
  const commands = scanAllCommands();
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-white">Comandos</h1>
      <p className="mt-2 text-zinc-300">Busca y filtra comandos disponibles.</p>

  {/* Interactividad en componente cliente */}
  {commands.length > 0 ? (
    <CommandSearch commands={commands} />
  ) : (
    <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-zinc-400">
      No se encontraron comandos. Revisa que existan archivos en <code className="text-white">/commands</code> o <code className="text-white">/Commands_prefix</code>.
    </div>
  )}
    </div>
  );
}
