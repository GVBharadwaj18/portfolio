import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { BackgroundFX } from "../components/BackgroundFX";
import { BackToTop } from "../components/BackToTop";
import { CustomCursor } from "../components/CustomCursor";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
      {/* Precision Custom Designer Cursor with Trailing Lens & Click Micro-Ripples */}
      <CustomCursor />

      {/* Dynamic Ambient Background with Cursor Spotlight & Aurora Orbs */}
      <BackgroundFX />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Interactive Back to Top Button with Circular Progress */}
      <BackToTop />
    </div>
  );
};