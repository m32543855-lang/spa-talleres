import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 text-xs text-muted-foreground lg:px-8">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/40 bg-background/80 p-0.5 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="S.P.A. Logo"
                width={60}
                height={60}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p>
              {"© 2026 S.P.A. Servicio Profesional Arequipa. Todos los derechos reservados."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
