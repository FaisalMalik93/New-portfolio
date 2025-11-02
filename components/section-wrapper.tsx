"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`min-h-screen pt-28 pb-20 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}

interface SectionTitleProps {
  title: string
  description?: string
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">{title}</h1>
      {description && <p className="text-lg text-white/70 max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  )
}
