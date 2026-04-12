import AboutSection from '@/components/AboutSection';
import CareerSection from '@/components/CareerSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import ServicesSection from '@/components/ServicesSection';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-10 sm:space-y-20">
      <HeroSection />
      <ProgramsSection />
      <AboutSection />
      <ServicesSection />
      <CareerSection />
      <ContactSection />
    </div>
  );
}
