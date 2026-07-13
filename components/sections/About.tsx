// Ruta del archivo: components/sections/About.tsx
// SECCIÓN 2 — SOBRE EL FUNDADOR. Estilo minimalista premium.
// Ahora con contenido 100% personal: la imagen principal es tu foto real
// (no stock ni "equipo"), y la tarjeta flotante es un video corto tuyo en
// loop (ej. programando), a modo de "picture-in-picture". Reemplaza las
// rutas de ejemplo por tus archivos reales antes de publicar:
//   /public/images/fundador-foto.jpg      -> tu foto
//   /public/videos/fundador-loop.mp4      -> tu video corto en loop
//   /public/images/fundador-loop-poster.jpg -> imagen de respaldo del video

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="bg-paper py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
        {/* Columna visual: tu foto real como imagen principal */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="card-premium overflow-hidden">
            {/* Reemplaza por tu foto real (retrato, plano medio, buena luz) */}
            <Image
              src="/images/fundador-foto.jpg"
              alt="Fundador y CEO de SoftLegacy"
              width={600}
              height={480}
              className="h-[440px] w-full object-cover"
              priority
            />
          </div>

          {/* Tarjeta flotante tipo "picture-in-picture": video corto tuyo en
              loop (ej. escribiendo código). Autoplay silencioso, sin controles,
              tamaño reducido para no competir con la foto principal. */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="card-premium absolute -bottom-8 -right-8 hidden w-56 overflow-hidden sm:block"
          >
            <video
              className="h-36 w-full object-cover"
              poster="/images/fundador-loop-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/fundador-loop.mp4" type="video/mp4" />
            </video>
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" />
              <p className="text-[11px] font-medium text-ink/60">Desarrollando en vivo</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Columna de texto: narrativa de fundador único, no de equipo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="tag-mono">Quién está detrás</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Un solo responsable, un compromiso con la calidad.
            </h2>
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/55">
            Fundé SoftLegacy con un propósito claro: ayudar a las empresas a crecer mediante la tecnología
            eliminando procesos innecesarios, optimizando el tiempo y permitiendo que los empresarios puedan
            enfocarse en lo que realmente impulsa su negocio. Creo que el software debe ser una herramienta
            para simplificar el trabajo, aumentar la productividad y generar resultados reales, no una complicación
            más.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/55">
            Soy Ingeniero de Software con especialización en Ciberseguridad, comprometido con desarrollar
            soluciones confiables, seguras y de alta calidad. Mi objetivo es construir relaciones a largo plazo con
            cada cliente, ofreciendo un acompañamiento cercano y creando tecnología que aporte valor al crecimiento de cada empresa.
          </p>

          {/* Tarjetas de métricas ajustadas a fundador único */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="card-premium p-6">
              <p className="font-display text-3xl font-semibold text-electric">+50</p>
              <p className="mt-1 text-xs font-medium text-ink/50">Negocios activos</p>
            </div>
            <div className="card-premium p-6">
              <p className="font-display text-3xl font-semibold text-electric">100%</p>
              <p className="mt-1 text-xs font-medium text-ink/50">Código propio, sin plantillas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}