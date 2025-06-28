"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeInUpItem, Reveal, Parallax } from "./scroll-animations"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [hoveredContact, setHoveredContact] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "agarwalansh651@gmail.com",
      href: "mailto:agarwalansh651@gmail.com",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7500906096",
      href: "tel:+917500906096",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Anshag45",
      href: "https://github.com/Anshag45",
      color: "from-gray-500/20 to-gray-600/20",
      iconColor: "text-gray-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ansh-agarwal-184356196",
      href: "https://www.linkedin.com/in/ansh-agarwal-184356196/",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Contact Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></span>
            </h2>
          </Reveal>
          <Parallax speed={-0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </Parallax>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div variants={fadeInUpItem}>
            <Card className="hover-lift h-full group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">Get in Touch</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible</CardDescription>
              </CardHeader>

              <CardContent>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full hover-glow transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center relative z-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Sending...
                      </motion.div>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUpItem}>
            <Card className="hover-lift h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here are the ways you can reach me directly</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 group cursor-pointer relative"
                      onMouseEnter={() => setHoveredContact(index)}
                      onMouseLeave={() => setHoveredContact(null)}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 transition-opacity duration-300 rounded-lg ${
                          hoveredContact === index ? "opacity-100" : ""
                        }`}
                      />
                      <div
                        className={`p-2 bg-primary/10 rounded-full transition-all duration-300 relative z-10 ${
                          hoveredContact === index ? "scale-110 bg-primary/20" : ""
                        }`}
                      >
                        <contact.icon
                          className={`h-5 w-5 transition-colors duration-300 ${
                            hoveredContact === index ? contact.iconColor : "text-primary"
                          }`}
                        />
                      </div>
                      <div className="relative z-10">
                        <p className="text-sm font-medium">{contact.label}</p>
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  )
}
