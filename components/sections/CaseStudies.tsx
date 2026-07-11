// Ruta del archivo: components/sections/CaseStudies.tsx
// SECCIÓN 8 — CASOS DE USO / PROYECTOS
// Objetivo: mostrar resultados concretos (aunque sean ejemplos ilustrativos)
// para reforzar credibilidad ante el visitante.
// Ilustración sugerida: capturas de pantalla estilizadas de dashboards o
// fotografías del sector del cliente (retail, salud, manufactura).
// Animación recomendada: carrusel horizontal con snap-scroll.

const CASES = [
  {
    sector: "Retail",
    title: "Cadena de tiendas de ropa",
    result: "Implementamos un POS conectado a un ERP central, reduciendo el tiempo de cierre de caja en 70%.",
  },
  {
    sector: "Salud",
    title: "Clínica ambulatoria",
    result: "Sistema de historias clínicas a la medida con cifrado de datos y control de accesos por rol.",
  },
  {
    sector: "Bodegas y logística",
    title: "Centro de distribución",
    result: "Videovigilancia con analítica de movimiento y automatización de control de acceso a zonas restringidas.",
  },
  {
    sector: "Servicios",
    title: "Firma de consultoría",
    result: "CRM a la medida que unificó ventas y seguimiento de clientes en una sola plataforma.",
  },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="tag-mono text-navy">Casos de uso</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Proyectos que ya están generando resultados
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="corner-card rounded-lg border border-ink/10 bg-paper-off p-7"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-electric">
                {c.sector}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}