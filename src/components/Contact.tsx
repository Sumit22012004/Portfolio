import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 px-4 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeader title="Let's Connect" subtitle="Open to exciting AI opportunities and collaborations" />

        <div 
          ref={sectionRef}
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <Card className="relative overflow-hidden p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 hover:shadow-[0_0_50px_hsl(var(--primary)/0.3),0_0_70px_hsl(var(--secondary)/0.2)] group">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 grid md:grid-cols-2 gap-6 mb-10">
              <a
                href="mailto:sklegacy789@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">sklegacy789@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917033241380"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/5 hover:bg-secondary/10 border border-secondary/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">+91 7033241380</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/10 cursor-default select-none">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Bangalore, India</p>
                </div>
              </div>

              <div className="group relative overflow-hidden flex items-center justify-center gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--secondary)/0.2)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <a
                  href="https://linkedin.com/in/sumitkumar22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/15 group-hover:bg-secondary/12 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-secondary" />
                </a>
                <a
                  href="https://github.com/Sumit22012004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/15 group-hover:bg-secondary/12 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-secondary" />
                </a>
              </div>
            </div>

            <div className="relative z-10 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.5),0_0_60px_hsl(var(--secondary)/0.3)]"
                onClick={() => window.location.href = "mailto:sklegacy789@gmail.com"}
              >
                Send a Message
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            © 2025 Sumit Kumar. Built with passion for AI innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
