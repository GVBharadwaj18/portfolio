import { Github, Linkedin, Mail, Heart, Sparkles, ArrowUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/60 border-t border-border/60 py-12 px-4 sm:px-6 lg:px-8 mt-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Bio */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-fuchsia-500 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center font-bold text-sm text-foreground">
                B
              </div>
            </div>
            <span className="font-extrabold text-lg tracking-tight">
              Bharadwaj <span className="text-primary font-serif italic text-base">Gona</span>
            </span>
          </a>

          <p className="text-xs text-muted-foreground max-w-sm">
            Full-Stack Software Engineer & AI Systems Developer • B.Tech CSE @ NIT Silchar.
          </p>
        </div>

        {/* Center: Tech stack disclaimer */}
        <div className="text-xs text-muted-foreground flex flex-col items-center text-center space-y-1 font-mono">
          <p className="flex items-center gap-1.5">
            Designed & Engineered with <Heart size={13} className="text-rose-500 fill-rose-500 animate-pulse" /> by Bharadwaj
          </p>
          <p className="text-[11px] text-muted-foreground/75">
            Powered by React 19 • Tailwind CSS v4 • Vite
          </p>
        </div>

        {/* Right: Social Links & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/GVBharadwaj18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/gvbharadwaj18/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-secondary/80 hover:bg-[#0077b5]/20 text-muted-foreground hover:text-[#0077b5] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://www.instagram.com/bharadwaj_3189/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-secondary/80 hover:bg-[#E1306C]/20 text-muted-foreground hover:text-[#E1306C] transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={17} />
            </a>
            <a
              href="mailto:gvbharadwaj3705@gmail.com"
              className="p-2.5 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <p className="text-[11px] font-mono text-muted-foreground">
            &copy; {currentYear} Bharadwaj Gona. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
