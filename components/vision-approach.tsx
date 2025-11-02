"use client"

import { motion } from "framer-motion"

export function VisionApproach() {
  const items = [
    {
      title: "Creative Problem Solving",
      description: "I approach every challenge as an opportunity to innovate and find elegant solutions.",
    },
    {
      title: "User-Centric Design",
      description:
        "Every line of code is written with the end-user in mind, ensuring beautiful and intuitive experiences.",
    },
    {
      title: "Continuous Learning",
      description: "I stay at the forefront of technology, constantly exploring new tools and methodologies.",
    },
    {
      title: "Clean Architecture",
      description: "I believe in writing maintainable, scalable code that stands the test of time.",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="glassmorphism p-6 rounded-lg"
        >
          <h4 className="text-xl font-bold text-cyan-400 mb-3">{item.title}</h4>
          <p className="text-white/70 leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
