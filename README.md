# ZynxFox Web

Sitio web informativo del bot ZynxFox (landing + wiki + comandos + apoyo), sin panel de configuración.

## Scripts
- `npm run dev` — desarrollo (puerto 3010)
- `npm run build` — producción
- `npm run start` — iniciar servidor

## Variables de entorno
Crea un `.env.local` en `web/` con:

```
NEXT_PUBLIC_CLIENT_ID=xxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_OAUTH_REDIRECT=
NEXT_PUBLIC_SUPPORT_URL=https://discord.gg/tu-soporte
NEXT_PUBLIC_DONATE_URL=https://tu-donacion
NEXT_PUBLIC_PATREON_URL=
NEXT_PUBLIC_KOFI_URL=
NEXT_PUBLIC_PERMISSIONS=53608447
```

No uses IDs hardcodeados; usa variables de entorno como arriba.

## Despliegue
Recomendado en Vercel. Configura las mismas variables en el proyecto.
