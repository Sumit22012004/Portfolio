import { useCallback, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("home");

  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const mostVisible = visible.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          const id = (mostVisible.target as HTMLElement).id;
          setActive(id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-border/50 bg-gradient-to-r from-primary/15 via-background/60 to-secondary/15 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 shadow-[0_10px_40px_hsl(var(--primary)/0.12)] relative overflow-hidden">
          <div className="absolute -left-8 -top-10 h-24 w-40 bg-primary/25 blur-2xl rounded-full animate-glow-pulse" />
          <div className="absolute -right-8 -top-10 h-24 w-40 bg-secondary/25 blur-2xl rounded-full animate-glow-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--primary)/.18),transparent,hsl(var(--secondary)/.18))] bg-[length:200%_100%] animate-shimmer opacity-30" />
          <div className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-primary/40 via-border/60 to-secondary/40" />

          <div className="relative flex items-center justify-between px-5 py-3">
            <div className="absolute inset-0 rounded-2xl pointer-events-none [mask-image:radial-gradient(120%_80%_at_50%_-20%,#000,transparent)]" />
            <Button
              onClick={() => handleScrollTo("contact")}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="Hire Me"
            >
              Hire Me
            </Button>
            <div className="flex items-center gap-1">
              {sections.map((s, idx) => {
                const isLeft = idx < Math.ceil(sections.length / 2);
                const isActive = active === s.id;
                const base = isLeft
                  ? "text-foreground/80 hover:text-primary hover:bg-primary/10"
                  : "text-foreground/80 hover:text-secondary hover:bg-secondary/10";
                const activeCls = isLeft
                  ? "text-primary bg-primary/15"
                  : "text-secondary bg-secondary/15";
                return (
                  <Button
                    key={s.id}
                    variant="ghost"
                    className={`${isActive ? activeCls : base} px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:${isLeft ? 'ring-primary/40' : 'ring-secondary/40'}`}
                    onClick={() => handleScrollTo(s.id)}
                    aria-label={`Go to ${s.label}`}
                  >
                    {s.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


