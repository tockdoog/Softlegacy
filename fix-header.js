// fix-header.js
// Reescribe Header.tsx directamente desde Node, sin pasar por el portapapeles,
// para eliminar cualquier posibilidad de caracteres invisibles.

const fs = require("fs");

const content = `"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
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
    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const headerClass = scrolled
    ? "sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl transition-colors duration-300"
    : "sticky top-0 z-50 border-b border-transparent bg-transparent transition-colors duration-300";

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" className="font-display text-lg font-bold text-paper">
          Soft<span className="text-electric">Legacy</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(function (link) {
            return (
              
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-paper/70 transition-colors hover:text-cyan"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        
          href="#contacto"
          className="hidden rounded-md bg-electric px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-electric-light lg:inline-block"
        >
          Cotiza tu proyecto
        </a>

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
            className="block h-0.5 w-6 bg-paper"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="block h-0.5 w-6 bg-paper"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="block h-0.5 w-6 bg-paper"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map(function (link) {
                return (
                  
                    key={link.href}
                    href={link.href}
                    onClick={function () {
                      setOpen(false);
                    }}
                    className="py-2 text-sm font-medium text-paper/70 hover:text-cyan"
                  >
                    {link.label}
                  </a>
                );
              })}
              
                href="#contacto"
                onClick={function () {
                  setOpen(false);
                }}
                className="mt-2 rounded-md bg-electric px-5 py-3 text-center text-sm font-semibold text-paper"
              >
                Cotiza tu proyecto
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
`;

fs.writeFileSync("components/layout/Header.tsx", content, { encoding: "utf8" });
console.log("Header.tsx reescrito correctamente.");