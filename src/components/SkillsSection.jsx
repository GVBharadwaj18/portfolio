import { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  X,
  Code2,
  Database,
  Terminal,
  Layout,
  BrainCircuit,
  Bot,
  Network,
  BarChart3,
  Cpu,
  Braces,
  Search,
  Sparkles,
  ExternalLink,
  Layers,
} from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiCanva,
  SiFastapi,
  SiDocker,
  SiSupabase,
  SiVite,
  SiRedux,
  SiStripe,
  SiClerk,
  SiGooglegemini,
  SiRedis,
  SiReactrouter,
  SiJsonwebtokens,
  SiLangchain,
  SiGithubactions,
  SiPython,
  SiPrisma,
  SiJest,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // AI / LLM
  {
    name: "LangGraph",
    icon: SiLangchain,
    iconColor: "text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.4)",
    category: "AI/LLM",
    level: "Advanced",
    description: "Stateful, multi-agent orchestration for building robust, cyclical LLM graphs with conditional routing and dynamic state transitions.",
    usedIn: ["BankingAI", "Pharma-AI"],
  },
  {
    name: "Gemini API",
    icon: SiGooglegemini,
    iconColor: "text-sky-400",
    glowColor: "rgba(56, 189, 248, 0.4)",
    category: "AI/LLM",
    level: "Advanced",
    description: "Integrating Google's multimodal LLM for intelligent product generation, complex reasoning, and automated report summarization.",
    usedIn: ["NexusMart", "Diagno"],
  },
  {
    name: "Groq AI (LPU)",
    icon: Cpu,
    iconColor: "text-orange-400",
    glowColor: "rgba(251, 146, 60, 0.4)",
    category: "AI/LLM",
    level: "Advanced",
    description: "Leveraging ultra-low latency LPU inference for high-speed conversational banking flows and instant slot extraction.",
    usedIn: ["BankingAI"],
  },
  {
    name: "LangChain",
    icon: SiLangchain,
    iconColor: "text-green-500",
    glowColor: "rgba(34, 197, 94, 0.4)",
    category: "AI/LLM",
    level: "Intermediate",
    description: "Framework for chaining prompts, memory layers, semantic vector stores, and custom Python tool interfaces.",
    usedIn: ["BankingAI", "Pharma-AI"],
  },
  {
    name: "Multi-Agent Systems",
    icon: Bot,
    iconColor: "text-fuchsia-400",
    glowColor: "rgba(232, 121, 249, 0.4)",
    category: "AI/LLM",
    level: "Advanced",
    description: "Architecting collaborative networks where specialized agents (master planner, domain researchers, checkers) coordinate synchronously.",
    usedIn: ["Pharma-AI", "BankingAI"],
  },
  {
    name: "RedisVL",
    icon: SiRedis,
    iconColor: "text-red-500",
    glowColor: "rgba(239, 68, 68, 0.4)",
    category: "AI/LLM",
    level: "Intermediate",
    description: "Vector library for lightning-fast semantic message history and context memory management in stateful chatbot dialogues.",
    usedIn: ["BankingAI"],
  },

  // Frontend
  {
    name: "React 19",
    icon: SiReact,
    iconColor: "text-sky-400",
    glowColor: "rgba(56, 189, 248, 0.4)",
    category: "Frontend",
    level: "Expert",
    description: "Building responsive, component-driven user interfaces with the latest hooks, Server Actions, and optimal state lifecycles.",
    usedIn: ["NexusMart", "BankingAI", "Diagno", "Hackathon 2026"],
  },
  {
    name: "Next.js 15",
    icon: SiNextdotjs,
    iconColor: "text-neutral-100",
    glowColor: "rgba(255, 255, 255, 0.3)",
    category: "Frontend",
    level: "Advanced",
    description: "The React framework for the web: App Router, SSR, Server Components, API routes, and optimized image/font rendering.",
    usedIn: ["NexusMart", "BankingAI", "Pharma-AI"],
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-blue-400",
    glowColor: "rgba(96, 165, 250, 0.4)",
    category: "Frontend",
    level: "Advanced",
    description: "Strongly typed superset of JavaScript ensuring compile-time safety, clean interfaces, and resilient refactoring.",
    usedIn: ["NexusMart", "BankingAI", "SecondBrain", "Pharma-AI"],
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    iconColor: "text-teal-400",
    glowColor: "rgba(45, 212, 191, 0.4)",
    category: "Frontend",
    level: "Expert",
    description: "Utility-first design system enabling custom glassmorphism, responsive viewports, and modern dark-mode palettes.",
    usedIn: ["All Projects"],
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    iconColor: "text-purple-400",
    glowColor: "rgba(192, 132, 252, 0.4)",
    category: "Frontend",
    level: "Advanced",
    description: "Predictable centralized state management for complex cart systems, seller dashboards, and multi-step workflows.",
    usedIn: ["NexusMart"],
  },
  {
    name: "React Router",
    icon: SiReactrouter,
    iconColor: "text-rose-400",
    glowColor: "rgba(251, 113, 133, 0.4)",
    category: "Frontend",
    level: "Advanced",
    description: "Declarative client-side routing, protected routes, loaders, and nested layout architectures for SPAs.",
    usedIn: ["Diagno", "Hackathon 2026"],
  },
  {
    name: "Recharts",
    icon: BarChart3,
    iconColor: "text-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.4)",
    category: "Frontend",
    level: "Intermediate",
    description: "Declarative D3-based charting library for interactive analytics dashboards, sales charts, and diagnostics metrics.",
    usedIn: ["NexusMart"],
  },

  // Backend
  {
    name: "FastAPI",
    icon: SiFastapi,
    iconColor: "text-teal-400",
    glowColor: "rgba(45, 212, 191, 0.4)",
    category: "Backend",
    level: "Advanced",
    description: "High-performance Python asynchronous web framework with automatic OpenAPI docs, Pydantic validation, and fast throughput.",
    usedIn: ["BankingAI", "Pharma-AI"],
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconColor: "text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.4)",
    category: "Backend",
    level: "Advanced",
    description: "Event-driven, non-blocking asynchronous runtime powering production server environments and microservices.",
    usedIn: ["NexusMart", "Diagno", "SecondBrain"],
  },
  {
    name: "Express.js",
    icon: SiExpress,
    iconColor: "text-neutral-200",
    glowColor: "rgba(255, 255, 255, 0.3)",
    category: "Backend",
    level: "Advanced",
    description: "Minimalist Node.js framework for crafting robust REST APIs, custom middleware, error handling, and file streaming.",
    usedIn: ["Diagno", "SecondBrain"],
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    iconColor: "text-sky-500",
    glowColor: "rgba(14, 165, 233, 0.4)",
    category: "Backend",
    level: "Advanced",
    description: "Industrial-grade relational database management system with ACID compliance, JSONB support, and Neon cloud hosting.",
    usedIn: ["NexusMart", "BankingAI", "Hackathon 2026"],
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    iconColor: "text-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.4)",
    category: "Backend",
    level: "Advanced",
    description: "Document-oriented NoSQL database for flexible data schemas, aggregation pipelines, and rapid prototyping.",
    usedIn: ["Diagno", "SecondBrain"],
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    iconColor: "text-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.4)",
    category: "Backend",
    level: "Intermediate",
    description: "Open source Backend-as-a-Service providing PostgreSQL, row-level security (RLS), auth, and real-time event subscriptions.",
    usedIn: ["Hackathon 2026"],
  },
  {
    name: "Prisma ORM",
    icon: SiPrisma,
    iconColor: "text-indigo-400",
    glowColor: "rgba(129, 140, 248, 0.4)",
    category: "Backend",
    level: "Advanced",
    description: "Type-safe ORM for Node.js and TypeScript providing declarative schema definitions and seamless schema migrations.",
    usedIn: ["NexusMart"],
  },
  {
    name: "JWT & Security",
    icon: SiJsonwebtokens,
    iconColor: "text-pink-400",
    glowColor: "rgba(244, 114, 182, 0.4)",
    category: "Backend",
    level: "Advanced",
    description: "Stateless authentication with secure HttpOnly cookies, refresh token rotation, and bcrypt password hashing.",
    usedIn: ["Diagno", "SecondBrain"],
  },
  {
    name: "REST API Design",
    icon: Network,
    iconColor: "text-violet-400",
    glowColor: "rgba(167, 139, 250, 0.4)",
    category: "Backend",
    level: "Advanced",
    description: "Architecting clean, versioned, scalable endpoints following RESTful standards with comprehensive error handling.",
    usedIn: ["All Projects"],
  },

  // Languages
  {
    name: "C++",
    icon: SiCplusplus,
    iconColor: "text-blue-500",
    glowColor: "rgba(59, 130, 246, 0.4)",
    category: "Languages",
    level: "Expert",
    description: "Core language of choice for competitive programming, memory-optimized algorithms, and low-level system designs.",
    usedIn: ["Competitive Programming", "Movie Ticket Booking System"],
  },
  {
    name: "Python",
    icon: SiPython,
    iconColor: "text-amber-400",
    glowColor: "rgba(251, 191, 36, 0.4)",
    category: "Languages",
    level: "Advanced",
    description: "Versatile language utilized for AI agents, LangGraph orchestration, machine learning pipelines, and backend APIs.",
    usedIn: ["BankingAI", "Pharma-AI", "Diagno"],
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    iconColor: "text-yellow-400",
    glowColor: "rgba(250, 204, 21, 0.4)",
    category: "Languages",
    level: "Expert",
    description: "Deep knowledge of asynchronous event loop, promises, closures, and modern ES6+ language features.",
    usedIn: ["All Projects"],
  },
  {
    name: "C",
    icon: SiC,
    iconColor: "text-indigo-400",
    glowColor: "rgba(129, 140, 248, 0.4)",
    category: "Languages",
    level: "Proficient",
    description: "Foundational procedural programming, pointer arithmetic, memory allocation, and operating system basics.",
    usedIn: ["Systems Programming & OS"],
  },

  // Tools & DevOps
  {
    name: "Docker",
    icon: SiDocker,
    iconColor: "text-sky-400",
    glowColor: "rgba(56, 189, 248, 0.4)",
    category: "Tools & DevOps",
    level: "Intermediate",
    description: "Containerizing microservices and managing multi-container stacks (Redis, API, Frontend) with Docker Compose.",
    usedIn: ["BankingAI"],
  },
  {
    name: "Git & GitHub",
    icon: SiGithub,
    iconColor: "text-neutral-200",
    glowColor: "rgba(255, 255, 255, 0.3)",
    category: "Tools & DevOps",
    level: "Advanced",
    description: "Version control workflows, branch protection, pull request reviews, and collaborative team development.",
    usedIn: ["All Projects"],
  },
  {
    name: "Stripe",
    icon: SiStripe,
    iconColor: "text-indigo-400",
    glowColor: "rgba(129, 140, 248, 0.4)",
    category: "Tools & DevOps",
    level: "Intermediate",
    description: "Integrating secure payment checkouts, webhook signature verification, and automated order fulfillment.",
    usedIn: ["NexusMart"],
  },
  {
    name: "Clerk Auth",
    icon: SiClerk,
    iconColor: "text-blue-400",
    glowColor: "rgba(96, 165, 250, 0.4)",
    category: "Tools & DevOps",
    level: "Advanced",
    description: "Complete user management system featuring multi-factor authentication, social OAuth, and role-based permissions.",
    usedIn: ["NexusMart"],
  },
  {
    name: "Vite",
    icon: SiVite,
    iconColor: "text-yellow-400",
    glowColor: "rgba(250, 204, 21, 0.4)",
    category: "Tools & DevOps",
    level: "Advanced",
    description: "Next-generation lightning-fast frontend tooling with instant HMR and optimized Rollup production bundles.",
    usedIn: ["Hackathon 2026", "Portfolio"],
  },
  {
    name: "Postman",
    icon: SiPostman,
    iconColor: "text-orange-400",
    glowColor: "rgba(251, 146, 60, 0.4)",
    category: "Tools & DevOps",
    level: "Advanced",
    description: "API testing, environment management, mock servers, and automated integration collection testing.",
    usedIn: ["All Projects"],
  },
  {
    name: "Vercel",
    icon: SiVercel,
    iconColor: "text-neutral-100",
    glowColor: "rgba(255, 255, 255, 0.3)",
    category: "Tools & DevOps",
    level: "Advanced",
    description: "Serverless deployments, edge network configurations, preview environments, and continuous delivery pipelines.",
    usedIn: ["NexusMart", "Diagno", "Hackathon 2026"],
  },
  {
    name: "CI/CD & Actions",
    icon: SiGithubactions,
    iconColor: "text-blue-400",
    glowColor: "rgba(96, 165, 250, 0.4)",
    category: "Tools & DevOps",
    level: "Intermediate",
    description: "Continuous integration pipelines for automated linting, test suites, and GitHub Pages deployments.",
    usedIn: ["Portfolio", "NexusMart"],
  },
];

