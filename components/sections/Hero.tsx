// Ruta del archivo: components/sections/Hero.tsx
// SECCIÓN 1 — HERO PRINCIPAL
// Objetivo: causar una primera impresión de confianza e innovación en menos
// de 5 segundos, comunicar en una frase qué hace SoftLegacy y llevar al
// visitante a cotizar o conocer los servicios.
// Animación recomendada: entrada secuencial (fadeUp) de etiqueta, título,
// subtítulo y botones; línea de "escaneo" horizontal cruzando el panel lateral.

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink text-paper"
    >
      {/* Fondo tipo cuadrícula técnica, referencia visual a paneles de sistemas */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-electric/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        {/* Columna de texto principal */}
        <div className="animate-fadeUp">
          {/* Forma de firma visual: círculo tipo sello "hanko" junto al eyebrow.
              Es el único acento circular audaz de la página; el resto de la
              paleta se mantiene deliberadamente en blanco, negro y rojo puntual. */}
          <div className="flex items-center gap-4">
            <span className="seal-ring h-3 w-3 rounded-full bg-electric" />
            <span className="tag-mono">SOFTLEGACY · TECNOLOGÍA EMPRESARIAL</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Software, seguridad y automatización
            <span className="text-signal"> para negocios que no se detienen</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/70">
            Diseñamos y construimos el sistema que tu empresa necesita:
            aplicaciones a la medida, protección contra amenazas digitales,
            videovigilancia y automatización de procesos. Todo bajo un mismo
            equipo, de principio a fin.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-md bg-electric px-7 py-3.5 text-center text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-electric-light"
            >
              Solicita un diagnóstico gratuito
            </a>
            <a
              href="#servicios"
              className="rounded-md border border-paper/20 px-7 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
            >
              Ver servicios
            </a>
          </div>

          {/* Indicadores de confianza rápidos */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-paper/50">
            <p>+50 proyectos entregados</p>
            <p>Soporte 24/7</p>
            <p>Equipo certificado en ciberseguridad</p>
          </div>
        </div>

        {/* Panel visual lateral: simula un dashboard de monitoreo en vivo */}
        <div className="corner-card relative hidden rounded-lg border border-white/10 bg-navy/40 p-6 backdrop-blur lg:block">
          <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
            <div className="h-24 w-full animate-scan bg-gradient-to-b from-electric/0 via-electric/60 to-electric/0" />
          </div>
          <p className="tag-mono">panel.sistema — estado_general</p>
          <div className="mt-6 space-y-4">
            {[
              ["Infraestructura", "Operativa", "text-signal"],
              ["Monitoreo de seguridad", "Activo", "text-signal"],
              ["Automatización", "Sincronizada", "text-signal"],
              ["Soporte técnico", "En línea", "text-signal"],
            ].map(([label, status, color]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-white/10 pb-3 text-sm"
              >
                <span className="text-paper/70">{label}</span>
                <span className={`font-mono text-xs ${color}`}>● {status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}