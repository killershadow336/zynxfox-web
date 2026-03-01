import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "ZynxFox — Bot de Discord",
    template: "%s | ZynxFox"
  },
  description: "Wiki e información de ZynxFox: comandos, características y cómo apoyar el proyecto.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-dvh antialiased flex flex-col">
        {/* Fondo global fijo para evitar cortes entre secciones/páginas */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              [
                // Radial superior
                "radial-gradient(150% 100% at 50% -20%, rgba(99,102,241,.26), transparent 72%)",
                // Radial inferior ampliada
                "radial-gradient(170% 140% at 50% 130%, rgba(236,72,153,.14), transparent 74%)",
                // Gradiente vertical sutil para suavizar transición en pantallas altas
                "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.00) 18%, rgba(255,255,255,0.00) 82%, rgba(255,255,255,0.02) 100%)"
              ].join(', ')
          }}
        />
        <Navbar />
        {/* pt-16 compensa la altura del navbar sticky */}
  <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
