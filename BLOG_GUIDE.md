# Guia rapida para publicar updates en ZynxFox Web

## Donde crear cada update

Cada publicacion nueva va en:

`content/blog/tu-slug.mdx`

## Plantilla base

```mdx
---
title: "Titulo del update"
description: "Resumen corto del cambio."
slug: "titulo-del-update"
date: "2026-04-09"
author: "killershadow336"
tags:
  - Update
  - Web
published: true
---

Texto inicial del update.

## Seccion

Mas detalles aqui.
```

## Significado de cada campo

- `title`: titulo visible del post
- `description`: resumen corto para cards y SEO
- `slug`: URL del post
- `date`: fecha en formato `YYYY-MM-DD`
- `author`: nombre visible del autor
- `tags`: etiquetas cortas
- `published`: si es `false`, no se muestra en la web

## Componentes MDX disponibles

Dentro del contenido puedes usar:

- `<Callout variant="info">...</Callout>`
- `<Callout variant="success">...</Callout>`
- `<Callout variant="warning">...</Callout>`
- `<CommandBadge command="/config" />`

## Avatar del autor

La web intenta mostrar tu avatar de Discord usando:

- `NEXT_PUBLIC_OWNER_DISCORD_ID`
- o, si no existe, `NEXT_PUBLIC_OWNER_DISCORD_USERNAME`

Orden actual del resolver:

1. `Lanyard` por tu `Discord ID`
2. API oficial de Discord si configuras token
3. `unavatar`
4. avatar fallback con iniciales

Si quieres una capa extra de respaldo, tambien puedes configurar en Vercel:

- `DISCORD_BOT_TOKEN`

Para que se actualice cuando cambies tu foto, lo ideal es poner tu ID de Discord en:

`NEXT_PUBLIC_OWNER_DISCORD_ID=tu_id`

Y subir esa variable tambien a Vercel.  
Si ademas configuras `DISCORD_BOT_TOKEN`, la web intentara resolver tu avatar directamente desde la API de Discord en la ruta `/api/owner-avatar`.

## Flujo recomendado

1. Crear el archivo nuevo dentro de `content/blog/`.
2. Escribir frontmatter y contenido.
3. Probar con `npm run dev`.
4. Verificar con `npm run build`.
5. Hacer commit y push.
6. Vercel desplegara el update.

## Consejo practico

Si el update cambia una funcion importante del bot, actualiza tambien la wiki relacionada para que la documentacion no quede desfasada.
