import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://example.com/', lastModified: new Date() },
    { url: 'https://example.com/wiki', lastModified: new Date() },
    { url: 'https://example.com/comandos', lastModified: new Date() },
    { url: 'https://example.com/apoyo', lastModified: new Date() },
  ]
}
