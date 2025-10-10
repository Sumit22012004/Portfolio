const AuroraBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_10%,hsl(var(--primary)/.15),transparent),radial-gradient(60%_80%_at_80%_10%,hsl(var(--secondary)/.15),transparent)]" />
      <div className="absolute -left-20 top-1/3 h-[28rem] w-[28rem] bg-primary/20 blur-3xl rounded-full animate-glow-pulse" />
      <div className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] bg-secondary/20 blur-3xl rounded-full animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] bg-[length:200%_100%] animate-shimmer" />
    </div>
  );
};

export default AuroraBackground;


