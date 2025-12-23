import {Moon,Sun} from "lucide-react";
import { useState,useEffect } from "react";
import { cn } from "@/lib/utils";


export const ThemeToggle=()=>{
    const [isDarkMode,setIsDarkMode]=useState(false);
    useEffect(()=>{
        const storedTheme=localStorage.getItem("theme");
        if(storedTheme==="dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }else{
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
    },[]);
    const toggleTheme=()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button
         onClick={toggleTheme}
         className={cn(
           "p-2.5 rounded-full transition-all duration-300 focus:outline-none",
           "hover:scale-110 active:scale-95",
           "bg-secondary hover:bg-primary/10 border border-border",
           "shadow-sm hover:shadow-md"
         )}
         aria-label="Toggle theme"
        >
        {isDarkMode ? (
        <Sun className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 transition-transform duration-300" />
        ):(
        <Moon className="h-5 w-5 md:h-6 md:w-6 text-blue-900 transition-transform duration-300" />
        )}
        </button>
    )
}