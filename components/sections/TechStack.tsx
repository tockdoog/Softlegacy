// Ruta del archivo: components/sections/TechStack.tsx
// SECCIÓN 6 — TECNOLOGÍAS QUE UTILIZAMOS. Sección oscura (tinta) intencional
// para dar un respiro de contraste entre bloques claros, con cinta de
// nombres en desplazamiento continuo (marquee).

const TECHS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", ".NET",
  "PostgreSQL", "AWS", "Vercel", "Docker", "Azure", "OWASP",
];

export default function TechStack() {
  // Se duplica la lista para que el desplazamiento (marquee) sea infinito y continuo
  const doubled = [...TECHS, ...TECHS];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-ink py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="tag-mono">Stack tecnológico</span>
      </div>

      <div className="relative mt-8">
        {/* Degradados laterales para difuminar el borde de la cinta */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

        <div className="flex w-max animate-marquee gap-12">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-display text-2xl font-semibold text-paper/25"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}