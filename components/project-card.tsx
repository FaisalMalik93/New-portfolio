"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  featured?: boolean
}

interface Props {
  project: Project
  variants: any
}

export default function ProjectCard({ project, variants }: Props) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8 }}
      className={`group glassmorphism rounded-lg overflow-hidden transition-all duration-300 ${project.featured ? "lg:col-span-1" : ""}`}
    >
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <Link href={project.link} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-400 border border-white/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
