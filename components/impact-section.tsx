"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function ImpactSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0, commits: 0 })

  useEffect(() => {
    if (!inView) return

    const interval = setInterval(() => {
      setCounts((prev) => ({
        projects: prev.projects < 15 ? prev.projects + 1 : 15,
        years: prev.years < 2 ? prev.years + 0.1 : 2,
        clients: prev.clients < 10 ? prev.clients + 1 : 10,
        commits: prev.commits < 200 ? prev.commits + 20 : 200,
      }))
    }, 30)

    return () => clearInterval(interval)
  }, [inView])

  const stats = [
    { label: "Projects Completed", value: Math.floor(counts.projects), suffix: "+" },
    { label: "Years of Experience", value: counts.years.toFixed(1), suffix: "" },
    { label: "Happy Collaborators", value: counts.clients, suffix: "+" },
    { label: "Code Commits", value: Math.floor(counts.commits), suffix: "+" },
  ]

  return (
    <section ref={ref} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
          <span className="gradient-text">Impact by Numbers</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="glassmorphism p-8 rounded-xl border border-white/10 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.p className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
                {stat.suffix}
              </motion.p>
              <p className="text-white/60 text-sm mt-2 text-pretty">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
