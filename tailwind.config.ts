// Ruta del archivo: tailwind.config.ts
// Sistema de diseño: minimalismo premium inspirado en Apple.
// Blanco predominante, rojo como acento secundario y discreto.
// Se conservan los nombres de color originales para no romper componentes
// existentes; solo se ajustan los valores y se añaden sombras/tipografía.
// Se restaura la animación "marquee" (cinta de tecnologías en TechStack.tsx).

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Blanco puro y variaciones casi imperceptibles para fondos alternos
        paper: { DEFAULT: "#FFFFFF", off: "#FBFBFD", muted: "#F5F5F7" },
        // Negro suave estilo Apple (#1d1d1f) en vez de negro puro: texto principal
        ink: { DEFAULT: "#1D1D1F", soft: "#3A3A3C" },
        // Fondo oscuro reservado solo para footer / CTA / TechStack
        navy: { DEFAULT: "#0B0B0D", light: "#1D1D1F" },
        // Rojo como único acento secundario del sitio
        electric: { DEFAULT: "#E11D2E", light: "#FF3B30" },
        // Mantenido por compatibilidad, sin protagonismo en la paleta actual
        cyan: { DEFAULT: "#2DE0FF", soft: "#8FF0FF" },
        signal: { DEFAULT: "#E11D2E", soft: "#FFB5C0" },
        // Gris neutro estilo Apple para texto secundario
        slate: { DEFAULT: "#6E6E73", light: "#86868B" },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "-apple-system", "sans-serif"],
        body: ["var(--font-inter)", "-apple-system", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      // Radios de borde más generosos, estilo tarjetas de iOS/macOS
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      // Sombras suaves reutilizables en toda la interfaz
      boxShadow: {
        soft: "0 1px 2px rgba(22,23,28,0.04), 0 8px 24px rgba(22,23,28,0.04)",
        elevated: "0 2px 4px rgba(22,23,28,0.06), 0 16px 40px rgba(22,23,28,0.08)",
        accent: "0 8px 24px rgba(225,29,46,0.18)",
      },
      backgroundImage: {
        // Grid técnico casi invisible, solo como textura de fondo muy sutil
        "grid-pattern":
          "linear-gradient(rgba(22,23,28,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,23,28,0.04) 1px, transparent 1px)",
        // Resplandor rojo muy suave, reservado para fondos oscuros (CTA/footer)
        "mesh-glow":
          "radial-gradient(circle at 20% 20%, rgba(225,29,46,0.22), transparent 42%), radial-gradient(circle at 80% 60%, rgba(225,29,46,0.10), transparent 45%)",
      },
      backgroundSize: { grid: "48px 48px" },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Desplazamiento horizontal continuo para la cinta de tecnologías
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 30s linear infinite",
      },
      // Curva de transición suave tipo Apple para usar en cualquier componente
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;