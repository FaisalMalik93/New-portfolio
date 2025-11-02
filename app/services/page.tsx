"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Code, Zap, Settings, LinkIcon } from "lucide-react"
import LiquidEther from "@/components/LiquidEther"

const services = [
  {
    icon: Code,
    title: "Web & App Development",
    description: "Build scalable, modern web applications using React, Next.js, and cutting-edge technologies.",
    features: ["React & Next.js", "Full-stack development", "Responsive design", "Performance optimization"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "AI & Automation Solutions",
    description: "Integrate AI capabilities and automate workflows to streamline your business processes.",
    features: ["AI integration", "Workflow automation", "Machine learning", "Chatbots & LLM integration"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Settings,
    title: "Custom CRM Systems",
    description: "Design and develop tailored CRM solutions specifically for your business needs.",
    features: ["Custom workflows", "Database design", "User management", "Real-time analytics"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: LinkIcon,
    title: "API Integrations",
    description: "Seamlessly integrate third-party APIs and build robust backend services.",
    features: ["REST & GraphQL APIs", "Payment integration", "Third-party services", "Data synchronization"],
    color: "from-orange-500 to-red-500",
  },
]

export default function ServicesPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Services</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Comprehensive solutions to elevate your digital presence and drive business growth.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group glassmorphism p-8 rounded-xl hover:border-white/30 transition-all hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden"
                >
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-white/60 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
        <Footer />
      </div>
    </main>
  )
}
