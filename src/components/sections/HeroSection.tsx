"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { ContactButton } from "../ui/ContactButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-x-clip bg-[#050505]">
      {/* Navbar / Header */}
      <FadeIn delay={0} y={-20}>
        <header className="flex justify-between items-center px-6 md:px-12 lg:px-24 pt-8 md:pt-10 relative z-30">
          <div className="flex items-center">
            <img src="/logo.png" alt="DGA Company" className="h-8 md:h-12 lg:h-14 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex gap-8 font-montserrat text-sm font-medium uppercase tracking-widest text-[#FFFFFF]/70">
            <a href="#about" className="hover:text-white transition-colors duration-200">Sobre</a>
            <a href="#services" className="hover:text-white transition-colors duration-200">Soluções</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Resultados</a>
          </nav>
        </header>
      </FadeIn>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between w-full relative z-20 px-6 md:px-12 lg:px-24 py-12 lg:py-20 gap-10">
        
        {/* Left: Text Content */}
        <div className="flex flex-col flex-1 w-full max-w-4xl z-10">
          <FadeIn delay={0.15} y={40}>
            <h1 className="font-bebas uppercase tracking-normal leading-[0.85] text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[7.5vw]">
              ALAVANCAMOS O <br />
              <span className="hero-heading">FATURAMENTO</span><br className="hidden lg:block"/> DA SUA EMPRESA
            </h1>
          </FadeIn>

          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center mt-8 md:mt-12 gap-6 lg:gap-8">
            <FadeIn delay={0.35} y={20}>
              <p className="font-montserrat font-medium text-[#FFFFFF]/80 leading-relaxed text-base sm:text-lg lg:text-xl max-w-sm">
                Marketing estratégico e implacável focado em escala e aumento de caixa exclusivo para Pequenas e Médias Empresas. Não vendemos métricas de vaidade.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5} y={20} className="mt-4 sm:mt-0">
              <ContactButton />
            </FadeIn>
          </div>
        </div>

        {/* Right: CEOs Image */}
        <div className="w-full lg:w-[50%] max-w-[800px] flex justify-center lg:justify-end relative z-0 mt-10 lg:mt-0">
          <FadeIn delay={0.6} y={40} className="w-full flex justify-end">
            <div className="relative w-full max-w-[700px]">
              <img 
                src="/ceos.jpg" 
                alt="CEOs DGA Company" 
                className="w-full h-auto object-contain mix-blend-lighten drop-shadow-[0_0_30px_rgba(255,94,0,0.15)] scale-110 origin-bottom"
                style={{ 
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)" 
                }}
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
