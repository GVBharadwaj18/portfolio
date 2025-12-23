import {cn} from "../lib/utils";
import {Menu,X} from "lucide-react";
import {useEffect,useState} from "react";
import { ThemeToggle } from "./ThemeToggle";
const navItems=[
    {name:"Home",href:"#hero"},
    {name:"About",href:"#about"},
    {name:"Education",href:"#education"},
    {name:"Skills",href:"#skills"},
    {name:"Projects",href:"#projects"},
    {name:"Contact",href:"#contact"},
];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
      setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return(
     <nav
      className={cn(
        "fixed w-full z-50 shadow-md transition-all duration-300 py-3",
        "bg-background text-foreground", 
        isScrolled ? "backdrop-blur-lg bg-opacity-90 shadow-xs" : "" 
      )}>
   
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
            <a className="text-xl font-bold text-primary flex items-center gap-2"
            href="#hero">
                <span className="relative z-10 flex flex-wrap items-center gap-2">
                     <span className="font-signature text-3xl font-extrabold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"> GV Bharadwaj's </span>
                     <span className="inline-block text-foreground/80 font-bold">Portfolio</span>
                </span>
            </a>
            {/* for desktop*/}
        <div className="hidden md:flex items-center space-x-8 ">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group font-bold"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
            <ThemeToggle />    
        </div>
      
      {/* for mobile*/}
      <div className="flex items-center space-x-4 md:hidden relative z-50">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 text-foreground hover:text-primary transition-colors"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        </div>
    </nav>
  );
};