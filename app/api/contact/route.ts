// Ruta del archivo: app/api/contact/route.ts
// Endpoint del formulario de contacto (POST /api/contact). Aplica varias
// capas de seguridad antes de procesar cualquier dato:
// 1) Limita solicitudes por IP (rate limiting) para evitar spam/abuso.
// 2) Valida y sanitiza estrictamente el cuerpo de la solicitud (Zod).
// 3) Verifica un campo "honeypot" para descartar bots simples.
// 4) Nunca expone detalles internos del error al cliente.
// 5) Envía el mensaje por correo real usando Resend hacia CONTACT_TO_EMAIL.
// Se agregó el campo "tipoNegocio" al cuerpo del correo, para que el asesor
// sepa de qué tipo de negocio viene el contacto (tienda, restaurante,
// gimnasio, etc.) sin necesidad de preguntarlo de nuevo.

import { NextRequest, NextResponse } from "next/server";
import { contactSchema, sanitizeText } from "@/lib/validation";
import { verificarLimite } from "@/lib/rateLimit";

// Fuerza que esta ruta se ejecute siempre en el servidor (sin caché estática),
// necesario porque procesa datos sensibles enviados por el usuario.
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  // Obtiene la IP real del visitante desde las cabeceras que agrega Vercel/Proxy.
  // Se usa como identificador para el limitador de solicitudes.
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "desconocida";

  // 1) Control de límite de solicitudes: previene ataques de fuerza bruta/spam
  const limite = verificarLimite(ip);
  if (!limite.permitido) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  // Verifica que el cuerpo de la solicitud sea JSON válido antes de procesarlo
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "El cuerpo de la solicitud no es válido." },
      { status: 400 }
    );
  }

  // 2) Validación estricta de los datos recibidos contra el esquema definido
  const resultado = contactSchema.safeParse(body);
  if (!resultado.success) {
    return NextResponse.json(
      { ok: false, error: "Datos inválidos. Revisa el formulario e intenta de nuevo." },
      { status: 400 }
    );
  }

  const datos = resultado.data;

  // 3) Campo honeypot: si viene con contenido, es casi seguro un bot.
  // Se responde "éxito" falso para no darle información útil al bot.
  if (datos.sitioWeb && datos.sitioWeb.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Sanitiza cada campo de texto antes de usarlo (defensa adicional anti-XSS)
  const datosSeguros = {
    nombre: sanitizeText(datos.nombre),
    correo: sanitizeText(datos.correo),
    telefono: datos.telefono ? sanitizeText(datos.telefono) : "",
    tipoNegocio: sanitizeText(datos.tipoNegocio),
    servicio: sanitizeText(datos.servicio),
    mensaje: sanitizeText(datos.mensaje),
  };

  // Dirección de destino y remitente, configurables por entorno (nunca hardcodeadas)
  const destino = process.env.CONTACT_TO_EMAIL ?? "softlegacytkd@gmail.com";
  const remitente = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  try {
    // 5) Envío real del correo mediante Resend. Si falta la API key, se
    // registra internamente pero NO se le revela al cliente (evita fuga de
    // información sobre la configuración del servidor).
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada en las variables de entorno.");
      return NextResponse.json(
        { ok: false, error: "El servicio de contacto no está disponible en este momento." },
        { status: 500 }
      );
    }

    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `SoftLegacy <${remitente}>`,
        to: destino,
        reply_to: datosSeguros.correo,
        subject: `Nuevo contacto: ${datosSeguros.nombre}`,
        text: [
          `Nombre: ${datosSeguros.nombre}`,
          `Correo: ${datosSeguros.correo}`,
          `Telefono: ${datosSeguros.telefono || "No proporcionado"}`,
          `Tipo de negocio: ${datosSeguros.tipoNegocio}`,
          `Servicio: ${datosSeguros.servicio}`,
          `Mensaje: ${datosSeguros.mensaje}`,
        ].join("\n"),
      }),
    });

    // Si Resend responde con error, se registra internamente pero no se
    // expone el detalle técnico al cliente.
    if (!respuesta.ok) {
      console.error("Error de Resend:", respuesta.status, await respuesta.text());
      return NextResponse.json(
        { ok: false, error: "No pudimos enviar tu mensaje. Intenta de nuevo más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, mensaje: "Mensaje recibido correctamente." });
  } catch {
    // Nunca se devuelve el detalle técnico del error al cliente (evita fuga de información)
    return NextResponse.json(
      { ok: false, error: "No pudimos procesar tu solicitud. Intenta de nuevo más tarde." },
      { status: 500 }
    );
  }
}

// Bloquea explícitamente cualquier otro método HTTP sobre esta ruta
export async function GET() {
  return NextResponse.json({ ok: false, error: "Método no permitido." }, { status: 405 });
}