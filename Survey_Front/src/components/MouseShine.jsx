import { useEffect, useState } from "react";

function MouseShine() {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const smoothFollow = () => {
      setCurrentPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.1,
        y: prev.y + (targetPosition.y - prev.y) * 0.1,
      }));

      animationFrameId = requestAnimationFrame(smoothFollow);
    };

    animationFrameId = requestAnimationFrame(smoothFollow);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPosition]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px at ${currentPosition.x}px ${currentPosition.y}px, rgba(255, 255, 255, 0.15), transparent 40%)`,
        mixBlendMode: "overlay",
        filter: "blur(80px)",
        opacity: 0.8,
        transition: "background 0.05s ease",
      }}
    />
  );
}

export default MouseShine;
