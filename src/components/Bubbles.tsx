import { useState, useEffect } from "react";

const Bubbles = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bubbles = Array.from({ length: 12 });

  const getRandomSize = () => {
    const maxSize = isMobile ? 30 : 120;
    return Math.random() * maxSize + 30;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {bubbles.map((_, index) => {
        const size = getRandomSize();

        return (
          <div
            key={index}
            className="bubble absolute rounded-full bg-pink dark:bg-teal z-100 animate-bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: Math.random() * (0.6 - 0.1) + 0.1,
              animationDuration: `${Math.random() * 10 + 5}s`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Bubbles;
