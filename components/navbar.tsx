"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildInviteUrl } from "@/utils/inviteUrl";
import { cn } from "@/utils/cn";
import { withLocale } from "@/lib/site";

const navItems = [
  { href: withLocale("/wiki"), label: "Documentación" },
  { href: withLocale("/comandos"), label: "Comandos" },
  { href: withLocale("/soporte"), label: "Soporte" },
];

export function Navbar() {
  const pathname = usePathname();
  const invite = buildInviteUrl();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-[rgba(7,8,13,0.85)] backdrop-blur-xl">
      <div className="container flex h-[var(--navbar-h)] items-center justify-between gap-4">
        <Link
          href={withLocale("/") as any}
          className="inline-flex items-center gap-3 text-text-primary transition-colors hover:text-white"
          aria-label="Ir al inicio de ZynxFox"
        >
          <span className="brand-mark">
            <span className="brand-mark__glow" aria-hidden />
            <Image
              src="/zynxfox.png"
              alt="Logo de ZynxFox"
              width={34}
              height={34}
              className="relative rounded-[10px]"
              priority
            />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-tight">ZynxFox</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href as any}
                className={cn(
                  "text-sm font-medium text-text-secondary transition-colors hover:text-brand-purple",
                  active && "text-text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button href={invite} size="compact">
            Invitar
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-border-subtle bg-surface-card text-text-primary md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X aria-hidden size={18} /> : <Menu aria-hidden size={18} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border-subtle bg-[rgba(7,8,13,0.96)] transition-[max-height,opacity] duration-enter ease-out-quint md:hidden",
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container flex flex-col gap-3 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className="rounded-button px-1 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button href={invite} block size="compact">
            Invitar
          </Button>
        </div>
      </div>
    </header>
  );
}
