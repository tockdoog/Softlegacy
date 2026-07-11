// Ruta del archivo: components/sections/ContactForm.tsx
// SECCIÓN 12 — FORMULARIO DE CONTACTO. Estilo minimalista premium: campos
// con bordes sutiles, foco en rojo, tarjeta blanca con sombra suave.
// Incluye validación en el cliente (experiencia de usuario) y un campo
// honeypot oculto para bots; la validación real y definitiva ocurre en el
// servidor (app/api/contact/route.ts), nunca se confía solo en el cliente.
// Animado al entrar en el viewport con ScrollReveal.

"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SERVICIOS = [
  "Desarrollo de software a la medida",
  "Ciberseguridad empresarial",
  "Videovigilancia",
  "Domótica y automatización",
  "Consultoría tecnológica",
  "Mantenimiento y soporte",
];

type Estado = "idle" | "enviando" | "exito" | "error";

export default function ContactForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensajeError, setMensajeError] = useState("");

  async function manejarEnvio(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");
    setMensajeError("");

    const form = e.currentTarget;
    const datos = Object.fromEntries(new FormData(form).entries());

    try {
      // Envía los datos al endpoint seguro del servidor para su validación real
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        setMensajeError(json.error || "Ocurrió un error. Intenta de nuevo.");
        setEstado("error");
        return;
      }

      setEstado("exito");
      form.reset();
    } catch {
      setMensajeError("No pudimos enviar tu mensaje. Verifica tu conexión.");
      setEstado("error");
    }
  }

  return (
    <section id="contacto" className="bg-paper-off py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Columna de contexto */}
        <ScrollReveal>
          <span className="tag-mono">Contáctanos</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="divider-accent" />
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Cuéntanos qué necesita tu negocio
            </h2>
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/55">
            Escríbenos y un asesor te contactará en menos de 24 horas hábiles
            con un diagnóstico inicial, sin costo ni compromiso.
          </p>

          <div className="mt-8 space-y-3 text-sm text-ink/60">
            <p>✉️ softlegacytkd@gmail.com</p>
            <p>📞 +57 300 000 0000</p>
            <p>📍 Bogotá D.C., Colombia</p>
          </div>
        </ScrollReveal>

        {/* Formulario */}
        <ScrollReveal delay={0.15}>
          <form
            onSubmit={manejarEnvio}
            className="card-premium space-y-5 p-8"
            noValidate
          >
            <div>
              <label htmlFor="nombre" className="text-sm font-medium text-ink">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="correo" className="text-sm font-medium text-ink">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  maxLength={150}
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="text-sm font-medium text-ink">
                  Teléfono (opcional)
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  maxLength={20}
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric"
                />
              </div>
            </div>

            <div>
              <label htmlFor="servicio" className="text-sm font-medium text-ink">
                Servicio de interés
              </label>
              <select
                id="servicio"
                name="servicio"
                required
                defaultValue=""
                className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric"
              >
                <option value="" disabled>
                  Selecciona un servicio
                </option>
                {SERVICIOS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="text-sm font-medium text-ink">
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                minLength={10}
                maxLength={2000}
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric"
              />
            </div>

            {/* Campo honeypot: oculto visualmente y para lectores de pantalla.
                Las personas nunca lo llenan; si un bot lo llena, el servidor
                descarta la solicitud como spam (ver app/api/contact/route.ts). */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="sitioWeb">No llenar este campo</label>
              <input
                id="sitioWeb"
                name="sitioWeb"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={estado === "enviando"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {/* Mensajes de estado accesibles (anunciados por lectores de pantalla) */}
            <div role="status" aria-live="polite">
              {estado === "exito" && (
                <p className="text-sm font-medium text-electric">
                  ¡Gracias! Recibimos tu mensaje y te contactaremos pronto.
                </p>
              )}
              {estado === "error" && (
                <p className="text-sm font-medium text-red-600">{mensajeError}</p>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}