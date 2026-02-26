import { Flame, Wrench } from "lucide-react"
import Reveal from "@/components/reveal"

const services = [
  {
    icon: Wrench,
    title: "ENDEREZADO TECNICO DE CARROCERIA",
    description:
      "Correccion de golpes con traccion y medicion de puntos de control para recuperar lineas, holguras y alineacion del vehiculo.",
  },
  {
    icon: Flame,
    title: "PINTURA AUTOMOTRIZ AL HORNO",
    description:
      "Preparacion de superficie, aplicacion controlada de base y barniz, y curado en cabina para lograr brillo uniforme, proteccion y durabilidad.",
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-14 text-center">
          <h2 className="font-mono text-2xl font-bold tracking-wider text-foreground md:text-3xl">
            ACABADO GARANTIZADO
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 bg-primary" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Nos enfocamos en enderezado tecnico y pintura al horno para
            entregar un acabado confiable, uniforme y profesional.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                delay={index * 80}
                className="h-full"
              >
                <div className="group flex h-full min-h-[270px] flex-col rounded-lg border border-border bg-secondary p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:border-primary/40">
                    <Icon
                      size={28}
                      className="text-muted-foreground transition-colors group-hover:text-primary"
                    />
                  </div>
                  <h3 className="mb-3 text-sm font-bold tracking-wider text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
