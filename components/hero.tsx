import Image from "next/image"
import { MessageCircle } from "lucide-react"
import Reveal from "@/components/reveal"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Auto de lujo en cabina de pintura profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-ambient absolute -right-16 top-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-xl">
          <Reveal delay={40}>
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              El acabado perfecto que tu{" "}
              <span className="text-primary">vehiculo</span> merece.
            </h1>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
              En S.P.A Talleres realizamos planchado y pintura profesional al
              horno en Arequipa, con resultados duraderos.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground/90 lg:text-base">
              Somos SPA Talleres Arequipa, tu Taller S.P.A en Arequipa para
              enderezado y pintura automotriz.
            </p>
          </Reveal>
          <Reveal delay={220} className="inline-block">
            <a
              href="https://wa.me/593981911423"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold tracking-wider text-primary transition-all hover:scale-[1.02] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_12px_28px_rgba(200,255,0,0.24)]"
            >
              <MessageCircle size={18} />
              SOLICITAR COTIZACION POR WHATSAPP
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
