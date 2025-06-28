"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Download } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleResumeDownload = () => {
    // Direct link to Google Drive resume
    const link = document.createElement("a")
    link.href = "https://drive.google.com/file/d/1kNvSwWAD4GbDhZbwlGslyK0fIEKsHE0N/view?usp=sharing"
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Ansh<span className="text-primary">.</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-10 h-10" /> {/* ModeToggle placeholder */}
            <Button>Resume</Button>
          </nav>
          <div className="flex items-center space-x-4 md:hidden">
            <div className="w-10 h-10" /> {/* ModeToggle placeholder */}
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold group">
          <span className="transition-all duration-300 group-hover:text-primary">Ansh</span>
          <span className="text-primary transition-all duration-300 group-hover:scale-125 inline-block">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <ModeToggle />
          <Button onClick={handleResumeDownload} className="hover-lift hover-glow group relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-[-2px] relative z-10" />
            <span className="relative z-10">Resume</span>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="hover:rotate-90 transition-transform duration-300"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 py-2 hover:translate-x-2"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={handleResumeDownload} className="w-full hover-lift hover-glow group">
              <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-[-2px]" />
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}