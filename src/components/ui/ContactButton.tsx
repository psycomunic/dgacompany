import React from "react";

export const ContactButton = () => {
  return (
    <button
      className="font-bebas rounded-full text-white uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-base sm:text-lg md:text-xl transition-transform hover:scale-105 active:scale-95"
      style={{
        background: "linear-gradient(90deg, #FF5E00 0%, #E100FF 100%)",
        boxShadow: "0px 4px 15px rgba(225, 0, 255, 0.4)",
      }}
    >
      Agendar Sessão Estratégica
    </button>
  );
};
