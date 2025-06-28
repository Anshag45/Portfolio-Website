"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
  distance?: number
  once?: boolean
  threshold?: number
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  distance = 50,
  once = true,
  threshold = 0.1,
}: FadeInProps) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: `-${threshold * 100}% 0px` }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  staggerChildren?: number
  className?: string
  once?: boolean
  threshold?: number
}

export function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
  once = true,
  threshold = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: `-${threshold * 100}% 0px` }}
      transition={{ delay }}
      variants={{
        visible: {
          transition: {
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const fadeInUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const fadeInLeftItem = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const fadeInRightItem = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const scaleInItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  )
}

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  className?: string
  once?: boolean
  threshold?: number
}

export function AnimatedCounter({
  from,
  to,
  duration = 1.5,
  delay = 0,
  className = "",
  once = true,
  threshold = 0.1,
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = from + (to - from) * easeOut

      node.textContent = Math.round(currentValue).toString()

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, delay * 1000)

    return () => {
      clearTimeout(timer)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [from, to, duration, delay])

  return (
    <motion.span
      ref={nodeRef}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: `-${threshold * 100}% 0px` }}
      transition={{ delay }}
    >
      {from}
    </motion.span>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  threshold?: number
  staggerChildren?: number
  delay?: number
}

export function AnimatedText({
  text,
  className = "",
  once = true,
  threshold = 0.1,
  staggerChildren = 0.02,
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ")

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: `-${threshold * 100}% 0px` }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-1"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren,
                delayChildren: delay + i * 0.1,
              },
            },
          }}
        >
          {Array.from(word).map((char, j) => (
            <motion.span
              key={j}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.2, ease: "easeOut" },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  )
}

interface RevealProps {
  children: ReactNode
  className?: string
  once?: boolean
  threshold?: number
  delay?: number
}

export function Reveal({ children, className = "", once = true, threshold = 0.1, delay = 0 }: RevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, margin: `-${threshold * 100}% 0px` }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once, margin: `-${threshold * 100}% 0px` }}
        transition={{ duration: 0.5, ease: "easeInOut", delay }}
      />
    </div>
  )
}
