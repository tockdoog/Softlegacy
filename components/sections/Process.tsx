// Ruta del archivo: components/sections/Process.tsx
// SECCIÓN 5 — PROCESO DE TRABAJO
// Objetivo: dar confianza mostrando un método claro y ordenado (aquí sí se
// usa numeración porque el contenido es una secuencia real de trabajo).
// Animación recomendada: línea de tiempo vertical que se "dibuja" al hacer
// scroll (stroke-dashoffset) conectando cada paso.

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico gratuito",
    text: "Entendemos tu operación, tus problemas actuales y tus objetivos de negocio.",
  },
  {
    n: "02",
    title: "Propuesta y alcance",
    text: "Definimos el alcance, la tecnología a usar y la inversión estimada en COP.",
  },
  {
    n: "03",
    title: "Diseño y desarrollo",
    text: "Construimos la solución en ciclos cortos, con entregas parciales para tu validación.",
  },
  {
    n: "04",
    title: "Pruebas y seguridad",
    text: "Ejecutamos pruebas funcionales y de seguridad antes de pasar a producción.",
  },
  {
    n: "05",
    title: "Implementación",
    text: "Desplegamos el sistema, capacitamos a tu equipo y lo dejamos operando.",
  },
  {
    n: "06",
    title: "Soporte continuo",
    text: "Damos mantenimiento, monitoreo y mejoras posteriores según el plan contratado.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="tag-mono text-navy">Cómo trabajamos</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Un proceso claro, de principio a fin
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n} className="relative pl-4">
              <p className="font-display text-4xl font-bold text-signal/70">
                {step.n}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}