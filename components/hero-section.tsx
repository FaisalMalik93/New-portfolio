"use client"

import { motion } from "framer-motion"
import Orb from "./Orb"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative w-full min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Block LiquidEther background from showing in hero section */}
      <div className="absolute inset-0 bg-black z-[1]" />

      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Orb hoverIntensity={0.8} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
      </div>

      {/* Interactive cursor glow effect - hidden on mobile */}
      <motion.div
        className="fixed pointer-events-none w-8 h-8 rounded-full border-2 border-cyan-400/50 z-50 mix-blend-screen hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <motion.div
        className="fixed pointer-events-none w-12 h-12 rounded-full border border-cyan-400/20 z-50 hidden md:block"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-[20] max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-bold mb-6 text-balance">
          <span className="gradient-text">Full Stack Developer</span>
          <br />
          <span className="text-white">& Creative Builder</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          I craft modern web experiences with cutting-edge technologies. Specializing in Next.js, React, and interactive
          3D experiences with AI integration and automation solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 flex gap-8 justify-center text-white/60 flex-wrap">
          <motion.div
            className="glassmorphism px-6 py-4 rounded-lg"
            whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.5)" }}
          >
            <p className="text-2xl font-bold gradient-text">15+</p>
            <p className="text-sm">Projects Built</p>
          </motion.div>
          <motion.div
            className="glassmorphism px-6 py-4 rounded-lg"
            whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.5)" }}
          >
            <p className="text-2xl font-bold gradient-text">2+</p>
            <p className="text-sm">Years Experience</p>
          </motion.div>
          <motion.div
            className="glassmorphism px-6 py-4 rounded-lg"
            whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.5)" }}
          >
            <p className="text-2xl font-bold gradient-text">10+</p>
            <p className="text-sm">Technologies</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-[20]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="text-white/50 text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  )
}
