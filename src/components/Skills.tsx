import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
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
      "Mistral",
      "Nvidia",
      "Multi-Agent Systems",
      "RAG",
      "Generative AI",
      "Prompt Engineering",
      "NLP",
      "Deep Learning",
      "Machine Learning",
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
      "NumPy",
      "Pandas",
      "Matplotlib",
      "OpenCV",
      "spaCy",
      "TTS",
      "STT",
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
      "LLM Integration",
      "OOP",
      "Rule Engine Design",
      "Chatbots",
      "Testing & Debugging",
      "Automation",
    ],
    color: "text-primary",
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
    color: "text-secondary",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Azure",
      "CI/CD",
      "Git",
      "Docker",
      "Postman",
      "Monitoring",
      "Tableau",
      "Streamlit",
    ],
    color: "text-primary",
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
    color: "text-secondary",
  },
];

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            } else {
              setVisibleItems((prev) => prev.filter(i => i !== index));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader title="Technical Arsenal" subtitle="Expertise across the AI & ML technology stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isVisible = visibleItems.includes(index);
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="relative overflow-hidden h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-[1.03] group hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 ${index % 2 === 0 ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-secondary/10 group-hover:bg-secondary/20'} rounded-lg transition-colors`}>
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
                        className={`${
                          index % 2 === 0
                            ? 'bg-primary/10 border-primary/20 text-primary hover:bg-primary/20'
                            : 'bg-secondary/10 border-secondary/20 text-secondary hover:bg-secondary/20'
                        } hover:scale-110 transition-all duration-200 cursor-default`}
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
