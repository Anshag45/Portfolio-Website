"use client"

import { useState, useEffect } from "react"
import { ParticleTextEffect } from "@/components/ui/particle-text-effect"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ParticleLanding() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  
  // Meaningful sequence that tells Ansh's story
  const storyWords = [
    "HELLO",
    "I'M ANSH",
    "ENGINEER",
    "DEVELOPER", 
    "INNOVATOR",
    "CREATOR",
    "PROBLEM SOLVER",
    "WELCOME"
  ]

  const storyDescriptions = [
    "Welcome to my digital space",
    "Computer Science Engineer",
    "Building the future with code",
    "Full-stack & Mobile Development",
    "AI & Machine Learning Enthusiast", 
    "Turning ideas into reality",
    "270+ DSA problems solved",
    "Let's explore my journey together"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const next = prev + 1
        if (next >= storyWords.length) {
          setShowScrollIndicator(true)
          return prev // Stay on last word
        }
        return next
      })
    }, 3000) // 3 seconds per word

    return () => clearInterval(interval)
  }, [])

  const handleScrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio-start')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Particle Text Effect */}
        <div className="mb-8">
          <ParticleTextEffect 
            currentWord={storyWords[currentWordIndex]}
            autoAdvance={false}
            className="mb-6"
          />
        </div>

        {/* Story Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto px-4">
              {storyDescriptions[currentWordIndex]}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mb-12">
          {storyWords.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentWordIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={handleScrollToPortfolio}
            >
              <motion.p 
                className="text-gray-400 mb-4 group-hover:text-white transition-colors"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Scroll to explore my portfolio
              </motion.p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-3 rounded-full border border-gray-600 group-hover:border-blue-500 transition-colors"
              >
                <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}