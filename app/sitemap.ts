// Ruta del archivo: app/sitemap.ts
// Genera dinámicamente el sitemap.xml del sitio, ayudando a los buscadores
// a indexar la página principal y sus secciones de forma eficiente.

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.softlegacy.com.co",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}