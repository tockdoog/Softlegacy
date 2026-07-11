// Ruta del archivo: components/layout/Footer.tsx
// Pie de página global, adaptado al tema oscuro futurista.

const COLUMNS = [
  { title: "Servicios", links: ["Software a la medida", "Ciberseguridad", "Videovigilancia", "Domótica", "Soporte"] },
  { title: "Soluciones", links: ["ERP", "CRM", "POS", "Apps web"] },
  { title: "Empresa", links: ["Nosotros", "Proceso", "Casos", "Preguntas"] },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-5 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-bold text-paper">
            Soft<span className="text-electric">Legacy</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-paper/50">
            Software, seguridad y automatización para negocios que no se detienen.
          </p>
          <div className="mt-6 space-y-2 text-sm text-paper/60">
            <p>Bogotá D.C., Colombia</p>
            <p>contacto@softlegacy.com.co</p>
            <p>+57 300 000 0000</p>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="tag-mono">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <span className="text-sm text-paper/50 transition-colors hover:text-cyan">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-paper/30 lg:px-10">
        © {year} SoftLegacy S.A.S. · Bogotá, Colombia · Precios en pesos colombianos (COP).
      </div>
    </footer>
  );
}