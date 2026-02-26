"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Shield,
  User,
  Database,
  FileText,
  Clock,
  Scale,
  Share2,
  Lock,
  CheckCircle2,
  RefreshCw,
  ChevronDown,
} from "lucide-react"

const sections = [
  {
    id: "responsable",
    icon: User,
    number: "01",
    title: "Identidad y Domicilio del Responsable",
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs tracking-wider text-muted-foreground uppercase">
            Responsable del tratamiento
          </span>
          <span className="text-foreground">S.P.A. Talleres</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs tracking-wider text-muted-foreground uppercase">
            Correo electronico
          </span>
          <a
            href="mailto:edy2a@hotmail.com"
            className="text-primary hover:underline"
          >
            edy2a@hotmail.com
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs tracking-wider text-muted-foreground uppercase">
            Telefono de contacto
          </span>
          <a
            href="tel:+593981911423"
            className="text-primary hover:underline"
          >
            +593 98 191 1423
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "datos",
    icon: Database,
    number: "02",
    title: "Datos Personales que Recopilamos",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">
            A traves del asistente virtual (para agendar citas):
          </h4>
          <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Del cliente:</strong> Nombre
                completo, numero de telefono y correo electronico.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Del vehiculo:</strong> Marca,
                modelo, ano, tipo de vehiculo y descripcion del servicio.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">
            De manera presencial o durante el servicio:
          </h4>
          <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Identificacion:</strong>{" "}
                Nombre completo y cedula de identidad.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Contacto:</strong> Telefono,
                correo electronico y direccion.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Vehiculo:</strong> Placas,
                numero de chasis (NIV), kilometraje e historial de reparaciones.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-foreground">Financieros:</strong> RUC o
                cedula para facturacion.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "finalidad",
    icon: FileText,
    number: "03",
    title: "Finalidad del Tratamiento",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">
            Finalidades principales:
          </h4>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              "Gestion de citas",
              "Elaboracion de presupuestos",
              "Ejecucion del servicio",
              "Comunicacion durante el proceso",
              "Facturacion y pagos",
              "Gestion de garantias",
              "Seguridad de sus bienes",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 size={14} className="flex-shrink-0 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">
            Finalidades secundarias (opcionales):
          </h4>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {[
              "Envio de promociones",
              "Encuestas de satisfaccion",
              "Recordatorios de mantenimiento",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  size={14}
                  className="flex-shrink-0 text-muted-foreground"
                />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Usted tiene derecho a oponerse al uso de sus datos para estas
            finalidades secundarias.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "conservacion",
    icon: Clock,
    number: "04",
    title: "Plazo de Conservacion de los Datos",
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Sus datos personales seran conservados unicamente durante el tiempo
        necesario para cumplir con las finalidades descritas en este aviso, y
        durante los plazos legales establecidos por la normativa ecuatoriana
        (como obligaciones fiscales y mercantiles). Una vez cumplidas estas
        obligaciones, procederemos a la supresion o anonimizacion segura de sus
        datos.
      </p>
    ),
  },
  {
    id: "derechos",
    icon: Scale,
    number: "05",
    title: "Derechos ARCO+",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          La Ley ecuatoriana le otorga los siguientes derechos sobre su
          informacion personal:
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              right: "Acceso",
              desc: "Solicitar que datos tenemos sobre usted.",
            },
            {
              right: "Rectificacion",
              desc: "Corregir datos inexactos o incompletos.",
            },
            {
              right: "Cancelacion",
              desc: "Solicitar la eliminacion de sus datos.",
            },
            {
              right: "Oposicion",
              desc: "Oponerse al uso para fines especificos.",
            },
            {
              right: "Portabilidad",
              desc: "Recibir sus datos en formato estructurado.",
            },
            {
              right: "Decisiones automatizadas",
              desc: "No ser sujeto a decisiones automatizadas.",
            },
          ].map((item) => (
            <div
              key={item.right}
              className="rounded-lg border border-border bg-secondary/30 p-3"
            >
              <span className="mb-1 block text-xs font-bold tracking-wider text-primary uppercase">
                {item.right}
              </span>
              <span className="text-xs text-muted-foreground">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <p className="text-xs font-semibold text-foreground">
            {"Para ejercer sus derechos, envie su solicitud a:"}
          </p>
          <a
            href="mailto:edy2a@hotmail.com"
            className="mt-1 block text-sm text-primary hover:underline"
          >
            edy2a@hotmail.com
          </a>
          <p className="mt-2 text-xs text-muted-foreground">
            Respuesta en un plazo maximo de 15 dias habiles, prorrogables por 15
            dias mas.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "transferencia",
    icon: Share2,
    number: "06",
    title: "Transferencia de Datos",
    content: (
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
        <p>
          Sus datos personales no seran transferidos a terceros sin su
          consentimiento, salvo en los siguientes casos previstos en la ley:
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
            Por mandato de autoridad judicial o administrativa competente.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
            A proveedores de servicios tecnologicos que actuan como encargados
            del tratamiento bajo nuestras instrucciones y con las mismas
            obligaciones de confidencialidad.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "seguridad",
    icon: Lock,
    number: "07",
    title: "Seguridad y Confidencialidad",
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        En cumplimiento de nuestra politica empresarial de
        &quot;Confidencialidad y Seguridad&quot;, en S.P.A. Talleres
        implementamos medidas de seguridad tecnicas, administrativas y fisicas
        para proteger su informacion contra dano, perdida, alteracion,
        destruccion o uso no autorizado.
      </p>
    ),
  },
  {
    id: "consentimiento",
    icon: CheckCircle2,
    number: "08",
    title: "Consentimiento",
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Al proporcionar sus datos personales a traves de nuestro sitio web,
        asistente virtual o de forma presencial, usted manifiesta su
        consentimiento libre, especifico e informado para el tratamiento de sus
        datos conforme a las finalidades establecidas en este Aviso de
        Privacidad.
      </p>
    ),
  },
  {
    id: "actualizaciones",
    icon: RefreshCw,
    number: "09",
    title: "Actualizaciones",
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Nos reservamos el derecho de modificar o actualizar el presente aviso en
        cualquier momento para adaptarlo a novedades legislativas,
        jurisprudenciales o de nuestras propias practicas. Cualquier cambio sera
        notificado a traves de nuestro sitio web.
      </p>
    ),
  },
]

