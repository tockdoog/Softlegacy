// Ruta del archivo: components/sections/About.tsx
// SECCIÓN 2 — SOBRE SOFTLEGACY. Tema claro con acento rojo. Imagen sugerida
// en /public/images/about-team.jpg (equipo real trabajando).

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="bg-paper py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glow-border relative overflow-hidden rounded-2xl border border-ink/10"
        >
          {/* Reemplaza por una foto real del equipo u oficina */}
          <Image
            src="/images/about-team.jpg"
            alt="Equipo de SoftLegacy"
            width={600}
            height={480}
            className="h-[400px] w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag-mono">Quiénes somos</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink jp-mark">
            Un equipo, no un proveedor más
          </h2>
          <p className="mt-5 max-w-md text-base text-ink/60">
            Software, seguridad y automatización bajo un mismo techo.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-4">
            <div className="glass-card rounded-xl border border-ink/10 p-5">
              <p className="font-display text-3xl font-bold text-electric">+50</p>
              <p className="mt-1 text-xs text-ink/50">Proyectos entregados</p>
            </div>
            <div className="glass-card rounded-xl border border-ink/10 p-5">
              <p className="font-display text-3xl font-bold text-electric">98%</p>
              <p className="mt-1 text-xs text-ink/50">Renuevan soporte</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}