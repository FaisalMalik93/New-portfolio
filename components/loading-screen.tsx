"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-none"
    >
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">Faisal Habib</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-white/60 text-lg mb-8">
          Full Stack Developer & AI Specialist
        </motion.p>

        {/* Loading bars */}
        <motion.div variants={itemVariants} className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-8 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full"
              animate={{
                scaleY: [1, 1.5, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
