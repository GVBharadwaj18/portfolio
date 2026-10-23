import {
  ArrowRight,
  Download,
  Sparkles,
  MoveDown,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useState, useEffect } from "react";
import profilePic from "../assets/profile.jpeg";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const dynamicWords = [
  "Scalable Web Apps",
  "Intelligent Systems",
  "High-Performance Code",
  "Thoughtful Software",
];

const orbitingTech = [
  { name: "React", Icon: SiReact, color: "text-sky-400", bg: "hover:border-sky-400/50" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-foreground", bg: "hover:border-neutral-400/50" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-400", bg: "hover:border-teal-400/50" },
  { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500", bg: "hover:border-green-500/50" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "text-blue-400", bg: "hover:border-blue-400/50" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-600", bg: "hover:border-green-600/50" },
];

export const HeroSection = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % dynamicWords.length);
        setFade(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-left"
    >
      <div className="max-w-6xl w-full mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative Headline & Intent */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Minimalist Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary/70 border border-border/80 text-foreground text-xs font-mono w-fit backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-foreground/90">Final Year CSE • NIT Silchar</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Gona Venkata Bharadwaj
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-foreground">
                Designing & Building{" "}
                <span
                  className={`gradient-text inline-block transition-opacity duration-300 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {dynamicWords[wordIdx]}
                </span>
              </h1>
            </div>

            {/* Human, Thoughtful Description */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              I am a software engineer and computer science student driven by a deep love for craft, performance, and simplicity.
              Whether optimizing core algorithms or architecting modern products from scratch, I believe software should be fast, dependable, and genuinely useful to people.
            </p>

            {/* Minimalist Action Cluster with Updated Resume Link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" className="cosmic-btn-primary group">
                <span>View Selected Works</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1yyCuY8fcZsrCzgHEEjQt0POv0i2QfvXh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-btn-secondary group"
              >
                <Download size={15} className="transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#about"
                className="text-xs font-mono font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              >
                Read story ↓
              </a>
            </div>

            {/* Editorial Metrics Strip */}
            <div className="pt-8 border-t border-border/60 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="text-2xl sm:text-3xl font-black font-display text-foreground block">
                  8.79<span className="text-primary text-lg">/10</span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold block mt-0.5">
                  CGPA @ NIT Silchar
                </span>
              </div>

              <div className="border-l border-border/60 pl-6">
                <span className="text-2xl sm:text-3xl font-black font-display text-foreground block">
                  1000<span className="text-primary text-lg">+</span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold block mt-0.5">
                  DSA Solved
                </span>
              </div>

              <div className="border-l border-border/60 pl-6">
                <span className="text-2xl sm:text-3xl font-black font-display text-foreground block">
                  09<span className="text-primary text-lg">+</span>
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold block mt-0.5">
                  Shipped Systems
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase with Revolving Tech Stack & Compact Photo */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Ethereal Glow Backlight */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-violet-600/25 via-fuchsia-600/15 to-sky-500/20 blur-3xl opacity-75 pointer-events-none animate-pulse-glow" />

              {/* Orbit Visual Ring */}
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-primary/20 border-dashed animate-spin-slow [animation-duration:35s]" />

              {/* Revolving Tech Stack Icons */}
              <div className="absolute inset-0 animate-spin-slow [animation-duration:28s] z-20 pointer-events-none">
                {orbitingTech.map((tech, index) => {
                  const angle = (index * 360) / orbitingTech.length;
                  const IconComp = tech.Icon;
                  return (
                    <div
                      key={tech.name}
                      className={`absolute top-1/2 left-1/2 w-11 h-11 sm:w-12 sm:h-12 -ml-5 sm:-ml-6 -mt-5 sm:-mt-6 glass-panel rounded-full border border-primary/25 shadow-lg flex items-center justify-center pointer-events-auto transition-transform hover:scale-125 ${tech.bg}`}
                      style={{
                        transform: `rotate(${angle}deg) translate(9.2rem) rotate(-${angle}deg)`,
                      }}
                      title={tech.name}
                    >
                      <div className="animate-spin-slow-reverse [animation-duration:28s]">
                        <IconComp className={`text-xl sm:text-2xl ${tech.color}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Compact Photo Card with Refined Sizing */}
              <div className="relative w-56 h-64 sm:w-60 sm:h-72 glass-panel rounded-3xl p-2.5 sm:p-3 border border-white/10 shadow-2xl transition-all duration-500 hover:border-primary/50 group z-10 flex flex-col justify-between">
                
                {/* Precision Architectural Corner Crosshairs */}
                <div className="absolute -top-1 -left-1 text-primary/70 font-mono text-[10px] select-none pointer-events-none">+</div>
                <div className="absolute -top-1 -right-1 text-primary/70 font-mono text-[10px] select-none pointer-events-none">+</div>
                <div className="absolute -bottom-1 -left-1 text-primary/70 font-mono text-[10px] select-none pointer-events-none">+</div>
                <div className="absolute -bottom-1 -right-1 text-primary/70 font-mono text-[10px] select-none pointer-events-none">+</div>

                {/* Inner Image Container */}
                <div className="relative w-full flex-grow rounded-2xl overflow-hidden bg-card">
                  <img
                    src={profilePic}
                    alt="Gona Venkata Bharadwaj"
                    className="w-full h-full object-cover object-[center_16%] filter contrast-[1.03] brightness-95 group-hover:brightness-100 transition-all duration-700 group-hover:scale-104"
                  />

                  {/* Cinematic Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-65 transition-opacity duration-300" />

                  {/* Overlaid Editorial Identity Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1">
                        Bharadwaj Gona
                        <CheckCircle2 size={13} className="text-sky-400" />
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.2 rounded-full font-bold">
                        BUILDER
                      </span>
                    </div>
                    <p className="text-white/75 text-[10px] font-mono">
                      NIT Silchar • CSE '27
                    </p>
                  </div>
                </div>

                {/* Compact Bottom Pill */}
                <div className="mt-2 px-2.5 py-1.5 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1.5 text-foreground/80 font-semibold text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Final Year CSE
                  </span>
                  <span className="text-primary font-bold flex items-center gap-1 text-[10px]">
                    <Zap size={11} /> 8.79 CGPA
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono text-muted-foreground/80 hover:text-foreground transition-colors group"
      >
        <span>SCROLL TO EXPLORE</span>
        <MoveDown size={14} className="group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  );
};