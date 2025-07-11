import React, { useState } from "react";
import { Button } from "../../../../components/ui/button"; // Caminho relativo ajustado
import { Menu, X } from "lucide-react"; // Certifique-se de ter instalado: npm install lucide-react

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre-nos" },
    { label: "Como Funciona", href: "#nossos-servicos" },
    { label: "Planos", href: "#nossos-planos" },
    { label: "Clientes", href: "#depoimentos" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between">
    
  <img
    src="/assets/logo-main.svg"
    alt="Logo da Meredith"
    className="h-12 sm:h-[56px] md:h-[64px] lg:h-[72px] xl:h-[76px] w-auto"
  />

    {/* Navegação + Botão (agrupados) */}
    <div className="hidden lg:flex items-center gap-8">
      {/* Navegação */}
      <nav className="flex items-center gap-8">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-gray-700 font-medium text-base font-poppins hover:text-[#0080df] transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Botão Desktop */}
      <Button className="bg-[#0080df] text-white px-4 h-10 font-poppins">
        <a href="#teste-agora">Teste Agora</a>
      </Button>
    </div>

    {/* Menu hamburguer - mobile */}
    <div className="lg:hidden">
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Menu mobile */}
  {menuOpen && (
    <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-3">
      {navigationItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="block text-gray-700 font-poppins text-base hover:text-[#0080df] transition-colors"
        >
          {item.label}
        </a>
      ))}

      <Button className="w-full bg-[#0080df] text-white h-10 font-poppins">
        <a href="#teste-agora" onClick={() => setMenuOpen(false)}>Teste Agora</a>
      </Button>
    </div>
  )}
</header>

  );
};

export default HeaderSection;