import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { BlogSection } from "./sections/BlogSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import HeaderSection from "./sections/HeaderSection/HeaderSection"; // ✔️

export const Principal = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeaderSection />
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
