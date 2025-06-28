"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionParticles } from "./section-particles"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeInUpItem, Reveal, Parallax } from "./scroll-animations"

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  const projects = [
    {
      title: "Advanced MCQ Generator Using GENAI",
      description:
        "A full-stack application that automatically generates multiple-choice questions from web articles using OpenAI GPT, SpaCy NLP, and BeautifulSoup for content scraping.",
      details: [
        "Developed a full-stack app that auto-generates MCQs from web articles using OpenAI GPT, SpaCy NLP, and BeautifulSoup for content scraping with customizable quiz settings.",
        "Integrated hint/explanation support, PDF export, and JWT-based secure authentication with MongoDB session storage.",
        "Ensures reliability through robust input validation and error handling mechanisms.",
        "Implemented responsive UI with customizable quiz settings for different difficulty levels and question types.",
      ],
      technologies: ["OpenAI GPT", "SpaCy NLP", "BeautifulSoup", "MongoDB", "JWT", "React", "Node.js", "Express"],
      githubLink: "https://github.com/Anshag45/GENAI_Project-Advanced-MCQ-Generator",
      particleColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      title: "Smart Home Animated App",
      description:
        "A Flutter-based smart home control app simulating real-time IoT device management of lights, fans, and AC units.",
      details: [
        "Developed a Flutter-based smart home control app simulating real-time IoT device management of lights, fans, and AC units.",
        "Designed rich, smooth UI animations using AnimatedContainer, Hero, and AnimatedSwitcher widgets for an engaging user experience.",
        "Followed modular architecture and Material Design principles for scalable and maintainable code.",
      ],
      technologies: ["Flutter", "Dart", "Material Design", "Animation"],
      role: "Frontend Developer",
      githubLink: "https://github.com/Anshag45/Smart-Home-Animated-App-using-Flutter",
      particleColor: "rgba(147, 51, 234, 0.4)",
    },
    {
      title: "Aqua Pulse - Water Quality Monitoring Dashboard",
      description: "A real-time data analytics dashboard monitoring water quality across 44+ stations in 28 states.",
      details: [
        "Developed a real-time data analytics dashboard monitoring water quality across 44+ stations in 28 states.",
        "Visualized key metrics (WQI, DO, pH, BOD, Conductivity, Coliform) with interactive charts, anomaly detection, and alerting.",
        "Integrated ARIMA-based forecasting to predict water quality trends over a 5-year horizon using historical data (2000-2022).",
        "Enabled interactive map-based views, CSV uploads, anomaly detection, and system status monitoring with real-time alerts.",
        "Designed a modular UI with sections for Analytics, Predictions, Anomaly Detection, Map View, and Tableau dashboards.",
      ],
      technologies: ["Python", "ARIMA", "REST APIs", "Firebase", "Tableau", "Chart.js", "Plotly", "Dashboard UI"],
      githubLink: "https://github.com/Anshag45/Aqua-Pulse",
      tableauLink:
        "https://public.tableau.com/app/profile/ansh.agarwal6664/viz/WaterQualityAnalysis_1733851340950/Dashboard1?publish=yes",
      particleColor: "rgba(34, 197, 94, 0.4)",
    },
    {
      title: "Plant Disease Detection System",
      description:
        "A sophisticated tool designed to identify and classify plant diseases accurately using deep learning techniques.",
      details: [
        "Created a CNN-based system to identify and classify plant diseases from images with high accuracy.",
        "Implemented TensorFlow models trained on a dataset of plant leaf images with various disease conditions.",
        "Leveraged the power of Convolutional Neural Networks (CNN) and Python to provide farmers and agricultural experts with an efficient way to monitor plant health.",
        "Improved crop yield and quality through early disease detection and treatment recommendations.",
        "Deployed the solution on Google Cloud Platform for scalable access and processing.",
      ],
      technologies: ["CNN", "Python", "TensorFlow", "GCP", "Deep Learning"],
      teamSize: 5,
      githubLink: "https://github.com/Anshag45/Plant-Disease-Detection-System",
      particleColor: "rgba(251, 146, 60, 0.4)",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Section Particles */}
      <SectionParticles density={45} color="rgba(236, 72, 153, 0.3)" />

      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <FadeIn direction="up" className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></span>
            </h2>
          </Reveal>
          <Parallax speed={-0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              A showcase of my technical projects and applications
            </p>
          </Parallax>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUpItem} className="relative">
              {/* Project-specific particles */}
              {expandedProject === index && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: project.particleColor,
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

              <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-xl border-t-4 border-t-primary/70 h-full">
                <CardHeader className="bg-gradient-to-r from-background to-muted">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-primary">#</span>
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="bg-primary/10">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="bg-primary/5">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mt-4">
                    <div
                      className="flex items-center gap-2 text-sm font-medium text-primary cursor-pointer hover:underline mb-2"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedProject === index ? (
                        <>
                          <ChevronUp className="h-4 w-4" /> Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" /> Show More
                        </>
                      )}
                    </div>

                    {expandedProject === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground mt-2">
                          {project.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIndex * 0.1 }}
                            >
                              {detail}
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div
                          className="mt-4 flex flex-wrap gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="transition-all hover:bg-primary hover:text-primary-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </motion.div>

                        {project.teamSize && (
                          <motion.p
                            className="mt-4 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <span className="font-semibold">Team Size:</span> {project.teamSize}
                          </motion.p>
                        )}
                        {project.role && (
                          <motion.p
                            className="mt-4 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            <span className="font-semibold">Role:</span> {project.role}
                          </motion.p>
                        )}
                      </motion.div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 py-4 flex flex-wrap gap-3">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild className="relative overflow-hidden group">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 flex items-center">
                          <Github className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                          GitHub
                        </span>
                      </a>
                    </Button>
                  )}
                  {project.tableauLink && (
                    <Button size="sm" asChild className="relative overflow-hidden group">
                      <a href={project.tableauLink} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                          Tableau Dashboard
                        </span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
