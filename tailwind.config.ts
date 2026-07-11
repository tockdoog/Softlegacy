// Ruta del archivo: tailwind.config.ts
// Define el sistema de diseño (tokens) que usa todo el sitio: paleta de colores,
// tipografías y utilidades personalizadas de SoftLegacy.

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de marca: rojo + blanco (blanco predominante), inspirada en el
        // sello "hanko" japonés (tinta roja sobre papel blanco) y el uso del
        // rojo en torii/banderas: color de acento, nunca de fondo masivo.
        ink: {
          DEFAULT: "#141414", // negro tinta (sumi), para texto y paneles oscuros puntuales
          soft: "#1D1414",
        },
        navy: {
          DEFAULT: "#7A1220", // rojo oscuro "enji", para los pocos paneles oscuros (Hero, CTA)
          light: "#8F1B29",
        },
        electric: {
          DEFAULT: "#C8102E", // rojo "hinomaru", color primario de acento y botones
          light: "#E23F55",
        },
        signal: {
          DEFAULT: "#C8102E", // mismo rojo de sello, para destacar cifras y estados
          soft: "#F3B5BE",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          off: "#FAF7F5", // blanco cálido (papel washi), para secciones alternadas
        },
        slate: {
          DEFAULT: "#5B5652", // gris cálido para texto secundario
        },
      },
      fontFamily: {
        // Tipografía de titulares: geométrica y técnica (identidad "software/sistemas")
        display: ["var(--font-space-grotesk)", "sans-serif"],
        // Tipografía de cuerpo: alta legibilidad
        body: ["var(--font-inter)", "sans-serif"],
        // Tipografía utilitaria tipo consola, para etiquetas y datos (motivo "panel de estado")
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        scan: "scan 3.5s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;