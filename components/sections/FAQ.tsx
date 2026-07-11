// Ruta del archivo: components/sections/FAQ.tsx
// SECCIÓN 10 — PREGUNTAS FRECUENTES
// Objetivo: reducir objeciones antes del contacto (precio, tiempos, soporte).
// Se usa el elemento nativo <details>/<summary> por accesibilidad y porque
// no requiere JavaScript adicional para funcionar (mejor rendimiento).
// Animación recomendada: expansión suave de altura (transition en max-height).

const FAQS = [
  {
    q: "¿Cuánto cuesta desarrollar un sistema a la medida?",
    a: "Depende del alcance y los módulos requeridos. Los proyectos suelen iniciar desde $3.500.000 COP. El valor exacto se define en el diagnóstico gratuito, sin compromiso.",
  },
  {
    q: "¿Cuánto tiempo toma un proyecto?",
    a: "Los proyectos pequeños pueden tomar entre 3 y 6 semanas; los sistemas ERP o CRM completos pueden tomar de 2 a 4 meses, según el alcance definido en la propuesta.",
  },
  {
    q: "¿Ofrecen soporte después de la entrega?",
    a: "Sí. Todos los proyectos incluyen un periodo de garantía y ofrecemos planes de mantenimiento y soporte continuo mensual.",
  },
  {
    q: "¿Trabajan con empresas de cualquier sector?",
    a: "Sí. Nuestras soluciones se adaptan a comercio, salud, manufactura, servicios, logística y más. No estamos limitados a un solo sector.",
  },
  {
    q: "¿Cómo protegen la información de mi empresa?",
    a: "Aplicamos buenas prácticas de ciberseguridad en cada proyecto: cifrado de datos, control de accesos, copias de seguridad y monitoreo, además de auditorías de seguridad bajo solicitud.",
  },
  {
    q: "¿Puedo empezar solo con una parte del proyecto?",
    a: "Sí. Muchos clientes inician con un módulo (por ejemplo, el POS) y luego escalan a un ERP completo o suman cámaras y automatización.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <span className="tag-mono text-navy">Preguntas frecuentes</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Resolvemos tus dudas antes de empezar
          </h2>
        </div>

        <div className="mt-12 divide-y divide-ink/10 border-t border-b border-ink/10">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-ink">
                {item.q}
                <span className="ml-4 font-mono text-signal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}