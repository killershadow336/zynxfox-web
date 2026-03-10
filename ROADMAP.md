# ZynxFox Web Roadmap

Estado de referencia del rebuild web.
Ultima actualizacion interna: 9 de abril de 2026.

## Estado general

La web ya tiene una base visual fuerte, legal integrada y rutas publicas listas.
Todavia no esta cerrada para produccion total porque faltan contenidos finales de varias guias, material visual real y una ultima pasada de QA y deploy.

## Resumen por fase

### Fase 0 — Fundacion visual
Estado: completada

Incluye:
- sistema de diseno con tokens, tipografias y componentes base
- navbar, footer, layouts reutilizables y motion base
- landing con identidad visual alineada a ZynxFox
- fondo animado de la home
- estilos legales y docs

Rutas/base afectada:
- `web/app/layout.tsx`
- `web/app/globals.css`
- `web/styles/tokens.css`
- `web/lib/fonts.ts`
- `web/components/ui/*`
- `web/components/layout/*`

### Fase 1 — Sitio publico esencial
Estado: en progreso muy avanzado

Ya hecho:
- home publica
- `/wiki`
- `/comandos`
- `/soporte`
- `/terminos`
- `/privacidad`
- integracion legal con MDX
- snapshot local de comandos para produccion

Pendiente dentro de esta fase:
- completar y seguir refinando contenido real de la wiki
- reemplazar placeholders visuales por capturas, videos o mockups
- revisar tono final de copy en todas las rutas
- QA completo de navegacion y responsive

### Fase 2 — Contenido vivo
Estado: pendiente

Objetivo:
- blog o updates oficiales
- changelog publico
- flujo simple para publicar novedades desde el repo

### Fase 3 — Cierre de produccion
Estado: pendiente

Objetivo:
- dominio real
- despliegue final en Vercel
- metadata y Open Graph finales
- sitemap/robots con dominio definitivo
- revision final legal y de contacto

### Fase 4 — Futuro producto web
Estado: no iniciado

Objetivo:
- teaser o pagina de "panel web pronto"
- luego panel/config web hibrido
- sin OAuth ni panel real en esta etapa actual

## Estado actual por area

### Branding y UI
Estado: fuerte

Hecho:
- paleta oficial morado/rosa
- logo real del bot
- motion base
- CTA primario mejorado
- fondo animado principal

Abierto:
- seguir refinando microinteracciones
- agregar mockup hero o preview real del bot

### Landing
Estado: util y presentable

Hecho:
- hero
- seccion de capacidades
- soporte
- CTA al bot

Abierto:
- sumar una seccion showcase mas potente
- sustituir placeholders de media
- pulir copy comercial final

### Wiki
Estado: estructura lista, contenido principal avanzado

Hecho:
- layout docs
- indice principal
- rutas por modulos y ayuda
- guias reforzadas de configuracion inicial
- guias reforzadas de tickets
- guias reforzadas de moderacion
- guias reforzadas de centro de creadores
- guias reforzadas de niveles
- guias reforzadas de recordatorios y sorteos
- FAQ y troubleshooting ampliados

Abierto:
- seguir refinando detalles y ampliar modulos secundarios si hace falta
- añadir capturas reales
- cruzar mejor docs con comandos
- cubrir mas modulos y escenarios del bot real

### Comandos
Estado: funcional

Hecho:
- catalogo publico
- conteos reales
- snapshot local para no depender del codigo privado en produccion

Abierto:
- enriquecer descripciones
- enlazar cada categoria con guias wiki donde corresponda

### Soporte
Estado: funcional

Hecho:
- hub de soporte
- CTA al Discord oficial

Abierto:
- añadir mas flujos de ayuda rapida
- posibles FAQs enlazadas por tipo de problema

### Legales
Estado: casi cerradas

Hecho:
- terminos y privacidad en MDX
- TOC automatico
- alineacion con Bolivia y con el comportamiento real del bot

Abierto:
- ultima pasada de tono juridico si se quiere un lenguaje mas formal

### Deploy
Estado: preparado en base, no cerrado

Hecho:
- proyecto compila
- soporte para `NEXT_PUBLIC_SITE_URL`
- favicon/logo correcto

Abierto:
- dominio real
- variables finales
- verificacion final en Vercel

## Orden recomendado desde ahora

1. Completar la wiki con contenido real modulo por modulo.
2. Sustituir placeholders visuales por capturas o mockups.
3. Pulir la landing con una seccion showcase mas fuerte.
4. Montar blog/updates.
5. Hacer QA final en movil, desktop, accesibilidad y rendimiento.
6. Configurar dominio y deploy final.

## Siguiente foco activo

Foco actual recomendado: cerrar contenido visual y showcase de produccion.

La primera pasada fuerte de la wiki ya esta hecha en:
1. `Configuracion inicial`
2. `Tickets`
3. `Moderacion`
4. `Centro de Creadores`
5. `Niveles`
6. `Recordatorios y sorteos`
7. `Preguntas frecuentes`
8. `Solucion de problemas`

Siguiente orden sugerido desde aqui:
1. reemplazar `MediaSlot` por capturas o mockups reales
2. reforzar la landing con una seccion showcase mas potente
3. montar blog/updates
4. cerrar QA y deploy

## Definicion de "lista para produccion"

La web se considerara lista para produccion cuando:
- toda ruta publica principal tenga copy final
- la wiki cubra los modulos principales sin huecos grandes
- existan capturas o mockups en los espacios visuales clave
- terminos y privacidad queden cerrados
- el sitio pase QA visual y responsive
- el deploy en Vercel con dominio real quede estable
