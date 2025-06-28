"use client"

import { useEffect, useRef } from "react"

interface Vector2D {
  x: number
  y: number
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 }
  vel: Vector2D = { x: 0, y: 0 }
  acc: Vector2D = { x: 0, y: 0 }
  target: Vector2D = { x: 0, y: 0 }

  closeEnoughTarget = 100
  maxSpeed = 1.0
  maxForce = 0.1
  particleSize = 10
  isKilled = false

  startColor = { r: 0, g: 0, b: 0 }
  targetColor = { r: 0, g: 0, b: 0 }
  colorWeight = 0
  colorBlendRate = 0.01

  move() {
    // Check if particle is close enough to its target to slow down
    let proximityMult = 1
    const distance = Math.sqrt(Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2))

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget
    }

    // Add force towards target
    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    }

    const magnitude = Math.sqrt(towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y)
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    }

    const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce
      steer.y = (steer.y / steerMagnitude) * this.maxForce
    }

    this.acc.x += steer.x
    this.acc.y += steer.y

    // Move particle
    this.vel.x += this.acc.x
    this.vel.y += this.acc.y
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.acc.x = 0
    this.acc.y = 0
  }

  draw(ctx: CanvasRenderingContext2D, drawAsPoints: boolean) {
    // Blend towards target color
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0)
    }

    // Calculate current color
    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    }

    if (drawAsPoints) {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
      ctx.fillRect(this.pos.x, this.pos.y, 3, 3)
    } else {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
      ctx.beginPath()
      ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      // Set target outside the scene
      const randomPos = this.generateRandomPos(width / 2, height / 2, (width + height) / 2)
      this.target.x = randomPos.x
      this.target.y = randomPos.y

      // Begin blending color to black
      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      }
      this.targetColor = { r: 0, g: 0, b: 0 }
      this.colorWeight = 0

      this.isKilled = true
    }
  }

  private generateRandomPos(x: number, y: number, mag: number): Vector2D {
    const randomX = Math.random() * 1200
    const randomY = Math.random() * 600

    const direction = {
      x: randomX - x,
      y: randomY - y,
    }

    const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y)
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag
      direction.y = (direction.y / magnitude) * mag
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    }
  }
}

interface ParticleTextEffectProps {
  words?: string[]
  currentWord?: string
  autoAdvance?: boolean
  className?: string
}

const DEFAULT_WORDS = ["ANSH", "DEVELOPER", "ENGINEER", "CREATOR", "INNOVATOR"]

