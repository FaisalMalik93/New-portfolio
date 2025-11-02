"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, MessageSquare, Send } from "lucide-react"
import LiquidEther from "@/components/OptimizedLiquidEther"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_v2weehv", // Service ID
        "template_wxi1y2l", // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          from_email: formData.email,
        },
        "T5xSAyU4aOr7t8pgc" // Public Key
      )

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error("EmailJS Error:", err)
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "faisalmalik93939@gmail.com",
      href: "mailto:faisalmalik93939@gmail.com",
    },
    {
      icon: MessageSquare,
      label: "Twitter",
      value: "@FaisalMali48211",
      href: "https://x.com/FaisalMali48211?t=tVh7biYRVcqkCix_ssavlw&s=09",
    },
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Let's Work Together</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Have an idea or want to collaborate? I'd love to hear from you. Reach out and let's create something
              amazing together.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-8 text-white">Contact Info</h2>
                <div className="space-y-6">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        className="group glassmorphism p-6 rounded-lg hover:border-white/30 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        <div className="flex items-start gap-4">
                          <Icon className="text-cyan-400 mt-1" size={24} />
                          <div>
                            <p className="text-white/60 text-sm font-medium">{method.label}</p>
                            <p className="text-white group-hover:text-cyan-400 transition-colors">{method.value}</p>
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
                <div className="flex gap-4">
                  {["Twitter", "GitHub", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-lg glassmorphism flex items-center justify-center text-white/70 hover:text-cyan-400 hover:border-white/30 transition-all"
                    >
                      {social.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                      className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-center"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-center"
                  >
                    {error}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
        <Footer />
      </div>
    </main>
  )
}
