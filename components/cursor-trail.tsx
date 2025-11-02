"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TrailPoint {
  id: number
  x: number
  y: number
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    let lastX = 0
    let lastY = 0
    let nextId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e

      // Only add to trail if mouse moved more than 10px
      if (Math.hypot(clientX - lastX, clientY - lastY) > 10) {
        lastX = clientX
        lastY = clientY
        const id = nextId++

        setTrail((prev) => [...prev.slice(-8), { id, x: clientX, y: clientY }])
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed w-2 h-2 rounded-full bg-cyan-400/60 pointer-events-none"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            left: point.x,
            top: point.y,
            zIndex: 40,
          }}
        />
      ))}
    </>
  )
}
