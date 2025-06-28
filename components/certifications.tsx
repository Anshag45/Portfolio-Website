"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

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
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block text-white">
              Professional
              <span className="block text-4xl md:text-[4rem] font-bold mt-1 leading-none bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Professional certifications and courses I've completed
            </p>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-y-auto p-4">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-xl border-t-4 border-t-primary/70 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-background to-muted pb-2">
                  <div className="flex flex-col gap-2">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="bg-primary/10 px-2 py-1 rounded-full text-xs text-center">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 p-3">
                  <p className="text-muted-foreground text-xs mb-3">{cert.description}</p>

                  <div className="relative w-full h-32 mb-3 overflow-hidden rounded-md">
                    <Image
                      src={cert.imageSrc || "/placeholder.svg"}
                      alt={`${cert.title} Certificate`}
                      fill
                      className="object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-wrap gap-1 justify-between items-center text-xs">
                    {cert.date && (
                      <span className="font-medium bg-muted px-2 py-1 rounded-md text-xs">
                        {cert.date}
                      </span>
                    )}
                    {cert.grade && (
                      <span className="font-medium bg-muted px-2 py-1 rounded-md text-xs">
                        {cert.grade}
                      </span>
                    )}
                    {cert.award && (
                      <span className="text-primary font-medium bg-primary/10 px-2 py-1 rounded-md text-xs">
                        {cert.award}
                      </span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="bg-muted/30 py-2 mt-auto">
                  <Button variant="outline" size="sm" asChild className="w-full text-xs h-8">
                    <a href={cert.viewLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Verify
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  )
}