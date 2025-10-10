import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeader = ({ title, subtitle, align = "center" }: Props) => {
  return (
    <div className={cn("mb-16 relative", align === "center" ? "text-center" : "text-left")}> 
      <div className="absolute -inset-x-8 -top-6 h-16 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent)]">
        <div className="mx-auto h-full w-full bg-[radial-gradient(60%_100%_at_20%_0%,hsl(var(--primary)/.15),transparent),radial-gradient(60%_100%_at_80%_0%,hsl(var(--secondary)/.15),transparent)]" />
      </div>
      <h2 className="relative text-4xl md:text-6xl font-extrabold tracking-tight">
        <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--secondary)))] drop-shadow">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className={cn("relative mt-3 text-muted-foreground", align === "center" ? "mx-auto" : undefined)}>
          {subtitle}
        </p>
      )}
      <div className={cn("relative mt-4", align === "center" ? "mx-auto w-48" : "w-40")}> 
        <div className="h-[2px] w-full bg-gradient-to-r from-primary via-border to-secondary rounded-full" />
      </div>
    </div>
  );
};

export default SectionHeader;


