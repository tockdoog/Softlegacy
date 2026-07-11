// Ruta del archivo: components/sections/TechStack.tsx
// SECCIÓN 6 — TECNOLOGÍAS QUE UTILIZAMOS (versión futurista)
// Objetivo: credibilidad técnica con una cinta de logos/nombres en
// desplazamiento continuo (marquee), efecto muy usado en sitios "premium".

const TECHS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", ".NET",
  "PostgreSQL", "AWS", "Vercel", "Docker", "Azure", "OWASP",
];

export default function TechStack() {
  // Se duplica la lista para que el desplazamiento (marquee) sea infinito y continuo
  const doubled = [...TECHS, ...TECHS];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-navy py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="tag-mono">Stack tecnológico</span>
      </div>

      <div className="relative mt-8">
        {/* Degradados laterales para difuminar el borde de la cinta */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent" />

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