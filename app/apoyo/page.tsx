export const metadata = {
  title: "Apoyo",
  description: "Apoya el desarrollo de ZynxFox."
};

export default function ApoyoPage() {
  const donateUrl = process.env.NEXT_PUBLIC_DONATE_URL || "#";
  const patreonUrl = process.env.NEXT_PUBLIC_PATREON_URL || "#";
  const kofiUrl = process.env.NEXT_PUBLIC_KOFI_URL || "#";

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-white">Apoya el proyecto</h1>
      <p className="mt-2 max-w-2xl text-zinc-300">
        Tu apoyo mantiene el bot en línea, las nuevas funciones y la infraestructura.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a className="btn-primary text-center" href={donateUrl}>Donación directa</a>
        <a className="btn-ghost text-center" href={patreonUrl}>Patreon</a>
        <a className="btn-ghost text-center" href={kofiUrl}>Ko-fi</a>
      </div>
    </div>
  );
}
