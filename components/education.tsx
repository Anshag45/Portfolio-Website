"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeInLeftItem, fadeInRightItem, Reveal } from "./scroll-animations"

export function Education() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const education = [
    {
      institution: "VIT Bhopal University",
      degree: "B. Tech in Computer Science",
      period: "Sept 2022 - June 2026",
      grade: "8.96/10.0 CGPA",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
    },
    {
      institution: "Aryans International School, Moradabad",
      degree: "12th Standard",
      period: "2020 - 2021",
      grade: "70%",
      icon: <School className="h-5 w-5" />,
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600",
    },
    {
      institution: "PMS Public School, Moradabad",
      degree: "10th Standard",
      period: "2018 - 2019",
      grade: "95.2%",
      icon: <School className="h-5 w-5" />,
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Education
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></span>
            </h2>
          </Reveal>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">My academic background and qualifications</p>
        </FadeIn>

        <StaggerContainer className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeInLeftItem : fadeInRightItem}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`transition-all duration-500 overflow-hidden relative ${
                  hoveredCard === index
                    ? "shadow-lg shadow-primary/20 border-primary/50 scale-[1.02]"
                    : "hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 ${
                    hoveredCard === index ? "opacity-100" : ""
                  }`}
                />
                <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                  <div
                    className={`p-2 bg-primary/10 rounded-full transition-all duration-300 ${
                      hoveredCard === index ? "scale-110 bg-primary/20" : ""
                    }`}
                  >
                    <div
                      className={`transition-colors duration-300 ${
                        hoveredCard === index ? item.iconColor : "text-primary"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <CardTitle
                      className={`transition-colors duration-300 ${hoveredCard === index ? "text-foreground" : ""}`}
                    >
                      {item.institution}
                    </CardTitle>
                    <CardDescription>{item.degree}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.period}</span>
                    <span className="font-medium">{item.grade}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
