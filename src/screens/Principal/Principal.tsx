import React from "react";
import { OurServices } from "./sections/OurServices";
import { FormSection } from "./sections/FormSection";
import { MedicalOpinionsSection } from "./sections/MedicalOpinions";
import { BlogSection } from "./sections/BlogSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatisticsAndAboutUsSection } from "./sections/StatisticsAndAboutUsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";

export const Principal = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeaderSection />
      <main className="w-full bg-gray-50">
        <HeroSection />
         <ServicesSection /> 
        <StatisticsAndAboutUsSection />
        <OurServices />
        <TestimonialsSection />
        <FeaturesSection />
        <FormSection />
        {/* Aguardando atualizações para liberar Blog e Comentários dos médicos */}
        {/* <MedicalOpinionsSection /> */}
        {/* <BlogSection /> */}
      </main>
    </div>
  );
};
