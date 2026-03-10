import Link from "next/link";

export default function WikiComandosPage() {
  return (
    <article className="doc-content">
      <h1>Comandos</h1>
      <p>
        El catálogo público de comandos está disponible en su propia página para que puedas buscar por nombre, categoría y tipo de uso.
      </p>

      <p>
        Abre el <Link href={"/comandos" as any}>catálogo de comandos</Link> para ver el listado completo publicado junto a la web.
      </p>
    </article>
  );
}
