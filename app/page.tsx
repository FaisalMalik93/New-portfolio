"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import HeroSection from "@/components/hero-section"
import AboutPreview from "@/components/about-preview"
import FeaturedProjectsPreview from "@/components/featured-projects-preview"
import SkillsShowcase from "@/components/skills-showcase"
import ExperienceTimeline from "@/components/experience-timeline"
import ImpactSection from "@/components/impact-section"
import CTASection from "@/components/cta-section"
import LiquidEther from "@/components/LiquidEther"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden relative">
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
      <HeroSection />
      <AboutPreview />
      <FeaturedProjectsPreview />
      <SkillsShowcase />
      <ExperienceTimeline />
      <ImpactSection />
      <CTASection />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  )
}
