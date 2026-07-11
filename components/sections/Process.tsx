// Ruta del archivo: components/sections/Process.tsx
// SECCIÓN 5 — PROCESO DE TRABAJO (versión futurista)
// Objetivo: transmitir método y orden. Línea vertical conectora animada
// que se "dibuja" progresivamente al hacer scroll.

"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Diagnóstico", text: "Entendemos tu operación y objetivos, sin costo." },
  { n: "02", title: "Propuesta", text: "Alcance, tecnología e inversión en COP, claros." },
  { n: "03", title: "Desarrollo", text: "Construcción por ciclos cortos, con entregas parciales." },
  { n: "04", title: "Pruebas", text: "Validación funcional y de seguridad antes de salir a producción." },
  { n: "05", title: "Implementación", text: "Despliegue, capacitación y puesta en marcha." },
  { n: "06", title: "Soporte", text: "Mantenimiento y mejoras continuas post-entrega." },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Cómo trabajamos</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-paper">
            Un método, seis pasos
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Línea conectora sutil, solo decorativa en escritorio */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div className="glass-card inline-flex h-12 w-12 items-center justify-center rounded-full">
                <span className="font-mono text-sm text-electric">{step.n}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/55">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}