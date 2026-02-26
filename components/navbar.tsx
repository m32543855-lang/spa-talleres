"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "INICIO", href: "#inicio" },
  { label: "ACABADO GARANTIZADO", href: "#servicios" },
  { label: "ANTES & DESPUES", href: "#antes-despues" },
  { label: "POR QUE SPA", href: "#por-que" },
  { label: "CONTACTO", href: "#contacto" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-primary/20 bg-background/95 shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
          : "border-border bg-background/90"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-primary/60 bg-background/80 p-0.5 transition-all group-hover:border-primary group-hover:shadow-[0_0_14px_rgba(200,255,0,0.25)]">
            <Image
              src="/images/logo.png"
              alt="S.P.A."
              width={80}
              height={80}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-wider text-foreground font-mono leading-none">
              S.P.A.
            </span>
            <span className="block text-[9px] tracking-[0.2em] text-muted-foreground leading-tight mt-0.5">
              ACABADO GARANTIZADO
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[11px] font-semibold tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          {/* CTA inline with nav */}
          <a
            href="#contacto"
            className="ml-2 rounded-full bg-primary px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(200,255,0,0.3)]"
          >
            COTIZAR AHORA
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navegacion movil"
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <a href="#inicio" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/60 bg-background/80 p-0.5">
                <Image
                  src="/images/logo.png"
                  alt="S.P.A."
                  width={80}
                  height={80}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <span className="block text-base font-bold tracking-wider text-foreground font-mono leading-none">
                  S.P.A.
                </span>
                <span className="block text-[9px] tracking-[0.2em] text-muted-foreground leading-tight mt-0.5">
                  ACABADO GARANTIZADO
                </span>
              </div>
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-foreground"
              aria-label="Cerrar menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-1 flex-col gap-1 px-6 pt-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-semibold tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button at the bottom */}
          <div className="px-6 pb-8">
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-full bg-primary py-4 text-center text-sm font-bold tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              COTIZAR AHORA
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
