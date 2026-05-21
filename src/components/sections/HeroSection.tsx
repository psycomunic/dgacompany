"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { ContactButton } from "../ui/ContactButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-x-clip bg-[#050505]">
      {/* Navbar / Header */}
      <FadeIn delay={0} y={-20}>
        <header className="flex justify-between items-center px-6 md:px-12 lg:px-24 pt-8 md:pt-10">
          <div className="font-bebas text-3xl md:text-4xl tracking-widest uppercase">
            <span className="hero-heading">DGA</span> Company
          </div>
          <nav className="hidden md:flex gap-8 font-montserrat text-sm font-medium uppercase tracking-widest text-[#FFFFFF]/70">
            <a href="#about" className="hover:text-white transition-colors duration-200">Sobre</a>
            <a href="#services" className="hover:text-white transition-colors duration-200">Soluções</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Resultados</a>
          </nav>
        </header>
      </FadeIn>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center w-full relative z-20 px-6 md:px-12 lg:px-24 py-20">
        <FadeIn delay={0.15} y={40}>
          <h1 className="font-bebas uppercase tracking-normal leading-[0.85] w-full text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] max-w-6xl">
            ALAVANCAMOS O <br />
            <span className="hero-heading">FATURAMENTO</span> DA SUA EMPRESA
          </h1>
        </FadeIn>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 md:mt-16 gap-8">
          <FadeIn delay={0.35} y={20}>
            <p className="font-montserrat font-medium text-[#FFFFFF]/80 leading-relaxed text-base sm:text-lg md:text-xl max-w-sm md:max-w-md">
              Marketing estratégico e implacável focado em escala e aumento de caixa exclusivo para Pequenas e Médias Empresas. Não vendemos métricas de vaidade.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