function AccordionItem({
  section,
  isOpen,
  onToggle,
}: {
  section: (typeof sections)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  const Icon = section.icon
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-colors ${
        isOpen ? "border-primary/30 bg-card" : "border-border bg-card/50 hover:border-border/80"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
            isOpen ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
          }`}
        >
          <Icon size={18} />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-bold tracking-widest text-primary/60">
            {section.number}
          </span>
          <h3 className="text-sm font-semibold text-foreground">
            {section.title}
          </h3>
        </div>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/50 px-5 pb-5 pt-4">
            {section.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PrivacyContent() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  function toggleSection(id: string) {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function expandAll() {
    setOpenSections(new Set(sections.map((s) => s.id)))
  }

  function collapseAll() {
    setOpenSections(new Set())
  }

  const allOpen = openSections.size === sections.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 lg:px-0">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-primary/40 bg-background/80 p-0.5">
              <Image
                src="/images/logo.png"
                alt="S.P.A."
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs font-bold tracking-wider text-foreground font-mono">
              S.P.A.
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 py-10 lg:px-0">
        {/* Title block */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Shield size={28} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
            {"Pol\u00edticas de Privacidad"}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Aviso de privacidad y tratamiento de datos personales de S.P.A.
            Talleres, en cumplimiento de la Ley Organica de Proteccion de Datos
            Personales del Ecuador (LOPDP).
          </p>
        </div>

        {/* Intro card */}
        <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            En <strong className="text-foreground">S.P.A. Talleres</strong>, nos
            dedicamos a enderezar y pintar vehiculos con los mas altos
            estandares de calidad, guiados por nuestra politica de mejora
            continua y aprendizaje constante para adaptarnos a las nuevas
            necesidades de nuestros clientes y la evolucion tecnologica.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-4 flex justify-end">
          <button
            onClick={allOpen ? collapseAll : expandAll}
            className="text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            {allOpen ? "Cerrar todos" : "Expandir todos"}
          </button>
        </div>

        {/* Accordion sections */}
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <AccordionItem
              key={section.id}
              section={section}
              isOpen={openSections.has(section.id)}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-xs text-muted-foreground">
            {"Si tiene preguntas sobre nuestras pol\u00edticas, no dude en contactarnos."}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:edy2a@hotmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-6 py-2.5 text-xs font-semibold tracking-wider text-primary transition-colors hover:bg-primary/20"
            >
              Contactar por correo
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-xs font-semibold tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
