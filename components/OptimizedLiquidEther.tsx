"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const LiquidEther = dynamic(() => import("./LiquidEther"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />,
})

interface OptimizedLiquidEtherProps {
  colors?: string[]
  mouseForce?: number
  cursorSize?: number
  isViscous?: boolean
  viscous?: number
  iterationsViscous?: number
  iterationsPoisson?: number
  dt?: number
  BFECC?: boolean
  resolution?: number
  isBounce?: boolean
  style?: React.CSSProperties
  className?: string
  autoDemo?: boolean
  autoSpeed?: number
  autoIntensity?: number
  takeoverDuration?: number
  autoResumeDelay?: number
  autoRampDuration?: number
}

export default function OptimizedLiquidEther(props: OptimizedLiquidEtherProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setShouldRender(true)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Don't render anything on server or before mount
  if (!shouldRender) {
    return <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
  }

  // Show simpler background on mobile
  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 animate-pulse" style={{ animationDuration: "8s" }} />
    )
  }

  // Full LiquidEther on desktop
  return <LiquidEther {...props} />
}
