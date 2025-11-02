import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import LoadingScreen from "@/components/loading-screen"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Faisal Habib - Full Stack Developer & AI Specialist",
  description:
    "Portfolio of Faisal Habib, a full-stack developer specializing in React.js, Next.js, AI integration, and web development solutions.",
  keywords: ["developer", "Next.js", "React", "AI", "web development", "full-stack"],
  authors: [{ name: "Faisal Habib" }],
  icons: {
    icon: [
      { url: "/favicon.jpg" },
      { url: "/favicon.jpg", type: "image/jpg", sizes: "32x32" },
    ],
    apple: [
      { url: "/favicon.jpg", type: "image/jpg", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Faisal Habib - Full Stack Developer & AI Specialist",
    description: "Crafting modern web experiences with Next.js, React, and AI integration.",
    url: "https://faisalhabib.com",
    siteName: "Faisal Habib Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Habib - Full Stack Developer & AI Specialist",
    description: "Crafting modern web experiences with cutting-edge technologies.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased bg-black text-white`}>
        <LoadingScreen />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
