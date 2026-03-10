export function buildInviteUrl(params?: {
  clientId?: string;
  scopes?: string[];
  permissions?: string;
  redirectUri?: string;
}) {
  const clientId = params?.clientId ?? process.env.NEXT_PUBLIC_CLIENT_ID ?? "";
  const scopes = params?.scopes ?? ["bot", "applications.commands"];
  const permissions =
    params?.permissions ?? (process.env.NEXT_PUBLIC_PERMISSIONS || "53608447");
  const redirectUri =
    params?.redirectUri ?? process.env.NEXT_PUBLIC_OAUTH_REDIRECT ?? "";

  const url = new URL("https://discord.com/oauth2/authorize");
  if (clientId) url.searchParams.set("client_id", String(clientId));
  url.searchParams.set("scope", scopes.join(" "));
  if (permissions) url.searchParams.set("permissions", String(permissions));
  if (redirectUri) url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  return url.toString();
}
