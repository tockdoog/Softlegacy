// Ruta del archivo: components/layout/Header.tsx
// Encabezado fijo con navegación principal, tema claro (blanco) con acento
// rojo. Cambia de apariencia al hacer scroll y muestra un menú móvil
// desplegable en pantallas pequeñas. Componente de cliente porque usa
// estado y eventos del navegador.

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Enlaces de navegación: apuntan a anclas (#id) dentro de la misma página,
// por lo que no requieren rutas adicionales ni llamadas a la API.
const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#casos" },
];

export default function Header() {
  // Controla si el menú móvil está abierto o cerrado
  const [open, setOpen] = useState(false);
  // Controla si el usuario ya hizo scroll, para cambiar el fondo del header
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
    // Escucha el scroll de la ventana para activar el efecto de fondo
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll);
    // Limpieza del listener al desmontar el componente (evita fugas de memoria)
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Header transparente arriba del todo; blanco con sombra sutil al hacer scroll
  const headerClass = scrolled
    ? "sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl shadow-sm transition-all duration-300"
    : "sticky top-0 z-50 border-b border-transparent bg-paper/70 backdrop-blur-md transition-all duration-300";

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo / marca, enlaza al inicio de la página */}
        <a href="#inicio" className="font-display text-lg font-bold text-ink">
          Soft<span className="text-electric">Legacy</span>
        </a>

        {/* Navegación principal, visible solo en pantallas grandes (lg y superior) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(function (link) {
            return (
              <a key={link.href} href={link.href} className="text-sm font-medium text-ink/70 transition-colors hover:text-electric">
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Botón de llamado a la acción, visible solo en escritorio */}
        <a href="#contacto" className="hidden rounded-md bg-electric px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-electric-light lg:inline-block">
          Cotiza tu proyecto
        </a>

        {/* Botón "hamburguesa" para abrir/cerrar el menú en móvil */}
        <button
          aria-label="Abrir menu de navegacion"
          aria-expanded={open}
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={function () {
            setOpen(!open);
          }}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="block h-0.5 w-6 bg-ink"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="block h-0.5 w-6 bg-ink"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="block h-0.5 w-6 bg-ink"
          />
        </button>
      </div>

      {/* Menú móvil desplegable, con animación de entrada/salida */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map(function (link) {
                return (
                  <a key={link.href} href={link.href} onClick={function () { setOpen(false); }} className="py-2 text-sm font-medium text-ink/70 hover:text-electric">
                    {link.label}
                  </a>
                );
              })}
              <a href="#contacto" onClick={function () { setOpen(false); }} className="mt-2 rounded-md bg-electric px-5 py-3 text-center text-sm font-semibold text-paper">
                Cotiza tu proyecto
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}