import HeroSection from "@/components/sections/HeroSection";
import AudiencePaths from "@/components/sections/AudiencePaths";
import HowWeWork from "@/components/sections/HowWeWork";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import StatsSection from "@/components/sections/StatsSection";
import FaqSection from "@/components/sections/FaqSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PageCta from "@/components/PageCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AudiencePaths />
      <StatsSection />
      <HowWeWork />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <FaqSection />
      <PageCta variant="home" />
    </>
  );
}
