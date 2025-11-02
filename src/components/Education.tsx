import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Tilt from "@/components/Tilt";

const education = [
  {
    title: "Bachelor of Engineering — Computer Science (AI & ML Specialization)",
    school: "Chandigarh University",
    period: "2021 – 2025",
    location: "Mohali, Punjab",
  },
  {
    title: "Senior Secondary (Class 12th)",
    school: "Kendriya Vidyalaya Sector 47 Chandigarh",
    period: "2020 – 2021",
    location: "Chandigarh, India",
  },
  {
    title: "Secondary (Class 10th)",
    school: "Kendriya Vidyalaya Sector 47 Chandigarh",
    period: "2018 – 2019",
    location: "Chandigarh, India",
  },
];

const Education = () => {
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
              setVisibleItems((prev) => prev.filter((i) => i !== index));
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
    <section id="education" className="py-24 px-4 relative overflow-hidden perspective-1200">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeader title="Education" subtitle="Academic qualifications and milestones" />

        <div className="space-y-6 preserve-3d">
          {education.map((edu, i) => {
            const isVisible = visibleItems.includes(i);
            return (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`transition-3d ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ 
                  transform: isVisible 
                    ? "perspective(1000px) translateY(0) translateZ(0) rotateX(0deg) scale(1)" 
                    : "perspective(1000px) translateY(40px) translateZ(-60px) rotateX(8deg) scale(0.95)",
                  transitionDelay: `${i * 100}ms`,
                  transitionDuration: "0.7s"
                }}
              >
                <Tilt maxTiltDeg={4}>
                  <Card
                    className={`relative overflow-hidden p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-3d-smooth group ${
                      i === 0
                        ? 'hover:border-secondary/50 hover:shadow-[0_0_35px_hsl(var(--secondary)/0.3),0_20px_60px_-15px_rgba(0,0,0,0.3)]'
                        : i === 1
                        ? 'hover:border-primary/50 hover:shadow-[0_0_35px_hsl(var(--primary)/0.3),0_20px_60px_-15px_rgba(0,0,0,0.3)]'
                        : 'hover:border-secondary/50 hover:shadow-[0_0_35px_hsl(var(--secondary)/0.3),0_20px_60px_-15px_rgba(0,0,0,0.3)]'
                    }`}
                    style={{ transform: "translateZ(0)" }}
                  >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`p-3 ${i === 0 || i === 2 ? 'bg-secondary/10' : 'bg-primary/10'} rounded-lg`}>
                      <GraduationCap className={`w-6 h-6 ${i === 0 || i === 2 ? 'text-secondary' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.title}</h3>
                      <p className={`font-semibold ${i === 0 || i === 2 ? 'text-secondary' : 'text-primary'}`}>{edu.school}</p>
                      <div className="text-sm text-muted-foreground mt-1">{edu.period} • {edu.location}</div>
                    </div>
                  </div>
                </Card>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;


