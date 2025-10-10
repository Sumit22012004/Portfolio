import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  Layers,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "LLMs & AI",
    icon: Brain,
    skills: [
      "GPT-5",
      "Claude",
      "Gemini 2.5",
      "Llama",
      "Multi-Agent Systems",
      "RAG",
      "Prompt Engineering",
      "NLP",
    ],
    color: "text-primary",
  },
  {
    title: "AI Frameworks",
    icon: Layers,
    skills: [
      "LangChain",
      "LangGraph",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "Scikit-Learn",
    ],
    color: "text-secondary",
  },
  {
    title: "Backend & APIs",
    icon: Code2,
    skills: [
      "Python",
      "FastAPI",
      "RESTful APIs",
      "OOP",
      "Automation",
    ],
    color: "text-accent",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "Qdrant",
      "Pinecone",
      "MongoDB",
      "MySQL",
      "Redis",
      "Memgraph",
      "LanceDB",
    ],
    color: "text-primary",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS Lambda",
      "AWS EC2",
      "Azure",
      "CI/CD",
      "Git",
      "Docker",
    ],
    color: "text-secondary",
  },
  {
    title: "Soft Skills",
    icon: Zap,
    skills: [
      "Problem-Solving",
      "Innovation",
      "Team Leadership",
      "Strategic Thinking",
      "Communication",
    ],
    color: "text-accent",
  },
];

const Skills = () => {
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
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise across the AI & ML technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`transition-all duration-700 delay-${index * 100} ${
                  visibleItems.includes(index)
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-200 hover:scale-110 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
