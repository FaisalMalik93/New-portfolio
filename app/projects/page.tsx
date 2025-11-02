"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import LiquidEther from "@/components/OptimizedLiquidEther"

export default function ProjectsPage() {
  const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/ecommerce-dashboard.png",
    link: "#",
    featured: true,
  },
  {
    title: "3D Product Visualizer",
    description: "Interactive 3D product viewer with Three.js allowing customers to rotate and inspect items in real-time.",
    tags: ["React", "Three.js", "WebGL"],
    image: "/3d-product-visualization.png",
    link: "#",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered suggestions and natural language processing capabilities.",
    tags: ["Next.js", "Socket.io", "OpenAI API"],
    image: "/ai-chatbot-interface.png",
    link: "#",
    featured: true,
  },
  {
    title: "Portfolio & Services Website",
    description: "A fully responsive Next.js website showcasing web development, AI integration, and chatbot solutions, styled with Tailwind CSS and featuring a Contact Form via Next.js API and EmailJS.",
    tags: ["Next.js", "Tailwind CSS", "AI Integration", "EmailJS"],
    image: "/services.jpg",
    link: "#",
    featured: true,
  },
  {
    title: "Customer Support Bot",
    description: "AI-powered support chatbot built with Next.js and LangChain, integrated with OpenAI GPT-4 for automated customer assistance and ticket resolution.",
    tags: ["Next.js", "LangChain", "OpenAI GPT-4", "AI Chatbot"],
    image: "/csb.jpg",
    link: "#",
    featured: true,
  },
  {
    title: "Smart Job Recommendation System",
    description: "Next.js web app integrated with Python ML models via REST API to recommend jobs by analyzing skills and experience using AI algorithms.",
    tags: ["Next.js", "Python", "Machine Learning", "AI"],
    image: "/jobs.jpg",
    link: "#",
    featured: true,
  },
  {
    title: "Fav Panda - Food Delivering Application",
    description: "Data Structures-based app providing a seamless platform for users to order and receive food from various restaurants using Graphs and File Handling.",
    tags: ["Data Structures", "Graphs", "File Handling", "Food Delivery"],
    image: "/favpanda.png",
    link: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with real-time metrics, custom charts, and export functionality.",
    tags: ["React", "Recharts", "Node.js"],
    image: "/analytics-dashboard.png",
    link: "#",
    featured: false,
  },
  {
    title: "CMS Platform",
    description: "Headless CMS with intuitive content management, version control, and multi-language support.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/content-management-system.png",
    link: "#",
    featured: false,
  },
  {
    title: "Design System",
    description: "Comprehensive component library and design system documentation for enterprise applications.",
    tags: ["React", "Storybook", "TypeScript"],
    image: "/design-system-components.png",
    link: "#",
    featured: false,
  },
];


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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Featured Projects</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              A selection of recent projects showcasing my expertise in full-stack development, interactive experiences,
              and modern web technologies.
            </p>
          </motion.div>

          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-12 text-white"
            >
              Featured Works
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {projects
                .filter((p) => p.featured)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} variants={itemVariants} />
                ))}
            </motion.div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-12 text-white"
            >
              Other Projects
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} variants={itemVariants} />
                ))}
            </motion.div>
          </div>
        </div>
        </section>
        <Footer />
      </div>
    </main>
  )
}
