# SoftLegacy — Sitio web corporativo

Sitio web (landing page) construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**, listo para desplegar en **Vercel**. Incluye formulario de contacto funcional con envío real de correo, validación en servidor, límite de solicitudes (rate limiting) y buenas prácticas de seguridad.

No está enfocado en un nicho o industria específica: los textos y servicios cubren software a la medida, ciberseguridad, videovigilancia, domótica, consultoría y soporte, aplicables a cualquier tipo de negocio.

---

## 1. ¿Qué es este proyecto?

Es una página de una sola vista (single page) con navegación por anclas, dividida en secciones (Hero, Servicios, Soluciones, Nosotros, Proceso, Casos de éxito, Testimonios, Preguntas frecuentes, Llamado a la acción y Formulario de contacto), más un encabezado y pie de página fijos.

**Estilo visual:** fondo blanco predominante, acento en rojo, bloques oscuros puntuales (tipo "sello") para dar contraste dramático — inspirado en la estética japonesa combinada con un lenguaje visual tecnológico (grid técnico, glow, líneas de escaneo, glassmorphism). Todas las animaciones (aparición al hacer scroll, hover, menú móvil) usan Framer Motion y respetan la preferencia de "reducir movimiento" del sistema operativo del usuario (accesibilidad).

**Moneda e idioma:** todos los precios están en pesos colombianos (COP) y todo el contenido está en español.

---

## 2. Seguridad y buenas prácticas implementadas

| Capa | Dónde | Qué hace |
|---|---|---|
| Validación de datos | `lib/validation.ts` | Esquema estricto con Zod: tipo, longitud mínima/máxima y formato de cada campo del formulario. Rechaza cualquier dato que no cumpla. |
| Sanitización anti-XSS | `lib/validation.ts` (`sanitizeText`) | Elimina etiquetas HTML y caracteres de control antes de usar cualquier dato recibido. |
| Rate limiting | `lib/rateLimit.ts` | Límite de solicitudes por IP (5 por minuto) para mitigar spam y ataques de fuerza bruta sobre el endpoint de contacto. |
| Honeypot anti-bot | `components/sections/ContactForm.tsx` + `app/api/contact/route.ts` | Campo invisible para personas; si un bot lo llena, la solicitud se descarta silenciosamente. |
| Validación en el servidor | `app/api/contact/route.ts` | Nunca se confía solo en la validación del navegador; todo se revalida en el servidor. |
| No fuga de información | `app/api/contact/route.ts` | Los errores internos (fallos de Resend, excepciones) nunca se muestran al cliente; solo se registran en el servidor (`console.error`). |
| Bloqueo de métodos HTTP | `app/api/contact/route.ts` | El endpoint solo acepta `POST`; cualquier otro método (`GET`, etc.) responde `405`. |
| Variables de entorno | `.env.example` / `.env.local` | Claves y credenciales nunca quedan escritas en el código; se gestionan como variables de entorno, tanto en local como en Vercel. |
| Accesibilidad | `app/globals.css`, componentes | Foco de teclado visible, roles ARIA (`aria-live`, `aria-expanded`, `aria-hidden`), soporte a `prefers-reduced-motion`. |
| Rutas estáticas de SEO/seguridad básica | `app/robots.ts`, `app/sitemap.ts` | Generan `robots.txt` y `sitemap.xml` de forma dinámica y segura (sin archivos estáticos editables a mano). |
| Middleware | `middleware.ts` | Punto centralizado para cabeceras de seguridad adicionales o redirecciones a nivel de todo el sitio. |

> **Nota sobre el rate limiting en producción:** el límite por IP usa memoria del proceso. En Vercel (entorno *serverless*), cada instancia tiene su propia memoria, por lo que este límite es una primera barrera, no una solución distribuida. Para un límite robusto en alto tráfico se recomienda migrar a **Vercel KV** o **Upstash Redis** (ver comentario en `lib/rateLimit.ts`).

---

## 3. Estructura completa del proyecto

```
softlegacy/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Endpoint POST /api/contact (validación, rate limit, envío de correo)
│   ├── globals.css               # Estilos base globales, tema claro, accesibilidad
│   ├── layout.tsx                # Layout raíz: fuentes, metadatos, Header y Footer globales
│   ├── page.tsx                  # Composición de la página principal (orden de las secciones)
│   ├── robots.ts                 # Genera /robots.txt dinámicamente
│   └── sitemap.ts                # Genera /sitemap.xml dinámicamente
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Encabezado fijo, navegación, menú móvil
│   │   └── Footer.tsx            # Pie de página, tema oscuro intencional
│   ├── sections/
│   │   ├── Hero.tsx              # Sección 1: hero principal (video/imagen)
│   │   ├── Services.tsx          # Sección 3: servicios ofrecidos
│   │   ├── Products.tsx          # Sección 4: soluciones y precios en COP
│   │   ├── Process.tsx           # Sección 5: proceso de trabajo (6 pasos)
│   │   ├── TechStack.tsx         # Sección 6: cinta de tecnologías (marquee)
│   │   ├── Benefits.tsx          # Sección 7: beneficios de elegirnos
│   │   ├── CaseStudies.tsx       # Sección 8: casos de uso / proyectos
│   │   ├── Testimonials.tsx      # Sección 9: testimonios (ejemplos)
│   │   ├── FAQ.tsx               # Sección 10: preguntas frecuentes
│   │   ├── CTA.tsx               # Sección 11: llamado a la acción final
│   │   ├── ContactForm.tsx       # Sección 12: formulario de contacto
│   │   └── About.tsx             # Sección 2: quiénes somos
│   └── ui/
│       └── ScrollReveal.tsx      # Componente reutilizable de animación al hacer scroll
│
├── lib/
│   ├── validation.ts             # Esquema Zod + sanitización de texto
│   └── rateLimit.ts              # Limitador de solicitudes por IP
│
├── public/
│   └── images/                   # Imágenes del sitio (ver sección 5)
│   └── videos/                   # Video opcional del Hero (ver sección 5)
│
├── scripts/                      # Utilidades de mantenimiento (limpieza de código, no se ejecutan en producción)
│   ├── fix-chars.js
│   ├── fix-header.js
│   └── limpiar-invisibles.js
│
├── middleware.ts                 # Middleware global de Next.js
├── next.config.js                # Configuración de Next.js
├── tailwind.config.ts            # Sistema de diseño: colores, animaciones, tipografía
├── postcss.config.js             # Configuración de PostCSS (requerido por Tailwind)
├── tsconfig.json                 # Configuración de TypeScript
├── package.json                  # Dependencias y scripts del proyecto
├── .env.example                  # Plantilla de variables de entorno (sin valores reales)
├── .env.local                    # Variables de entorno reales (NUNCA se sube a git)
└── .gitignore                    # Archivos/carpetas excluidos del control de versiones
```

