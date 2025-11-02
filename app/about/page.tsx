"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import SkillCard from "@/components/skill-card"
import { TechSphere } from "@/components/tech-sphere"
import LiquidEther from "@/components/OptimizedLiquidEther"

export default function AboutPage() {
  const skills = [
    { name: "React", level: 95, color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", level: 90, color: "from-purple-400 to-pink-400" },
    { name: "TypeScript", level: 88, color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-400" },
    { name: "Three.js", level: 85, color: "from-orange-400 to-red-400" },
    { name: "Node.js", level: 87, color: "from-green-400 to-emerald-400" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">About Me</h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              I'm a passionate full-stack developer with over 2 years of experience building modern web applications. My
              journey started with curiosity about how things work on the web, and it evolved into a career dedicated to
              creating beautiful, performant, and user-centric digital experiences.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <motion.div variants={itemVariants} className="glassmorphism p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Background</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                I started coding during college and fell in love with the challenge of building products that solve real
                problems. Since then, I've worked with startups and established companies, always focusing on clean code
                and great user experiences.
              </p>
              <p className="text-white/70 leading-relaxed">
                When I'm not coding, I'm exploring new design trends, contributing to open-source projects, and
                tinkering with creative web technologies.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glassmorphism p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-white/70">Build scalable web applications with React and Next.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-white/70">Create interactive 3D experiences with Three.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-white/70">Design smooth animations with Framer Motion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span className="text-white/70">Develop backend services with Node.js and databases</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center gradient-text"
            >
              Technologies I Work With
            </motion.h2>
            <TechSphere
              technologies={[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind",
                "MongoDB",
                "PostgreSQL",
                "Three.js",
              ]}
              radius={140}
            />
          </div>

          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 gradient-text"
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} variants={itemVariants} />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-12 rounded-xl mb-12"
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">Vision & Approach</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              I believe in the power of clean code, thoughtful design, and innovative problem-solving. Every project I
              take on is an opportunity to push boundaries and create solutions that not only work but delight users.
            </p>
            <p className="text-white/70 leading-relaxed">
              My approach combines technical excellence with creative thinking. I'm passionate about staying at the
              forefront of web development, constantly learning new tools and methodologies to deliver the best results
              for my clients.
            </p>
          </motion.div>
        </div>
      </section>
        <Footer />
      </div>
    </main>
  )
}
