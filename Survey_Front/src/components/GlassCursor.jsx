// GlassCursor.jsx
import { useEffect, useState } from "react";

export default function GlassCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
      }}
    >
      <div
        className="w-48 h-48 rounded-full bg-white opacity-10 blur-3xl"
        style={{
          mixBlendMode: "overlay",
        }}
      ></div>
    </div>
  );
}
