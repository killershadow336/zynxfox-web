export const defaultLocale = "es";
export const localePrefixEnabled = false;

export function withLocale(path: string, locale = defaultLocale) {
  if (!path.startsWith("/")) return path;
  return localePrefixEnabled ? `/${locale}${path}` : path;
}
