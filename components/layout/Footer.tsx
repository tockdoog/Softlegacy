// Ruta del archivo: components/layout/Footer.tsx
// Pie de página global, fondo oscuro intencional. Incluye el logo real de
// SoftLegacy, columnas de navegación y, ahora, los enlaces a redes sociales
// (Instagram, Facebook, YouTube, TikTok). Los íconos son formas genéricas
// dibujadas a mano en SVG (no son los logos oficiales de cada marca), para
// evitar el uso de propiedad intelectual de terceros.

const COLUMNS = [
  {
    title: "Servicios",
    links: ["Software a la medida", "Ciberseguridad", "Cámaras y videovigilancia", "Domótica", "Soporte"],
  },
  {
    title: "Planes",
    links: ["Esencial", "Negocio", "Seguridad", "Integral"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Proceso", "Casos", "Preguntas"],
  },
];

const COLUMN_HREFS: Record<string, string> = {
  "Software a la medida": "#servicios",
  Ciberseguridad: "#servicios",
  "Cámaras y videovigilancia": "#servicios",
  Domótica: "#servicios",
  Soporte: "#servicios",
  Esencial: "#soluciones",
  Negocio: "#soluciones",
  Seguridad: "#soluciones",
  Integral: "#soluciones",
  Nosotros: "#nosotros",
  Proceso: "#proceso",
  Casos: "#casos",
  Preguntas: "#faq",
};

// Enlaces a redes sociales. Reemplaza estas URLs por las cuentas reales
// de SoftLegacy cuando estén disponibles.
const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/softlegacy" },
  { name: "Facebook", href: "https://facebook.com/softlegacy" },
  { name: "YouTube", href: "https://youtube.com/@softlegacy" },
  { name: "TikTok", href: "https://tiktok.com/@softlegacy" },
];

// Ícono genérico por red social, dibujado en SVG plano (sin usar el logo
// oficial de cada marca). Recibe el nombre de la red y devuelve su path.
function SocialIcon({ name }: { name: string }) {
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.6]">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.6]">
        <rect x="2.5" y="6" width="19" height="12" rx="3" />
        <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  // TikTok
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.6]">
      <path d="M13 3v11.2a3.3 3.3 0 1 1-2.3-3.15" />
      <path d="M13 3c.4 2.3 2.1 4 4.4 4.3" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5 lg:gap-8 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src="/images/logo.png" alt="Logo SoftLegacy" className="h-8 w-8 object-contain" />
            <p className="font-display text-xl font-semibold tracking-tight text-white">
              Soft<span className="text-electric">Legacy</span>
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">
            Software, seguridad y automatización por mensualidad, para
            cualquier tipo de negocio.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/55">
            <p>Bogotá D.C., Colombia</p>
            <p>
              <a href="mailto:softlegacytkd@gmail.com" className="transition-colors hover:text-electric">
                softlegacytkd@gmail.com
              </a>
            </p>
            <p>+57 300 000 0000</p>
          </div>

          {/* Enlaces a redes sociales */}
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map((s) => (
              
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Visita nuestro " + s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-electric hover:text-electric"
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
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
          &copy; {year} SoftLegacy S.A.S. - Bogotá, Colombia - Precios en pesos colombianos (COP).
        </p>
      </div>
    </footer>
  );
}