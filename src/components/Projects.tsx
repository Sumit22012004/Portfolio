import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const project = {
  title: "Intelligent Multi-Agent Research Assistant",
  period: "March 2025 - May 2025",
  description:
    "Collaborative multi-agent research framework enabling specialized agents to autonomously scrape, parse, synthesize, and generate insights from academic literature using RAG pipelines with vector search.",
  achievements: [
    "Implemented long-term context sharing and persistence with 95% retrieval relevance across multi-turn tasks",
    "Deployed interactive Streamlit interface with FastAPI orchestration for real-time research queries and insights visualization",
    "Reduced manual literature review time by 40% via automated exploration and multi-agent dialogue",
  ],
  tech: ["LangGraph", "LangChain", "Qdrant", "Pinecone", "FastAPI", "Embeddings"],
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
        <SectionHeader title="Project" subtitle="Intelligent Multi-Agent Research Assistant" />

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
                    <span className="mt-2 text-lg text-primary">•</span>
                    <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className={`${
                      i % 2 === 0
                        ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:scale-110'
                        : 'bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 hover:scale-110'
                    } transition-all duration-200 cursor-default`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://github.com/Sumit22012004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  aria-label="View more projects on GitHub"
                >
                  <Github className="h-4 w-4 text-primary" />
                  <span>View more projects on GitHub</span>
                </a>
                <Button asChild size="sm" className="bg-primary/90 hover:bg-primary">
                  <a href="https://github.com/Sumit22012004" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Open GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
