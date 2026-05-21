"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center gap-[0.25em]`}>
      {words.map((word, i) => {
        const characters = word.split("");
        return (
          <span key={i} className="inline-flex">
            {characters.map((char, j) => {
              // We calculate a relative progress start/end for each character
              const start = (i * 10 + j) / (words.length * 10);
              const end = start + 0.1;
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              
              return (
                <span key={j} className="relative inline-block">
                  <span className="invisible">{char}</span>
                  <motion.span
                    className="absolute left-0 top-0 text-inherit"
                    style={{ opacity }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
