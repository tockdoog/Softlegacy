// Ruta del archivo: components/sections/Benefits.tsx
// SECCIÓN 7 — BENEFICIOS DE TRABAJAR CON NOSOTROS. Tema claro; el resplandor
// (mesh-glow) queda muy sutil sobre blanco para no perder legibilidad.

"use client";

import { motion } from "framer-motion";

const BENEFITS = [
  { icon: "⛨", title: "Seguridad desde el diseño" },
  { icon: "◷", title: "Cumplimiento de tiempos" },
  { icon: "☍", title: "Un solo equipo integrado" },
  { icon: "↗", title: "Soluciones que escalan" },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-paper-off py-24">
      <div className="pointer-events-none absolute inset-0 bg-mesh-glow opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Por qué SoftLegacy</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink jp-mark">
            La diferencia está en el detalle
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card glow-border rounded-2xl border border-ink/10 p-6 text-center"
            >
              <span className="font-mono text-3xl text-electric">{b.icon}</span>
              <h3 className="mt-4 font-display text-sm font-semibold text-ink">
                {b.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}