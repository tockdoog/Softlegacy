// Ruta del archivo: components/ui/QuickJumpFAB.tsx
// Botón flotante de acceso rápido (Floating Action Button). Aparece solo
// después de que el usuario ha hecho scroll (para no competir con el panel
// de salto rápido del Hero) y despliega un menú corto con enlaces directos
// a las secciones clave, además de un botón para volver arriba.
// Objetivo: que el usuario nunca necesite scrollear manualmente de vuelta
// para llegar a una sección o al formulario de contacto.
// Componente de cliente: usa estado y eventos del navegador (scroll, click).

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Enlaces del menú flotante. Mismos ids confirmados que en Header y Hero.
const FAB_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#soluciones" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

export default function QuickJumpFAB() {
  // Controla si el FAB es visible (aparece tras superar el alto del Hero)
  const [visible, setVisible] = useState(false);
  // Controla si el menú de enlaces está desplegado
  const [open, setOpen] = useState(false);

  // Muestra el botón solo después de que el usuario avanzó más de una
  // pantalla completa, evitando duplicar el panel de salto rápido del Hero
  useEffect(function () {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
      // Si el usuario vuelve arriba, se cierra el menú automáticamente
      if (window.scrollY <= window.innerHeight * 0.8) {
        setOpen(false);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Cierra el menú y desplaza suavemente hasta el inicio de la página
  function handleBackToTop() {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        >
          {/* Menú desplegable con los enlaces de salto rápido */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="card-premium flex flex-col gap-1 p-2"
              >
                {FAB_LINKS.map(function (link) {
                  return (
                    
                      key={link.href}
                      href={link.href}
                      onClick={function () {
                        setOpen(false);
                      }}
                      className="rounded-2xl px-4 py-2.5 text-right text-[13px] font-medium text-ink/70 transition-colors hover:bg-ink/[0.04] hover:text-electric"
                    >
                      {link.label}
                    </a>
                  );
                })}
                {/* Volver arriba: separado por un divisor sutil */}
                <div className="mx-2 my-1 h-px bg-ink/[0.06]" />
                <button
                  type="button"
                  onClick={handleBackToTop}
                  className="rounded-2xl px-4 py-2.5 text-right text-[13px] font-medium text-ink/50 transition-colors hover:bg-ink/[0.04] hover:text-ink"
                >
                  Volver arriba
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón principal: alterna entre ícono de "menú" y "cerrar" */}
          <button
            type="button"
            aria-label={open ? "Cerrar navegación rápida" : "Abrir navegación rápida"}
            aria-expanded={open}
            onClick={function () {
              setOpen(!open);
            }}
            className="btn-primary !h-14 !w-14 !rounded-full !p-0 shadow-accent"
          >
            <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-2xl leading-none">
              +
            </motion.span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}