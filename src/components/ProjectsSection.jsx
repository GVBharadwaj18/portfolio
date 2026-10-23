import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Layers,
  Bot,
  Globe,
  Code2,
  CheckCircle2,
  Eye,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    indexStr: "№ 01",
    title: "BankingAI",
    badge: "Agentic AI System",
    badgeColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
    category: "AI",
    description:
      "A developer demo chatbot for banking workflows featuring semantic intent routing, guided slot collection, and autonomous domain-specific tool execution.",
    highlights: [
      "Semantic intent routing across loan, credit card, savings, forex, and fraud inquiries",
      "Dynamic slot-filling engine to request missing parameters contextually",
      "Real-time tool execution for EMI calculations, card matching, and policy retrieval",
      "Stateful multi-agent orchestration with LangGraph & Groq ultra-low latency LPU",
      "Session conversation memory persistence managed with RedisVL",
      "Production-ready containerized microservices stack with Docker Compose",
    ],
    images: [
      "/portfolio/projects/bankingai-1.png",
      "/portfolio/projects/bankingai-2.png",
      "/portfolio/projects/bankingai-3.png",
      "/portfolio/projects/bankingai-4.png",
      "/portfolio/projects/bankingai-5.png",
    ],
    tags: [
      "FastAPI",
      "LangGraph",
      "RedisVL",
      "Groq AI",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
    githubUrl: "https://github.com/GVBharadwaj18/BankingAI",
    liveUrl: "https://apexbank-bankingai.up.railway.app/",
  },
  {
    id: 2,
    indexStr: "№ 02",
    title: "NexusMart",
    badge: "Multi-Vendor Marketplace",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    category: "Full-Stack",
    description:
      "A full-stack multi-vendor e-commerce platform where independent sellers create storefronts and manage inventory, featuring automated AI catalog creation and Stripe checkout.",
    highlights: [
      "AI-powered instant product catalog auto-generation powered by Gemini API",
      "Role-based dashboards with granular seller and admin permission controls",
      "Secure payment processing integration with Stripe and Cash on Delivery option",
      "Dynamic coupon generation, discount thresholds, and real-time sales analytics",
      "Plus membership loyalty tier with exclusive discounted buyer perks",
      "Built with Next.js App Router, Prisma ORM, and PostgreSQL (Neon)",
    ],
    images: [
      "/portfolio/projects/nexusmart-1.png",
      "/portfolio/projects/nexusmart-2.png",
      "/portfolio/projects/nexusmart-3.png",
      "/portfolio/projects/nexusmart-4.png",
      "/portfolio/projects/nexusmart-5.png",
      "/portfolio/projects/nexusmart-6.png",
      "/portfolio/projects/nexusmart-7.png",
      "/portfolio/projects/nexusmart-10.png",
      "/portfolio/projects/nexusmart-8.png",
      "/portfolio/projects/nexusmart-9.png",
    ],
    tags: [
      "Next.js",
      "React",
      "PostgreSQL (Neon)",
      "Prisma",
      "Stripe",
      "Redux Toolkit",
      "Clerk Auth",
      "Gemini API",
    ],
    githubUrl: "https://github.com/GVBharadwaj18/nexusmart",
    liveUrl: "https://nexusmart-swart.vercel.app/",
  },
  {
    id: 3,
    indexStr: "№ 03",
    title: "Diagno",
    badge: "Clinical ML Platform",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    category: "AI",
    description:
      "An AI-powered multi-disease diagnostic platform designed to predict and analyze Heart Disease, Diabetes, Lung Cancer, and Breast Cancer using machine learning.",
    highlights: [
      "Predictive machine learning models (Logistic Regression, SVM) & CNN image classification",
      "Automated extraction of medical parameters from user lab reports using PyMuPDF",
      "Interactive Leaflet maps to locate nearby diagnostic clinics and testing labs",
      "Client-side diagnostic medical PDF report generation with pdf-lib",
      "Secure user sessions with JWT access/refresh token rotation & bcrypt hashing",
      "Sleek dark-mode glassmorphic interface with real-time health indicator metrics",
    ],
    images: [
      "/portfolio/projects/diagno-1.png",
      "/portfolio/projects/diagno-2.png",
      "/portfolio/projects/diagno-3.png",
      "/portfolio/projects/diagno-4.png",
      "/portfolio/projects/diagno-5.png",
      "/portfolio/projects/diagno-6.png",
    ],
    tags: [
      "React",
      "Express.js",
      "MongoDB",
      "Python",
      "Machine Learning",
      "JWT Auth",
      "pdf-lib",
      "Leaflet",
    ],
    githubUrl: "https://github.com/GVBharadwaj18/Diagno",
    liveUrl: "https://diagno-ochre.vercel.app/",
  },
  {
    id: 4,
    indexStr: "№ 04",
    title: "FleetFlow",
    badge: "Enterprise AI & IoT Fleet Platform",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    category: "Full-Stack",
    description:
      "An enterprise-grade vehicle command center and AI fleet operations platform combining low-latency WebSocket IoT telemetry, ChromaDB RAG diagnostic assistance, and predictive failure forecasting.",
    highlights: [
      "Real-time low-latency WebSocket IoT telemetry tracking vehicle position, battery SoC, and sensor harmonics",
      "Retrieval-Augmented Generation (RAG) diagnostic assistance with ChromaDB vector store and LangChain",
      "Predictive ML maintenance engine for time-series component failure forecasting before breakdowns occur",
      "Strict Role-Based Access Control (RBAC) across Fleet Manager, Technician, and Dispatcher operational workflows",
      "Interactive Leaflet maps with dynamic vehicle status pins, route vectors, and speed gauges",
      "Event-driven microservices architecture containerized with multi-stage Docker Compose",
    ],
    images: [
      "/portfolio/projects/fleetflow-1.png",
      "/portfolio/projects/fleetflow-2.png",
    ],
    tags: [
      "React 19",
      "Python FastAPI",
      "Node.js",
      "Express.js",
      "ChromaDB",
      "Socket.io",
      "MongoDB",
      "Docker Compose",
    ],
    githubUrl: "https://github.com/GVBharadwaj18/FleetFlow",
    liveUrl: "",
  },
  {
    id: 5,
    indexStr: "№ 05",
    title: "AI Task Assistant",
    badge: "Serverless AI Microservice",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    category: "AI",
    description:
      "A modern, high-performance serverless task management application powered by AWS Lambda, Amazon DynamoDB, and OpenAI GPT-4o-mini with sub-second AI latency and near-zero operating costs.",
    highlights: [
      "100% serverless microservices architecture built on AWS Lambda (Python 3.11) with API Gateway",
      "Conversational AI assistant powered by OpenAI GPT-4o-mini to decompose complex roadmaps into subtasks",
      "Auto-scaling NoSQL persistence with Amazon DynamoDB handling 10,000+ concurrent requests",
      "Extreme cost-efficiency (<$0.10/month operating cost) with zero server maintenance overhead",
      "Next.js 15 frontend with fluid Kanban task boards, priority heatmaps, and roadmap execution graphs",
    ],
    images: [
      "/portfolio/projects/taskassistant-1.png",
      "/portfolio/projects/taskassistant-2.png",
    ],
    tags: [
      "Next.js 15",
      "TypeScript 5",
      "AWS Lambda",
      "Amazon DynamoDB",
      "OpenAI GPT-4o-mini",
      "AWS API Gateway",
      "Serverless",
    ],
    githubUrl: "https://github.com/GVBharadwaj18/Task-Assistant",
    liveUrl: "",
  },
  {
    id: 6,
    indexStr: "№ 06",
    title: "Pharma-AI",
    badge: "Multi-Agent Drug Discovery",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    category: "AI",
    description:
      "An API-first, agentic AI platform designed to discover and evaluate pharmaceutical molecule repurposing opportunities across complex biomedical literature.",
    highlights: [
      "Orchestrates a master planning agent and six specialized domain researcher agents",
      "Synthesizes unstructured chemical and trial datasets into ranked opportunities",
      "Automated PDF medical dossier generation for clinical researchers",
      "Modular API-first architecture designed for enterprise integration",
    ],
    images: [
      "/portfolio/projects/p-5.png",
      "/portfolio/projects/p-1.png",
      "/portfolio/projects/p-2.png",
      "/portfolio/projects/p-3.png",
      "/portfolio/projects/p-4.png",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Agentic AI",
      "Multi-Agent",
      "API Design",
      "TailwindCSS",
    ],
    githubUrl: "https://github.com/GVBharadwaj18/pharma-ai",
    liveUrl: "",
  },
  {
    id: 7,
    indexStr: "№ 07",
    title: "Hackathon 2026 – NIT Silchar",
    badge: "Tournament Infrastructure",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    category: "Full-Stack",
    description:
      "A comprehensive competitive hackathon management portal engineered to organize and judge large-scale collegiate coding tournaments.",
    highlights: [
      "Multi-round competition pipeline (MCQs, live algorithmic tests, project submissions)",
      "Judge0 API integration for sandboxed, secure multi-language code execution",
      "Real-time team collaboration, registration authentication, and scoreboard",
      "Supabase PostgreSQL backend with row-level security and storage buckets",
    ],
    images: [
      "/portfolio/projects/h-1.png",
      "/portfolio/projects/h-2.png",
      "/portfolio/projects/h-3.png",
      "/portfolio/projects/h-4.png",
      "/portfolio/projects/h-5.png",
      "/portfolio/projects/h-6.png",
      "/portfolio/projects/h-7.png",
    ],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Judge0 API",
      "React Router",
    ],
    githubUrl: "https://github.com/GVBharadwaj18/hack-sphere",
    liveUrl: "https://hack-sphere-six.vercel.app/",
  },
  {
    id: 8,
    indexStr: "№ 08",
    title: "SecondBrain",
    badge: "Content Knowledge Hub",
    badgeColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    category: "Full-Stack",
    description:
      "A modern digital hub to bookmark, categorize, and share social content links across YouTube, X (Twitter), Instagram, and LinkedIn.",
    highlights: [
      "Custom embed previews for multi-platform links (YouTube, Twitter, LinkedIn)",
      "Tag-based tagging and instant full-text collection searching",
      "Shareable public collection URLs for collaboration",
      "Secure JWT authentication and stateless session management",
    ],
    images: [
      "/portfolio/projects/project1.png",
      "/portfolio/projects/project1-1.png",
      "/portfolio/projects/project1-2.png",
      "/portfolio/projects/project1-3.png",
    ],
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
    ],
    githubUrl: "https://github.com/GVBharadwaj18/SecondBrain",
    liveUrl: "",
  },
  {
    id: 9,
    indexStr: "№ 09",
    title: "Movie Ticket Booking System",
    badge: "C++ Architecture",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    category: "Systems",
    description:
      "A robust C++ console application that simulates an end-to-end multi-cinema ticket reservation and seat allocation engine with persistent CSV storage.",
    highlights: [
      "Browse showtimes and auditoriums across multiple theaters",
      "Interactive seat matrix allocation with VIP/Regular customer discount rules",
      "File-handling engine with CSV-based data serialization and state persistence",
      "Built with object-oriented paradigms (Encapsulation, Polymorphism, Inheritance)",
    ],
    images: [
      "/portfolio/projects/project2.png",
      "/portfolio/projects/project2.png",
    ],
    tags: ["C++", "OOP", "File Handling", "CSV", "System Architecture"],
    githubUrl: "https://github.com/GVBharadwaj18/MovieTicketBookingSystem",
    liveUrl: "",
  },
];

