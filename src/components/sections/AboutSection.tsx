"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { AnimatedText } from "../animations/AnimatedText";
import { ContactButton } from "../ui/ContactButton";
import { Target, TrendingUp, BarChart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen px-6 sm:px-12 lg:px-24 py-24 bg-[#050505] flex flex-col justify-center items-center overflow-hidden">
      
      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full text-center">
        <div className="flex flex-col gap-10 sm:gap-14 w-full items-center">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-bebas uppercase leading-none tracking-normal text-[clamp(2.5rem,8vw,100px)]">
              NÃO VENDEMOS MÉTRICAS DE VAIDADE
            </h2>
          </FadeIn>

          <AnimatedText 
            text="A DGA Company atua com exclusividade para Pequenas e Médias Empresas (PMEs). Nossa tese é baseada em apenas um fundamento: o crescimento do seu faturamento real. Não medimos nosso sucesso por likes ou impressões, mas sim pelo impacto tangível no seu caixa e na escalabilidade do seu negócio."
            className="text-[#FFFFFF]/90 font-montserrat font-medium leading-relaxed text-[clamp(1rem,1.5vw,1.25rem)] max-w-4xl"
          />
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full mt-20 sm:mt-24 text-left">
          <FadeIn delay={0.2} y={30} className="flex flex-col gap-4 border-t-2 border-[#FF5E00]/30 pt-6">
            <Target className="w-10 h-10 text-[#E100FF]" />
            <h3 className="font-bebas text-2xl md:text-3xl tracking-widest uppercase">Estratégia Personalizada</h3>
            <p className="font-montserrat text-[#FFFFFF]/70 text-sm md:text-base leading-relaxed">
              Mapeamos gargalos, analisamos a jornada do seu cliente e criamos um plano de ataque cirúrgico para aquisição de novos negócios.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} y={30} className="flex flex-col gap-4 border-t-2 border-[#FF5E00]/30 pt-6">
            <TrendingUp className="w-10 h-10 text-[#FF5E00]" />
            <h3 className="font-bebas text-2xl md:text-3xl tracking-widest uppercase">Performance Implacável</h3>
            <p className="font-montserrat text-[#FFFFFF]/70 text-sm md:text-base leading-relaxed">
              Tráfego pago executado com precisão militar. Otimizamos cada centavo investido com foco exclusivo na redução de CAC e aumento de LTV.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} y={30} className="flex flex-col gap-4 border-t-2 border-[#FF5E00]/30 pt-6">
            <BarChart className="w-10 h-10 text-[#E100FF]" />
            <h3 className="font-bebas text-2xl md:text-3xl tracking-widest uppercase">Escala Validada</h3>
            <p className="font-montserrat text-[#FFFFFF]/70 text-sm md:text-base leading-relaxed">
              Decisões baseadas em dados consolidados (BI). Quando encontramos o canal mais rentável, aceleramos o investimento para escalar com previsibilidade.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 sm:mt-24">
          <ContactButton />
        </div>
      </div>

    </section>
  );
};
