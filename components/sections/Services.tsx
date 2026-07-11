// Ruta del archivo: components/sections/Services.tsx
// SECCIÓN 3 — NUESTROS SERVICIOS. Estilo minimalista premium: tarjetas
// blancas limpias con sombra suave, tipografía clara, aparición escalonada
// (stagger) al hacer scroll con Framer Motion.

"use client";

import { motion } from "framer-motion";

const SERVICES = [
  { icon: "</>", title: "Software a la medida", text: "Aplicaciones y sistemas diseñados para tu operación real." },
  { icon: "⛨", title: "Ciberseguridad", text: "Protección activa de tu información y tu infraestructura." },
  { icon: "◎", title: "Videovigilancia", text: "Cámaras con monitoreo remoto y alertas en tiempo real." },
  { icon: "⌂", title: "Domótica", text: "Automatización de hogares y negocios, todo conectado." },
  { icon: "✦", title: "Consultoría", text: "Hoja de ruta clara para decidir en qué invertir primero." },
  { icon: "↻", title: "Soporte 24/7", text: "Mantenimiento continuo con tiempos de respuesta reales." },
];

// Variantes de contenedor: escalona la entrada de cada tarjeta hija
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
// Variante individual: entrada suave desde abajo
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="servicios" className="bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Qué hacemos</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Un equipo, todas las soluciones
            </h2>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="card-premium p-8"
            >
              <span className="text-3xl text-electric">{s.icon}</span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">
                {s.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}