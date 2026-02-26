"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Reveal from "@/components/reveal"

const slides = [
  {
    before: "/images/before.jpg",
    after: "/images/after.jpg",
    altBefore: "Auto antes de la reparacion",
    altAfter: "Auto despues de la reparacion",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    altBefore: "Capo danado antes de la reparacion",
    altAfter: "Capo reparado y pulido",
  },
]

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="antes-despues" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-14 text-center">
          <h2 className="font-mono text-2xl font-bold tracking-wider text-foreground md:text-3xl">
            ANTES Y DESPUES
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 bg-primary" />
        </Reveal>

        {/* Carousel */}
        <Reveal className="relative" delay={70}>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Before */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute left-3 top-3 z-10 rounded-sm bg-background/80 px-3 py-1 text-xs font-bold tracking-wider text-foreground backdrop-blur-sm">
                ANTES
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={slides[current].before}
                  alt={slides[current].altBefore}
                  fill
                  className="object-cover transition-all duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* After */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute left-3 top-3 z-10 rounded-sm bg-primary px-3 py-1 text-xs font-bold tracking-wider text-primary-foreground backdrop-blur-sm">
                DESPUES
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={slides[current].after}
                  alt={slides[current].altAfter}
                  fill
                  className="object-cover transition-all duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary md:-left-5"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute -right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary md:-right-5"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </Reveal>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current ? "w-8 bg-primary" : "bg-border"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