const categories = [
  { id: "All", label: "All Works", icon: Layers },
  { id: "AI", label: "Agentic AI & ML", icon: Bot },
  { id: "Full-Stack", label: "Full-Stack Web", icon: Globe },
  { id: "Systems", label: "Systems & Core", icon: Code2 },
];

const ProjectCard = ({ project, onSelect }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentIdx(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div
      onClick={onSelect}
      className="glass-panel group flex flex-col h-full rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[0_25px_50px_-15px_rgba(139,92,246,0.3)] text-left"
    >
      {/* Editorial Header Bar (NO AI Mac Dots) */}
      <div className="px-5 py-3 border-b border-border/50 flex items-center justify-between bg-card/40">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-muted-foreground/75">
            {project.indexStr}
          </span>
          {project.liveUrl && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          )}
        </div>

        <span
          className={cn(
            "text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border",
            project.badgeColor
          )}
        >
          {project.badge}
        </span>
      </div>

      {/* Image Preview Container */}
      <div className="relative h-48 sm:h-52 bg-neutral-950 overflow-hidden group/img">
        <img
          src={project.images[currentIdx]}
          alt={project.title}
          className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <span className="text-white text-xs font-mono font-medium flex items-center gap-1.5">
            <Eye size={14} className="text-primary" /> Inspect project
          </span>
          {project.images.length > 1 && (
            <span className="text-white/80 text-[11px] font-mono">
              {currentIdx + 1} / {project.images.length}
            </span>
          )}
        </div>

        {/* Image Carousel Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/70 text-white hover:bg-black/95 opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/70 text-white hover:bg-black/95 opacity-0 group-hover/img:opacity-100 transition-opacity z-20"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Project Metadata */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowRight
              size={18}
              className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
            />
          </h3>

          <p className="text-muted-foreground text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-secondary/80 text-foreground/80 border border-border/60"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-secondary/50 text-muted-foreground border border-border/40">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-mono">
            <span className="text-primary font-bold flex items-center gap-1 group-hover:underline">
              Case Study <ArrowRight size={13} />
            </span>

            <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                title="GitHub Repository"
              >
                <Github size={16} />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors p-1 flex items-center gap-1 font-bold"
                  title="Live Demo"
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setCurrentIdx((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIdx(
          (prev) => (prev - 1 + project.images.length) % project.images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in text-left"
      onClick={onClose}
    >
      <div
        className="glass-panel max-w-4xl w-full rounded-3xl overflow-hidden border border-primary/30 shadow-2xl relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between shrink-0 bg-card/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground font-bold">
              {project.indexStr}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-foreground">
              {project.title}
            </h3>
            <span
              className={cn(
                "text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border",
                project.badgeColor
              )}
            >
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">

          {/* Main Screenshot Preview */}
          <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-border/80 aspect-video flex items-center justify-center">
            <img
              src={project.images[currentIdx]}
              alt={`${project.title} preview ${currentIdx + 1}`}
              className="w-full h-full object-contain"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setCurrentIdx(
                      (prev) =>
                        (prev - 1 + project.images.length) %
                        project.images.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={() =>
                    setCurrentIdx((prev) => (prev + 1) % project.images.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            {/* Thumbnail Preview Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all cursor-pointer",
                    idx === currentIdx
                      ? "w-6 bg-primary"
                      : "w-2 bg-white/50 hover:bg-white"
                  )}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Project Architecture & Overview
            </h4>
            <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Engineering Highlights & Implementation
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.highlights.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border/50 text-xs sm:text-sm text-foreground/90"
                >
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-secondary text-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-border/60 flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-btn-secondary !px-6 !py-3 flex-1 flex items-center justify-center gap-2 text-sm font-bold"
            >
              <Github size={18} />
              <span>Inspect Source Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-btn-primary !px-6 !py-3 flex-1 flex items-center justify-center gap-2 text-sm font-bold"
              >
                <Globe size={18} />
                <span>Launch Live Application</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-left">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
            <Sparkles size={14} />
            <span>SELECTED REPERTOIRE</span>
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text font-black">Engineering Works</span>
          </h2>
          <p className="section-subheading">
            Production systems, autonomous multi-agent workflows, and high-performance web applications built from scratch.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer",
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Bottom GitHub Link */}
        <div className="mt-16 text-center">
          <div className="glass-panel max-w-xl mx-auto p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
            <h4 className="text-xl font-bold mb-2 text-foreground">
              Interested in more experiments and source code?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              I share algorithmic solutions, prototype AI pipelines, and open-source utilities directly on GitHub.
            </p>
            <a
              href="https://github.com/GVBharadwaj18"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-btn-primary !px-7 !py-3 inline-flex items-center gap-2 text-sm font-bold"
            >
              <Github size={18} />
              <span>Explore My GitHub Repositories</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};