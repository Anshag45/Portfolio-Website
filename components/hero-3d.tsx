"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { AnimatedTextAlt } from "./animated-text-alt"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

export function Hero3D() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Enhanced 3D animations
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const rotatingAnimation = {
    rotateY: [0, 10, 0, -10, 0],
    transition: {
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const handleResumeDownload = () => {
    // Direct link to Google Drive resume
    const link = document.createElement("a")
    link.href = "https://drive.google.com/file/d/1kNvSwWAD4GbDhZbwlGslyK0fIEKsHE0N/view?usp=sharing"
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) {
    return (
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block relative">
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Computer Science Engineer
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Ansh Agarwal</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Specializing in AI, Machine Learning and Full-Stack Development
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden">
                <Image
                  src="/profile-photo.jpg"
                  alt="Ansh Agarwal"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center perspective-1000"
    >
      {/* 3D Background Elements - Reduced quantity */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5"></div>

        {/* Floating 3D Shapes - Enhanced animations */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-xl"
          animate={{
            rotateX: mousePosition.y * 10,
            rotateY: mousePosition.x * 10,
            z: 50,
            ...floatingAnimation,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          animate={{
            rotateX: -mousePosition.y * 15,
            rotateY: -mousePosition.x * 15,
            z: 30,
            ...rotatingAnimation,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-lg"
          animate={{
            rotateX: mousePosition.y * 20,
            rotateY: mousePosition.x * 20,
            z: 20,
            ...pulseAnimation,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`,
            }}
          >
            <motion.div
              className="inline-block relative group"
              whileHover={{ scale: 1.05, z: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <span className="relative text-sm font-medium bg-white/10 backdrop-blur-md text-primary px-4 py-2 rounded-full border border-white/20 shadow-lg">
                Computer Science Engineer
              </span>
            </motion.div>

            <div className="space-y-4">
              <AnimatedTextAlt
                name="Ansh Agarwal"
                roles={[
                  "MERN Stack Developer",
                  "GenAI Developer",
                  "ML Engineer",
                  "NLP Specialist",
                  "Flutter Developer",
                  "Problem Solver",
                ]}
              />
              <motion.p
                className="text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Specializing in AI, Machine Learning and Full-Stack Development
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Link href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="group relative overflow-hidden bg-white/5 backdrop-blur-md border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Link href="#contact">
                  <span className="relative z-10">Contact Me</span>
                </Link>
              </Button>

              {/* Fixed Resume Download Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleResumeDownload}
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-[-2px]" />
                    Resume
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: Github, href: "https://github.com/Anshag45", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ansh-agarwal-184356196/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:agarwalansh651@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, z: 20 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                      <span className="sr-only">{social.label}</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Profile Image Section - Enhanced animations with faster rotation */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative group"
              style={{
                transform: `perspective(1000px) rotateY(${-mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
              }}
              whileHover={{ scale: 1.05 }}
              animate={controls}
              variants={{
                visible: {
                  rotateZ: [0, 2, 0, -2, 0],
                  transition: {
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              {/* 3D Frame with enhanced animations */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl transform rotate-6 scale-110 group-hover:scale-125 transition-transform duration-500"
                animate={{
                  rotate: [6, 8, 6, 4, 6],
                  scale: [1.1, 1.15, 1.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-tl from-yellow-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl transform -rotate-6 scale-105 group-hover:scale-120 transition-transform duration-700"
                animate={{
                  rotate: [-6, -4, -6, -8, -6],
                  scale: [1.05, 1.1, 1.05],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Main Image Container with enhanced animations */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl transform group-hover:rotate-2 transition-transform duration-300"
                  animate={{
                    boxShadow: [
                      "0 20px 50px rgba(59, 130, 246, 0.3)",
                      "0 20px 50px rgba(147, 51, 234, 0.3)",
                      "0 20px 50px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative w-full h-full p-4">
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/profile-photo.jpg"
                      alt="Ansh Agarwal - Computer Science Engineer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>

                {/* Enhanced Floating Elements with FASTER rotation */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-full shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    rotate: [0, 360, 720], // Faster rotation - 2 full rotations
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2, // Much faster - 2 seconds instead of 4
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                  }}
                />

                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    x: [0, -5, 0],
                    rotate: [0, -360, -720], // Faster rotation - 2 full rotations
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5, // Much faster - 1.5 seconds instead of 3
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                    times: [0, 0.5, 1],
                  }}
                />

                <motion.div
                  className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg"
                  animate={{
                    x: [0, -10, 0],
                    y: [0, 5, 0, -5, 0],
                    rotate: [0, 720, 1440], // Much faster rotation - 4 full rotations
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2.5, // Faster - 2.5 seconds instead of 5
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                    times: [0, 0.5, 1],
                  }}
                />

                {/* New floating elements with faster rotation */}
                <motion.div
                  className="absolute top-1/4 -right-6 w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg"
                  animate={{
                    x: [0, 8, 0],
                    y: [0, -8, 0, 8, 0],
                    rotate: [0, -720, -1440], // Much faster rotation - 4 full rotations
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3, // Faster - 3 seconds instead of 6
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                <motion.div
                  className="absolute bottom-1/4 right-0 w-5 h-5 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-lg"
                  animate={{
                    x: [0, 12, 0, -12, 0],
                    rotate: [0, 360, 720], // Faster rotation - 2 full rotations
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3.5, // Faster - 3.5 seconds instead of 7
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
              </div>

              {/* Enhanced Glow Effect with animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Reduced Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}