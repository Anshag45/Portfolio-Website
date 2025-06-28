"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeInUpItem, Reveal, Parallax } from "./scroll-animations"

export function Certifications() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedCert(expandedCert === index ? null : index)
  }

  const certifications = [
    {
      title: "MongoDB Node.js Developer Path",
      issuer: "MongoDB & SmartBridge",
      description:
        "Comprehensive developer path covering MongoDB database operations, Node.js integration, and full-stack development practices.",
      date: "April 7, 2025",
      certificateId: "22BCE11668",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aZtgDSh0r36CKnFGT7knn6woExL9OZ.png",
      viewLink:
        "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/8478594f-4208-414e-b596-b8516366d247-ansh-agarwal-22bce11668-52f57c13-54d8-4abe-8ca6-054551bcdc66-certificate.pdf",
    },
    {
      title: "GEN AI Using IBM Watsonx",
      issuer: "IBM Career Education Program",
      description: "A comprehensive course on generative AI using IBM Watsonx platform and cognitive technologies.",
      date: "April 8, 2025",
      certificateId: "CEWXAI1IN",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DszKcCWJhcK6DNVteaxIcTdNdRyUhH.png",
      viewLink: "https://courses.ibmcep.cognitiveclass.ai/certificates/54264f49e99e4df6b8d7c62139bd3b42",
    },
    {
      title: "Full Stack Developer MERN",
      issuer: "SmartBridge & MongoDB",
      description: "Credit course on Full Stack Development with MERN stack technologies including project work.",
      date: "January 27, 2025 - April 14, 2025",
      certificateId: "CC-FSD-2025-12595",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tharlNnX5KLEhLcSeEEXswljtZ3wIE.png",
      viewLink: "https://smartinternz.com/verify-certificate?id=CC-FSD-2025-12595",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      description: "An in-depth study on the fundamentals and advanced concepts of computer networking.",
      date: "Dec 26, 2023",
      grade: "93.50%",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l1OdKAQEm46cqcvrHNIzk2VojXrERN.png",
      viewLink: "https://coursera.org/verify/2JU968AKFN8D",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL - IIT Kharagpur",
      description: "A comprehensive course on cloud computing concepts, technologies, and implementation strategies.",
      date: "Jan-Apr 2024 (12 week course)",
      grade: "87%",
      award: "Elite & Topper (Top 2%)",
      details: ["Online Assignments: 23.6/25", "Proctored Exam: 63.02/75", "Total candidates certified: 23872"],
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jX2bzTTksLt9ktYRA1PbJqllVZqDzx.png",
      certificateId: "NPTEL24CS17S452900568",
      viewLink: "https://nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS17S452900568",
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Certifications
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-primary"></span>
            </h2>
          </Reveal>
          <Parallax speed={-0.2}>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Professional certifications and courses I've completed
            </p>
          </Parallax>
        </FadeIn>

        <StaggerContainer className="max-w-4xl mx-auto space-y-8">
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={fadeInUpItem}>
              <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-t-primary/70">
                <CardHeader className="bg-gradient-to-r from-background to-muted">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <p className="text-muted-foreground">{cert.description}</p>

                  <div
                    className={`relative w-full overflow-hidden rounded-md transition-all duration-500 cursor-pointer group ${
                      expandedCert === index ? "h-[400px]" : "h-[200px]"
                    }`}
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <span className="text-white font-medium">
                        {expandedCert === index ? "Click to minimize" : "Click to expand"}
                      </span>
                    </div>
                    <Image
                      src={cert.imageSrc || "/placeholder.svg"}
                      alt={`${cert.title} Certificate`}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm p-1 rounded-full">
                      {expandedCert === index ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-y-2 justify-between items-center text-sm">
                    {cert.date && (
                      <span className="font-medium bg-muted px-3 py-1 rounded-md">Issued: {cert.date}</span>
                    )}
                    {cert.grade && (
                      <span className="font-medium bg-muted px-3 py-1 rounded-md">Grade: {cert.grade}</span>
                    )}
                    {cert.award && (
                      <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-md">{cert.award}</span>
                    )}
                    {cert.certificateId && (
                      <span className="font-medium bg-muted px-3 py-1 rounded-md">ID: {cert.certificateId}</span>
                    )}
                  </div>

                  {expandedCert === index && cert.details && (
                    <motion.div
                      className="mt-4 space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h4 className="font-medium text-sm">Additional Details:</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {cert.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </CardContent>
                <CardFooter className="bg-muted/30 py-4">
                  <Button size="sm" asChild className="relative overflow-hidden group">
                    <a href={cert.viewLink} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                        Verify Certificate
                      </span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}