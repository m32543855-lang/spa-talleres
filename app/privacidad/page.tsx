import type { Metadata } from "next"
import PrivacyContent from "@/components/privacy-content"

export const metadata: Metadata = {
  title: "Politicas de Privacidad | S.P.A. Servicio Profesional Arequipa",
  description:
    "Aviso de privacidad y politicas de tratamiento de datos personales de S.P.A. Talleres.",
}

export default function PrivacidadPage() {
  return <PrivacyContent />
}
