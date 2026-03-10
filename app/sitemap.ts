import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/wiki`, lastModified: new Date() },
    { url: `${siteUrl}/comandos`, lastModified: new Date() },
    { url: `${siteUrl}/soporte`, lastModified: new Date() },
    { url: `${siteUrl}/privacidad`, lastModified: new Date() },
    { url: `${siteUrl}/terminos`, lastModified: new Date() },
    { url: `${siteUrl}/apoyo`, lastModified: new Date() },
  ];
}
