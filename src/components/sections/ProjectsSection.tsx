"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { LiveProjectButton } from "../ui/LiveProjectButton";

const projects = [
  {
    num: "01",
    name: "E-commerce Varejo",
    label: "+250% ROI em 3 meses",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    }
  },
  {
    num: "02",
    name: "SaaS Enterprise",
    label: "-40% no CAC B2B",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    }
  },
  {
    num: "03",
    name: "Clínica Premium",
    label: "Lotação de Agenda",
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    }
  }
];

interface CardProps {
  project: typeof projects[0];
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({ project, i, progress, range, targetScale }: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32" style={{ top: `calc(6rem + ${i * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="flex flex-col relative w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#1A1A1A] bg-[#0A0A0A] p-6 sm:p-8 md:p-12 transform-gpu shadow-2xl"
      >
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-6 sm:mb-8 md:mb-10 gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-end">
            <span className="hero-heading font-bebas text-[clamp(3rem,10vw,100px)] leading-none block">
              {project.num}
            </span>
            <div className="flex flex-col pb-1 md:pb-3">
              <span className="hero-heading font-bebas tracking-widest text-lg sm:text-xl mb-1">{project.label}</span>
              <h3 className="text-white font-bebas uppercase text-[clamp(1.5rem,3vw,2.5rem)] leading-none">{project.name}</h3>
            </div>
          </div>
          <div className="pb-1 md:pb-3">
            <LiveProjectButton />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="w-full sm:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] relative" style={{ height: "clamp(130px, 16vw, 230px)" }}>
              <motion.img 
                style={{ scale: imageScale }}
                src={project.images.leftTop} 
                className="w-full h-full object-cover origin-center opacity-70 hover:opacity-100 transition-opacity" 
                alt={`${project.name} detail 1`} 
              />
            </div>
            <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] relative" style={{ height: "clamp(160px, 22vw, 340px)" }}>
              <motion.img 
                style={{ scale: imageScale }}
                src={project.images.leftBottom} 
                className="w-full h-full object-cover origin-center opacity-70 hover:opacity-100 transition-opacity" 
                alt={`${project.name} detail 2`} 
              />
            </div>
          </div>
          <div className="w-full sm:w-[60%] overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] relative" style={{ height: "clamp(300px, 40vw, 594px)" }}>
            <motion.img 
              style={{ scale: imageScale }}
              src={project.images.right} 
              className="w-full h-full object-cover origin-center opacity-80 hover:opacity-100 transition-opacity" 
              alt={`${project.name} main`} 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="relative bg-[#050505] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-6 sm:px-12 lg:px-24 py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-bebas uppercase text-center text-[clamp(2.5rem,10vw,140px)] leading-none">
            RESULTADOS
          </h2>
        </FadeIn>
      </div>

      <div ref={containerRef} className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.33, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};
