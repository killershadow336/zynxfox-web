import type React from "react";
import type { Metadata } from "next";
import "@/styles/tokens.css";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingPanelSoon } from "@/components/ui/floating-panel-soon";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: {
    default: "ZynxFox | Discord",
    template: "%s | ZynxFox",
  },
  description:
    "Sitio oficial de ZynxFox con documentación, soporte, novedades y recursos públicos.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/zynxfox.png",
    shortcut: "/zynxfox.png",
    apple: "/zynxfox.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontVariables} suppressHydrationWarning>
      <body className="min-h-dvh bg-bg-base text-text-primary">
        <Navbar />
        <main className="min-h-[calc(100dvh-var(--navbar-h))]">{children}</main>
        <FloatingPanelSoon />
        <Footer />
      </body>
    </html>
  );
}
