import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        width: "20px",
        height: "20px",
        background: "#001010",
        border: "2px solid #fff",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
        zIndex: 9999,
        transition: "transform 0.08s ease",
      }}
    />
  );
}
