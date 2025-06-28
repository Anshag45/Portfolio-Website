"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionParticles } from "./section-particles"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeInUpItem, Reveal, Parallax } from "./scroll-animations"

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "👨‍💻",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "Dart"],
      particleColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      title: "MERN Stack",
      icon: "🌐",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "EJS", "Redux", "REST APIs"],
      particleColor: "rgba(34, 197, 94, 0.4)",
    },
    {
      title: "Web Technologies",
      icon: "🔌",
      skills: ["HTML5", "CSS3", "SASS/SCSS", "Bootstrap", "Tailwind CSS", "Material UI", "JWT"],
      particleColor: "rgba(147, 51, 234, 0.4)",
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: ["OpenAI GPT", "IBM Watsonx", "TensorFlow", "CNN", "SpaCy NLP", "Scikit-learn", "Pandas", "NumPy"],
      particleColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["Cloud Computing", "Firebase", "Docker", "Git", "GitHub", "GCP"],
      particleColor: "rgba(6, 182, 212, 0.4)",
    },
    {
      title: "Tools & Libraries",
      icon: "🧰",
      skills: ["BeautifulSoup", "Tableau", "Chart.js", "Plotly", "Flutter", "Dart"],
      particleColor: "rgba(251, 191, 36, 0.4)",
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Section Particles */}
      <SectionParticles density={35} color="rgba(34, 197, 94, 0.3)" />

      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <FadeIn direction="up" className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Technical Skills
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></span>
            </h2>
          </Reveal>
          <Parallax speed={-0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              A comprehensive list of my technical skills and proficiencies
            </p>
          </Parallax>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUpItem}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="relative"
            >
              {/* Category-specific particles */}
              {hoveredCategory === index && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: category.particleColor,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}

              <Card
                className={`h-full transition-all duration-500 overflow-hidden relative ${
                  hoveredCategory === index
                    ? "shadow-lg shadow-primary/20 border-primary/50 scale-[1.02]"
                    : "hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <CardHeader className="relative pb-2">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -z-10"></div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`transition-all duration-300 ${
                          hoveredCategory === index
                            ? "bg-primary/20 hover:bg-primary hover:text-primary-foreground"
                            : "hover:bg-primary/20"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
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
