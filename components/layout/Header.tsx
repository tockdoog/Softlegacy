// Ruta del archivo: components/layout/Header.tsx
// Encabezado fijo con navegación principal. Estilo minimalista premium:
// fondo blanco con blur al hacer scroll, tipografía nítida, acento rojo
// solo en el punto de estado y el botón principal. Incluye el logo real de
// SoftLegacy junto al nombre de la marca. Componente de cliente porque usa
// estado (menú móvil, sección activa) y eventos del navegador (scroll).
// El CTA principal se alinea con el mensaje del Hero (diagnóstico gratuito
// hacia suscripción).
//
// Cambios de esta versión:
// 1) Se agrega el link "Contacto" a la navegación de escritorio y móvil
//    para que el scrollspy también lo detecte como sección activa,
//    reduciendo la necesidad de scroll manual para llegar al formulario.
// 2) Se mantiene el indicador de sección activa ("scrollspy") deslizante,
//    la barra de progreso de scroll y las animaciones de entrada existentes.

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// Lista central de navegación: id debe coincidir con el "id" de cada
// sección en la página para que el scrollspy funcione correctamente.
// "contacto" se incluye aquí para que el usuario pueda saltar directo
// al formulario sin tener que hacer scroll manual por todas las secciones.
const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros", id: "nosotros" },
  { label: "Servicios", href: "#servicios", id: "servicios" },
  { label: "Planes", href: "#soluciones", id: "soluciones" },
  { label: "Proceso", href: "#proceso", id: "proceso" },
  { label: "Casos", href: "#casos", id: "casos" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Sección visible actualmente en pantalla, usada para resaltar el link activo
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Progreso de scroll de la página completa (0 a 1), suavizado con spring
  // para que la barra bajo el header se sienta fluida y no "a saltos"
  const { scrollYProgress } = useScroll();
  const progressBar = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Cambia el fondo del header (transparente -> vidrio con blur) al hacer scroll
  useEffect(function () {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Cierra el menú móvil automáticamente si el usuario agranda la ventana
  useEffect(function () {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return function () {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Scrollspy: observa cada sección referenciada en NAV_LINKS y marca como
  // activa la que tenga mayor visibilidad en el viewport. Se usa
  // IntersectionObserver por rendimiento (evita cálculos en cada scroll).
  useEffect(function () {
    const sections = NAV_LINKS.map(function (link) {
      return document.getElementById(link.id);
    }).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Franja central de la pantalla: la sección "cuenta" como activa
      // cuando cruza el tercio superior del viewport
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

    return function () {
      observer.disconnect();
    };
  }, []);

  const headerClass = scrolled
    ? "sticky top-0 z-50 transition-colors duration-300 glass-card"
    : "sticky top-0 z-50 transition-colors duration-300 bg-transparent border-b border-transparent";

  return (
    <motion.header
      className={headerClass}
      // Entrada animada del header al montar la página (slide-down + fade)
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo + nombre de marca, con micro-interacción al pasar el mouse */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="inline-flex"
          >
            <Image src="/images/logo.png" alt="Logo SoftLegacy" width={32} height={32} priority className="h-8 w-8 object-contain" />
          </motion.span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Soft<span className="text-electric">Legacy</span>
          </span>
        </a>

        {/* Navegación de escritorio con indicador de sección activa animado */}
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(function (link) {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "group relative text-[13px] font-medium text-ink transition-colors"
                    : "group relative text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
                }
              >
                {link.label}
                {/* Indicador compartido: se desliza suavemente entre links activos */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1 left-0 h-px w-full bg-electric"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Subrayado adicional solo para hover cuando el link NO está activo */}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-electric/60 transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            );
          })}
        </nav>

        <a href="#contacto" className="btn-primary hidden !px-5 !py-2.5 text-[13px] lg:inline-flex">
          Diagnóstico gratuito
        </a>

        {/* Botón hamburguesa animado (rota y desaparece la línea central) */}
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

      {/* Barra de progreso de scroll: línea roja fina y sutil bajo el header */}
      <motion.div
        aria-hidden="true"
        className="h-[2px] origin-left bg-electric/70"
        style={{ scaleX: progressBar }}
      />

      {/* Menú móvil desplegable con animación escalonada de links */}
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
            <motion.div
              className="flex flex-col gap-1 px-6 py-6"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                closed: {},
              }}
            >
              {NAV_LINKS.map(function (link) {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={function () {
                      setOpen(false);
                    }}
                    variants={{
                      closed: { opacity: 0, x: -12 },
                      open: { opacity: 1, x: 0 },
                    }}
                    className={
                      isActive
                        ? "py-2.5 text-[15px] font-medium text-electric"
                        : "py-2.5 text-[15px] font-medium text-ink/70 hover:text-electric"
                    }
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contacto"
                onClick={function () {
                  setOpen(false);
                }}
                variants={{
                  closed: { opacity: 0, x: -12 },
                  open: { opacity: 1, x: 0 },
                }}
                className="btn-primary mt-3 w-full"
              >
                Diagnóstico gratuito
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}