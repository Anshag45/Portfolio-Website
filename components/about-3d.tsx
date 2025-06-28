"use client"

import { useState } from "react"
import { Card3D } from "./card-3d"
import { SectionParticles } from "./section-particles"
import { Code, Database, LineChart, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeInUpItem, Parallax, AnimatedText } from "./scroll-animations"

export function About3D() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const aboutCards = [
    {
      icon: Code,
      title: "Programming",
      description: "Proficient in multiple languages including C++, Java, Python, JavaScript, and Dart",
      color: "blue",
      gradient: "from-blue-500/20 to-cyan-500/20",
      particleColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      icon: LineChart,
      title: "Machine Learning",
      description: "Experience with TensorFlow, Scikit-learn, Pandas, NumPy, and other ML frameworks",
      color: "green",
      gradient: "from-green-500/20 to-emerald-500/20",
      particleColor: "rgba(34, 197, 94, 0.4)",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Skilled in Flutter and Dart for creating cross-platform mobile applications",
      color: "purple",
      gradient: "from-purple-500/20 to-pink-500/20",
      particleColor: "rgba(147, 51, 234, 0.4)",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Experience with SQL databases and data visualization tools like Tableau",
      color: "orange",
      gradient: "from-orange-500/20 to-red-500/20",
      particleColor: "rgba(251, 146, 60, 0.4)",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Section Particles */}
      <SectionParticles density={40} color="rgba(147, 51, 234, 0.3)" />

      {/* 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <FadeIn direction="up" className="text-center mb-20">
          <AnimatedText
            text="About Me"
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mb-6 rounded-full"></div>
          <Parallax speed={-0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a Computer Science Engineer with expertise in Machine Learning, Data Science, and App Development.
              Currently pursuing my B.Tech at VIT Bhopal University with a strong academic record.
            </p>
          </Parallax>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUpItem}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-full relative"
            >
              {/* Card-specific particles */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: card.particleColor,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}

              <Card3D glowColor={card.color} className="h-full">
                <div className="p-6 h-full flex flex-col items-center text-center relative">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-500 ${
                      hoveredCard === index ? "opacity-100" : ""
                    } rounded-xl`}
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-6 border border-white/20"
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <card.icon className="h-8 w-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 flex-1">
                    <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                  <div
                    className="absolute bottom-4 left-4 w-1 h-1 bg-purple-500/50 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
