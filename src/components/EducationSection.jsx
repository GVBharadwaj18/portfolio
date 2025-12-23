import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const educationData = [
  {
    institution: "National Institute of Technology, Silchar",
    location: "Assam, India",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    score: "CGPA: 8.57",
    duration: "2023 – 2027",
  },
  {
    institution: "Narayana Junior College, Visakhapatnam",
    location: "Andhra Pradesh, India",
    degree: "Higher Secondary Certificate (HSC)",
    score: "Score: 97.7%",
    duration: "2021 – 2023",
  },
  {
    institution: "Narayana E Techno School, Bobbili",
    location: "Andhra Pradesh, India",
    degree: "Secondary School Certificate (SSC)",
    score: "Score: 99.67%",
    duration: "2011 – 2021",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">
          My <span className="text-primary "> Education</span>
        </h2>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="relative pl-8 md:pl-0 border-l-2 border-primary/30 md:border-none group"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary md:hidden"></div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left">
                
                {/* Left: Content */}
                <div className="space-y-3 flex-1">
                   <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                      <GraduationCap className="h-6 w-6 shrink-0" />
                      {edu.degree}
                   </div>
                   
                   <h3 className="text-xl md:text-2xl font-bold text-foreground">
                     {edu.institution}
                   </h3>

                   <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm md:text-base">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1 text-foreground font-medium bg-primary/10 px-3 py-1 rounded-full">
                         <Award size={16} className="text-primary" />
                         {edu.score}
                      </div>
                   </div>
                </div>

                {/* Right: Duration */}
                <div className="flex items-center gap-2 text-primary font-bold bg-primary/5 px-4 py-2 rounded-lg self-start whitespace-nowrap">
                   <Calendar size={18} />
                   {edu.duration}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
