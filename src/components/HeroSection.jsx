import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb
} from "react-icons/si";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Bharadwaj";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-20">
    <div className="container max-w-6xl mx-auto z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="animate-fade-in block mb-2"> Hello, I'm </span>
            <span className="text-primary animate-fade-in-delay-1 block min-h-[1.2em] font-signature text-5xl md:text-7xl">
              {text}
              <span className="animate-pulse text-foreground">|</span>
            </span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            A passionate <span className="text-primary font-semibold">Web Developer</span> specializing in building responsive, scalable and high-performance applications with a strong foundation in <span className="text-primary font-semibold">Data Structures and Algorithms</span>.
            <br className="block my-2"/>
            Actively engaged in competitive programming and interested in integrating <span className="text-primary font-semibold">AI-powered tools</span> into web products to create smarter and more efficient user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95">
              Contact Me
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 md:order-2 flex justify-center relative opacity-0 animate-fade-in-delay-2">
           <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle"></div>
              
              {/* Orbiting Tech Icons */}
              <div className="absolute inset-0 animate-spin-slow z-0">
                {[
                  { Icon: SiReact, color: "text-sky-400" },
                  { Icon: SiNextdotjs, color: "text-foreground" },
                  { Icon: SiTailwindcss, color: "text-teal-400" },
                  { Icon: SiNodedotjs, color: "text-green-500" },
                  { Icon: SiPostgresql, color: "text-blue-400" },
                  { Icon: SiMongodb, color: "text-green-600" }
                ].map((item, index) => {
                  const angle = (index * 360) / 6;
                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 bg-card rounded-full border border-primary/20 shadow-lg flex items-center justify-center"
                      style={{
                        transform: `rotate(${angle}deg) translate(10rem) rotate(-${angle}deg)` 
                      }}
                    >
                      <div className="animate-spin-slow-reverse">
                        <item.Icon className={`text-2xl ${item.color}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Orbit Ring (Visual) */}
              <div className="absolute inset-4 rounded-full border border-primary/10 border-dashed animate-spin-slow [animation-duration:30s]"></div>

              {/* Photo Container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl z-10 group">
                 <img 
                   src="/Portfolio/projects/hero-image.avif" 
                   alt="AI Technology" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-0 animate-fade-in-delay-4">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};