// Ruta del archivo: components/sections/VideoShowcase.tsx
// SECCIÓN NUEVA — VITRINA DE VIDEO. Inspirada en el formato de Apple
// Fitness+: un video grande destacado arriba con título y botones, y una
// fila de videos pequeños abajo (autoplay silencioso, en loop) que al
// hacer clic pasan a ser el video destacado. Pensado para mostrar personas
// usando el sistema, en reuniones o en sus propios negocios, sin atarse a
// un solo sector. Todos los videos son placeholders: reemplázalos por tus
// clips reales en /public/videos y sus miniaturas en /public/images.
//
// Nota de rendimiento: mantén los clips de la fila inferior cortos
// (3 a 6 segundos) y livianos (ideal < 2 MB cada uno), ya que varios se
// reproducen en simultáneo al cargar la sección.

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ShowcaseItem {
  title: string;
  description: string;
  tag: string;
  video: string;
  poster: string;
}

// Reemplaza cada "video" y "poster" por tus archivos reales.
const ITEMS: ShowcaseItem[] = [
  {
    title: "Un sistema que se ve mientras se usa",
    description: "Personas operando el sistema día a día, sin fricción.",
    tag: "Uso en tiempo real",
    video: "/videos/showcase-uso-sistema.mp4",
    poster: "/images/showcase-uso-sistema.jpg",
  },
  {
    title: "Decisiones con datos en la reunión",
    description: "Reportes y métricas al momento, en cada reunión de equipo.",
    tag: "Reuniones",
    video: "/videos/showcase-reunion.mp4",
    poster: "/images/showcase-reunion.jpg",
  },
  {
    title: "Negocios operando con tecnología integrada",
    description: "Desde la caja hasta la seguridad, todo conectado.",
    tag: "Negocios",
    video: "/videos/showcase-negocio.mp4",
    poster: "/images/showcase-negocio.jpg",
  },
  {
    title: "Control de acceso y cámaras en vivo",
    description: "Monitoreo remoto desde cualquier lugar.",
    tag: "Seguridad",
    video: "/videos/showcase-seguridad.mp4",
    poster: "/images/showcase-seguridad.jpg",
  },
  {
    title: "Automatización de pedidos",
    description: "Menos tareas manuales, menos errores humanos.",
    tag: "Automatización",
    video: "/videos/showcase-automatizacion.mp4",
    poster: "/images/showcase-automatizacion.jpg",
  },
];

export default function VideoShowcase() {
  // Índice del video actualmente mostrado en el panel grande
  const [active, setActive] = useState(0);
  const current = ITEMS[active];

  return (
    <section className="bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="max-w-xl">
          <span className="tag-mono">En acción</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Así se ve por dentro
            </h2>
          </div>
        </ScrollReveal>

        {/* Panel grande destacado: video activo con overlay de texto y botones,
            mismo patrón visual usado en el Hero (badge + título + CTAs) */}
        <div className="relative mt-14 overflow-hidden rounded-3xl">
          <div className="relative h-[460px] w-full lg:h-[560px]">
            <AnimatePresence mode="wait">
              <motion.video
                key={current.video}
                className="absolute inset-0 h-full w-full object-cover"
                poster={current.poster}
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <source src={current.video} type="video/mp4" />
              </motion.video>
            </AnimatePresence>

            {/* Degradado inferior izquierdo para legibilidad del texto sobre el video */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

            {/* Overlay de contenido: badge, título, descripción y CTAs */}
            <div className="absolute inset-x-0 bottom-0 p-7 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                <span className="tag-mono">{current.tag}</span>
              </span>

              <h3 className="mt-4 max-w-xl font-display text-3xl font-semibold text-white lg:text-4xl">
                {current.title}
              </h3>
              <p className="mt-2 max-w-md text-sm text-white/75">
                {current.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contacto" className="btn-primary">
                  Diagnóstico gratuito
                </a>
                <a href="#soluciones" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10">
                  Ver planes
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fila de videos pequeños: cada uno reproduce en loop y silencioso.
            Al hacer clic, ese clip pasa a ser el video del panel grande. */}
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {ITEMS.map((item, i) => (
            <button
              key={item.video}
              type="button"
              onClick={() => setActive(i)}
              aria-label={"Ver: " + item.title}
              aria-current={i === active}
              className={
                "group relative h-40 w-64 shrink-0 overflow-hidden rounded-2xl transition-all duration-300 " +
                (i === active
                  ? "ring-2 ring-electric ring-offset-2 ring-offset-paper"
                  : "opacity-90 hover:opacity-100")
              }
            >
              {/* Clip corto en loop, silencioso, precarga liviana (solo metadatos) */}
              <video
                className="h-full w-full object-cover"
                poster={item.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src={item.video} type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/10" />

              {/* Botón "Ver ahora": visual, el clic real es sobre todo el botón contenedor */}
              <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-ink shadow-elevated">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-electric">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Ver ahora
              </span>

              <span className="absolute bottom-2 left-3 right-3 truncate text-left text-[11px] font-medium text-white">
                {item.tag}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}