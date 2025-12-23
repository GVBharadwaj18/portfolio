import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaGithub,
} from "react-icons/fa";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/usetoast";
import { useState } from "react";

export const ContactSection=()=>{
    const {toast}=useToast();
    const [isSubmitting,setIsSubmitting]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(()=>{
            toast({
                title:"Message sent!",
                description:"Thank you for yout message.I'll get back to you soon."
            })
            setIsSubmitting(false);
        },1500);
    };
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have an idea, project, or just want to connect? I’m always open to exciting collaborations, freelance work, or a quick chat about tech and creativity. Let’s build something great together — feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              {" "}
              Contact Info
            </h3>

            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <FaEnvelope className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:gvbharadwaj3705@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    gvbharadwaj3705@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <FaPhone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+918096905152"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +918096905152
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <FaMapMarkerAlt className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Visakhapatnam, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center md:text-left">
              <h4 className="font-medium mb-4"> Connect With Me 🤝</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.linkedin.com/in/gvbharadwaj18/" target="_blank" className="hover:text-primary transition-colors">
                  <FaLinkedin size={24} />
                </a>
                
                <a href="https://www.instagram.com/bharadwaj_3189/" target="_blank" className="hover:text-primary transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://github.com/GVBharadwaj18" target="_blank" className="hover:text-primary transition-colors">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-2xl shadow-lg border border-primary/20 shadow-primary/5 transition-all duration-300 focus-within:border-primary focus-within:shadow-[0_0_25px_hsl(var(--primary)/0.2)]"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2"> Let's get in Touch</h3>
              <p className="text-muted-foreground">Ready to cook something? 😉</p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-primary/50 bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)] focus:-translate-y-1"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-primary/50 bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)] focus:-translate-y-1"
                  placeholder="rahul@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-primary/50 bg-background text-foreground placeholder:text-muted-foreground resize-none transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)] focus:-translate-y-1"
                  placeholder="Type away! This box loves interesting stories ✍️"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
