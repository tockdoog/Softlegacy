// Ruta del archivo: components/sections/Services.tsx
// SECCIÓN 3 — NUESTROS SERVICIOS
// Objetivo: responder "¿qué hacemos?" y "¿qué problemas resolvemos?" de
// forma escaneable, en tarjetas con ícono, problema que resuelve y beneficio.
// Iconos sugeridos: </> desarrollo, escudo ciberseguridad, cámara videovigilancia,
// casa/chip domótica, engranaje consultoría, auriculares soporte.
// Animación recomendada: aparición escalonada (stagger) de tarjetas al hacer scroll.

const SERVICES = [
  {
    icon: "</>",
    title: "Desarrollo de software a la medida",
    problem: "Problema: procesos manuales, hojas de cálculo y sistemas que no se ajustan a tu operación.",
    text: "Construimos aplicaciones web, sistemas administrativos y plataformas a la medida, diseñadas exactamente para cómo trabaja tu equipo.",
  },
  {
    icon: "⛨",
    title: "Ciberseguridad empresarial",
    problem: "Problema: información sensible expuesta a filtraciones, fraude o ataques.",
    text: "Evaluamos, protegemos y monitoreamos tu infraestructura digital para reducir el riesgo de ataques y cumplir buenas prácticas del sector.",
  },
  {
    icon: "◎",
    title: "Videovigilancia",
    problem: "Problema: falta de control y evidencia sobre lo que ocurre en tus instalaciones.",
    text: "Instalamos sistemas de cámaras de seguridad con monitoreo remoto, grabación en la nube y alertas en tiempo real.",
  },
  {
    icon: "⌂",
    title: "Domótica y automatización",
    problem: "Problema: tiempo y energía perdidos en tareas y controles manuales.",
    text: "Automatizamos hogares y negocios: iluminación, acceso, climatización y procesos operativos conectados desde una sola plataforma.",
  },
  {
    icon: "✦",
    title: "Consultoría tecnológica",
    problem: "Problema: decisiones de tecnología tomadas sin una hoja de ruta clara.",
    text: "Analizamos tu operación y te acompañamos a definir qué tecnología implementar, en qué orden y con qué inversión.",
  },
  {
    icon: "↻",
    title: "Mantenimiento y soporte",
    problem: "Problema: sistemas que fallan y nadie responde a tiempo.",
    text: "Damos mantenimiento preventivo y soporte continuo a tus sistemas, con tiempos de respuesta definidos por contrato.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-paper-off py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="tag-mono text-navy">Qué hacemos</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Servicios pensados para resolver problemas reales de tu negocio
          </h2>
          <p className="mt-4 text-base text-slate">
            No vendemos tecnología por vender: cada servicio nace de un
            problema concreto que enfrentan las empresas todos los días.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="corner-card group rounded-lg border border-ink/10 bg-paper p-7 transition-shadow hover:shadow-lg"
            >
              <span className="font-mono text-2xl text-electric">{s.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-signal/80">
                {s.problem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}