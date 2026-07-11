// Ruta del archivo: next.config.js
// Configuración global de Next.js. Aquí se definen las cabeceras (headers) de
// seguridad que Vercel aplicará a cada respuesta HTTP del sitio, siguiendo
// buenas prácticas de ciberseguridad (OWASP Secure Headers Project).

/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Evita que el sitio sea cargado dentro de un <iframe> de otro dominio (protección Clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Evita que el navegador intente adivinar el tipo MIME de un archivo (protección MIME-sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Obliga a que el navegador siempre use HTTPS durante 2 años, incluidos subdominios
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Controla cuánta información del referer se envía a otros sitios
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restringe el acceso a APIs sensibles del navegador (cámara, micrófono, geolocalización)
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // Content Security Policy: limita desde dónde se pueden cargar scripts, estilos e imágenes
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "img-src 'self' data: blob:",
      "font-src 'self' fonts.gstatic.com",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
  // Desactiva el modo de compatibilidad DNS prefetch por privacidad
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

const nextConfig = {
  reactStrictMode: true, // Activa comprobaciones adicionales de React en desarrollo
  poweredByHeader: false, // Oculta la cabecera "X-Powered-By: Next.js" para no revelar tecnología al atacante
  compress: true, // Compresión gzip/brotli de las respuestas
  images: {
    formats: ["image/avif", "image/webp"], // Formatos modernos y livianos de imagen para mejor SEO/rendimiento
  },
  async headers() {
    // Aplica las cabeceras de seguridad definidas arriba a TODAS las rutas del sitio
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;