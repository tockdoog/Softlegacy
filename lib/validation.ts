// Ruta del archivo: lib/validation.ts
// Define y valida la forma de los datos que llegan desde el formulario de
// contacto, usando Zod. Esto evita procesar datos malformados o maliciosos
// antes de que lleguen a cualquier lógica de negocio (defensa en profundidad).

import { z } from "zod";

// Esquema estricto: define tipo, longitud mínima/máxima y formato esperado
// de cada campo. Cualquier dato que no cumpla esto es rechazado.
export const contactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  correo: z
    .string()
    .trim()
    .email("El correo electrónico no es válido")
    .max(150, "El correo es demasiado largo"),
  telefono: z
    .string()
    .trim()
    .regex(/^[0-9+\s()-]{7,20}$/, "El número de teléfono no es válido")
    .optional()
    .or(z.literal("")),
  servicio: z
    .string()
    .trim()
    .min(2, "Selecciona un servicio")
    .max(80, "Valor de servicio inválido"),
  mensaje: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más sobre tu proyecto (mínimo 10 caracteres)")
    .max(2000, "El mensaje es demasiado largo"),
  // Campo "honeypot": invisible para personas, solo lo llenan los bots.
  // Si llega con contenido, se descarta la solicitud como spam.
  sitioWeb: z.string().max(0, "Solicitud inválida").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

// Elimina etiquetas HTML y caracteres de control de un texto, para prevenir
// inyección de scripts (XSS) si el dato llegara a renderizarse en algún panel
// administrativo o correo en formato HTML.
export function sanitizeText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "") // remueve cualquier etiqueta HTML/script
    .replace(/[\u0000-\u001F\u007F]/g, "") // remueve caracteres de control invisibles
    .trim();
}