// Ruta del archivo: components/layout/Header.tsx
// Encabezado fijo con navegación principal. Estilo minimalista premium:
// fondo blanco con blur al hacer scroll, tipografía nítida, acento rojo
// solo en el punto de estado y el botón principal. Incluye el logo real de
// SoftLegacy junto al nombre de la marca. Componente de cliente porque usa
// estado (menú móvil) y eventos del navegador (scroll). El CTA principal se
// alinea con el mensaje del Hero (diagnóstico gratuito hacia suscripción).

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#casos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(function () {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return function () {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const headerClass = scrolled
    ? "sticky top-0 z-50 transition-all duration-300 glass-card"
    : "sticky top-0 z-50 transition-all duration-300 bg-transparent border-b border-transparent";

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2.5">
          <Image src="/images/logo.png" alt="Logo SoftLegacy" width={32} height={32} priority className="h-8 w-8 object-contain" />
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Soft<span className="text-electric">Legacy</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map(function (link) {
            return (
              <a key={link.href} href={link.href} className="group relative text-[13px] font-medium text-ink/70 transition-colors hover:text-ink">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-electric transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </nav>

        <a href="#contacto" className="btn-primary hidden !px-5 !py-2.5 text-[13px] lg:inline-flex">
          Diagnóstico gratuito
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={function () {
            setOpen(!open);
          }}
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block h-0.5 w-6 rounded-full bg-ink" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-0.5 w-6 rounded-full bg-ink" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block h-0.5 w-6 rounded-full bg-ink" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Navegación móvil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/[0.06] bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map(function (link) {
                return (
                  <a key={link.href} href={link.href} onClick={function () { setOpen(false); }} className="py-2.5 text-[15px] font-medium text-ink/70 hover:text-electric">
                    {link.label}
                  </a>
                );
              })}
              <a href="#contacto" onClick={function () { setOpen(false); }} className="btn-primary mt-3 w-full">
                Diagnóstico gratuito
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}