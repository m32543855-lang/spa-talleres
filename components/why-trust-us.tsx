import Image from "next/image"
import { Cpu, FlaskConical, ShieldCheck } from "lucide-react"
import Reveal from "@/components/reveal"

const reasons = [
  {
    icon: Cpu,
    title: "TECNOLOGIA DE VANGUARDIA",
    description:
      "Tecnologia de vanguardia para restablecer colores a la calidad de fabrica. Utilizamos equipos de ultima generacion.",
  },
  {
    icon: FlaskConical,
    title: "PRECISION QUIMICA",
    description:
      "Precision quimica en preparacion, igualacion y fusion para una integracion perfecta con la pintura original.",
  },
  {
    icon: ShieldCheck,
    title: "GARANTIA DE FABRICA",
    description:
      "Garantia de calidad con estandares de acabado comparable con las mejores fabricas profesionales.",
  },
]

export default function WhyTrustUs() {
  return (
    <section id="por-que" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <Reveal className="mb-14 text-center">
          <h2 className="font-mono text-2xl font-bold tracking-wider text-foreground md:text-3xl">
            POR QUE AREQUIPA CONFIA
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-20 bg-primary" />
        </Reveal>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Reveal
                key={reason.title}
                className="text-center"
                delay={index * 85}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-transform duration-300 hover:scale-110">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-3 text-sm font-bold tracking-wider text-foreground">
                  {reason.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </Reveal>
            )
          })}
        </div>

        {/* Car image */}
        <Reveal className="mt-16 overflow-hidden rounded-lg" delay={100}>
          <div className="relative h-56 md:h-72 lg:h-80">
            <Image
              src="/images/car-profile.jpg"
              alt="Vehiculo de lujo con acabado perfecto"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
