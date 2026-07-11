// Ruta del archivo: lib/rateLimit.ts
// Limitador de solicitudes (rate limiting) por dirección IP, para mitigar
// spam y ataques de fuerza bruta/DoS sobre el endpoint de contacto.
//
// NOTA IMPORTANTE PARA PRODUCCIÓN EN VERCEL:
// Este limitador usa memoria del proceso, lo cual funciona como primera
// barrera, pero en un entorno serverless cada instancia tiene su propia
// memoria. Para un límite robusto y distribuido en producción se recomienda
// usar un almacenamiento compartido como Vercel KV / Upstash Redis.

type Registro = { intentos: number; inicio: number };

// Mapa en memoria: IP -> registro de intentos dentro de la ventana de tiempo
const registros = new Map<string, Registro>();

const VENTANA_MS = 60_000; // Ventana de tiempo: 1 minuto
const MAX_INTENTOS = 5; // Máximo de solicitudes permitidas por IP en la ventana

/**
 * Evalúa si una IP puede realizar una nueva solicitud.
 * Devuelve `permitido: false` si superó el máximo de intentos en la ventana.
 */
export function verificarLimite(ip: string): { permitido: boolean; restante: number } {
  const ahora = Date.now();
  const registro = registros.get(ip);

  // Si no hay registro previo o la ventana de tiempo ya expiró, se reinicia el contador
  if (!registro || ahora - registro.inicio > VENTANA_MS) {
    registros.set(ip, { intentos: 1, inicio: ahora });
    return { permitido: true, restante: MAX_INTENTOS - 1 };
  }

  // Si ya alcanzó el máximo de intentos dentro de la ventana, se bloquea
  if (registro.intentos >= MAX_INTENTOS) {
    return { permitido: false, restante: 0 };
  }

  // Incrementa el contador de intentos para esta IP
  registro.intentos += 1;
  return { permitido: true, restante: MAX_INTENTOS - registro.intentos };
}