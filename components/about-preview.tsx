"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function AboutPreview() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={ref} className="relative py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <img
              src="/m2.jpeg"
              alt="Faisal Habib"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="gradient-text">About Faisal</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-4 text-pretty">
            I have completed my Software Engineering from University of Central Punjab, passionate about web
            development, AI integration, and intelligent systems.
          </p>
          <p className="text-white/70 text-lg leading-relaxed mb-6 text-pretty">
            With hands-on experience in modern web technologies like React.js, Next.js, and full-stack development, I
            specialize in crafting responsive, performance-driven applications. Currently exploring AI tools, chatbots
            through OpenAI API, and automation solutions.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all hover:scale-105"
          >
            Read Full Story
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glassmorphism p-8 rounded-xl border border-white/10 md:col-span-2 order-3"
        >
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Highlights</h3>
          <ul className="space-y-3">
            {[
              "Full-stack web development with modern frameworks",
              "AI integration and chatbot development",
              "React.js & Next.js specialization",
              "Backend with Node.js, Express.js",
              "Databases: MongoDB, MySQL",
              "Passion for emerging technologies",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 text-white/70"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
