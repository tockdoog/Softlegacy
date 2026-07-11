// Ruta del archivo: components/sections/Benefits.tsx
// SECCIÓN 7 — BENEFICIOS DE TRABAJAR CON NOSOTROS
// Objetivo: responder "¿por qué elegir SoftLegacy?" frente a otros proveedores.
// Iconos sugeridos: candado (seguridad), reloj (tiempos), equipo (acompañamiento),
// gráfico (escalabilidad).
// Animación recomendada: contadores que suben (count-up) al entrar en pantalla.

const BENEFITS = [
  {
    icon: "⛨",
    title: "Seguridad desde el diseño",
    text: "Cada sistema se construye siguiendo buenas prácticas de seguridad, no como un añadido de último momento.",
  },
  {
    icon: "◷",
    title: "Cumplimiento de tiempos",
    text: "Trabajamos con entregas parciales y fechas claras, para que siempre sepas en qué va tu proyecto.",
  },
  {
    icon: "☍",
    title: "Un solo equipo, todo integrado",
    text: "Software, seguridad, cámaras y automatización coordinados entre sí, sin fricción entre proveedores.",
  },
  {
    icon: "↗",
    title: "Soluciones que escalan",
    text: "Diseñamos pensando en el crecimiento: lo que hoy es una tienda, mañana puede ser una cadena.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-navy py-24 text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="tag-mono text-signal">Por qué SoftLegacy</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            La diferencia está en cómo trabajamos
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title}>
              <span className="font-mono text-2xl text-signal">{b.icon}</span>
              <h3 className="mt-4 font-display text-base font-semibold">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}