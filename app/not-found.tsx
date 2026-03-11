import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] items-center justify-center py-20">
      <div className="surface-card max-w-xl p-8 text-center">
        <p className="text-meta font-medium uppercase tracking-[0.24em] text-text-secondary">
          Error 404
        </p>
        <h1 className="mt-4 font-heading text-h1 font-extrabold tracking-tight text-text-primary">
          Pagina no encontrada
        </h1>
        <p className="mt-4 text-body text-text-secondary">
          La pagina que buscas no esta disponible o puede haber cambiado de ubicacion.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Volver al inicio</Button>
        </div>
      </div>
    </div>
  );
}
