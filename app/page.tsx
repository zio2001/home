import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValueSection from "@/components/ValueSection";
import ProgramSection from "@/components/ProgramSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-slate-800">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <ProgramSection />
      <PortfolioSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
