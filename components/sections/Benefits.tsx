// Ruta del archivo: components/sections/Benefits.tsx
// SECCIÓN 7 — BENEFICIOS DE TRABAJAR CON NOSOTROS. Estilo minimalista
// premium: tarjetas blancas con sombra suave, ícono en rojo como único
// acento de color. Beneficios enfocados en el modelo de suscripción
// mensual, sin importar el tipo de negocio.
//
// Cambio de esta versión: se reduce el padding vertical de la sección
// (py-28 -> py-20) para bajar la altura total de la página.

"use client";

import { motion } from "framer-motion";

const BENEFITS = [
  { icon: "◒", title: "Sin gran inversión inicial" },
  { icon: "⛨", title: "Seguridad desde el diseño" },
  { icon: "☍", title: "Un solo equipo integrado" },
  { icon: "↗", title: "Tu plan crece con tu negocio" },
];

export default function Benefits() {
  return (
    <section className="bg-paper-off py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Por qué SoftLegacy</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              La diferencia está en el detalle
            </h2>
          </div>
          <p className="mt-4 text-sm text-ink/45">
            Ya sea una tienda, un restaurante, un gimnasio o cualquier otro
            negocio: el plan se adapta a ti, no al revés.
          </p>
        </div>

        {/* Grid de tarjetas, animación escalonada al entrar en pantalla */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium p-7 text-center"
            >
              <span className="text-3xl text-electric">{b.icon}</span>
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