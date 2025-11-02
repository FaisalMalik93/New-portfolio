"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ExperienceTimeline() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const experiences = [
    {
      year: "2025",
      title: "Full Stack Development",
      description: "Building AI-integrated web applications with Next.js, React, and modern tools",
      type: "project",
    },
    {
      year: "2025",
      title: "AI Integration Focus",
      description: "Exploring chatbots, LangChain, and OpenAI API for intelligent solutions",
      type: "milestone",
    },
    {
      year: "2024",
      title: "React & Next.js Mastery",
      description: "Deep dive into modern frontend frameworks and server-side rendering",
      type: "learning",
    },
    {
      year: "2023",
      title: "Web Development Foundation",
      description: "Established expertise in HTML, CSS, JavaScript, and responsive design",
      type: "foundation",
    },
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="relative py-20 px-6 max-w-6xl mx-auto">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
          <span className="gradient-text">My Journey</span>
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent md:transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative md:flex md:items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-0 top-2 md:top-1/2 w-3 h-3 rounded-full bg-cyan-400 border-4 border-black md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10" />

                <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div className="glassmorphism p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                    <p className="text-cyan-400 font-semibold text-sm">{exp.year}</p>
                    <h3 className="text-xl font-bold text-white mt-2 text-balance">{exp.title}</h3>
                    <p className="text-white/60 text-sm mt-2 text-pretty">{exp.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
