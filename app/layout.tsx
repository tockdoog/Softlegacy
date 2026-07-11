// Ruta del archivo: app/layout.tsx
// Layout raíz que envuelve todas las páginas del sitio. Define las fuentes,
// los metadatos SEO por defecto (título, descripción, Open Graph) y monta
// el Header y el Footer globales sobre un fondo blanco predominante.

import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Carga de tipografías optimizadas por Next.js (self-hosted, sin llamadas
// externas en tiempo de ejecución = mejor rendimiento, privacidad y SEO)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Metadatos SEO globales del sitio (se pueden sobrescribir por página)
export const metadata: Metadata = {
  metadataBase: new URL("https://www.softlegacy.com.co"),
  title: {
    default: "SoftLegacy | Software a la medida, ciberseguridad y automatización",
    template: "%s | SoftLegacy",
  },
  description:
    "SoftLegacy desarrolla software a la medida, sistemas ERP, CRM y POS, servicios de ciberseguridad, videovigilancia y domótica para empresas en Colombia. Tecnología confiable para hacer crecer tu negocio.",
  keywords: [
    "desarrollo de software Colombia",
    "ciberseguridad empresarial",
    "sistemas ERP CRM POS",
    "videovigilancia empresarial",
    "domótica y automatización",
    "consultoría tecnológica",
  ],
  authors: [{ name: "SoftLegacy" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.softlegacy.com.co",
    siteName: "SoftLegacy",
    title: "SoftLegacy | Software a la medida, ciberseguridad y automatización",
    description:
      "Desarrollamos software, protegemos tu infraestructura y automatizamos tu negocio. Tecnología confiable, hecha en Colombia.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftLegacy | Tecnología confiable para tu empresa",
    description:
      "Software a la medida, ciberseguridad, videovigilancia y automatización para negocios en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} bg-paper`}
      >
        {/* Encabezado fijo con navegación principal, visible en todas las páginas */}
        <Header />
        <main>{children}</main>
        {/* Pie de página global con datos de contacto, mapa del sitio y legales */}
        <Footer />
      </body>
    </html>
  );
}