"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  color: string
}

interface Props {
  skill: Skill
  variants: any
}

export default function SkillCard({ skill, variants }: Props) {
  return (
    <motion.div
      variants={variants}
      className="glassmorphism p-6 rounded-lg hover:border-white/30 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-white">{skill.name}</h4>
        <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
          {skill.level}%
        </span>
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  )
}
