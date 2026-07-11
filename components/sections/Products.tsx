// Ruta del archivo: components/sections/Products.tsx
// SECCIÓN 4 — PRODUCTOS Y SOLUCIONES. Estilo minimalista premium: tarjetas
// blancas con sombra suave, tipografía clara. Precios en pesos colombianos
// (COP), referenciales.

"use client";

import { motion } from "framer-motion";

const SOLUTIONS = [
  { tag: "POS", title: "Punto de venta", price: "Desde $3.500.000 COP" },
  { tag: "ERP", title: "Sistema ERP", price: "Desde $12.000.000 COP" },
  { tag: "CRM", title: "Sistema CRM", price: "Desde $8.000.000 COP" },
  { tag: "WEB", title: "App a la medida", price: "Desde $6.000.000 COP" },
];

export default function Products() {
  return (
    <section id="soluciones" className="bg-paper-off py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Soluciones</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Sistemas a tu medida
            </h2>
          </div>
          <p className="mt-4 text-sm text-ink/45">
            Valores referenciales en pesos colombianos (COP). Precio final en el diagnóstico gratuito.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium flex flex-col justify-between p-7"
            >
              <div>
                <span className="font-mono text-xs tracking-widest text-electric">
                  {sol.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {sol.title}
                </h3>
              </div>
              <p className="mt-10 font-mono text-sm text-ink/60">{sol.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}