
// import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
// import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { SkillsSection} from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
// import { AnimatedBackground } from "../components/AnimatedBackground";

export const Home=() =>{
    return (<div className="relative">
        {/* <AnimatedBackground/> */}
        <div className="relative z-10">
            {/* <ThemeToggle/> */}

            <Navbar/>
            <main className="relative">
                <HeroSection/>
                <AboutSection/>
                <EducationSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>
            </div>
        <Footer/>
        
        </div>);
   
}