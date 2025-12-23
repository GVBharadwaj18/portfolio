import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
  id: 1,
  title: "NexusMart",
  description:
    "NexusMart is a full-stack multi-vendor e-commerce platform where sellers can create their own stores and manage products, while customers enjoy secure checkout with Stripe and Cash on Delivery.",
  features: [
    "AI-powered product auto-generation using Gemini API",
    "Role-based dashboards for sellers and admins",
    "Secure checkout with Stripe and Cash on Delivery",
    "Coupon management and analytics",
    "Plus membership system for premium users"
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
    "/portfolio/projects/nexusmart-9.png"

  ],
  tags: [
    "Next.js",
    "React",
    "TailwindCSS",
    "PostgreSQL(Neon)",
    "Prisma",
    "Stripe",
    "Redux Toolkit",
    "Clerk Auth",
    "Gemini API",
    "Recharts"
  ],
  githubUrl: "https://github.com/GVBharadwaj18/nexusmart", 
  liveUrl: "https://nexusmart-swart.vercel.app/"
},
  {
    id: 2,
    title: "SecondBrain",
    description: "SecondBrain is a vibrant and modern web application to save, organize, and share your favorite content. With support for YouTube, Twitter (X), Instagram, and LinkedIn links, SecondBrain becomes your personal hub for managing social media and content links.",
    features: [
      "Save and organize content links from YouTube, Twitter, etc.",
      "Share your curated collections with others",
      "Modern and vibrant user interface",
      "Secure user authentication with JWT"
    ],
    images: ["/portfolio/projects/project1.png", "/portfolio/projects/project1-1.png","/portfolio/projects/project1-2.png","/portfolio/projects/project1-3.png"],
    tags: ["TypeSCript","React","Node.js","Express.js","MongoDB","TailwindCSS","JWT Authentication"],
    githubUrl: "https://github.com/GVBharadwaj18/SecondBrain",
    liveUrl: "#",
  },
  {
  id: 3,
  title: "Hackathon 2026 – NIT Silchar",
  description:
    "Hackathon 2026 by NIT Silchar is a full-featured hackathon management platform designed to host large-scale competitive events.",
  features: [
    "Secure authentication and team creation",
    "Multi-round contests (MCQs, coding challenges, project submissions)",
    "Powerful admin dashboard for managing rounds and results",
    "Judge0 integration for secure code execution",
    "Supabase for real-time database and storage"
  ],
  images: [
    "/portfolio/projects/h-1.png",
    "/portfolio/projects/h-2.png",
    "/portfolio/projects/h-3.png",
    "/portfolio/projects/h-4.png",
    "/portfolio/projects/h-5.png",
    "/portfolio/projects/h-6.png",
    "/portfolio/projects/h-7.png"

  ],
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "Supabase",
    "PostgreSQL",
    "TailwindCSS",
    "Judge0 API",
    "React Router",
    "Context API"
  ],
  githubUrl: "https://github.com/GVBharadwaj18/hack-sphere",
  liveUrl: "https://hack-sphere-six.vercel.app/"
},
  {
    id: 4,
    title: "Movie Ticket Booking System",
    description:"A C++ console-based application that simulates a movie ticket booking system. Users can browse movies across multiple theaters, book and cancel tickets, and get discounts based on customer type (VIP or Regular). Booking details are stored in a CSV file for future reference.",
    features: [
      "Console-based user interface",
      "Browse movies across multiple theaters",
      "Ticket booking and cancellation system",
      "Discount logic for VIP and Regular customers",
      "CSV-based data persistence"
    ],
    images: ["/portfolio/projects/project2.png", "/portfolio/projects/project2.png"],
    tags: ["C++", "OOP", "File Handling","CSV"],
    githubUrl: "https://github.com/GVBharadwaj18/MovieTicketBookingSystem",
    liveUrl: "",
  },
  {
  id: 5,
  title: "Pharma-AI",
  description:
    "Pharma-AI is an API-first, agentic AI platform designed to identify pharmaceutical molecule repurposing opportunities.",
  features: [
    "Orchestrates a master agent and six specialized domain agents",
    "Synthesizes insights into actionable opportunities",
    "Generates professional, automated PDF reports",
    "Designed for seamless API integration at scale",
    "Multi-agent architecture for complex problem solving"
  ],
  images: [
    "/portfolio/projects/p-5.png",
    "/portfolio/projects/p-1.png",
    "/portfolio/projects/p-2.png",
    "/portfolio/projects/p-3.png",
    "/portfolio/projects/p-4.png"
  ],
  tags: [
    "Next.js",
    "TypeScript",
    "Agentic AI",
    "Multi-Agent Systems",
    "API Design",
    "PDF Generation",
    "Node.js",
    "TailwindCSS"
  ],
  githubUrl: "https://github.com/GVBharadwaj18/pharma-ai",
  liveUrl: ""
}

];

const ProjectCard = ({ project, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div 
      onClick={onClick}
      className="group bg-card rounded-lg overflow-hidden shadow-xs project-card-shadow flex flex-col h-full border border-border/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="h-52 overflow-hidden relative bg-muted border-b border-border/50">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white hover:bg-black/70 transition-colors z-10 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white hover:bg-black/70 transition-colors z-10 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 h-14 overflow-hidden flex items-center text-foreground group-hover:text-primary transition-colors line-clamp-2"> {project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-lg bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-lg bg-primary/10 text-primary">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-auto flex gap-3 pt-4 border-t border-border/50 w-full">
          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
             View Details <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="bg-card border border-primary/20 rounded-2xl max-w-4xl w-full shadow-2xl relative animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-secondary transition-colors z-20 border border-border"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image Gallery */}
          <div className="relative h-64 md:h-full bg-black/5 min-h-[300px] flex items-center justify-center p-4">
             <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-contain object-center"
            />
             {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col">
            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-lg bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features && project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex gap-4 pt-6 border-t border-border/50">
              <a
                href={project.githubUrl}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:bg-primary/90"
              >
                <Github size={20} /> Source Code
              </a>
              {project.liveUrl && (
                 <a
                 href={project.liveUrl}
                 target="_blank"
                 className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-medium transition-all duration-300 hover:bg-primary/10"
               >
                 <ExternalLink size={20} /> Live Demo
               </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container justify-center mx-auto max-w-6xl">
        <h2 className="section-title">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of my recent projects. Each one has helped me learn and grow as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {projects.map((project, key) => (
            <ProjectCard 
              key={key} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/GVBharadwaj18"
          >
            My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};