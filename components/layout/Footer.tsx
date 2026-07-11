// Ruta del archivo: components/layout/Footer.tsx
// Pie de pagina global, fondo oscuro intencional (unico contraste fuerte
// frente al resto del sitio, predominantemente blanco), estilo Apple:
// columnas ordenadas, tipografia clara, jerarquia sobria.

const COLUMNS = [
  {
    title: "Servicios",
    links: ["Software a la medida", "Ciberseguridad", "Videovigilancia", "Domotica", "Soporte"],
  },
  {
    title: "Soluciones",
    links: ["ERP", "CRM", "POS", "Apps web"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Proceso", "Casos", "Preguntas"],
  },
];

const COLUMN_HREFS: Record<string, string> = {
  "Software a la medida": "#servicios",
  Ciberseguridad: "#servicios",
  Videovigilancia: "#servicios",
  Domotica: "#servicios",
  Soporte: "#servicios",
  ERP: "#soluciones",
  CRM: "#soluciones",
  POS: "#soluciones",
  "Apps web": "#soluciones",
  Nosotros: "#nosotros",
  Proceso: "#proceso",
  Casos: "#casos",
  Preguntas: "#preguntas",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5 lg:gap-8 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-display text-xl font-semibold tracking-tight text-white">
            Soft<span className="text-electric">Legacy</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">
            Software, seguridad y automatizacion para negocios que no se detienen.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/55">
            <p>Bogota D.C., Colombia</p>
            <p>
              <a href="mailto:softlegacytkd@gmail.com" className="transition-colors hover:text-electric">
                softlegacytkd@gmail.com
              </a>
            </p>
            <p>+57 300 000 0000</p>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
              {col.title}
            </p>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href={COLUMN_HREFS[link] ?? "#"} className="text-sm text-white/55 transition-colors hover:text-electric">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.08] px-6 py-6 lg:px-10">
        <p className="text-center text-xs text-white/35">
          &copy; {year} SoftLegacy S.A.S. - Bogota, Colombia - Precios en pesos colombianos (COP).
        </p>
      </div>
    </footer>
  );
}
