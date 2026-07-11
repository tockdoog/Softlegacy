// Ruta del archivo: components/sections/About.tsx
// SECCIÓN 2 — SOBRE SOFTLEGACY. Estilo minimalista premium: imagen con
// esquinas suaves y sombra discreta, tarjetas de métricas limpias.
// Imagen sugerida en /public/images/about-team.jpg (equipo real trabajando).

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="bg-paper py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
        {/* Imagen del equipo, con sombra suave estilo tarjeta premium */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card-premium overflow-hidden"
        >
          {/* Reemplaza por una foto real del equipo u oficina */}
          <Image
            src="/images/about-team.jpg"
            alt="Equipo de SoftLegacy"
            width={600}
            height={480}
            className="h-[420px] w-full object-cover"
          />
        </motion.div>

        {/* Columna de texto y métricas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="tag-mono">Quiénes somos</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Un equipo, no un proveedor más
            </h2>
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/55">
            Software, seguridad y automatización bajo un mismo techo.
          </p>

          {/* Tarjetas de métricas, estilo Apple: fondo blanco, sombra suave */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="card-premium p-6">
              <p className="font-display text-3xl font-semibold text-electric">+50</p>
              <p className="mt-1 text-xs font-medium text-ink/50">Proyectos entregados</p>
            </div>
            <div className="card-premium p-6">
              <p className="font-display text-3xl font-semibold text-electric">98%</p>
              <p className="mt-1 text-xs font-medium text-ink/50">Renuevan soporte</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}