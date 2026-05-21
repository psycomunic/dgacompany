"use client";

import React, { useEffect, useState, useRef } from "react";

const keywords = [
  "PERFORMANCE",
  "ESCALA IMPLACÁVEL",
  "AUMENTO DE CAIXA",
  "ROI VALIDADO",
  "MARKETING B2B",
  "SEM MÉTRICAS DE VAIDADE"
];

// Tripled to ensure enough items for seamless scrolling effect
const rowContent = [...keywords, ...keywords, ...keywords, ...keywords];

export const MarqueeSection = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(calcOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#050505] pt-10 sm:pt-20 pb-20 overflow-hidden flex flex-col gap-6">
      {/* Row 1 moves right */}
      <div 
        className="flex gap-8 md:gap-16 whitespace-nowrap will-change-transform items-center"
        style={{ transform: `translate3d(${scrollOffset - 500}px, 0, 0)` }}
      >
        {rowContent.map((word, i) => (
          <React.Fragment key={`r1-${i}`}>
            <span className="font-bebas text-4xl sm:text-6xl md:text-8xl text-transparent" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}>
              {word}
            </span>
            <span className="hero-heading font-bebas text-4xl sm:text-6xl md:text-8xl">/</span>
          </React.Fragment>
        ))}
      </div>

      {/* Row 2 moves left */}
      <div 
        className="flex gap-8 md:gap-16 whitespace-nowrap will-change-transform items-center"
        style={{ transform: `translate3d(${-(scrollOffset - 200)}px, 0, 0)` }}
      >
        {rowContent.map((word, i) => (
          <React.Fragment key={`r2-${i}`}>
            <span className="font-bebas text-4xl sm:text-6xl md:text-8xl text-[#FFFFFF]/10">
              {word}
            </span>
            <span className="hero-heading font-bebas text-4xl sm:text-6xl md:text-8xl">/</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
