// Ruta del archivo: components/sections/FAQ.tsx
// SECCIÓN 10 — PREGUNTAS FRECUENTES. Estilo minimalista premium. Se usa
// <details>/<summary> nativo por accesibilidad y rendimiento (no requiere
// JavaScript adicional). Preguntas ajustadas al modelo de suscripción
// mensual y a que no hay un solo tipo de negocio o industria objetivo.

import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQS = [
  { q: "¿Cómo funciona el cobro?", a: "Por mensualidad, no por pago único. Planes desde $250.000 COP/mes, según lo que necesite tu negocio." },
  { q: "¿Puedo cambiar de plan más adelante?", a: "Sí, tu plan se ajusta cuando tu negocio crece o cambian tus necesidades." },
  { q: "¿Cuánto tiempo toma la implementación inicial?", a: "Entre 1 y 4 semanas, según el alcance definido en la propuesta." },
  { q: "¿Trabajan con cualquier tipo de negocio?", a: "Sí: tiendas, restaurantes, gimnasios, oficinas y cualquier negocio que necesite software o seguridad." },
  { q: "¿Cómo protegen mi información?", a: "Cifrado, control de accesos, respaldos y monitoreo continuo." },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper-off py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <ScrollReveal className="text-center">
          <span className="tag-mono">Preguntas frecuentes</span>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink">
              Dudas resueltas
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-14">
          <div className="card-premium divide-y divide-ink/[0.06] !rounded-2xl px-2">
            {FAQS.map((item) => (
              <details key={item.q} className="group px-5 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-medium text-ink">
                  {item.q}
                  <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric/10 font-mono text-sm text-electric transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}