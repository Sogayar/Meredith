import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@components/effects/SparklesCore";

export const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-[59px] mb-8 lg:mb-[59px] w-full sm:w-auto">

      {/* Botão Primário com brilho, partículas e ícone animado */}
      <motion.a
        href="#teste-agora"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(0,128,223,0.4)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn(
          "group relative inline-flex items-center justify-center h-12 lg:h-16 min-w-[180px] px-4 font-semibold text-base lg:text-lg rounded-lg whitespace-nowrap",
          "bg-gradient-to-r from-white via-[#e6f3fc] to-white text-[#0080df] shadow-lg hover:shadow-xl",
          "transition-all duration-300 border border-transparent overflow-hidden [font-family:'Outfit',Helvetica]"
        )}
      >
        <span className="absolute inset-0 z-0 pointer-events-none">
          <SparklesCore />
        </span>
        <motion.img
          src="/assets/icon-test-button.svg"
          alt="ícone"
          className="w-[14px] h-[18px] mr-2 z-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <span className="z-10">Teste Agora</span>
        <span className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/40 before:to-white/0 before:opacity-0 group-hover:before:opacity-100 before:skew-x-12 before:transition-all before:duration-1000" />
      </motion.a>

      {/* Botão Secundário com contorno animado */}
      <motion.a
        href="#teste-agora"
        initial={{ opacity: 1 }}
        whileHover={{ scale: 1.04, boxShadow: "0 0 12px rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn(
          "relative inline-flex items-center justify-center h-12 lg:h-16 min-w-[180px] px-4 font-semibold text-base lg:text-lg rounded-lg whitespace-nowrap",
          "border border-white text-white hover:text-[#0080df] hover:bg-white",
          "transition-all duration-300 [font-family:'Outfit',Helvetica]"
        )}
      >
        <span className="absolute inset-0 border border-white opacity-20 rounded-lg animate-pulse" />
        <span className="relative z-10">Solicitar Demonstração</span>
      </motion.a>
    </div>
  );
};