"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  scale?: number
  once?: boolean
}

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 650,
  y = 18,
  scale = 0.985,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once && element) observer.unobserve(element)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once])

  const style: CSSProperties = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(.22,.61,.36,1)",
    transitionDelay: `${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0,0,0) scale(1)"
      : `translate3d(0,${y}px,0) scale(${scale})`,
    filter: visible ? "blur(0px)" : "blur(2px)",
    willChange: "opacity, transform, filter",
  }

  return (
    <div ref={ref} style={style} className={cn("reveal-base", className)}>
      {children}
    </div>
  )
}
