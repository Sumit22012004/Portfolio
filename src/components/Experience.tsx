import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "RAG/ Multi-Agent AI Engineer",
    company: "VRVV Ventures",
    location: "Bangalore, Karnataka",
    period: "May 2025 – Present",
    highlights: [
      "Developed an advanced conversational AI system with persistent memory, enabling storage, retrieval, and contextualization of user interactions.",
      "Designed a memory architecture using Qdrant, MongoDB, and Memgraph for encrypted user data and lifelong memory visualization, achieving 95.2% accuracy in LongMemEval, surpassing Mistral’s 86% benchmark.",
      "Engineered a multi-agent system and secure, scalable backend integrating modern LLMs (including local deployments) with robust encryption and orchestration.",
      "Designed and managed AI personality modules leveraging zero-shot, few-shot, role prompting, chain-of-thought (CoT), and prompt chaining techniques.",
      "Automated memory updates, data cleanup, and system health monitoring through optimized cron jobs at multiple intervals.",
    ],
    tech: ["RAG", "Multi-Agent", "Qdrant", "MongoDB", "Memgraph", "LLMs", "Security"],
    icon: Briefcase,
  },
  {
    role: "Software Development Trainee",
    company: "Udyat Technologies",
    location: "Mohali, Punjab",
    period: "September 2024 – March 2025",
    highlights: [
      "Developed and optimized backend APIs using Python, FastAPI, and LangChain, integrating advanced LLMs with Retrieval-Augmented Generation (RAG) and prompt engineering for accuracy and efficiency improvements.",
      "Designed and deployed multi-agent workflows for AI-driven automation, enabling session management, fine‑tuned conversational responses, and scalable chatbot applications.",
      "Leveraged AWS (Lambda, EC2) and CI/CD pipelines to ensure seamless deployment and performance optimization while integrating OCR, custom NLP models, and vectorized insights generation.",
    ],
    tech: ["Python", "FastAPI", "LangChain", "AWS", "MySQL", "MongoDB", "NLP"],
    icon: Calendar,
  },
];

const Experience = () => {
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
      { threshold: 0.2, rootMargin: "-50px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeader title="Professional Journey" subtitle="Transforming ideas into intelligent solutions" />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isVisible = visibleItems.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${isLeft ? "-translate-x-20" : "translate-x-20"}`
                  }`}
                >
                  <Card
                    className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 group relative overflow-hidden hover:scale-[1.02] ${
                      isLeft
                        ? "hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] md:mr-[52%]"
                        : "hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.2)] md:ml-[52%]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div 
                      className={`hidden md:block absolute top-10 w-4 h-4 rounded-full ring-4 ring-background ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} shadow-[0_0_20px_hsl(var(--${index % 2 === 0 ? 'primary' : 'secondary'})/0.5)]`}
                      style={{ 
                        right: isLeft ? "-2.3rem" : "auto",
                        left: isLeft ? "auto" : "-2.3rem"
                      }}
                    ></div>

                    <div className="relative z-10 flex items-start gap-4 mb-4">
                      <div className={`p-3 ${index % 2 === 0 ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-secondary/10 group-hover:bg-secondary/20'} rounded-lg transition-colors`}>
                        <Icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold text-foreground mb-1 transition-colors ${index % 2 === 0 ? 'group-hover:text-primary' : 'group-hover:text-secondary'}`}>
                          {exp.role}
                        </h3>
                        <p className={`text-lg font-semibold ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2">
                          <span className="text-sm">{exp.period}</span>
                          <span className="text-sm">• {exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="mb-6 pl-6 list-disc marker:text-primary space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-foreground/80">
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges removed per request */}
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
