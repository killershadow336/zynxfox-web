# ZynxFox Web Roadmap

Estado de referencia del rebuild web.  
Ultima actualizacion interna: 9 de abril de 2026.

## Estado general

La web ya tiene una base visual fuerte, legales integradas, deploy funcionando y rutas publicas listas.
Todavia no esta cerrada al 100% porque faltan capturas reales, una ultima pasada de QA y pulido final de copy.

## Resumen por fase

### Fase 0 - Fundacion visual
Estado: completada

Incluye:
- sistema de diseno con tokens, tipografias y componentes base
- navbar, footer, layouts reutilizables y motion base
- landing con identidad visual alineada a ZynxFox
- fondo animado principal
- estilos de docs y legales

### Fase 1 - Sitio publico esencial
Estado: muy avanzado

Ya hecho:
- home publica
- `/wiki`
- `/comandos`
- `/soporte`
- `/terminos`
- `/privacidad`
- integracion legal con MDX
- snapshot local de comandos para produccion

Abierto:
- seguir refinando contenido real de la wiki
- reemplazar mockups o placeholders por capturas reales
- revisar tono final de copy en todas las rutas
- QA completo de navegacion y responsive

### Fase 2 - Contenido vivo
Estado: iniciada

Ya hecho:
- base de `/blog`
- posts iniciales publicados desde MDX
- previews de updates en la home

Abierto:
- sumar mas posts reales
- convertirlo en changelog publico si hace falta

### Fase 3 - Cierre de produccion
Estado: en progreso

Ya hecho:
- deploy inicial en Vercel
- soporte para `NEXT_PUBLIC_SITE_URL`
- sitemap y robots

Abierto:
- dominio final
- metadata finales
- revision final legal y de contacto
- QA de produccion

### Fase 4 - Futuro producto web
Estado: no iniciado

Objetivo:
- teaser o pagina de "panel web pronto"
- luego panel/config web hibrido
- sin OAuth ni panel real en esta etapa

## Estado actual por area

### Branding y UI
Estado: fuerte

Hecho:
- paleta oficial morado/rosa
- logo real del bot
- CTA primario mejorado
- fondo animado principal
- showcase visual en la home

Abierto:
- seguir refinando microinteracciones
- reemplazar mockups por media real

### Landing
Estado: fuerte y cercana a lanzamiento

Hecho:
- hero
- seccion de capacidades
- showcase visual del flujo del bot
- preview de updates
- soporte y CTA al Discord

Abierto:
- pulir copy comercial final
- meter capturas reales o mini demos

### Wiki
Estado: estructura lista, contenido principal avanzado

Hecho:
- layout docs
- indice principal
- rutas por modulos y ayuda
- guias reforzadas de configuracion inicial
- tickets
- moderacion
- centro de creadores
- niveles
- recordatorios y sorteos
- FAQ y troubleshooting

Abierto:
- ampliar modulos secundarios si hace falta
- anadir capturas reales
- cruzar mejor docs con comandos

### Comandos
Estado: funcional

Hecho:
- catalogo publico
- conteos reales
- snapshot local para no depender del codigo privado en produccion

Abierto:
- enriquecer descripciones
- enlazar categorias con guias wiki

### Soporte
Estado: funcional

Hecho:
- hub de soporte
- CTA al Discord oficial

Abierto:
- sumar flujos de ayuda rapida
- enlazar problemas frecuentes segun caso

### Legales
Estado: casi cerradas

Hecho:
- terminos y privacidad en MDX
- TOC automatico
- alineacion con Bolivia y con el comportamiento real del bot

Abierto:
- ultima pasada de tono juridico si se quiere mas formalidad

### Deploy
Estado: funcionando

Hecho:
- proyecto compila
- deploy inicial en Vercel
- favicon y logo correctos

Abierto:
- dominio final
- variables finales
- revision de produccion en movil y desktop

## Orden recomendado desde ahora

1. Reemplazar el showcase mockup por capturas reales cuando existan.
2. Pulir copy comercial final en home y blog.
3. Hacer QA responsive y accesibilidad.
4. Conectar dominio final y metadata definitivas.
5. Seguir ampliando wiki y updates a medida que el bot avance.

## Definicion de "lista para produccion"

La web se considerara lista para produccion cuando:
- toda ruta publica principal tenga copy final
- la wiki cubra los modulos principales sin huecos grandes
- existan capturas o mockups solidos en los espacios visuales clave
- terminos y privacidad queden cerrados
- el sitio pase QA visual y responsive
- el deploy en Vercel con dominio real quede estable