export function ParticleTextEffect({ 
  words = DEFAULT_WORDS, 
  currentWord,
  autoAdvance = true,
  className = ""
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const frameCountRef = useRef(0)
  const wordIndexRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0, isPressed: false, isRightClick: false })
  const currentWordRef = useRef<string>("")

  const pixelSteps = 4
  const drawAsPoints = true

  const generateRandomPos = (x: number, y: number, mag: number): Vector2D => {
    const randomX = Math.random() * 1200
    const randomY = Math.random() * 600

    const direction = {
      x: randomX - x,
      y: randomY - y,
    }

    const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y)
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag
      direction.y = (direction.y / magnitude) * mag
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    }
  }

  const nextWord = (word: string, canvas: HTMLCanvasElement) => {
    // Create off-screen canvas for text rendering
    const offscreenCanvas = document.createElement("canvas")
    offscreenCanvas.width = canvas.width
    offscreenCanvas.height = canvas.height
    const offscreenCtx = offscreenCanvas.getContext("2d")!

    // Calculate font size based on word length and canvas size
    let fontSize = Math.min(canvas.width / (word.length * 0.6), canvas.height * 0.4)
    fontSize = Math.max(fontSize, 40) // Minimum font size
    fontSize = Math.min(fontSize, 120) // Maximum font size

    // Draw text
    offscreenCtx.fillStyle = "white"
    offscreenCtx.font = `bold ${fontSize}px Arial`
    offscreenCtx.textAlign = "center"
    offscreenCtx.textBaseline = "middle"
    offscreenCtx.fillText(word, canvas.width / 2, canvas.height / 2)

    const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data

    // Generate new color based on portfolio theme
    const colors = [
      { r: 59, g: 130, b: 246 },   // blue
      { r: 147, g: 51, b: 234 },   // purple
      { r: 236, g: 72, b: 153 },   // pink
      { r: 34, g: 197, b: 94 },    // green
      { r: 251, g: 191, b: 36 },   // yellow
      { r: 6, g: 182, b: 212 },    // cyan
    ]
    const newColor = colors[Math.floor(Math.random() * colors.length)]

    const particles = particlesRef.current
    let particleIndex = 0

    // Collect coordinates
    const coordsIndexes: number[] = []
    for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
      coordsIndexes.push(i)
    }

    // Shuffle coordinates for fluid motion
    for (let i = coordsIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]]
    }

    for (const coordIndex of coordsIndexes) {
      const pixelIndex = coordIndex
      const alpha = pixels[pixelIndex + 3]

      if (alpha > 0) {
        const x = (pixelIndex / 4) % canvas.width
        const y = Math.floor(pixelIndex / 4 / canvas.width)

        let particle: Particle

        if (particleIndex < particles.length) {
          particle = particles[particleIndex]
          particle.isKilled = false
          particleIndex++
        } else {
          particle = new Particle()

          const randomPos = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2)
          particle.pos.x = randomPos.x
          particle.pos.y = randomPos.y

          // Reduced speed for better readability
          particle.maxSpeed = Math.random() * 2 + 1.5 // Reduced from 4-6 to 1.5-3.5
          particle.maxForce = particle.maxSpeed * 0.04 // Reduced force
          particle.particleSize = Math.random() * 4 + 4
          particle.colorBlendRate = Math.random() * 0.015 + 0.005 // Slower color blending

          particles.push(particle)
        }

        // Set color transition
        particle.startColor = {
          r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
          g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
          b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
        }
        particle.targetColor = newColor
        particle.colorWeight = 0

        particle.target.x = x
        particle.target.y = y
      }
    }

    // Kill remaining particles
    for (let i = particleIndex; i < particles.length; i++) {
      particles[i].kill(canvas.width, canvas.height)
    }
  }

  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")!
    const particles = particlesRef.current

    // Background with motion blur - reduced for better text visibility
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i]
      particle.move()
      particle.draw(ctx, drawAsPoints)

      // Remove dead particles that are out of bounds
      if (particle.isKilled) {
        if (
          particle.pos.x < -50 ||
          particle.pos.x > canvas.width + 50 ||
          particle.pos.y < -50 ||
          particle.pos.y > canvas.height + 50
        ) {
          particles.splice(i, 1)
        }
      }
    }

    // Handle mouse interaction
    if (mouseRef.current.isPressed && mouseRef.current.isRightClick) {
      particles.forEach((particle) => {
        const distance = Math.sqrt(
          Math.pow(particle.pos.x - mouseRef.current.x, 2) + Math.pow(particle.pos.y - mouseRef.current.y, 2),
        )
        if (distance < 80) {
          particle.kill(canvas.width, canvas.height)
        }
      })
    }

    // Auto-advance words
    if (autoAdvance) {
      frameCountRef.current++
      if (frameCountRef.current % 240 === 0) { // 4 seconds at 60fps
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length
        const newWord = words[wordIndexRef.current]
        if (newWord !== currentWordRef.current) {
          currentWordRef.current = newWord
          nextWord(newWord, canvas)
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  // Effect for external word changes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !currentWord) return

    if (currentWord !== currentWordRef.current) {
      currentWordRef.current = currentWord
      nextWord(currentWord, canvas)
    }
  }, [currentWord])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size to full viewport
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Re-render current word after resize
      if (currentWordRef.current) {
        nextWord(currentWordRef.current, canvas)
      }
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Initialize with first word
    const initialWord = currentWord || words[0]
    currentWordRef.current = initialWord
    nextWord(initialWord, canvas)

    // Start animation
    animate()

    // Mouse event handlers
    const handleMouseDown = (e: MouseEvent) => {
      mouseRef.current.isPressed = true
      mouseRef.current.isRightClick = e.button === 2
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseUp = () => {
      mouseRef.current.isPressed = false
      mouseRef.current.isRightClick = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("contextmenu", handleContextMenu)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', updateCanvasSize)
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("mouseup", handleMouseUp)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  return (
    <div className={`w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  )
}