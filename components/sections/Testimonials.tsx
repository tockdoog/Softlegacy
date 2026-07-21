// Ruta del archivo: components/sections/Testimonials.tsx
// SECCIÓN 9 — TESTIMONIOS (EJEMPLOS). Estilo minimalista premium.
// IMPORTANTE: reemplazar por testimonios reales antes de publicar (evitar
// publicidad engañosa). Carrusel simple con desplazamiento horizontal y
// snap-scroll nativo (sin JS adicional para el scroll, mejor rendimiento).
//
// Cambio de esta versión: se reduce el padding vertical de la sección
// (py-28 -> py-20) para disminuir el alto total de la página, ya que el
// carrusel horizontal no necesita tanto espacio de "respiro" como una
// sección de contenido vertical.

import ScrollReveal from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  { quote: "Controlamos las tres sedes desde un solo sistema.", author: "Gerente de operaciones" },
  { quote: "Cerraron vulnerabilidades que no sabíamos que teníamos.", author: "Directora administrativa" },
  { quote: "La automatización redujo errores manuales en bodega.", author: "Jefe de logística" },
];

export default function Testimonials() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="max-w-xl">
          <span className="tag-mono">Testimonios</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Quienes ya confiaron en nosotros
            </h2>
          </div>
          <p className="mt-3 text-xs text-ink/35">* Ejemplos ilustrativos de formato.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="card-premium w-[300px] shrink-0 snap-start p-7"
            >
              <p className="font-display text-3xl leading-none text-electric">"</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {t.quote}
              </p>
              <p className="mt-6 text-xs font-medium text-electric">{t.author}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}