"use client";

import React, { useEffect, useState, useRef } from "react";

const row1Images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row2Images = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

// Tripled to ensure enough items for seamless scrolling effect
const row1 = [...row1Images, ...row1Images, ...row1Images];
const row2 = [...row2Images, ...row2Images, ...row2Images];

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
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      {/* Row 1 moves right */}
      <div 
        className="flex gap-3 whitespace-nowrap will-change-transform"
        style={{ transform: `translate3d(${scrollOffset - 200}px, 0, 0)` }}
      >
        {row1.map((src, i) => (
          <img 
            key={`r1-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>

      {/* Row 2 moves left */}
      <div 
        className="flex gap-3 whitespace-nowrap will-change-transform"
        style={{ transform: `translate3d(${-(scrollOffset - 200)}px, 0, 0)` }}
      >
        {row2.map((src, i) => (
          <img 
            key={`r2-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>
    </section>
  );
};
