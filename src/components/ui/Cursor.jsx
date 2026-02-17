import { useEffect, useState } from "react"

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white pointer-events-none z-50 transition-transform duration-150 mix-blend-difference"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  )
}
