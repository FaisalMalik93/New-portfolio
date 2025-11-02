"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingCardProps {
  children: ReactNode
  delay?: number
}

export function FloatingCard({ children, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glassmorphism p-6 rounded-xl hover:border-white/30 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
    >
      {children}
    </motion.div>
  )
}
