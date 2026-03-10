export const defaultLocale = "es";
export const localePrefixEnabled = false;

export const siteName = "ZynxFox";
export const siteTitle = "ZynxFox | Bot de Discord";
export const siteDescription =
  "Sitio oficial de ZynxFox con documentacion, soporte, updates, terminos y privacidad para comunidades de Discord.";

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return rawUrl && /^https?:\/\//.test(rawUrl) ? rawUrl.replace(/\/+$/, "") : "https://example.com";
}

export function withLocale(path: string, locale = defaultLocale) {
  if (!path.startsWith("/")) return path;
  return localePrefixEnabled ? `/${locale}${path}` : path;
}
