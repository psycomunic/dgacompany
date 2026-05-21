"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { AnimatedText } from "../animations/AnimatedText";
import { ContactButton } from "../ui/ContactButton";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] flex flex-col justify-center items-center overflow-hidden">
      
      {/* Top-left Moon icon */}
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon" 
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-left 3D object */}
      <FadeIn delay={0.25} duration={0.9} x={-80} y={0} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D element" 
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
        />
      </FadeIn>

      {/* Top-right Lego icon */}
      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego" 
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-right 3D group */}
      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D objects group" 
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain"
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center max-w-[560px] w-full text-center">
        <div className="flex flex-col gap-10 sm:gap-14 md:gap-16 w-full items-center">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
              About me
            </h2>
          </FadeIn>

          <AnimatedText 
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>

    </section>
  );
};
