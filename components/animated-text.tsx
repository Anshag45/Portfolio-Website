"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  staticText: string
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
}

export function AnimatedText({
  staticText,
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
}: AnimatedTextProps) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [delta, setDelta] = useState(typingSpeed)

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick()
    }, delta)

    return () => clearTimeout(ticker)
  }, [text, isDeleting, phraseIndex])

  const tick = () => {
    const currentPhrase = phrases[phraseIndex]
    const updatedText = isDeleting
      ? currentPhrase.substring(0, text.length - 1)
      : currentPhrase.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(deletingSpeed)
    }

    if (!isDeleting && updatedText === currentPhrase) {
      setIsDeleting(true)
      setDelta(delayBetween)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
      setDelta(typingSpeed)
    }
  }

  return (
    <div className="inline-flex">
      <span className="font-bold">{staticText}</span>
      <div className="relative ml-2 min-h-[1.5em] min-w-[1ch]">
        <span className="font-bold text-primary">{text}</span>
        <span className="absolute right-[-8px] top-0 h-full w-[2px] animate-blink bg-primary"></span>
      </div>
    </div>
  )
}
