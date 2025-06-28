"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { AnimatedTextAlt } from "./animated-text-alt"
import { motion } from "framer-motion"

export function HeroAlt() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block relative">
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Computer Science Engineer
                </span>
              </div>
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
              <p className="text-xl text-muted-foreground">
                Specializing in AI, Machine Learning and Full-Stack Development
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 animated-gradient"></div>
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-float animation-delay-2000 opacity-40"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-float animation-delay-4000 opacity-80"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="inline-block relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                Computer Science Engineer
              </span>
            </motion.div>
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
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Specializing in AI, Machine Learning and Full-Stack Development
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button asChild size="lg" className="hover-lift hover-glow group relative overflow-hidden">
                <Link href="#projects" className="group">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift gradient-border group">
                <Link href="#contact" className="group">
                  <span className="transition-all duration-300 group-hover:text-primary">Contact Me</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 group"
              >
                <a href="https://github.com/Anshag45" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 group"
              >
                <a href="https://www.linkedin.com/in/ansh-agarwal-184356196/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 group"
              >
                <a href="mailto:agarwalansh651@gmail.com">
                  <Mail className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative hidden md:block group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-muted rounded-lg p-6 border shadow-lg hover-lift group-hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-md group-hover:scale-110 transition-transform duration-300">
                JSON
              </div>
              <pre className="text-sm overflow-x-auto group-hover:text-foreground transition-colors duration-300">
                <code>
                  {`{
  "name": "Ansh Agarwal",
  "title": "Computer Science Engineer",
  "skills": [
    "MERN Stack",
    "OpenAI GPT & NLP",
    "IBM Watsonx",
    "Machine Learning",
    "CNN & Deep Learning",
    "Flutter Development"
  ],
  "education": "B.Tech in CS",
  "university": "VIT Bhopal",
  "cgpa": 8.96
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
