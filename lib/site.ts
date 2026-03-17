export const defaultLocale = "es";
export const localePrefixEnabled = false;

export const siteName = "ZynxFox";
export const siteTitle = "ZynxFox | Bot de Discord";
export const siteDescription =
  "Sitio oficial de ZynxFox con documentacion, soporte, updates, terminos y privacidad para comunidades de Discord.";

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (rawUrl && /^https?:\/\//.test(rawUrl)) {
    return rawUrl.replace(/\/+$/, "");
  }
  
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return "https://zynxfox.com";
}

export function withLocale(path: string, locale = defaultLocale) {
  if (!path.startsWith("/")) return path;
  return localePrefixEnabled ? `/${locale}${path}` : path;
}
