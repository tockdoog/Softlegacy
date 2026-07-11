// Ruta del archivo: app/robots.ts
// Genera dinámicamente el archivo robots.txt, indicando a los buscadores
// qué rutas pueden rastrear y dónde encontrar el mapa del sitio (sitemap).

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // Evita que los buscadores indexen los endpoints de la API
      },
    ],
    sitemap: "https://www.softlegacy.com.co/sitemap.xml",
  };
}