import Link from "next/link";
import { buildInviteUrl } from "@/utils/inviteUrl";

export default function InstalacionPage() {
  const invite = buildInviteUrl();
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Instalación (invitar el bot)</h1>
      <p>
        Para empezar, invita ZynxFox a tu servidor con los permisos recomendados.
      </p>
      {invite && invite.includes("client_id=") ? (
        <p>
          <a href={invite} className="rounded bg-white/10 px-3 py-2 text-white hover:bg-white/20">Invitar ZynxFox</a>
        </p>
      ) : (
        <p className="text-zinc-400">El enlace de invitación no está disponible. Pídele al administrador del bot que lo comparta.</p>
      )}
      <h2>Requisitos</h2>
      <ul>
        <li>Rol con permisos de administrador o gestión de servidores.</li>
        <li>Permisos de Enviar mensajes y Insertar enlaces en el canal de anuncios.</li>
      </ul>
      <h2>Pasos rápidos</h2>
      <ol>
        <li>Invita el bot con el enlace anterior.</li>
        <li>En tu servidor, escribe <code>/config</code> para abrir el panel.</li>
        <li>Selecciona el canal donde quieres los anuncios del bot.</li>
      </ol>
      <p>
        ¿Primeros pasos? Ve a <Link href={"/wiki/configuracion-inicial" as any}>Configuración inicial</Link>.
      </p>
    </article>
  );
}
