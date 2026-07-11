// Ruta del archivo: components/sections/TechStack.tsx
// SECCIÓN 6 — TECNOLOGÍAS QUE UTILIZAMOS
// Objetivo: reforzar credibilidad técnica mostrando el stack real de trabajo.
// Animación recomendada: cinta horizontal con scroll infinito suave (marquee).

const TECH_GROUPS = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Python", ".NET", "PostgreSQL"] },
  { label: "Nube e infraestructura", items: ["AWS", "Vercel", "Docker", "Azure"] },
  { label: "Seguridad", items: ["OWASP", "SSL/TLS", "Firewalls", "Monitoreo 24/7"] },
];

export default function TechStack() {
  return (
    <section className="border-y border-ink/10 bg-paper-off py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="tag-mono text-navy">Stack tecnológico</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Herramientas probadas, no experimentos
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs uppercase tracking-widest text-electric">
                {group.label}
              </p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}