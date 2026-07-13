// Ruta del archivo: components/sections/CaseStudies.tsx
// SECCIÓN 8 — CASOS DE USO / PROYECTOS. Estilo minimalista premium.
// Solo imágenes .jpg reales de negocios usando el sistema (sin YouTube, sin
// video incrustado, sin dependencias externas). Reemplaza cada "image" por
// tus capturas reales antes de publicar. Casos ajustados para mostrar
// variedad de negocios y mezcla de software y seguridad, sin quedar atados
// a un solo sector.

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CaseItem = {
  sector: string;
  result: string;
  // Ruta de la imagen dentro de /public/images/. Debe ser un archivo .jpg
  // real que muestre el negocio usando el sistema (foto de producto, no stock).
  image: string;
};

const CASES: CaseItem[] = [
  { sector: "Tienda de retail", result: "70% menos tiempo en cierre de caja con POS propio.", image: "/images/case-retail.jpg" },
  { sector: "Restaurante", result: "Pedidos automatizados y control de mesas en tiempo real.", image: "/images/case-restaurante.jpg" },
  { sector: "Gimnasio", result: "Control de suscripciones y tiempos", image: "/images/case-gimnasio.jpg" },
  { sector: "Oficina corporativa", result: "CRM unificado y monitoreo perimetral con alertas.", image: "/images/case-oficina.jpg" },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Casos de uso</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Resultados, no promesas
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {CASES.map((c, i) => (
            <motion.div
              key={c.sector}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-premium overflow-hidden"
            >
              {/* Solo imagen fija: foto real del negocio usando el sistema */}
              <div className="relative h-44 w-full bg-paper-muted">
                <Image
                  src={c.image}
                  alt={"Proyecto: " + c.sector}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <span className="font-mono text-xs uppercase tracking-widest text-electric">
                  {c.sector}
                </span>
                <p className="mt-2 text-base font-medium leading-relaxed text-ink/75">
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