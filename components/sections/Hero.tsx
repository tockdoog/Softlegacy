// Ruta del archivo: components/sections/Hero.tsx
// SECCIÓN 1 — HERO PRINCIPAL. Estilo minimalista premium inspirado en Apple:
// fondo blanco, tipografía muy grande, un solo acento de color rojo detrás
// del panel visual. Soporta video de fondo en /public/videos/hero-loop.mp4
// (se usa automáticamente si existe) con imagen de respaldo en
// /public/images/hero-tech.jpg. Mensaje ajustado a modelo de suscripción
// mensual (SaaS) para cualquier tipo de negocio, sin atarse a un nicho.
//
// Cambios de esta versión (reducción de scroll percibido):
// 1) Se reduce el padding vertical del Hero para que más contenido de las
//    secciones siguientes sea visible sin scroll adicional.
// 2) Se agrega un panel de "salto rápido" (quick jump) con enlaces directos
//    a Servicios, Planes, Casos de éxito y Contacto, para que el usuario
//    elija su ruta desde el primer segundo en vez de scrollear a ciegas.

"use client";

import { motion } from "framer-motion";

// Variantes de animación reutilizables: entrada suave desde abajo
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Enlaces del panel de salto rápido: ids confirmados contra el scrollspy
// del Header (nosotros, servicios, soluciones, proceso, casos, contacto).
const QUICK_JUMP_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#soluciones" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-paper pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Único acento visual de fondo: resplandor rojo muy suave, discreto,
          nunca protagonista sobre el blanco */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-electric/[0.07] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        {/* Columna de texto: mínima, directa, sin párrafos largos */}
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-ink/[0.08] bg-paper-off px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric" />
            <span className="tag-mono">Software · Seguridad · Suscripciones</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]"
          >
            Tecnología y seguridad.
            <br />
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink/55"
          >
            POS, páginas web, CRM, automatizaciones, cámaras, ciberseguridad y
            domótica, todo en un solo plan mensual. Para tiendas, restaurantes,
            gimnasios y cualquier tipo de negocio.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contacto" className="btn-primary">
              Diagnóstico gratuito
            </a>
            <a href="#soluciones" className="btn-secondary">
              Ver planes
            </a>
          </motion.div>

          {/* Panel de salto rápido: evita que el usuario tenga que
              scrollear "a ciegas" para encontrar la sección que busca */}
          <motion.nav
            aria-label="Navegación rápida del Hero"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/[0.06] pt-6"
          >
            <span className="tag-mono !text-ink/40">Ir directo a</span>
            {QUICK_JUMP_LINKS.map(function (link) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1 text-[13px] font-medium text-ink/65 transition-colors hover:text-electric"
                >
                  {link.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="h-3 w-3 -rotate-90 transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              );
            })}
          </motion.nav>
        </div>

        {/* Columna visual: video (si existe) o imagen + tarjeta flotante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="card-premium relative overflow-hidden">
            {/* Video de fondo: autoplay silencioso, en loop, sin controles.
                Si el archivo no existe, el navegador simplemente no muestra nada
                y queda visible la imagen "poster" como respaldo visual. */}
            <video
              className="h-[440px] w-full object-cover"
              poster="/images/hero-tech.jpg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Tarjeta flotante: dato corto, con animación de flotación suave */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="card-premium absolute -bottom-7 -left-7 px-7 py-5"
          >
            <p className="font-display text-3xl font-semibold text-electric">+50</p>
            <p className="mt-0.5 text-xs font-medium text-ink/50">Negocios activos</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}