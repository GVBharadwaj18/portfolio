import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export const BackToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
        setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 p-2.5 rounded-full glass-panel border border-primary/30 shadow-xl transition-all duration-300 focus:outline-none cursor-pointer group hover:scale-110",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      )}
      aria-label="Back to top"
      title="Back to top"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* SVG Progress Circle */}
        <svg className="w-10 h-10 -rotate-90">
          <circle
            cx="20"
            cy="20"
            r={radius}
            className="stroke-muted-foreground/20"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r={radius}
            className="stroke-primary transition-all duration-150"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <ArrowUp
          size={18}
          className="absolute text-foreground group-hover:text-primary group-hover:-translate-y-0.5 transition-all"
        />
      </div>
    </button>
  );
};
