const AuroraBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Simple starfield - small stars */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => {
          const size = 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 3 + Math.random() * 4;
          const delay = Math.random() * 8;
          
          return (
            <div
              key={`star-small-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: '#ffffff',
                boxShadow: '0 0 2px rgba(255, 255, 255, 0.3)',
                animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
                opacity: 0.15 + Math.random() * 0.2,
              }}
            />
          );
        })}
      </div>

      {/* Brighter accent stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const size = 1.5;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 2 + Math.random() * 4;
          const delay = Math.random() * 6;
          
          return (
            <div
              key={`star-bright-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: '#ffffff',
                boxShadow: '0 0 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.3)',
                animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
                opacity: 0.3 + Math.random() * 0.25,
              }}
            />
          );
        })}
      </div>

      {/* Single shooting star - very rare */}
      <div className="absolute inset-0">
        <div
          className="absolute h-[1px] w-[50px]"
          style={{
            top: '30%',
            left: '-100px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.5) 50%, transparent)',
            boxShadow: '0 0 2px rgba(255, 255, 255, 0.3)',
            animation: 'shootingStar 2s linear 12s infinite',
            opacity: 0,
          }}
        />
      </div>
    </div>
  );
};

export default AuroraBackground;


