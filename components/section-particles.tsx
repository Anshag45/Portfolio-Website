"use client"

import { useEffect, useRef } from "react"

interface SectionParticlesProps {
  density?: number
  color?: string
  speed?: number
}

export function SectionParticles({
  density = 15, // Reduced density
  color = "rgba(59, 130, 246, 0.2)", // Reduced opacity
  speed = 1,
}: SectionParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles: HTMLDivElement[] = []

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full pointer-events-none"

      const size = Math.random() * 2 + 1 // Smaller particles
      const x = Math.random() * 100
      const y = Math.random() * 100
      const duration = Math.random() * 15 + 10

      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${x}%`
      particle.style.top = `${y}%`
      particle.style.backgroundColor = color
      particle.style.boxShadow = `0 0 ${size}px ${color}` // Reduced glow
      particle.style.animation = `float-particle ${duration * 0.7}s infinite linear`
      particle.style.animationDelay = `${Math.random() * 5}s`

      container.appendChild(particle)
      particles.push(particle)
    }

    // Create particles
    for (let i = 0; i < density; i++) {
      createParticle()
    }

    // Add CSS animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float-particle {
        0% {
          transform: translateY(100vh) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.7;
        }
        90% {
          opacity: 0.7;
        }
        100% {
          transform: translateY(-100px) rotate(360deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      particles.forEach((particle) => particle.remove())
      style.remove()
    }
  }, [density, color, speed])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
}
