import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Intelligent Multi-Agent Research Assistant",
    period: "Mar 2025 - May 2025",
    description:
      "Collaborative multi-agent framework with specialized agents (Researcher, Summarizer, Analyst) for autonomous literature synthesis",
    achievements: [
      "95% retrieval relevance across multi-turn tasks",
      "Reduced manual literature review time by 40%",
      "Persistent memory with LangGraph and vector embeddings",
    ],
    tech: ["Multi-Agent", "RAG", "LangGraph", "Qdrant", "Pinecone", "FastAPI", "Streamlit"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
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
    gradient: "from-secondary/20 to-accent/20",
  },
];

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative AI solutions pushing the boundaries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <Card className="h-full p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)] group">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-sm text-foreground/70">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
