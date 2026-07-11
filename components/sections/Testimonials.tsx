// Ruta del archivo: components/sections/Testimonials.tsx
// SECCIÓN 9 — TESTIMONIOS (EJEMPLOS, versión futurista)
// IMPORTANTE: reemplazar por testimonios reales antes de publicar (evitar
// publicidad engañosa). Carrusel simple con desplazamiento horizontal y
// snap-scroll nativo (sin JS adicional para el scroll, mejor rendimiento).

const TESTIMONIALS = [
  { quote: "Controlamos las tres sedes desde un solo sistema.", author: "Gerente de operaciones (ejemplo)" },
  { quote: "Cerraron vulnerabilidades que no sabíamos que teníamos.", author: "Directora administrativa (ejemplo)" },
  { quote: "La automatización redujo errores manuales en bodega.", author: "Jefe de logística (ejemplo)" },
];

export default function Testimonials() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="tag-mono">Testimonios</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-paper">
            Quienes ya confiaron en nosotros
          </h2>
          <p className="mt-2 text-xs text-paper/40">* Ejemplos ilustrativos de formato.</p>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="glass-card glow-border w-[300px] shrink-0 snap-start rounded-2xl p-7"
            >
              <p className="font-display text-3xl text-electric">"</p>
              <p className="-mt-3 text-sm leading-relaxed text-paper/75">
                {t.quote}
              </p>
              <p className="mt-6 text-xs font-medium text-cyan">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}