import { Header } from "@/components/header"
import { HeroScrollDemo } from "@/components/hero-scroll-demo"
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Header />
      <HeroScrollDemo />
      <Hero3D />
      <About3D />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}