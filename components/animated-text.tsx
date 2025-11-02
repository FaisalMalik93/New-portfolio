"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  variant?: "gradient" | "neon" | "default"
  className?: string
}

export function AnimatedText({ text, variant = "default", className = "" }: AnimatedTextProps) {
  const variantClasses = {
    gradient: "gradient-text",
    neon: "text-cyan-400 neon-glow",
    default: "text-white",
  }

  const words = text.split(" ")

  return (
    <motion.span
      className={`${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
