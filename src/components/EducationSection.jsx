import { GraduationCap, Calendar, MapPin, Award, BookOpen, ExternalLink, Sparkles } from "lucide-react";

const educationData = [
  {
    institution: "National Institute of Technology, Silchar",
    location: "Assam, India",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    score: "CGPA: 8.79 / 10",
    duration: "2023 – 2027",
    status: "Final Year Student",
    highlights: [
      "Data Structures & Algorithms",
      "Operating Systems & Concurrency",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
      "Theory of Computation",
    ],
    accent: "from-violet-500/20 via-purple-500/10 to-transparent",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  },
  {
    institution: "Narayana Junior College",
    location: "Visakhapatnam, Andhra Pradesh",
    degree: "Higher Secondary Certificate (HSC) • MPC Stream",
    score: "Score: 97.7%",
    duration: "2021 – 2023",
    status: "Completed with Distinction",
    highlights: ["Mathematics", "Physics", "Chemistry"],
    accent: "from-sky-500/20 via-blue-500/10 to-transparent",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  },
  {
    institution: "Narayana E Techno School",
    location: "Bobbili, Andhra Pradesh",
    degree: "Secondary School Certificate (SSC)",
    score: "Score: 99.67%",
    duration: "2011 – 2021",
    status: "School Valedictorian",
    highlights: [
      "16 Olympiad Medals (9 Gold)",
      "Science & Mathematics Olympiads",
      "Academic Excellence Award",
    ],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
            <GraduationCap size={15} />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="section-heading">
            Education & <span className="gradient-text font-black">Milestones</span>
          </h2>
          <p className="section-subheading">
            A strong academic foundation built on mathematical rigor, computer science fundamentals, and academic distinction.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-violet-500 before:via-indigo-500 before:to-emerald-500/40">
          {educationData.map((edu, index) => (
            <div key={index} className="relative group text-left">

              {/* Glowing Node on Timeline */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-6 w-5 h-5 rounded-full bg-card border-2 border-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_hsl(var(--primary)/0.6)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 shadow-lg">

                {/* Background Ambient Glow */}
                <div
                  className={`absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br ${edu.accent} blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                />

                <div className="relative z-10 space-y-4">
                  {/* Top Bar: Degree & Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-primary font-bold text-lg sm:text-xl">
                      <GraduationCap className="h-6 w-6 shrink-0" />
                      <span>{edu.degree}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-mono font-semibold text-foreground/80 self-start sm:self-auto border border-border">
                      <Calendar size={13} className="text-primary" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Institution & Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-foreground font-semibold">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {edu.institution}
                    </h3>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(edu.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
                    >
                      <MapPin size={13} />
                      <span>{edu.location}</span>
                      <ExternalLink size={11} className="opacity-70" />
                    </a>
                  </div>

                  {/* Status & Score Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold font-mono border ${edu.badgeColor} shadow-sm`}>
                      <Award size={14} />
                      <span>{edu.score}</span>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {edu.status}
                    </span>
                  </div>

                  {/* Highlights / Coursework */}
                  <div className="pt-3 border-t border-border/40">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mb-2">
                      <BookOpen size={12} className="text-primary" />
                      <span>Core Coursework & Highlights:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((item, hIdx) => {
                        const isGold = item.includes("Olympiad Medals");
                        return (
                          <span
                            key={hIdx}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all inline-flex items-center gap-1.5 ${
                              isGold
                                ? "bg-amber-500/15 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40 dark:border-amber-400/40 font-semibold shadow-[0_0_12px_rgba(245,158,11,0.18)]"
                                : "bg-secondary/70 text-foreground/80 border border-border/60 hover:border-primary/40 transition-colors"
                            }`}
                          >
                            {isGold && <Award size={12} className="text-amber-500 dark:text-amber-400 shrink-0" />}
                            <span>{item}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
