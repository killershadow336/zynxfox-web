import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/tokens.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { FloatingPanelSoon } from "@/components/ui/floating-panel-soon";
import { fontVariables } from "@/lib/fonts";
import { getSiteUrl, siteDescription, siteName, siteTitle } from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | ZynxFox",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "es_BO",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: "/zynxfox.png",
    shortcut: "/zynxfox.png",
    apple: "/zynxfox.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07080D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontVariables} suppressHydrationWarning>
      <body className="min-h-dvh bg-bg-base text-text-primary">
        <Navbar />
        <main className="min-h-[calc(100dvh-var(--navbar-h))]">{children}</main>
        <FloatingPanelSoon />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
