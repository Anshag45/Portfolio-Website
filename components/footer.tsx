"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Anshag45",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
      bgColor: "group-hover:bg-gray-100 dark:group-hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ansh-agarwal-184356196/",
      icon: Linkedin,
      color: "hover:text-blue-600",
      bgColor: "group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20",
    },
    {
      name: "Email",
      href: "mailto:agarwalansh651@gmail.com",
      icon: Mail,
      color: "hover:text-red-600",
      bgColor: "group-hover:bg-red-50 dark:group-hover:bg-red-900/20",
    },
  ]

  const currentYear = mounted ? new Date().getFullYear() : 2024

  return (
    <footer className="border-t py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 group">
            <Link href="/" className="text-xl font-bold transition-all duration-300 hover:scale-105 inline-block">
              <span className="transition-colors duration-300 group-hover:text-primary">Ansh</span>
              <span className="text-primary transition-all duration-300 group-hover:scale-125 inline-block">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-foreground">
              &copy; {currentYear} Ansh Agarwal. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-2 rounded-full transition-all duration-300 ${link.color}`}
                onMouseEnter={() => setHoveredIcon(link.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${link.bgColor} ${
                    hoveredIcon === link.name ? "scale-110" : "scale-0"
                  }`}
                ></div>
                <link.icon
                  className={`h-5 w-5 relative z-10 transition-all duration-300 ${
                    hoveredIcon === link.name ? "scale-110" : ""
                  }`}
                />
                <span className="sr-only">{link.name}</span>

                {/* Tooltip */}
                {mounted && (
                  <div
                    className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded transition-all duration-300 ${
                      hoveredIcon === link.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    {link.name}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
