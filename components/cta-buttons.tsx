"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-6 justify-center"
    >
      <Link href="/projects">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
        >
          View My Work
          <ArrowRight size={18} />
        </motion.button>
      </Link>
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all"
        >
          Hire Me
        </motion.button>
      </Link>
    </motion.div>
  )
}
