export function Footer() {
  return (
  <footer className="border-t border-white/10 py-8 backdrop-blur-[1px] bg-black/10">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-zinc-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Eclipse Studios. Hecho con ❤️ por ohiostate — Wiki e información del bot.
        </p>
        <div className="flex items-center gap-4">
          <a href="/privacidad" className="transition hover:text-white">Privacidad</a>
          <a href="/terminos" className="transition hover:text-white">Términos</a>
        </div>
      </div>
    </footer>
  );
}
