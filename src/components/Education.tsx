import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

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
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeader title="Education" subtitle="Academic qualifications and milestones" />

        <div className="space-y-6">
          {education.map((edu, i) => {
            const isVisible = visibleItems.includes(i);
            return (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Card
                  className={`relative overflow-hidden p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-500 group hover:scale-[1.02] ${
                    i === 0
                      ? 'hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.25)]'
                      : i === 1
                      ? 'hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]'
                      : 'hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.25)]'
                  }`}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;


