"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";

const services = [
  {
    num: "01",
    title: "Gestão de Tráfego Pago (Growth)",
    desc: "Campanhas avançadas no Meta Ads, Google Ads e LinkedIn Ads. Focamos no fundo do funil para captar a demanda mais qualificada e gerar leads comerciais.",
  },
  {
    num: "02",
    title: "Otimização de Conversão (CRO)",
    desc: "Análise comportamental, testes A/B e reestruturação de Landing Pages para garantir que os visitantes impactados se tornem oportunidades reais de negócio.",
  },
  {
    num: "03",
    title: "BI & Data Analytics",
    desc: "Dashboards em tempo real para controle absoluto de métricas vitais como CAC, ROAS, LTV e taxa de conversão em cada etapa do funil de vendas.",
  },
  {
    num: "04",
    title: "Consultoria Estratégica B2B",
    desc: "Aconselhamento direto para CEOs e diretores. Desenhamos o modelo comercial e conectamos o marketing diretamente à equipe de vendas (Smarketing).",
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-12 lg:px-24 py-20 sm:py-24 md:py-32 relative z-0">
      <div className="max-w-6xl mx-auto flex flex-col">
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#050505] font-bebas uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(2.5rem,8vw,120px)] leading-none">
            NOSSAS SOLUÇÕES
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.num} delay={i * 0.1} y={30}>
              <div className="flex flex-col md:flex-row items-start md:items-center border-b border-[rgba(5,5,5,0.1)] py-8 sm:py-10 md:py-12">
                <div className="md:w-[25%] flex-shrink-0 mb-4 md:mb-0">
                  <span className="font-bebas text-transparent text-[clamp(3rem,8vw,100px)] leading-none block" style={{ WebkitTextStroke: "2px #050505" }}>
                    {service.num}
                  </span>
                </div>
                <div className="flex flex-col gap-3 flex-1 md:pl-4">
                  <h3 className="text-[#050505] font-bebas uppercase tracking-widest text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#050505] font-montserrat font-medium leading-relaxed max-w-3xl text-[clamp(0.9rem,1.5vw,1.1rem)] opacity-80">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
