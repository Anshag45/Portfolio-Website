"use client"

import { useState, useEffect } from "react"

interface AnimatedTextAltProps {
  name: string
  roles: string[]
}

export function AnimatedTextAlt({ name, roles }: AnimatedTextAltProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentRole = roles[currentRoleIndex]

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeoutId)
      } else {
        setIsTyping(false)
        const timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeoutId)
      }
    } else {
      if (displayText.length > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, 50)
        return () => clearTimeout(timeoutId)
      } else {
        setIsTyping(true)
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length)
      }
    }
  }, [displayText, isTyping, currentRoleIndex, roles, mounted])

  useEffect(() => {
    if (!mounted) return

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [mounted])

  if (!mounted) {
    return (
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
          Hi, I'm <span className="text-primary">{name}</span>
        </h1>
        <div className="h-16 flex items-center">
          <div className="text-2xl md:text-3xl font-medium flex items-center">
            <span className="mr-2">I'm a</span>
            <span className="text-primary relative">{roles[0]}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
        Hi, I'm <span className="text-primary">{name}</span>
      </h1>
      <div className="h-16 flex items-center">
        <div className="text-2xl md:text-3xl font-medium flex items-center">
          <span className="mr-2">I'm a</span>
          <span className="text-primary relative">
            {displayText}
            <span
              className={`absolute top-0 ml-1 h-full w-[2px] bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`}
              style={{ left: `calc(${displayText.length}ch)` }}
            ></span>
          </span>
        </div>
      </div>
    </div>
  )
}
