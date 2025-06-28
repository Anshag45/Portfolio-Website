import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ParticleBackground } from "@/components/particle-background"
import { BlackholeCursor } from "@/components/blackhole-cursor"
import { FloatingParticles } from "@/components/floating-particles"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ansh Agarwal | Portfolio",
  description:
    "Personal portfolio website of Ansh Agarwal, a Computer Science Engineer specializing in Machine Learning and App Development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ParticleBackground />
          <FloatingParticles count={30} />
          <BlackholeCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
