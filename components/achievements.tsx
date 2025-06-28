"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeInUpItem, Reveal } from "./scroll-animations"

export function Achievements() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const achievements = [
    {
      text: "Solved over 250+ Problem Solving questions based on DSA on different platforms (Leetcode, gfg, interview bit).",
      icon: Code2,
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
    },
    {
      text: "5 Star in HackerRank in C++.",
      icon: Star,
      color: "from-yellow-500/20 to-yellow-600/20",
      iconColor: "text-yellow-600",
    },
  ]

  return (
    <section id="achievements" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Achievements
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></span>
            </h2>
          </Reveal>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">Notable accomplishments and recognitions</p>
        </FadeIn>

        <FadeIn direction="up" className="max-w-3xl mx-auto">
          <Card
            className={`transition-all duration-500 overflow-hidden relative ${
              hoveredCard !== null
                ? "shadow-lg shadow-primary/20 border-primary/50 scale-[1.02]"
                : "hover:shadow-md hover:-translate-y-1"
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 transition-opacity duration-500 ${
                hoveredCard !== null ? "opacity-100" : ""
              }`}
            />
            <CardContent className="pt-6 relative z-10">
              <StaggerContainer className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4 group list-none"
                    variants={fadeInUpItem}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className={`p-2 rounded-full transition-all duration-300 ${
                        hoveredCard === index ? `bg-gradient-to-br ${achievement.color} scale-110` : "bg-primary/10"
                      }`}
                    >
                      <achievement.icon
                        className={`h-5 w-5 transition-colors duration-300 ${
                          hoveredCard === index ? achievement.iconColor : "text-primary"
                        }`}
                      />
                    </div>
                    <span
                      className={`transition-colors duration-300 ${hoveredCard === index ? "text-foreground" : ""}`}
                    >
                      {achievement.text}
                    </span>
                  </motion.li>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}
