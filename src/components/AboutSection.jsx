import {
  Compass,
  Cpu,
  Sparkles,
  Layers,
  ArrowRight,
  Target,
  Zap,
  Shield,
  Lightbulb,
} from "lucide-react";

const principles = [
  {
    num: "01",
    title: "Performance by Default",
    tagline: "Architecture First",
    description:
      "Writing clean, maintainable code isn't just about syntax—it's about understanding how data flows, caching strategies, and algorithmic complexity from the very first commit.",
    icon: Zap,
    accent: "from-amber-500/20 to-orange-500/5",
    iconColor: "text-amber-400",
  },
  {
    num: "02",
    title: "Algorithmic Precision",
    tagline: "Core Foundations",
    description:
      "1000+ solved problems across competitive programming platforms have trained me to analyze edge cases, structure optimal graph/tree algorithms, and write efficient, bug-resistant logic.",
    icon: Cpu,
    accent: "from-sky-500/20 to-blue-500/5",
    iconColor: "text-sky-400",
  },
  {
    num: "03",
    title: "Autonomous Agentic AI",
    tagline: "Beyond Static Prompts",
    description:
      "Passionate about the shift toward multi-agent orchestration: systems that can reason, verify their outputs, dynamically call tools, and handle multi-step domain workflows autonomously.",
    icon: Sparkles,
    accent: "from-fuchsia-500/20 to-purple-500/5",
    iconColor: "text-fuchsia-400",
  },
  {
    num: "04",
    title: "Design & User Impact",
    tagline: "The Final Mile",
    description:
      "The best backend in the world is useless if the interface is confusing. I care obsessively about typography, tactile feedback, response latency, and making complex systems feel simple.",
    icon: Target,
    accent: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-400",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-left">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
            <Compass size={14} />
            <span>THE PHILOSOPHY & STORY</span>
          </div>
          <h2 className="section-heading">
            Behind the <span className="gradient-text font-black">Code & Systems</span>
          </h2>
          <p className="section-subheading">
            How a grounding in algorithms and academic excellence shaped an engineer obsessed with building real-world software.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Story Card (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />

            <div className="space-y-6 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block">
                JOURNEY & MOTIVATION
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                Curiosity backed by <span className="gradient-text">relentless execution</span>.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I grew up fascinated by how software could turn logic into instant leverage. That led me to computer science at <strong className="text-foreground">NIT Silchar</strong>, where I’ve maintained an <strong>8.79 CGPA</strong> while pushing far beyond classroom theory.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Rather than building toy clones, I build real platforms: autonomous banking assistants with semantic routing, multi-disease diagnostic engines with client-side PDF synthesis, and multi-vendor e-commerce marketplaces with real payment flows.
              </p>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                My goal is simple: collaborate with ambitious teams, solve hard technical problems, and build software that stands the test of time.
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-border/60 flex flex-wrap gap-4 items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-muted-foreground">Current Status</span>
                <p className="text-sm font-semibold text-foreground">
                  Final Year CSE @ NIT Silchar
                </p>
              </div>

              <a href="#contact" className="cosmic-btn-primary !px-5 !py-2.5 text-xs font-bold">
                Let's Connect
              </a>
            </div>
          </div>

          {/* Designer Focus & Intellectual Curiosity Card (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 relative">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-4">
                CORE CAPABILITIES
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                What drives my engineering daily
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-foreground mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Full-Stack Product Thinking
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Connecting database schemas, APIs, and client-side UI seamlessly without gaps or friction.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-foreground mb-1">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    Agentic AI Orchestration
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Designing multi-agent graphs, memory layers, and custom tool executions that actually produce reliable results.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-foreground mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Mathematical & Algorithmic Rigor
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Applying data structure patterns, graph traversal, and OS concurrency principles to real architectures.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs font-mono text-muted-foreground flex items-center justify-between">
              <span>Looking for my full resume?</span>
              <a
                href="#contact"
                className="text-primary font-bold hover:underline flex items-center gap-1"
              >
                Reach Out <ArrowRight size={13} />
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Craft */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Core Engineering <span className="gradient-text">Values</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">
              Four principles that guide how I architect, write, and ship code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-7 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-muted-foreground/60 tracking-wider">
                        {p.num} // {p.tagline}
                      </span>
                      <div className={`p-2.5 rounded-xl bg-secondary ${p.iconColor} group-hover:scale-110 transition-transform`}>
                        <IconComponent size={20} />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {p.title}
                    </h4>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};