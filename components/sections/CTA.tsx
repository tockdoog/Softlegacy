// Ruta del archivo: components/sections/CTA.tsx
// SECCIÓN 11 — LLAMADO A LA ACCIÓN
// Objetivo: última oportunidad de conversión antes del footer/formulario,
// con un mensaje directo y de baja fricción (diagnóstico gratuito).
// Animación recomendada: fondo con gradiente animado sutil (movimiento lento).

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          ¿Listo para modernizar tu negocio?
        </h2>
        <p className="mt-4 text-base text-paper/70">
          Agenda un diagnóstico gratuito de 30 minutos. Te decimos qué
          necesitas, en qué orden implementarlo y cuánto cuesta, en pesos
          colombianos y sin letra pequeña.
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-block rounded-md bg-signal px-8 py-4 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          Quiero mi diagnóstico gratuito
        </a>
      </div>
    </section>
  );
}