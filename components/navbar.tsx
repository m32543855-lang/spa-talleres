"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Home,
  Image as ImageIcon,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react"
import { createPortal } from "react-dom"

const navLinks = [
  { label: "INICIO", href: "#inicio", icon: Home },
  { label: "ACABADO GARANTIZADO", href: "#servicios", icon: Wrench },
  { label: "ANTES & DESPUES", href: "#antes-despues", icon: ImageIcon },
  { label: "POR QUE SPA", href: "#por-que", icon: ShieldCheck },
  { label: "CONTACTO", href: "#contacto", icon: Phone },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = mobileOpen ? "hidden" : originalOverflow
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [mobileOpen, mounted])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [mobileOpen])

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
          <div className="block max-w-[160px] sm:max-w-none">
            <span className="block font-mono text-[13px] font-bold leading-none tracking-wider text-foreground sm:text-sm">
              S.P.A.
            </span>
            <span className="mt-0.5 block truncate text-[8px] leading-tight tracking-[0.2em] text-muted-foreground sm:text-[9px]">
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
          className="rounded-full border border-border bg-secondary/70 p-2 text-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      {mounted &&
        mobileOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[130] flex h-dvh w-screen flex-col bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navegacion movil"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <a
                href="#inicio"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3"
              >
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
                  <span className="block font-mono text-base font-bold leading-none tracking-wider text-foreground">
                    S.P.A.
                  </span>
                  <span className="mt-0.5 block text-[9px] leading-tight tracking-[0.2em] text-muted-foreground">
                    ACABADO GARANTIZADO
                  </span>
                </div>
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-border bg-secondary/80 p-2 text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                aria-label="Cerrar menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 px-5 pt-5">
              <a
                href="https://wa.me/593981911423"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-primary/45 bg-primary/15 px-3 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href="tel:+593981911423"
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/80 px-3 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/55 hover:text-primary"
              >
                <Phone size={14} />
                Llamar
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="mt-5 flex flex-1 flex-col gap-2 overflow-y-auto px-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between rounded-xl border border-border bg-secondary px-4 py-3.5 transition-all hover:border-primary/45"
                >
                  <span className="flex items-center gap-3">
                    <link.icon
                      size={16}
                      className="text-muted-foreground transition-colors group-hover:text-primary"
                    />
                    <span className="text-sm font-semibold tracking-wider text-foreground">
                      {link.label}
                    </span>
                  </span>
                  <ArrowRight
                    size={15}
                    className="text-muted-foreground transition-colors group-hover:text-primary"
                  />
                </a>
              ))}
            </nav>

            {/* CTA Button at the bottom */}
            <div className="border-t border-border px-5 pb-[max(1.4rem,env(safe-area-inset-bottom))] pt-4">
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-full bg-primary py-3.5 text-center text-sm font-bold tracking-[0.15em] text-primary-foreground shadow-[0_10px_26px_rgba(200,255,0,0.28)] transition-transform hover:scale-[1.01]"
              >
                COTIZAR AHORA
              </a>
            </div>
          </div>,
          document.body
        )}
    </header>
  )
}
