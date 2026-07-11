// Ruta del archivo: components/sections/Products.tsx
// SECCIÓN 4 — PRODUCTOS Y SOLUCIONES QUE DESARROLLAMOS
// Objetivo: mostrar de forma tangible qué tipo de sistemas construye
// SoftLegacy, con un rango de inversión referencial en pesos colombianos
// (COP) para calificar al visitante antes de que llegue al formulario.
// Iconos sugeridos: carrito (POS), red/nodos (ERP), personas (CRM), globo (web).
// Animación recomendada: tarjetas con efecto "hover lift" y borde que se ilumina.

const SOLUTIONS = [
  {
    tag: "POS",
    title: "Sistemas de punto de venta",
    text: "Software para ventas, inventario y facturación electrónica, adaptado a tiendas, restaurantes y comercio en general.",
    price: "Desde $3.500.000 COP",
  },
  {
    tag: "ERP",
    title: "Sistemas ERP",
    text: "Plataformas que integran inventario, compras, finanzas, nómina y producción en un solo lugar, con reportes en tiempo real.",
    price: "Desde $12.000.000 COP",
  },
  {
    tag: "CRM",
    title: "Sistemas CRM",
    text: "Gestión de clientes, oportunidades de venta y seguimiento comercial, con automatización de tareas repetitivas.",
    price: "Desde $8.000.000 COP",
  },
  {
    tag: "WEB",
    title: "Aplicaciones y sistemas web a la medida",
    text: "Portales, plataformas internas y aplicaciones a la medida, diseñadas desde cero según el flujo real de tu operación.",
    price: "Desde $6.000.000 COP",
  },
];

export default function Products() {
  return (
    <section id="soluciones" className="bg-ink py-24 text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="tag-mono">Soluciones</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Sistemas que construimos a la medida de tu operación
          </h2>
          <p className="mt-4 text-base text-paper/60">
            Los valores son referenciales en pesos colombianos (COP) y varían
            según el alcance, los módulos e integraciones de cada proyecto.
            El precio final se define en la fase de diagnóstico, sin costo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.tag}
              className="corner-card flex flex-col justify-between rounded-lg border border-white/10 bg-navy/30 p-6 transition-colors hover:border-signal/50"
            >
              <div>
                <span className="font-mono text-xs tracking-widest text-signal">
                  {sol.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {sol.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">
                  {sol.text}
                </p>
              </div>
              <p className="mt-6 font-mono text-sm text-electric-light">
                {sol.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}