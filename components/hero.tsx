import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "./animated-text"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 animated-gradient"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block relative">
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                Computer Science Engineer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm{" "}
              <AnimatedText
                staticText="Ansh Agarwal |"
                phrases={["Android Developer", "ML Engineer", "Flutter Developer", "Data Scientist", "Problem Solver"]}
              />
            </h1>
            <p className="text-xl text-muted-foreground">Specializing in Machine Learning and App Development</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="hover-lift hover-glow">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift gradient-border">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a href="https://github.com/Anshag45" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a href="mailto:agarwalansh651@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-muted rounded-lg p-6 border shadow-lg hover-lift">
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-md">JSON</div>
              <pre className="text-sm overflow-x-auto">
                <code>
                  {`{
  "name": "Ansh Agarwal",
  "title": "Computer Science Engineer",
  "skills": [
    "Machine Learning",
    "App Development",
    "Data Science",
    "Python", "C++", "Flutter"
  ],
  "education": "B.Tech in CS&E",
  "university": "VIT Bhopal",
  "cgpa": 8.96
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
