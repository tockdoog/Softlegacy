// Ruta del archivo: components/sections/Testimonials.tsx
// SECCIÓN 9 — TESTIMONIOS (EJEMPLOS)
// Objetivo: prueba social. IMPORTANTE: estos son testimonios de ejemplo;
// deben reemplazarse por testimonios reales de clientes antes de publicar,
// para no incurrir en publicidad engañosa.
// Animación recomendada: carrusel automático con pausa al pasar el mouse.

const TESTIMONIALS = [
  {
    quote:
      "El sistema que nos construyeron nos permitió controlar el inventario de las tres sedes desde un solo lugar. El soporte ha sido constante.",
    author: "Gerente de operaciones",
    company: "Cadena de retail (ejemplo)",
  },
  {
    quote:
      "Nos ayudaron a cerrar vulnerabilidades que ni sabíamos que teníamos. El acompañamiento fue claro y sin tecnicismos innecesarios.",
    author: "Directora administrativa",
    company: "Empresa de servicios (ejemplo)",
  },
  {
    quote:
      "La automatización de nuestra bodega redujo errores manuales y nos dio visibilidad en tiempo real de todo el proceso.",
    author: "Jefe de logística",
    company: "Centro de distribución (ejemplo)",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper-off py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="tag-mono text-navy">Testimonios</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Lo que dicen quienes ya confiaron en nosotros
          </h2>
          <p className="mt-3 text-xs text-slate/70">
            * Testimonios de ejemplo, con fines ilustrativos del formato.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="corner-card rounded-lg border border-ink/10 bg-paper p-7"
            >
              <p className="font-display text-3xl text-signal">“</p>
              <p className="-mt-4 text-sm leading-relaxed text-ink/80">
                {t.quote}
              </p>
              <p className="mt-6 text-sm font-semibold text-ink">
                {t.author}
              </p>
              <p className="text-xs text-slate">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}