import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-muted/20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Greeting with fade-in */}
          <div className="animate-fade-in-left">
            <p className="text-primary text-lg md:text-xl font-medium tracking-wide">
              Hi, I'm
            </p>
          </div>

          {/* Name with shimmer effect */}
          <h1 className="animate-scale-in">
            <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient glow-text">
              Sumit Kumar
            </span>
          </h1>

          {/* Role with typing effect */}
          <div className="animate-fade-in-right">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground/90">
              AI Engineer & Innovator
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
              Specializing in <span className="text-primary font-semibold">Multi-Agent Systems</span> and{" "}
              <span className="text-secondary font-semibold">Memory-Augmented Architectures</span>.
              Building the future of adaptive AI solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center pt-8 animate-slide-up">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
              onClick={() => scrollToSection("experience")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary text-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8 animate-fade-in">
            <a
              href="https://github.com/Sumit22012004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/sumitkumar22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:sklegacy789@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
