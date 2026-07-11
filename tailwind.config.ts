// Ruta del archivo: tailwind.config.ts
// Sistema de diseño: blanco predominante, rojo como acento secundario,
// estética japonesa (washi, sumi, líneas finas) combinada con elementos
// tecnológicos (grid, glow, scan). Mismos nombres de color que antes para
// no romper componentes existentes; solo cambian los valores.

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "paper": blanco washi, ahora es el fondo predominante del sitio
        paper: { DEFAULT: "#FFFFFF", off: "#FAFAF7", muted: "#F1EFEA" },
        // "ink" (tinta sumi): antes era el fondo oscuro global; ahora es el
        // color de texto principal y el fondo de las pocas secciones oscuras
        // (footer, banner de CTA) para dar contraste dramático tipo sumi-e.
        ink: { DEFAULT: "#16171C", soft: "#2B2D36" },
        navy: { DEFAULT: "#101114", light: "#1B1C21" },
        // "electric": acento rojo (aka), ahora es rojo secundario tipo hinomaru
        electric: { DEFAULT: "#E11D2E", light: "#FF4D63" },
        // "cyan" se mantiene definido por compatibilidad con componentes que
        // aún no revisamos, pero ya no es protagonista de la paleta.
        cyan: { DEFAULT: "#2DE0FF", soft: "#8FF0FF" },
        signal: { DEFAULT: "#E11D2E", soft: "#FFB5C0" },
        slate: { DEFAULT: "#6B6E7A" },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        // Grid técnico, ahora en tono oscuro muy sutil sobre fondo blanco
        "grid-pattern":
          "linear-gradient(rgba(22,23,28,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,23,28,0.05) 1px, transparent 1px)",
        // Resplandor sutil en rojo, para usar sobre fondo oscuro (CTA/footer)
        "mesh-glow":
          "radial-gradient(circle at 20% 20%, rgba(225,29,46,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(225,29,46,0.12), transparent 45%)",
        // Patrón "seigaiha" (olas japonesas), decorativo, muy sutil
        "seigaiha":
          "radial-gradient(circle at 0 50%, transparent 20px, rgba(22,23,28,0.04) 21px, rgba(22,23,28,0.04) 22px, transparent 23px)",
      },
      backgroundSize: { grid: "44px 44px", seigaiha: "60px 30px" },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scan: "scan 3.5s linear infinite",
        floatY: "floatY 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;