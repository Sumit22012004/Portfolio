import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "RAG/Multi-Agent AI Engineer",
    company: "VRVV Ventures",
    location: "Bangalore, Karnataka",
    period: "May 2025 - Present",
    highlights: [
      "Built conversational AI with persistent memory achieving 95.2% accuracy (vs 86% benchmark)",
      "Engineered multi-agent system with Gemini 2.5, GPT-5, and offline LLMs for maximum privacy",
      "Designed AI personality modules with Zero-shot, Few-shot, CoT, and Prompt Chaining",
    ],
    tech: ["RAG", "Multi-Agent", "Qdrant", "MongoDB", "Memgraph", "Gemini 2.5", "GPT-5"],
  },
  {
    role: "Software Development Trainee",
    company: "Udyat Technologies",
    location: "Mohali, Punjab",
    period: "Sep 2024 - Mar 2025",
    highlights: [
      "Optimized backend APIs with FastAPI, LangChain, boosting efficiency by 30%",
      "Deployed multi-agent workflows for AI automation and scalable chatbot applications",
      "Leveraged AWS Lambda, EC2 with CI/CD for seamless deployment and scaling",
    ],
    tech: ["FastAPI", "LangChain", "GPT-5", "Claude", "AWS", "MySQL", "MongoDB"],
  },
];

const Experience = () => {
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
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Building cutting-edge AI solutions at scale
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-20"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <Card
                  className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] ${
                    index % 2 === 0 ? "md:mr-[52%]" : "md:ml-[52%]"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-10 -right-[calc(50%+2rem)] w-4 h-4 bg-primary rounded-full ring-4 ring-background animate-glow-pulse" 
                       style={{ 
                         right: index % 2 === 0 ? "-2.3rem" : "auto",
                         left: index % 2 === 1 ? "-2.3rem" : "auto"
                       }}></div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                        <span className="text-sm">• {exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
