import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const backgroundImages = [ // Para colocar mais imagens é aqui
  "/assets/bg5.png",
  "/assets/bg2.png",
  "/assets/bg3.png",
  "/assets/bg4.png"
];

export const CTAButtons = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 8000); // troca a cada 8s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-[59px] mb-8 lg:mb-[59px] w-full sm:w-auto">
      <motion.a
        href="#teste-agora"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 3000 }}
        className={cn(
          "group relative inline-flex items-center justify-center",
          "h-[72px] lg:h-[80px] min-w-[240px] px-8 font-bold text-lg lg:text-xl text-white",
          "rounded-full overflow-hidden transition-all duration-3000",
          "shadow-md hover:shadow-xl",
          "border border-white/80"
        )}
      >
        {/* Imagem de fundo animada */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={backgroundImages[index]}
              src={backgroundImages[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
              alt="Fundo botão"
              className="w-full h-full object-cover rounded-full"
            />
          </AnimatePresence>
        </div>

        {/* Escurecimento leve para legibilidade */}
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity" />

        {/* Texto */}
        <div className="relative z-20 flex items-center justify-center">
          <span className="font-bold"> Use Agora, É Grátis</span>
        </div>
      </motion.a>
    </div>
  );
};