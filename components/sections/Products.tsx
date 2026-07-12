// Ruta del archivo: components/sections/Products.tsx
// SECCIÓN 4 — PLANES MENSUALES. Estilo minimalista premium: tarjetas
// blancas con sombra suave, tipografía clara. Modelo de suscripción (SaaS):
// se cobra por mensualidad, no por pago único. Precios en pesos colombianos
// (COP) como rangos referenciales, ya que el valor final es negociable
// según el alcance de cada cliente.

"use client";

import { motion } from "framer-motion";

const PLANS = [
  {
    tag: "ESENCIAL",
    title: "Presencia digital",
    price: "Desde $250.000 COP/mes",
    text: "Página web o POS básico, con soporte incluido.",
  },
  {
    tag: "NEGOCIO",
    title: "Gestión integral",
    price: "Desde $600.000 COP/mes",
    text: "CRM, automatizaciones y soporte prioritario.",
  },
  {
    tag: "SEGURIDAD",
    title: "Protección activa",
    price: "Desde $450.000 COP/mes",
    text: "Cámaras, monitoreo y ciberseguridad básica.",
  },
  {
    tag: "INTEGRAL",
    title: "Todo en uno",
    price: "Desde $1.200.000 COP/mes",
    text: "Software, automatización y seguridad combinados.",
  },
];

export default function Products() {
  return (
    <section id="soluciones" className="bg-paper-off py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Planes</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Un plan para cada negocio
            </h2>
          </div>
          <p className="mt-4 text-sm text-ink/45">
            Valores referenciales en pesos colombianos (COP), facturados por
            mensualidad. Se ajustan según lo que necesite tu negocio, en el
            diagnóstico gratuito.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium flex flex-col justify-between p-7"
            >
              <div>
                <span className="font-mono text-xs tracking-widest text-electric">
                  {plan.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {plan.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  {plan.text}
                </p>
              </div>
              <p className="mt-10 font-mono text-sm text-ink/60">{plan.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}