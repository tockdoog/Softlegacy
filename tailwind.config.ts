// Ruta del archivo: tailwind.config.ts
// Sistema de diseño futurista: fondo oscuro predominante, acentos de neón
// (rojo eléctrico + cian), efectos de brillo (glow) y animaciones para
// glassmorphism, degradados en movimiento y partículas.

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fondo base: negro profundo con tinte azulado (no negro puro, evita
        // sensación de "pantalla apagada")
        ink: { DEFAULT: "#0A0B10", soft: "#12141C" },
        navy: { DEFAULT: "#151827", light: "#1E2236" },
        // Acento primario: rojo eléctrico de marca
        electric: { DEFAULT: "#FF2D4D", light: "#FF5C77" },
        // Acento secundario: cian, refuerza la sensación "tecnológica"
        cyan: { DEFAULT: "#2DE0FF", soft: "#8FF0FF" },
        signal: { DEFAULT: "#FF2D4D", soft: "#FFB5C0" },
        paper: { DEFAULT: "#FFFFFF", off: "#F5F6FA" },
        slate: { DEFAULT: "#8A8FA3" },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "mesh-glow":
          "radial-gradient(circle at 20% 20%, rgba(255,45,77,0.25), transparent 40%), radial-gradient(circle at 80% 60%, rgba(45,224,255,0.18), transparent 45%)",
      },
      backgroundSize: { grid: "44px 44px" },
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