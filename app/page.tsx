import { Header } from "@/components/header"
import { ParticleLanding } from "@/components/particle-landing"
import { Hero3D } from "@/components/hero-3d"
import { About3D } from "@/components/about-3d"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      {/* Particle Landing Page - Full Screen */}
      <ParticleLanding />
      
      {/* Portfolio Content - Starts after landing */}
      <div id="portfolio-start" className="min-h-screen bg-black">
        <Header />
        <Hero3D />
        <About3D />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}