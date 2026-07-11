// Ruta del archivo: components/ui/ScrollReveal.tsx
// Componente reutilizable de animación al hacer scroll ("scroll reveal").
// Envuelve cualquier contenido y lo anima (aparece + se desliza hacia
// arriba) cuando entra en el viewport. Se usa en todas las secciones para
// dar sensación de interfaz dinámica sin duplicar lógica de animación.

"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  // Retraso en segundos, útil para escalonar varios elementos (efecto cascada)
  delay?: number;
  // Clases adicionales de Tailwind para el contenedor
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      // whileInView activa la animación cuando el elemento entra en pantalla
      whileInView={{ opacity: 1, y: 0 }}
      // "once: true" evita que la animación se repita cada vez que se hace scroll
      // arriba y abajo; "margin" adelanta el disparo antes de que sea 100% visible
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}