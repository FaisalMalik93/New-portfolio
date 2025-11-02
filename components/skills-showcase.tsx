"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import PixelBlast from "./pixel-blast"

export default function SkillsShowcase() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Next.js API", "Firebase", "MongoDB"],
    },
    {
      category: "AI & Tools",
      skills: ["OpenAI API", "LangChain", "Hugging Face", "Web Speech API", "Automation"],
    },
    {
      category: "Other",
      skills: ["MySQL", "Git", "REST APIs", "C/C++", "PHP"],
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

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="relative py-20 px-6 max-w-6xl mx-auto">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
          style={{ height: "600px", position: "relative" }}
        />
      </div>

      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="glassmorphism p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 relative z-10"
            >
              <h3 className="text-lg font-semibold mb-4 text-purple-400">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.li key={i} className="text-white/70 text-sm flex items-center gap-2" whileHover={{ x: 5 }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
