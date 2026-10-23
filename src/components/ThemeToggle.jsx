import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved theme or default to dark mode for jaw-dropping visual experience
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Default to dark mode if no preference set
    const shouldBeDark = storedTheme ? storedTheme === "dark" : true;
    
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (!mounted) {
    return (
      <div className={cn("w-10 h-10 rounded-full bg-secondary/50 border border-border/40", className)} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer",
        "bg-secondary/70 hover:bg-primary/15 border border-border/60 hover:border-primary/40",
        "shadow-sm hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] hover:scale-105 active:scale-95 group",
        className
      )}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
        ) : (
          <Moon className="h-5 w-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-500" />
        )}
      </div>
      
      {/* Subtle indicator ring */}
      <span className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />
    </button>
  );
};