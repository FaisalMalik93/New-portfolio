"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface TechSphereProps {
  technologies: string[]
  radius?: number
}

export function TechSphere({ technologies, radius = 150 }: TechSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const angle = Math.atan2(y, x)
      container.style.setProperty("--mouse-angle", `${angle}rad`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const angleSlice = (Math.PI * 2) / technologies.length

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center"
      style={{ perspective: "1000px" } as React.CSSProperties}
    >
      <motion.div
        className="relative w-80 h-80"
        animate={{ rotateY: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {technologies.map((tech, index) => {
          const angle = angleSlice * index
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius

          return (
            <motion.div
              key={tech}
              className="absolute w-20 h-20 flex items-center justify-center"
              style={{
                left: "50%",
                top: "50%",
                transform: `translateX(calc(-50% + ${x}px)) translateZ(${z}px)`,
              }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-xs font-semibold text-center p-2 neon-glow">
                {tech}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
