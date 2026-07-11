// Ruta del archivo: components/sections/About.tsx
// SECCIÓN 2 — SOBRE SOFTLEGACY
// Objetivo: responder "¿quiénes somos?" y transmitir cercanía y solidez.
// Animación recomendada: revelado al hacer scroll (fade + leve desplazamiento).
// Ilustración sugerida: fotografía/ilustración del equipo trabajando o un
// mapa de Colombia con puntos de cobertura.

export default function About() {
  return (
    <section id="nosotros" className="bg-paper py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="tag-mono text-navy">Quiénes somos</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Un equipo de tecnología, no un proveedor más
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate">
            SoftLegacy es una empresa colombiana de tecnología que acompaña a
            negocios de todos los tamaños en su transformación digital.
            Combinamos desarrollo de software, ciberseguridad, videovigilancia
            y automatización en un solo equipo, para que no tengas que
            coordinar cinco proveedores distintos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Nacimos con una idea simple: la tecnología debe ser una ventaja
            competitiva, no un dolor de cabeza. Por eso diseñamos cada
            solución a la medida del negocio, con procesos claros y soporte
            real después de la entrega.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="corner-card border border-ink/10 p-5">
              <p className="font-display text-3xl font-bold text-navy">+50</p>
              <p className="mt-1 text-sm text-slate">Proyectos entregados</p>
            </div>
            <div className="corner-card border border-ink/10 p-5">
              <p className="font-display text-3xl font-bold text-navy">98%</p>
              <p className="mt-1 text-sm text-slate">Clientes que renuevan soporte</p>
            </div>
          </div>
        </div>

        {/* Misión y visión como panel lateral */}
        <div className="space-y-6">
          <div className="corner-card rounded-lg bg-navy p-8 text-paper">
            <p className="tag-mono text-signal">Misión</p>
            <p className="mt-3 text-lg leading-relaxed text-paper/85">
              Impulsar el crecimiento de nuestros clientes con software y
              seguridad confiables, diseñados a la medida de cada operación.
            </p>
          </div>
          <div className="corner-card rounded-lg border border-ink/10 bg-paper-off p-8">
            <p className="tag-mono text-navy">Visión</p>
            <p className="mt-3 text-lg leading-relaxed text-slate">
              Ser el aliado tecnológico de referencia para empresas
              colombianas que buscan escalar de forma segura y automatizada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}