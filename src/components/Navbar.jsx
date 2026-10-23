import { cn } from "../lib/utils";
import { Menu, X, Sparkles, FileText, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy logic to find current section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 sm:px-6 lg:px-8",
          isScrolled ? "translate-y-0" : "translate-y-0"
        )}
      >
        <div
          className={cn(
            "max-w-6xl mx-auto flex items-center justify-between transition-all duration-300",
            "px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl md:rounded-full",
            isScrolled
              ? "glass-panel shadow-[0_10px_35px_-5px_rgba(0,0,0,0.15)] dark:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] border-primary/20"
              : "bg-background/40 backdrop-blur-md border border-border/40"
          )}
        >
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="GV Bharadwaj Portfolio Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-fuchsia-500 p-[1.5px] shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center font-bold text-base text-foreground group-hover:text-primary transition-colors">
                B
              </div>
              {/* Pulse status indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-card"></span>
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-extrabold text-base md:text-lg tracking-tight flex items-center gap-1.5 leading-none">
                <span className="text-foreground">Bharadwaj</span>
                <span className="text-primary font-serif italic text-sm">Gona</span>
              </span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-wide mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Available for roles
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-secondary/40 border border-border/40 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-all duration-300",
                    isActive
                      ? "text-primary-foreground font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-indigo-600 -z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)] animate-fade-in" />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Quick CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="cosmic-btn-primary !px-5 !py-2 text-xs font-semibold shadow-md flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl bg-secondary/80 border border-border/60 text-foreground hover:text-primary transition-colors focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop blur overlay */}
        <div
          className="absolute inset-0 bg-background/85 backdrop-blur-2xl"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-6 space-y-6">
          <div className="text-center mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              Navigation
            </span>
            <p className="text-2xl font-bold mt-1">Explore Portfolio</p>
          </div>

          <nav className="flex flex-col items-center space-y-4 w-full max-w-xs">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "w-full text-center py-3 px-6 rounded-2xl text-lg font-bold transition-all duration-200 border",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                      : "bg-card/60 border-border/60 text-foreground/80 hover:text-primary hover:border-primary/40"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 w-full max-w-xs flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="cosmic-btn-primary w-full text-center py-3 font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};