export const defaultLocale = "es";
export const localePrefixEnabled = false;

export const siteName = "ZynxFox";
export const siteTitle = "ZynxFox | Discord";
export const siteDescription =
  "Sitio oficial de ZynxFox con documentacion, soporte, updates y recursos publicos para tu servidor.";

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return rawUrl && /^https?:\/\//.test(rawUrl) ? rawUrl.replace(/\/+$/, "") : "https://example.com";
}

export function withLocale(path: string, locale = defaultLocale) {
  if (!path.startsWith("/")) return path;
  return localePrefixEnabled ? `/${locale}${path}` : path;
}
