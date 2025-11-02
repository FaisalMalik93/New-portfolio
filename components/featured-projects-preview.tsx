"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function FeaturedProjectsPreview() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: "Customer Support Bot",
      description: "AI-powered chatbot using Next.js, LangChain, and OpenAI GPT-4 for automated customer assistance.",
      tags: ["Next.js", "LangChain", "OpenAI", "AI"],
    },
    {
      title: "Voice-Enabled Chatbot",
      description: "Interactive voice chatbot with Web Speech API and OpenAI integration for voice interactions.",
      tags: ["Next.js", "Web Speech API", "OpenAI", "Voice"],
    },
    {
      title: "AI Study Helper",
      description: "Educational companion web app with NLP integration providing summaries, quizzes, and flashcards.",
      tags: ["Next.js", "Hugging Face", "Firebase", "NLP"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section ref={ref} className="relative py-20 px-6 max-w-6xl mx-auto">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="glassmorphism p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all cursor-pointer group"
            >
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm mb-4 text-pretty">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
