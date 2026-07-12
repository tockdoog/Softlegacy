// Ruta del archivo: components/sections/CTA.tsx
// SECCIÓN 11 — LLAMADO A LA ACCIÓN. Sección oscura (tinta) intencional para
// dar contraste dramático frente al resto del sitio, predominantemente
// blanco: mucho blanco + un bloque negro con acento rojo puntual.
// Se anima al entrar en el viewport. Texto ajustado para reflejar que el
// diagnóstico termina en una propuesta de plan mensual.

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      {/* Resplandor rojo muy suave, centrado, único acento de color */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-[110px]" />

      <ScrollReveal className="relative mx-auto max-w-2xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          ¿Listo para el cambio?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/55">
          Diagnóstico gratuito de 30 minutos. Te armamos un plan mensual en
          pesos colombianos, sin letra pequeña.
        </p>
        <a href="#contacto" className="btn-primary mt-9 inline-flex !px-8 !py-4">
          Quiero mi diagnóstico
        </a>
      </ScrollReveal>
    </section>
  );
}