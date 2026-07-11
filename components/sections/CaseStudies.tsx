// Ruta del archivo: components/sections/CaseStudies.tsx
// SECCIÓN 8 — CASOS DE USO / PROYECTOS (versión futurista)
// Objetivo: resultados concretos y breves, con imagen ilustrativa por caso.
// Imágenes sugeridas en /public/images/case-*.jpg (capturas de dashboards
// reales o fotos del sector del cliente).

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CASES = [
  { sector: "Retail", result: "70% menos tiempo en cierre de caja.", image: "/images/case-retail.jpg" },
  { sector: "Salud", result: "Historias clínicas cifradas por rol.", image: "/images/case-salud.jpg" },
  { sector: "Logística", result: "Videovigilancia con analítica de movimiento.", image: "/images/case-logistica.jpg" },
  { sector: "Servicios", result: "CRM que unificó ventas y seguimiento.", image: "/images/case-servicios.jpg" },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Casos de uso</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-paper">
            Resultados, no promesas
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {CASES.map((c, i) => (
            <motion.div
              key={c.sector}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glow-border overflow-hidden rounded-2xl"
            >
              {/* Reemplaza por una captura o foto real del proyecto */}
              <Image
                src={c.image}
                alt={`Proyecto en el sector ${c.sector}`}
                width={600}
                height={300}
                className="h-44 w-full object-cover opacity-90"
              />
              <div className="p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan">
                  {c.sector}
                </span>
                <p className="mt-2 text-base font-medium text-paper/85">
                  {c.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}