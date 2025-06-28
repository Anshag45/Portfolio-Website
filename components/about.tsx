"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, LineChart, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const aboutCards = [
    {
      icon: Code,
      title: "Programming",
      description: "Proficient in multiple languages including C++, Java, Python, JavaScript, and Dart",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
    },
    {
      icon: LineChart,
      title: "Machine Learning",
      description: "Experience with TensorFlow, Scikit-learn, Pandas, NumPy, and other ML frameworks",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Skilled in Flutter and Dart for creating cross-platform mobile applications",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Experience with SQL databases and data visualization tools like Tableau",
      color: "from-orange-500/20 to-orange-600/20",
      iconColor: "text-orange-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            I'm a Computer Science Engineer with expertise in Machine Learning, Data Science, and App Development.
            Currently pursuing my B.Tech at VIT Bhopal University with a strong academic record.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`h-full transition-all duration-500 overflow-hidden relative ${
                  hoveredCard === index
                    ? "shadow-lg shadow-primary/20 border-primary/50 scale-[1.02]"
                    : "hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 transition-opacity duration-500 ${
                    hoveredCard === index ? "opacity-100" : ""
                  }`}
                />
                <CardContent className="pt-6 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`p-3 bg-primary/10 rounded-full mb-4 transition-all duration-300 ${
                        hoveredCard === index ? "scale-110 bg-primary/20" : ""
                      }`}
                    >
                      <card.icon
                        className={`h-6 w-6 transition-colors duration-300 ${
                          hoveredCard === index ? card.iconColor : "text-primary"
                        }`}
                      />
                    </div>
                    <h3
                      className={`font-semibold mb-2 transition-colors duration-300 ${
                        hoveredCard === index ? "text-foreground" : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
