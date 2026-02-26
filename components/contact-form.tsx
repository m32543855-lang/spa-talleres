import { Phone, Mail, MessageCircle } from "lucide-react"
import Reveal from "@/components/reveal"

export default function ContactForm() {
  return (
    <section id="contacto" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="font-mono text-2xl font-bold tracking-wider text-foreground md:text-3xl lg:text-4xl">
            CONTACTO
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Sabemos lo importante que es tu vehiculo para ti. En{" "}
            <span className="font-semibold text-foreground">S.P.A. Talleres</span>{" "}
            tratamos cada auto como si fuera nuestro. Nos especializamos en
            reparacion de choques, enderezado de precision y pintura de alta
            calidad para que olvides ese golpe que tanto te preocupa.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-primary/90 md:text-base">
            Estamos aqui para ayudarte y ofrecerte la mejor solucion al mejor precio.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={20} className="h-full">
            <a
              href="https://wa.me/593984451481"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-center justify-center rounded-xl border border-border bg-card/70 px-6 py-8 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(200,255,0,0.08)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366]/10 text-[#25d366] transition-colors group-hover:bg-[#25d366]/20">
                <MessageCircle size={24} />
              </div>
              <p className="mt-5 text-xs tracking-[0.24em] text-muted-foreground">
                WHATSAPP
              </p>
              <p className="mt-2 text-xl font-semibold text-foreground">
                +593 98 445 1481
              </p>
            </a>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <a
              href="mailto:edy2a@hotmail.com"
              className="group flex h-full flex-col items-center justify-center rounded-xl border border-border bg-card/70 px-6 py-8 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(200,255,0,0.08)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Mail size={24} />
              </div>
              <p className="mt-5 text-xs tracking-[0.24em] text-muted-foreground">
                CORREO
              </p>
              <p className="mt-2 text-xl font-semibold text-foreground">
                edy2a@hotmail.com
              </p>
            </a>
          </Reveal>

          <Reveal delay={180} className="h-full">
            <a
              href="tel:+593981911423"
              className="group flex h-full flex-col items-center justify-center rounded-xl border border-border bg-card/70 px-6 py-8 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(200,255,0,0.08)] sm:col-span-2 lg:col-span-1"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Phone size={24} />
              </div>
              <p className="mt-5 text-xs tracking-[0.24em] text-muted-foreground">
                TELEFONO
              </p>
              <p className="mt-2 text-xl font-semibold text-foreground">
                +593 98 191 1423
              </p>
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="mx-auto mt-8 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card/70 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_12px_28px_rgba(200,255,0,0.08)]">
            <div className="border-b border-border px-6 py-4">
              <p className="text-xs tracking-[0.24em] text-muted-foreground">
                UBICACION
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                S.P.A Talleres
              </p>
            </div>
            <div className="h-[320px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4542323760247!2d-78.64072944788508!3d-0.9143657626509604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d4610044ca3a9b%3A0x492efd8166df9ac2!2sS.P.A%20Talleres!5e1!3m2!1ses-419!2sec!4v1772125296701!5m2!1ses-419!2sec"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion de S.P.A Talleres"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-5xl text-center text-xs text-muted-foreground">
            Al contactarnos aceptas nuestras{" "}
            <a
              href="/privacidad"
              className="font-medium text-primary underline underline-offset-2"
            >
              politicas de privacidad
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
