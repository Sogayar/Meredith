import React from "react";
import { Button } from "../../components/ui/button";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Principal = (): JSX.Element => {
  // Navigation items data
  const navigationItems = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Preços", href: "#" },
    { label: "Depoimentos", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contato", href: "#" },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      <header className="w-full h-[72px] bg-white shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] sticky top-0 z-50">
        <div className="max-w-[1280px] h-full mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative h-[50px] flex items-center">
              <img className="w-[50px] h-[50px]" alt="Logo" src="/assets/logo-main.svg" />
              <div className="ml-3 font-medium text-black text-2xl [font-family:'Poppins',Helvetica]">
                Meredith
              </div>
            </div>
          </div>

          <nav className="flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-medium text-gray-700 text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-6 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="h-10 bg-[#0080df] text-white font-medium [font-family:'Poppins',Helvetica]">
            Teste Grátis
          </Button>
        </div>
      </header>

      <main className="w-full bg-gray-50">
        <HeroSection />
        <StatisticsSection />
        <ServicesSection />
        <AboutUsSection />
        <TestimonialsSection />
        <FeaturesSection />
        <BlogSection />
        <CallToActionSection />
        <ContactSection />
      </main>
    </div>
  );
};
