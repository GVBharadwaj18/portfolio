import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        {/* Left: Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy;{new Date().getFullYear()} Bharadwaj Gona. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/GVBharadwaj18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/gvbharadwaj18/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:gvbharadwaj3705@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