---

## 4. Cómo correr el proyecto localmente

### Requisitos previos
- **Node.js 18.18 o superior** (recomendado 20 LTS) — [nodejs.org](https://nodejs.org)
- **npm** (viene incluido con Node.js)
- Una cuenta gratuita en **[resend.com](https://resend.com)** para el envío de correos del formulario de contacto

### Pasos

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno**

   Copia `.env.example` a un nuevo archivo llamado `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Abre `.env.local` y completa:
   ```
   RESEND_API_KEY=tu_clave_real_de_resend
   CONTACT_TO_EMAIL=softlegacytkd@gmail.com
   CONTACT_FROM_EMAIL=onboarding@resend.dev
   ```
   La `RESEND_API_KEY` se genera en el panel de Resend, sección **API Keys**, después de crear una cuenta gratuita.

3. **Levantar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

4. **Agregar las imágenes y video reales** (ver sección 5) para que dejen de aparecer los errores 404 de imágenes.

### Otros comandos útiles

```bash
npm run build     # Genera la build de producción
npm run start     # Corre la build de producción localmente (requiere haber corrido build antes)
npm run lint      # Revisa el código con el linter de Next.js
```

---

## 5. Archivos multimedia pendientes de subir

El código ya hace referencia a estas rutas; solo falta que subas los archivos reales con esos nombres exactos dentro de `public/`:

| Ruta esperada | Usado en |
|---|---|
| `public/images/hero-tech.jpg` | `Hero.tsx` (imagen de respaldo del video) |
| `public/videos/hero-loop.mp4` | `Hero.tsx` (video de fondo, opcional) |
| `public/images/about-team.jpg` | `About.tsx` |
| `public/images/case-retail.jpg` | `CaseStudies.tsx` |
| `public/images/case-salud.jpg` | `CaseStudies.tsx` |
| `public/images/case-logistica.jpg` | `CaseStudies.tsx` |
| `public/images/case-servicios.jpg` | `CaseStudies.tsx` |

Mientras no subas estos archivos, verás errores `404` en la consola del navegador y de la terminal; no afectan el resto del sitio.

---

## 6. Cómo desplegar en Vercel

1. Sube el proyecto a un repositorio de GitHub/GitLab/Bitbucket (asegúrate de que `.env.local` **no** se suba; ya está excluido en `.gitignore`).
2. Entra a [vercel.com](https://vercel.com) → **Add New... → Project** → importa el repositorio.
3. En **Settings → Environment Variables**, agrega las mismas variables de `.env.local`:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`

   Agrégalas para los tres entornos: **Production**, **Preview** y **Development**.
4. Vercel detecta automáticamente que es un proyecto Next.js y lo despliega sin configuración adicional.
5. Cuando tengas un dominio propio (por ejemplo `softlegacy.com.co`), verifícalo en Resend y actualiza `CONTACT_FROM_EMAIL` para enviar desde una dirección de ese dominio en lugar de `onboarding@resend.dev`.

---

## 7. Convenciones del código

- **Comentario de ruta:** todo archivo empieza con un comentario indicando la ruta exacta donde debe ubicarse dentro del proyecto.
- **Comentario por bloque:** cada bloque de lógica relevante (funciones, efectos, validaciones, animaciones) tiene un comentario explicando su propósito.
- **Idioma:** nombres de funciones/variables de negocio y todos los textos visibles están en español; el código sigue convenciones estándar de React/TypeScript.
- **Componentes de cliente vs. servidor:** solo llevan `"use client"` los componentes que necesitan estado, efectos o interactividad en el navegador (Header, Hero, ContactForm, Benefits, etc.); el resto se renderiza en el servidor por defecto (mejor rendimiento y SEO).

---

## 8. Próximos pasos sugeridos

- Reemplazar los testimonios de ejemplo en `Testimonials.tsx` por testimonios reales antes de publicar (evita publicidad engañosa).
- Verificar un dominio propio en Resend para enviar correos desde una dirección corporativa.
- Si el tráfico crece, migrar el rate limiting de `lib/rateLimit.ts` a un almacenamiento distribuido (Vercel KV / Upstash Redis).
- Revisar y actualizar periódicamente los precios referenciales en COP de `Products.tsx` y `FAQ.tsx`.
