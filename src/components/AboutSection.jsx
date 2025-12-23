import { Brain, Briefcase, Code } from "lucide-react";
import profilePic from "../assets/profile.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">
          About <span className="text-primary "> Me</span>
        </h2>

        {/* Top Part: Text & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Passionate Full-Stack Developer & <br/> Competitive Programmer
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I design elegant, well-structured solutions to real-world challenges and actively explore emerging technologies 
              to refine my skills. I strive to adapt and thrive in the fast-paced tech ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
               <a href="#contact" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                Get In Touch
              </a>
              <a href="#" className="px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-all">
                Download CV
              </a>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-400 rounded-2xl rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-400 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
               <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-muted">
                 {/* Placeholder Image */}
                 <img 
                   src={profilePic} 
                   alt="Profile" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Cards Grid */}
        <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">What I <span className="text-primary">Do</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="gradient-border p-6 card-hover bg-background/40 backdrop-blur-sm h-full group">
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <Code className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl mb-3">Full-Stack Development</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Designing and building scalable, responsive web applications using modern technologies like React, Node.js, and Next.js. Focused on clean architecture, performance optimization, reusable components, and seamless frontend–backend integration, with a growing interest in AI-powered tools and APIs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="gradient-border p-6 card-hover bg-background/40 backdrop-blur-sm h-full group">
                    <div className="flex flex-col items-center text-center gap-4">
                         <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <Brain className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl mb-3">Core CS & Problem Solving</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Solving Data Structures and Algorithms problems to strengthen logical thinking and optimization skills, while applying solid Operating Systems knowledge—processes, threads, memory management, scheduling, and concurrency—to write efficient, reliable, and system-aware software.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="gradient-border p-6 card-hover bg-background/40 backdrop-blur-sm h-full group">
                    <div className="flex flex-col items-center text-center gap-4">
                         <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <Briefcase className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl mb-3">Project Management & Execution</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Planning and executing projects with a focus on clean implementation, maintainability, and user impact. Experienced in breaking down complex problems, following agile practices, and continuously exploring AI-assisted workflows to improve development efficiency.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};