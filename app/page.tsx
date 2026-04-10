import NavBar from "@/components/NavBar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
