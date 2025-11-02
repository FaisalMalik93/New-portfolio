"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import LiquidEther from "@/components/LiquidEther"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn best practices for structuring large-scale Next.js applications with performance in mind.",
    date: "Mar 15, 2024",
    category: "Web Development",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Performance"],
  },
  {
    id: 2,
    title: "Integrating AI into Your Web Projects",
    excerpt: "Explore practical ways to add AI capabilities to your applications using modern APIs and frameworks.",
    date: "Mar 10, 2024",
    category: "AI & Automation",
    readTime: "6 min read",
    tags: ["AI", "API Integration", "JavaScript"],
  },
  {
    id: 3,
    title: "Creating Stunning 3D Animations with Three.js",
    excerpt: "Dive into creating interactive 3D experiences on the web using Three.js and React.",
    date: "Mar 5, 2024",
    category: "3D Graphics",
    readTime: "10 min read",
    tags: ["Three.js", "WebGL", "Animation"],
  },
  {
    id: 4,
    title: "Mastering Tailwind CSS for Modern UI Design",
    excerpt: "Tips and tricks for efficiently using Tailwind CSS to build beautiful user interfaces.",
    date: "Feb 28, 2024",
    category: "CSS & Design",
    readTime: "7 min read",
    tags: ["Tailwind", "CSS", "Design"],
  },
  {
    id: 5,
    title: "Advanced TypeScript Patterns",
    excerpt: "Deep dive into advanced TypeScript patterns that will level up your development skills.",
    date: "Feb 20, 2024",
    category: "TypeScript",
    readTime: "9 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 6,
    title: "Automating Your Development Workflow",
    excerpt: "Streamline your development process with automation tools and best practices.",
    date: "Feb 15, 2024",
    category: "DevOps",
    readTime: "6 min read",
    tags: ["Automation", "DevOps", "Productivity"],
  },
]

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
      <section className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Blog</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, AI, and technology.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="group glassmorphism rounded-xl overflow-hidden hover:border-white/30 transition-all hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col"
              >
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-6 line-clamp-2 flex-grow">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded text-xs bg-white/5 text-white/60 hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="text-xs text-white/60 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
        <Footer />
      </div>
    </main>
  )
}
