import HeroSection from "@/components/sections/HeroSection";
import HowWeWork from "@/components/sections/HowWeWork";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import FaqSection from "@/components/sections/FaqSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <HowWeWork />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
