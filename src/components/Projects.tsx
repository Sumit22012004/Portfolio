import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const project = {
  title: "Advanced Conversational AI with Memory",
  period: "May 2025 - Present",
  description:
    "Persistent memory system for contextualized AI interactions with encrypted data storage and lifelong memory visualization",
  achievements: [
    "95.2% accuracy in LongMemEval benchmark",
    "Secure multi-agent orchestration with local LLMs",
    "Automated memory updates via optimized cron jobs",
  ],
  tech: ["Gemini 2.5", "GPT-5", "Qdrant", "MongoDB", "Memgraph", "Encryption"],
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Project
          </h2>
          <p className="text-muted-foreground text-lg">
            Cutting-edge AI solution pushing the boundaries
          </p>
        </div>

        <div 
          ref={projectRef}
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-20 scale-95"
          }`}
        >
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_hsl(var(--primary)/0.3),0_0_90px_hsl(var(--secondary)/0.2)] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">{project.period}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>

              <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="space-y-3 mb-8">
                {project.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <span className="text-primary mt-1 text-xl">✓</span>
                    <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className={`${i % 2 === 0 ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20' : 'bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20'} transition-all duration-300 hover:scale-110`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground italic">
                  View more projects on GitHub
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
