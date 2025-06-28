"use client"

import { useState, useEffect } from "react"
import { ParticleTextEffect } from "@/components/ui/particle-text-effect"

interface PortfolioParticleTextProps {
  className?: string
}

export function PortfolioParticleText({ className = "" }: PortfolioParticleTextProps) {
  const [currentSection, setCurrentSection] = useState("ANSH")

  // Section-specific words based on portfolio content
  const sectionWords: { [key: string]: string } = {
    hero: "ANSH",
    about: "ENGINEER", 
    skills: "DEVELOPER",
    projects: "CREATOR",
    education: "STUDENT",
    certifications: "CERTIFIED",
    achievements: "ACHIEVER",
    contact: "CONNECT"
  }

  useEffect(() => {
    const sections = [
      { id: "hero", element: document.querySelector("#hero") || document.querySelector("section") },
      { id: "about", element: document.querySelector("#about") },
      { id: "skills", element: document.querySelector("#skills") },
      { id: "projects", element: document.querySelector("#projects") },
      { id: "education", element: document.querySelector("#education") },
      { id: "certifications", element: document.querySelector("#certifications") },
      { id: "achievements", element: document.querySelector("#achievements") },
      { id: "contact", element: document.querySelector("#contact") }
    ].filter(section => section.element)

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.3
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || "hero"
          const word = sectionWords[sectionId]
          if (word && word !== currentSection) {
            setCurrentSection(word)
          }
        }
      })
    }, observerOptions)

    sections.forEach(section => {
      if (section.element) {
        observer.observe(section.element)
      }
    })

    return () => {
      sections.forEach(section => {
        if (section.element) {
          observer.unobserve(section.element)
        }
      })
    }
  }, [currentSection])

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none ${className}`}>
      <ParticleTextEffect 
        currentWord={currentSection}
        autoAdvance={false}
        className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/10"
      />
    </div>
  )
}