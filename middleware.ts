// Ruta del archivo: middleware.ts
// Middleware global que se ejecuta antes de cada solicitud a rutas /api/*.
// Aplica una capa adicional de buenas prácticas de seguridad a nivel de red,
// complementando las cabeceras definidas en next.config.js.

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Solo permite los métodos HTTP estrictamente necesarios sobre la API,
  // reduciendo la superficie de ataque (por ejemplo, bloquea TRACE, PUT, etc.)
  const metodosPermitidos = ["GET", "POST", "OPTIONS"];
  if (!metodosPermitidos.includes(request.method)) {
    return NextResponse.json(
      { ok: false, error: "Método no permitido." },
      { status: 405 }
    );
  }

  // Agrega un identificador único de solicitud, útil para trazabilidad y
  // auditoría de seguridad en los registros (logs) de Vercel
  response.headers.set("x-request-id", crypto.randomUUID());

  return response;
}

// Este middleware solo se ejecuta sobre las rutas de la API, para no afectar
// el rendimiento de las páginas estáticas del sitio
export const config = {
  matcher: "/api/:path*",
};