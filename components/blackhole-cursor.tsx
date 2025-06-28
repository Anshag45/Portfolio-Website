"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function BlackholeCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    // Hide default cursor
    document.body.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.body.style.cursor = "auto"
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main blackhole cursor */}
      <motion.div
        className="absolute"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
          rotate: 360,
        }}
        transition={{
          scale: { duration: 0.1 },
          rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      >
        {/* Outer ring */}
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-80 animate-spin"></div>
          <div
            className="absolute inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-60 animate-spin"
            style={{ animationDirection: "reverse" }}
          ></div>

          {/* Inner blackhole */}
          <div className="absolute inset-2 rounded-full bg-black border border-purple-500/50 shadow-lg">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
          </div>

          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Trailing particles - reduced count */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          animate={{
            x: Math.cos((i * Math.PI * 2) / 4) * 30,
            y: Math.sin((i * Math.PI * 2) / 4) * 30,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Gravitational waves - reduced count */}
      <motion.div
        className="absolute border border-purple-500/20 rounded-full"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: 100,
          height: 100,
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
        }}
      />
    </div>
  )
}
