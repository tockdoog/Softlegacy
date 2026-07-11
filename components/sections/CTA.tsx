// Ruta del archivo: components/sections/CTA.tsx
// SECCIÓN 11 — LLAMADO A LA ACCIÓN (versión futurista)
// Objetivo: última conversión antes del formulario, fondo con resplandores
// pulsantes en movimiento lento.

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/25 blur-3xl animate-pulseGlow" />

      <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-bold text-paper sm:text-5xl">
          ¿Listo para el cambio?
        </h2>
        <p className="mt-4 text-base text-paper/55">
          Diagnóstico gratuito de 30 minutos, en pesos colombianos, sin letra pequeña.
        </p>
        
          href="#contacto"
          className="mt-8 inline-block rounded-md bg-electric px-8 py-4 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5 hover:bg-electric-light"
        >
          Quiero mi diagnóstico
        </a>
      </div>
    </section>
  );
}