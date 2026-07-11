// Ruta del archivo: components/sections/FAQ.tsx
// SECCIÓN 10 — PREGUNTAS FRECUENTES (versión futurista)
// Se usa <details>/<summary> nativo por accesibilidad y rendimiento (no
// requiere JavaScript adicional); la animación de la flecha sí usa Tailwind.

const FAQS = [
  { q: "¿Cuánto cuesta un sistema a la medida?", a: "Desde $3.500.000 COP. El valor exacto se define en el diagnóstico gratuito." },
  { q: "¿Cuánto tiempo toma un proyecto?", a: "Entre 3 semanas y 4 meses, según el alcance definido en la propuesta." },
  { q: "¿Ofrecen soporte después de la entrega?", a: "Sí, incluimos garantía y planes de mantenimiento mensual." },
  { q: "¿Trabajan con cualquier sector?", a: "Sí, no estamos limitados a un solo tipo de industria." },
  { q: "¿Cómo protegen mi información?", a: "Cifrado, control de accesos, respaldos y monitoreo continuo." },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-ink py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <span className="tag-mono">Preguntas frecuentes</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-paper">
            Dudas resueltas
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-t border-b border-white/10">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-paper">
                {item.q}
                <span className="ml-4 font-mono text-electric transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-paper/55">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}