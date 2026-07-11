// Ruta del archivo: components/sections/Hero.tsx
// SECCIÓN 1 — HERO PRINCIPAL. Tema claro (blanco) con acento rojo y motivo
// decorativo japonés (líneas finas + patrón de olas "seigaiha"). Soporta
// imagen o video de fondo en el panel visual: coloca tu video en
// /public/videos/hero-loop.mp4 (se usa automáticamente si existe) o una
// imagen en /public/images/hero-tech.jpg como respaldo.

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Variantes de animación reutilizables: entrada suave desde abajo
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Fondo: cuadrícula técnica sutil + patrón de olas japonés */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-seigaiha bg-seigaiha opacity-40" />
      {/* Resplandor rojo, ahora discreto sobre fondo blanco */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-electric/10 blur-3xl animate-pulseGlow" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        {/* Columna de texto: mínima, directa, sin párrafos largos */}
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-off px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulseGlow rounded-full bg-electric" />
            <span className="tag-mono">Tecnología · Seguridad · Automatización</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            El futuro de tu
            <br />
            <span className="text-gradient jp-mark">negocio, hoy.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-md text-lg text-ink/60"
          >
            Software, ciberseguridad y automatización en un solo equipo.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contacto" className="rounded-md bg-electric px-7 py-3.5 text-center text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-electric-light">
              Diagnóstico gratuito
            </a>
            <a href="#servicios" className="rounded-md border border-ink/15 px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-electric hover:text-electric">
              Ver servicios
            </a>
          </motion.div>
        </div>

        {/* Columna visual: video (si existe) o imagen + panel flotante animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="glow-border glass-card relative overflow-hidden rounded-2xl">
            {/* Video de fondo: autoplay silencioso, en loop, sin controles.
                Si el archivo no existe, el navegador simplemente no muestra nada
                y queda visible la imagen "poster" como respaldo visual. */}
            <video
              className="h-[420px] w-full object-cover"
              poster="/images/hero-tech.jpg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
            </video>
            {/* Línea de escaneo animada sobre el video/imagen: refuerza la idea
                de "sistema monitoreado en vivo" */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden">
              <div className="h-24 w-full animate-scan bg-gradient-to-b from-electric/0 via-electric/25 to-electric/0" />
            </div>
          </div>

          {/* Tarjeta flotante: dato corto, sin párrafos, con animación de flotación */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card absolute -bottom-6 -left-6 rounded-xl px-6 py-4"
          >
            <p className="font-display text-2xl font-bold text-electric">+50</p>
            <p className="text-xs text-ink/60">Proyectos entregados</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}