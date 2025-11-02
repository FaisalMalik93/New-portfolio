"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import LiquidEther from "@/components/OptimizedLiquidEther"

const experiences = [
  {
    role: "Web development Internship",
    company: "The Intern Group",
    period: "2023 - 2024",
    description:
      "Leading development of scalable web applications, mentoring junior developers, and architecting microservices.",
    highlights: ["React & Next.js", "Node.js", "Cloud Architecture"],
  },
  {
    role: "Full-Stack Developer Internship",
    company: "DevelopersHub",
    period: "2024 - 2025",
    description: "Built responsive web applications and integrated AI features. Improved performance by 40%.",
    highlights: ["Full-stack development", "AI Integration", "Performance Optimization"],
  },
  {
    role: "Freelancer",
    company: "Fiverr and Upwork",
    period: "2023 - Present",
    description: "Developed interactive UI components and animations. Worked on complex data visualizations.",
    highlights: ["React", "Next", "Python"],
  },
]

export default function ExperiencePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <main className="min-h-screen bg-black relative">
      <div className="fixed inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={15}
          cursorSize={80}
          isViscous={false}
          viscous={20}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.3}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={1.8}
          takeoverDuration={0.2}
          autoResumeDelay={2000}
          autoRampDuration={0.4}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
      <section className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Experience</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Journey through my professional growth and the projects that shaped my expertise.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 hidden sm:block" />

            {/* Timeline items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="sm:ml-20">
                  {/* Timeline dot - hidden on mobile */}
                  <div className="absolute -left-7 top-2 w-6 h-6 rounded-full bg-black border-2 border-cyan-400 z-10 hidden sm:block" />

                  {/* Card */}
                  <div className="glassmorphism p-6 rounded-lg hover:border-white/30 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-white break-words">{exp.role}</h3>
                          <p className="text-cyan-400 text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm flex-shrink-0 self-start">
                        <Calendar size={14} className="flex-shrink-0" />
                        <span className="whitespace-nowrap">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-white/70 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
        <Footer />
      </div>
    </main>
  )
}
