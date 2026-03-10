import Image from "next/image";
import { withLocale } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle bg-[rgba(7,8,13,0.82)] py-8 backdrop-blur-xl">
      <div className="container flex flex-col gap-5 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/zynxfox.png"
            alt="Logo de ZynxFox"
            width={36}
            height={36}
            className="rounded-[10px]"
          />
          <div className="space-y-1">
            <p className="font-medium text-text-primary">ZynxFox</p>
            <p>Un proyecto de Eclipse Studios, creado por killershadow336.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={withLocale("/wiki")} className="transition-colors hover:text-text-primary">
            Documentacion
          </a>
          <a href={withLocale("/blog")} className="transition-colors hover:text-text-primary">
            Updates
          </a>
          <a href={withLocale("/soporte")} className="transition-colors hover:text-text-primary">
            Soporte
          </a>
          <a href={withLocale("/privacidad")} className="transition-colors hover:text-text-primary">
            Privacidad
          </a>
          <a href={withLocale("/terminos")} className="transition-colors hover:text-text-primary">
            Terminos
          </a>
        </div>
      </div>
    </footer>
  );
}
