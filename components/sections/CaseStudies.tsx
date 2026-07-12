// Ruta del archivo: components/sections/CaseStudies.tsx
// SECCIÓN 8 — CASOS DE USO / PROYECTOS. Estilo minimalista premium. Cada
// tarjeta muestra una foto/captura real; si tiene un video de YouTube
// asociado, aparece un botón de reproducción. El video solo se carga cuando
// el usuario hace clic (no autoplay al cargar la página), lo que mejora el
// rendimiento y protege la privacidad del visitante. Se usa el dominio
// youtube-nocookie.com, que reduce el uso de cookies de seguimiento.
// Casos ajustados para mostrar variedad de negocios y mezcla de software y
// seguridad, sin quedar atados a un solo sector.

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type CaseItem = {
  sector: string;
  result: string;
  image: string;
  // ID del video de YouTube (lo que va después de "v=" en la URL).
  // Deja en null si ese caso todavía no tiene video.
  youtubeId: string | null;
};

const CASES: CaseItem[] = [
  { sector: "Tienda de retail", result: "70% menos tiempo en cierre de caja con POS propio.", image: "/images/case-retail.jpg", youtubeId: null },
  { sector: "Restaurante", result: "Pedidos automatizados y control de mesas en tiempo real.", image: "/images/case-restaurante.jpg", youtubeId: null },
  { sector: "Gimnasio", result: "Control de acceso con cerradura inteligente y cámaras.", image: "/images/case-gimnasio.jpg", youtubeId: null },
  { sector: "Oficina corporativa", result: "CRM unificado y monitoreo perimetral con alertas.", image: "/images/case-oficina.jpg", youtubeId: null },
];

export default function CaseStudies() {
  // Guarda el "sector" de la tarjeta cuyo video está reproduciéndose (o null si ninguno)
  const [playing, setPlaying] = useState<string | null>(null);

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
              <div className="relative h-44 w-full bg-paper-muted">
                {c.youtubeId && playing === c.sector ? (
                  // Reproductor incrustado: solo se monta cuando el usuario hace clic en "reproducir"
                  <iframe
                    className="h-44 w-full"
                    src={"https://www.youtube-nocookie.com/embed/" + c.youtubeId + "?autoplay=1&rel=0"}
                    title={"Video del proyecto: " + c.sector}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    {/* Foto o captura real del proyecto */}
                    <Image
                      src={c.image}
                      alt={"Proyecto: " + c.sector}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* Botón de reproducción, solo aparece si hay video asociado */}
                    {c.youtubeId && (
                      <button
                        type="button"
                        onClick={() => setPlaying(c.sector)}
                        aria-label={"Reproducir video del proyecto: " + c.sector}
                        className="absolute inset-0 flex items-center justify-center bg-ink/15 transition-colors hover:bg-ink/25"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-elevated">
                          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-electric">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </button>
                    )}
                  </>
                )}
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