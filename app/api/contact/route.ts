// Ruta del archivo: app/api/contact/route.ts
// Endpoint del formulario de contacto (POST /api/contact). Aplica varias
// capas de seguridad antes de procesar cualquier dato:
// 1) Verifica que la solicitud venga del propio sitio (anti-CSRF básico).
// 2) Limita solicitudes por IP (rate limiting) para evitar spam/abuso.
// 3) Verifica el tipo de contenido y valida/sanitiza estrictamente el
//    cuerpo de la solicitud (Zod).
// 4) Verifica un campo "honeypot" para descartar bots simples.
// 5) Nunca expone detalles internos del error al cliente.
// 6) Envía el mensaje por correo real usando el SDK oficial de Resend.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, sanitizeText } from "@/lib/validation";
import { verificarLimite } from "@/lib/rateLimit";

// Fuerza que esta ruta se ejecute siempre en el servidor (sin caché estática),
// necesario porque procesa datos sensibles enviados por el usuario.
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  // 1) Validación de origen: si se configuró NEXT_PUBLIC_SITE_URL, se exige
  // que la solicitud provenga del propio dominio. Esto evita que otros
  // sitios usen tu API para enviar correos desde formularios ajenos.
  const origenPermitido = process.env.NEXT_PUBLIC_SITE_URL;
  const origenSolicitud = request.headers.get("origin");
  if (origenPermitido && origenSolicitud && origenSolicitud !== origenPermitido) {
    return NextResponse.json(
      { ok: false, error: "Origen no autorizado." },
      { status: 403 }
    );
  }

  // Obtiene la IP real del visitante desde las cabeceras que agrega Vercel/Proxy.
  // Se usa como identificador para el limitador de solicitudes.
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "desconocida";

  // 2) Control de límite de solicitudes: previene ataques de fuerza bruta/spam
  const limite = verificarLimite(ip);
  if (!limite.permitido) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  // Verifica que el cuerpo venga anunciado como JSON antes de intentar leerlo
  const tipoContenido = request.headers.get("content-type") ?? "";
  if (!tipoContenido.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Tipo de contenido no soportado." },
      { status: 415 }
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

  // 3) Validación estricta de los datos recibidos contra el esquema definido
  const resultado = contactSchema.safeParse(body);
  if (!resultado.success) {
    return NextResponse.json(
      { ok: false, error: "Datos inválidos. Revisa el formulario e intenta de nuevo." },
      { status: 400 }
    );
  }

  const datos = resultado.data;

  // 4) Campo honeypot: si viene con contenido, es casi seguro un bot.
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

  // Variables de entorno obligatorias. Ninguna se hardcodea en el código:
  // así, aunque el repositorio sea público, no queda ningún correo real
  // ni clave expuesta en el código fuente.
  const apiKey = process.env.RESEND_API_KEY;
  const destino = process.env.CONTACT_TO_EMAIL;
  const remitente = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !destino || !remitente) {
    // Se registra internamente para el desarrollador, pero NO se le revela
    // al cliente el detalle de qué variable falta (evita fuga de información
    // sobre la configuración del servidor).
    console.error(
      "Faltan variables de entorno para el envío de correo (RESEND_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL)."
    );
    return NextResponse.json(
      { ok: false, error: "El servicio de contacto no está disponible en este momento." },
      { status: 500 }
    );
  }

  try {
    // 6) Envío real del correo mediante el SDK oficial de Resend
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `SoftLegacy <${remitente}>`,
      to: destino,
      replyTo: datosSeguros.correo,
      subject: `Nuevo contacto: ${datosSeguros.nombre}`,
      text: [
        `Nombre: ${datosSeguros.nombre}`,
        `Correo: ${datosSeguros.correo}`,
        `Teléfono: ${datosSeguros.telefono || "No proporcionado"}`,
        `Tipo de negocio: ${datosSeguros.tipoNegocio}`,
        `Servicio: ${datosSeguros.servicio}`,
        `Mensaje: ${datosSeguros.mensaje}`,
      ].join("\n"),
    });

    // Si Resend responde con error, se registra internamente pero no se
    // expone el detalle técnico al cliente.
    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json(
        { ok: false, error: "No pudimos enviar tu mensaje. Intenta de nuevo más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, mensaje: "Mensaje recibido correctamente." });
  } catch (err) {
    // Nunca se devuelve el detalle técnico del error al cliente (evita fuga de información)
    console.error("Error inesperado al enviar el correo:", err);
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