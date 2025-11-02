"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glassmorphism border border-cyan-500/30 rounded-2xl p-12 md:p-16 text-center overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 animate-pulse -z-10" />

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hello, feel free to reach out.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 text-lg"
            >
              Start a Project
            </Link>
            <a
              href="mailto:faisalmalik93939@gmail.com"
              className="px-8 py-4 rounded-lg border-2 border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all hover:scale-105 text-lg"
            >
              Send Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
