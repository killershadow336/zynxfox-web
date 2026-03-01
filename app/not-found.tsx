export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-3xl font-bold text-white">404 — Página no encontrada :(</h1>
      <p className="mt-2 text-zinc-400">La ruta solicitada no existe.</p>
      <a href="/" className="mt-4 inline-block text-brand-300">Volver al inicio</a>
    </div>
  );
}
