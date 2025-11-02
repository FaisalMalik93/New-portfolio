"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black/50 backdrop-blur-md border-t border-white/10 py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-2 text-white">Faisal Habib</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Full-Stack Developer & AI Enthusiast passionate about creating innovative web solutions and intelligent
              systems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: "🔗", label: "LinkedIn", href: "https://linkedin.com/in/faisalmalikawan" },
                { icon: "⚙️", label: "GitHub", href: "https://github.com/FaisalMalik93" },
                { icon: "🟣", label: "Instagram", href: "https://www.instagram.com/i.faisal_.x?igsh=enoyc3BrOWtkZnph" },
                { icon: "👻", label: "Snapchat", href: "https://www.snapchat.com/add/ifaisal_malik?share_id=oiUjP0SEU8w&locale=en-US" },
                { icon: "📸", label: "Insta", href: "https://www.instagram.com/i.faisal_.x?igsh=enoyc3BrOWtkZnph" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-cyan-500/20 text-white/70 hover:text-cyan-400 transition-all duration-300 text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "GitHub", href: "https://github.com/FaisalMalik93" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-cyan-400 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:faisalmalik93939@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-cyan-400 transition-colors group"
              >
                <span className="text-cyan-400">✉</span>
                <span className="text-sm font-medium group-hover:underline">faisalmalik93939@gmail.com</span>
              </a>
              <a
                href="tel:+923074548371"
                className="flex items-center gap-3 text-white/60 hover:text-cyan-400 transition-colors group"
              >
                <span className="text-cyan-400">☎</span>
                <span className="text-sm font-medium group-hover:underline">+92 307 4548371</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <span className="text-cyan-400">📍</span>
                <span className="text-sm font-medium">Lahore, Pakistan</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">© {currentYear} Faisal Habib. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
