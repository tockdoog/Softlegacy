// Ruta del archivo: app/page.tsx
// Página principal (Home) del sitio de SoftLegacy. Ensambla, en orden, las
// 13 secciones definidas en la estrategia de contenido: Hero, Sobre nosotros,
// Servicios, Soluciones, Proceso, Tecnologías, Beneficios, Casos, Testimonios,
// FAQ, CTA y Formulario de contacto (el Header y Footer viven en el layout).

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Benefits from "@/components/sections/Benefits";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Process />
      <TechStack />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
    </>
  );
}