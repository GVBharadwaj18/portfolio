import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, Code2, Database, Terminal, Layout } from "lucide-react";
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
  SiMysql,
  SiPrisma,
  SiJest,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Languages
  { name: "C", icon: <SiC className="text-blue-600 text-3xl" />, category: "Languages", description: "Foundational programming language for system-level development." },
  { name: "C++", icon: <SiCplusplus className="text-blue-800 text-3xl" />, category: "Languages", description: "High-performance language used for game development and competitive programming." },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" />, category: "Languages", description: "The core language of the web, enabling interactive experiences." },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" />, category: "Languages", description: "Typed superset of JavaScript for building robust and scalable applications." },
  { name: "HTML", icon: <SiHtml5 className="text-orange-600 text-3xl" />, category: "Frontend", description: "Standard markup language for creating web pages." },
  { name: "CSS", icon: <SiCss3 className="text-blue-600 text-3xl" />, category: "Frontend", description: "Style sheet language used for describing the presentation of a document." },

  // Frameworks
  { name: "React", icon: <SiReact className="text-sky-400 text-3xl" />, category: "Frontend", description: "JavaScript library for building user interfaces." },
  { name: "Next.js", icon: <SiNextdotjs className="text-foreground text-3xl" />, category: "Frontend", description: "The React Framework for the Web." },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" />, category: "Frontend", description: "A utility-first CSS framework for rapid UI development." },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 text-3xl" />, category: "Backend", description: "JavaScript runtime built on Chrome's V8 JavaScript engine." },
  { name: "Express.js", icon: <SiExpress className="text-foreground text-3xl" />, category: "Backend", description: "Fast, unopinionated, minimalist web framework for Node.js." },

  // Tools
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" />, category: "Backend", description: "NoSQL database program, using JSON-like documents with optional schemas." },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800 text-3xl" />, category: "Backend", description: "Open source object-relational database system." },
  { name: "SQL Server", icon: <DiMsqlServer className="text-red-600 text-3xl" />, category: "Backend", description: "Relational database management system developed by Microsoft." },
  { name: "Git", icon: <SiGit className="text-orange-500 text-3xl" />, category: "Tools and Platforms", description: "Distributed version control system." },
  { name: "GitHub", icon: <SiGithub className="text-foreground text-3xl" />, category: "Tools and Platforms", description: "Platform for hosting and collaborating on code." },
  { name: "VS Code", icon: <VscVscode className="text-blue-500 text-3xl" />, category: "Tools and Platforms", description: "Code editor redefined and optimized for building and debugging modern web and cloud applications." },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl" />, category: "Tools and Platforms", description: "API platform for building and using APIs." },
  { name: "Vercel", icon: <SiVercel className="text-foreground text-3xl" />, category: "Tools and Platforms", description: "Platform for frontend frameworks and static sites." },
  { name: "Prisma", icon: <SiPrisma className="text-foreground text-3xl" />, category: "Tools and Platforms", description: "Next-generation ORM for Node.js and TypeScript." },
  { name: "Jest", icon: <SiJest className="text-red-700 text-3xl" />, category: "Tools and Platforms", description: "Delightful JavaScript Testing Framework with a focus on simplicity." },

  // Design
  { name: "Canva", icon: <SiCanva className="text-sky-400 text-3xl" />, category: "Tools and Platforms", description: "Graphic design platform that is used to create social media graphics, presentations, posters, documents and other visual content." },
];

const categories = [
  { id: "All", label: "All Skills", icon: <Code2 size={18} /> },
  { id: "Languages", label: "Languages", icon: <Terminal size={18} /> },
  { id: "Frontend", label: "Frontend", icon: <Layout size={18} /> },
  { id: "Backend", label: "Backend", icon: <Database size={18} /> },
  { id: "Tools and Platforms", label: "Tools and Platforms", icon: <VscVscode size={18} /> },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">
          My <span className="text-primary "> Skills</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)] scale-105"
                  : "bg-card hover:bg-primary/10 border-border text-muted-foreground hover:text-primary hover:border-primary/50"
              )}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              className="group relative p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.2)] cursor-pointer flex flex-col items-center gap-4"
            >
              <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              </div>
              <span className="font-medium text-center text-sm md:text-base group-hover:text-primary transition-colors">
                {skill.name}
              </span>
              
              {/* Hover Indicator */}
              <div className="absolute inset-0 border-2 border-primary/0 rounded-xl group-hover:border-primary/20 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-card border border-primary/20 p-8 rounded-2xl max-w-md w-full shadow-2xl relative animate-scale-in">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col items-center text-center gap-6">
              <div className="p-6 rounded-full bg-primary/10 ring-4 ring-primary/5">
                {selectedSkill.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedSkill.name}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground uppercase tracking-wider">
                  {selectedSkill.category}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {selectedSkill.description}
              </p>
              
              <button 
                onClick={() => setSelectedSkill(null)} 
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
