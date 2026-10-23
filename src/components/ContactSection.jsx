import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaGithub,
  FaCheck,
  FaCopy,
} from "react-icons/fa";
import { cn } from "../lib/utils";
import { useState } from "react";
import { X, Sparkles, Send, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "",
    message: "",
    type: "success",
  });
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#8b5cf6", "#ec4899", "#38bdf8", "#fbbf24"],
      });
    } catch (e) {
      // Fallback gracefully
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formEl = e.target;
    const formData = new FormData(formEl);
    formData.append("subject", "New message from Portfolio Contact Form");

    try {
      const response = await fetch("https://formspree.io/f/gvbharadwaj3705@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setModalConfig({
          title: "Message Delivered! 🎉",
          message:
            "Thank you for reaching out! Your message was transmitted successfully. I review messages daily and will get back to you shortly.",
          type: "success",
        });
        fireConfetti();
        setShowModal(true);
        formEl.reset();
      } else {
        setModalConfig({
          title: "Transmission Error",
          message:
            "Something went wrong while routing your message. Please send an email directly to gvbharadwaj3705@gmail.com.",
          type: "error",
        });
        setShowModal(true);
      }
    } catch (error) {
      setModalConfig({
        title: "Network Error",
        message:
          "Unable to connect to the mail gateway. Please check your network connection or reach out directly at gvbharadwaj3705@gmail.com.",
        type: "error",
      });
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold mb-3">
            <MessageSquare size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-heading">
            Let's Build Something <span className="gradient-text font-black">Remarkable</span>
          </h2>
          <p className="section-subheading">
            Have a project in mind, an internship opportunity, or want to collaborate on AI and web systems? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-primary/20">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-wider">
                <Clock size={15} /> Response Time
              </div>

              <h3 className="text-2xl font-bold text-foreground">
                Quick Contact & Channels
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Feel free to email directly, connect on LinkedIn, or drop a quick note through the secure form.
              </p>

              {/* Direct Info Rows */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/50 border border-border/70 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <FaEnvelope size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-mono text-muted-foreground block">Email</span>
                      <a
                        href="mailto:gvbharadwaj3705@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors truncate block"
                      >
                        gvbharadwaj3705@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard("gvbharadwaj3705@gmail.com", "email")}
                    className="p-2 rounded-xl bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedItem === "email" ? (
                      <FaCheck size={14} className="text-emerald-400" />
                    ) : (
                      <FaCopy size={14} />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/50 border border-border/70 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                      <FaPhone size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">Phone / WhatsApp</span>
                      <a
                        href="tel:+918096905152"
                        className="text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        +91 8096905152
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard("+918096905152", "phone")}
                    className="p-2 rounded-xl bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Phone"
                  >
                    {copiedItem === "phone" ? (
                      <FaCheck size={14} className="text-emerald-400" />
                    ) : (
                      <FaCopy size={14} />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/50 border border-border/70">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">Location</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">
                        Visakhapatnam, Andhra Pradesh, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border/50">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-bold block mb-3">
                  Connect & Socials
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://www.linkedin.com/in/gvbharadwaj18/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-secondary/60 hover:bg-[#0077b5]/15 border border-border/60 hover:border-[#0077b5]/40 text-muted-foreground hover:text-[#0077b5] transition-all group"
                  >
                    <FaLinkedin size={20} className="mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-mono">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/GVBharadwaj18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-secondary/60 hover:bg-neutral-800/40 border border-border/60 hover:border-foreground/30 text-muted-foreground hover:text-foreground transition-all group"
                  >
                    <FaGithub size={20} className="mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-mono">GitHub</span>
                  </a>

                  <a
                    href="https://www.instagram.com/bharadwaj_3189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-secondary/60 hover:bg-[#E1306C]/15 border border-border/60 hover:border-[#E1306C]/40 text-muted-foreground hover:text-[#E1306C] transition-all group"
                  >
                    <FaInstagram size={20} className="mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-mono">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick trust badge */}
            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/40 flex items-center gap-3 text-xs text-muted-foreground">
              <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
              <span>Direct messages are encrypted and delivered promptly to primary inbox.</span>
            </div>

          </div>

          {/* Right Column: High-Grade Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-primary/25 shadow-2xl relative text-left">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-foreground mb-1">
                Let's get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Ready to cook something? 😉
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-foreground/90"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border/80 focus:border-primary focus:bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all shadow-sm focus:shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-foreground/90"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border/80 focus:border-primary focus:bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all shadow-sm focus:shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
                    placeholder="rahul@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2 text-foreground/90"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border/80 focus:border-primary focus:bg-background text-sm text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none transition-all shadow-sm focus:shadow-[0_0_20px_hsl(var(--primary)/0.25)] leading-relaxed"
                  placeholder="Type away! This box loves interesting stories ✍️"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-btn-primary w-full !py-3.5 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl",
                  isSubmitting && "opacity-75 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Success / Error Popup Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="glass-panel p-8 rounded-3xl max-w-md w-full relative animate-scale-in text-center flex flex-col items-center gap-5 border border-primary/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {modalConfig.type === "success" ? (
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-3xl font-bold border border-emerald-500/30 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                ✓
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center text-3xl font-bold border border-rose-500/30">
                ✕
              </div>
            )}

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-foreground">
                {modalConfig.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {modalConfig.message}
              </p>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 rounded-xl cosmic-btn-primary text-xs font-bold"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