const categories = [
  { id: "All", label: "All Skills", icon: Layers },
  { id: "AI/LLM", label: "Agentic AI & LLMs", icon: BrainCircuit },
  { id: "Frontend", label: "Frontend", icon: Layout },
  { id: "Backend", label: "Backend", icon: Database },
  { id: "Languages", label: "Languages", icon: Terminal },
  { id: "Tools & DevOps", label: "Tools & DevOps", icon: Cpu },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Lock body scroll when skill modal is open
  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedSkill]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedSkill(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        activeCategory === "All" || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
            <Code2 size={15} />
            <span>TECHNICAL ARSENAL</span>
          </div>
          <h2 className="section-heading">
            Skills & <span className="gradient-text font-black">Technologies</span>
          </h2>
          <p className="section-subheading">
            A comprehensive overview of frameworks, languages, AI toolkits, and platforms I leverage to build scalable software.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technology (e.g. LangGraph, Next.js, Docker)..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-secondary/60 border border-border/80 focus:border-primary focus:bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all shadow-sm focus:shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded-full text-xs"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "All"
                  ? skills.length
                  : skills.filter((s) => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)] scale-105"
                      : "bg-secondary/60 hover:bg-secondary border-border/60 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <IconComp size={15} />
                  <span>{cat.label}</span>
                  <span
                    className={cn(
                      "text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-background/80 text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedSkill(skill)}
                className="glass-card p-5 flex flex-col items-center justify-between text-center gap-3 cursor-pointer group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  boxShadow: `0 8px 24px -10px ${skill.glowColor}`,
                }}
              >
                {/* Subtle top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: skill.glowColor }}
                />

                {/* Icon Container */}
                <div className="p-3.5 rounded-2xl bg-secondary/80 group-hover:bg-primary/10 transition-colors duration-300 relative">
                  <IconComponent
                    className={cn("text-3xl transition-transform duration-300 group-hover:scale-115", skill.iconColor)}
                  />
                </div>

                {/* Skill Name & Level */}
                <div className="space-y-1">
                  <h4 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full inline-block">
                    {skill.level}
                  </span>
                </div>

                {/* Click for Info Hint */}
                <span className="text-[10px] text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono">
                  View details →
                </span>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-semibold">No skills found matching "{searchQuery}"</p>
            <p className="text-sm mt-1">Try clearing the search or switching categories.</p>
          </div>
        )}

      </div>

      {/* Interactive Skill Detail Modal */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="glass-panel p-6 sm:p-8 rounded-3xl max-w-md w-full relative animate-scale-in text-left border-primary/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-secondary border border-border/80">
                <selectedSkill.icon className={cn("text-4xl", selectedSkill.iconColor)} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-foreground">
                  {selectedSkill.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {selectedSkill.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    Proficiency: {selectedSkill.level}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5 font-bold">
                  Overview & Application
                </h4>
                <p className="text-foreground/90 text-sm leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {selectedSkill.usedIn && selectedSkill.usedIn.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 font-bold">
                    Applied in Projects:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.usedIn.map((p, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-secondary text-primary border border-primary/20"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="w-full py-2.5 rounded-xl cosmic-btn-primary text-xs font-bold"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
