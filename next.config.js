// Ruta del archivo: next.config.js
// Configuracion global de Next.js. Aqui se definen las cabeceras (headers) de
// seguridad que Vercel aplicara a cada respuesta HTTP del sitio, siguiendo
// buenas practicas de ciberseguridad (OWASP Secure Headers Project).
// La politica de scripts (CSP) es mas estricta en produccion que en
// desarrollo: 'unsafe-eval' solo se habilita en modo desarrollo porque
// Next.js lo necesita internamente para Fast Refresh (recarga en caliente).
// style-src y font-src se restringen a 'self': el proyecto usa next/font/google
// (ver app/layout.tsx), que autoaloja las tipografias en el propio dominio
// durante el build, por lo que no se necesita permitir fonts.googleapis.com
// ni fonts.gstatic.com como origenes externos.
//
// Cambio de esta version: se elimina el permiso "frame-src
// https://www.youtube-nocookie.com". CaseStudies.tsx ya no incrusta videos
// de YouTube (ahora usa solo imagenes .jpg locales via next/image), por lo
// que ese origen externo quedaba autorizado sin ningun componente que lo
// usara. Por principio de minimo privilegio, frame-src se restringe ahora
// solo a 'self'. Si en el futuro se vuelve a necesitar un embed externo
// (YouTube u otro), se debe re-agregar aqui explicitamente el dominio.

/** @type {import('next').NextConfig} */

const esDesarrollo = process.env.NODE_ENV === "development";

// Fuentes permitidas para cargar y ejecutar scripts. Se usa 'unsafe-inline'
// porque Next.js inyecta scripts de hidratacion inline; 'unsafe-eval' se
// limita solo a desarrollo por la razon explicada arriba.
const scriptSrc = esDesarrollo
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

const securityHeaders = [
  // Evita que el sitio sea incrustado en un <iframe> de otro dominio
  // (protege contra ataques de clickjacking). Redundante con
  // frame-ancestors de la CSP, pero se deja para navegadores antiguos
  // que no soportan CSP nivel 2.
  { key: "X-Frame-Options", value: "DENY" },

  // Evita que el navegador intente "adivinar" el tipo de un archivo
  // distinto al declarado en Content-Type (protege contra ataques MIME-sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Fuerza HTTPS en todas las conexiones futuras al dominio (y subdominios)
  // durante 2 años, incluso si el usuario escribe "http://" manualmente
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },

  // Controla cuanta informacion de la URL de origen se envia al navegar
  // hacia otros sitios, evitando fugas de rutas internas
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Desactiva el acceso a camara, microfono y geolocalizacion desde el
  // navegador, y bloquea el rastreo por cohortes (Topics/FLoC de Google)
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },

  {
    // Politica de Seguridad de Contenido (CSP): define explicitamente de
    // donde puede cargar el sitio cada tipo de recurso, mitigando XSS y
    // carga de contenido no autorizado.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "media-src 'self'",
      "frame-src 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },

  // Desactiva la resolucion anticipada de DNS de enlaces salientes, para
  // no filtrar a terceros que dominios visita el usuario antes de hacer clic
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Oculta la cabecera "X-Powered-By: Next.js" (reduce huella tecnologica visible)
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;