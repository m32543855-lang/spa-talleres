"use client"

import { useState, type CSSProperties } from "react"
import { Fab, Webchat, type Configuration } from "@botpress/webchat"

const clientId = "3d5a2949-318a-4f75-92d4-d0b2000fbf28"

const configuration: Configuration = {
  color: "#c8ff00",
  themeMode: "dark",
  variant: "soft",
  headerVariant: "glass",
  radius: 1.6,
  botName: "S.P.A. Asistente",
  botAvatar: "/images/logo.png",
  botDescription: "Cotizaciones y citas para tu vehiculo.",
  fabImage: "/images/logo.png",
  composerPlaceholder: "Escribe aqui tu consulta (ej: Quiero una cotizacion)...",
  proactiveMessageEnabled: true,
  proactiveBubbleMessage:
    "Hola, soy el asistente de S.P.A. Talleres. Te ayudo en segundos.",
  proactiveBubbleTriggerType: "afterDelay",
  proactiveBubbleDelayTime: 4,
  feedbackEnabled: true,
  conversationHistory: true,
  soundEnabled: false,
  phone: {
    title: "Llamar: +593 98 191 1423",
    link: "tel:+593981911423",
  },
  email: {
    title: "Correo: edy2a@hotmail.com",
    link: "mailto:edy2a@hotmail.com",
  },
  website: {
    title: "WhatsApp directo",
    link: "https://wa.me/593981911423",
  },
  privacyPolicy: {
    title: "Politicas de privacidad",
    link: "/privacidad",
  },
  termsOfService: {
    title: "Terminos del servicio",
    link: "/privacidad",
  },
  footer: "",
  showPoweredBy: false,
}

export default function BotpressChat() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }

  const edge = 16
  const fabSize = 56
  const chatWidth = "min(380px, calc(100vw - 32px))"
  const chatHeight = "min(620px, calc(100dvh - 140px))"
  const themeVars = {
    "--bpPrimary-600": "#c8ff00",
    "--bpPrimary-700": "#b2e400",
    "--bpPrimary-500": "#d4ff33",
    "--bpPrimary-400": "#e1ff66",
    "--bpGray-1": "#0f0f0f",
    "--bpGray-50": "#121212",
    "--bpGray-100": "#191919",
    "--bpGray-200": "#242424",
    "--bpGray-300": "#2f2f2f",
    "--bpGray-700": "#c9c9c9",
    "--bpGray-900": "#f5f5f5",
    "--header-bg": "rgba(12, 12, 12, 0.92)",
    "--header-title": "#f5f5f5",
    "--header-description": "#b3b3b3",
    "--message-bg": "#1d1d1d",
    "--message-text": "#f5f5f5",
    "--send-button-bg": "#c8ff00",
    "--send-button-bg-hover": "#b2e400",
    "--send-button-text": "#0a0a0a",
    "--fab-bg": "rgba(200, 255, 0, 0.18)",
    "--fab-bg-hover": "rgba(200, 255, 0, 0.28)",
    "--fab-icon": "#c8ff00",
    "--scrollbar": "#2a2a2a",
    "--scrollbar-hover": "#3a3a3a",
  } as CSSProperties

  return (
    <>
      <div
        style={{
          ...themeVars,
          position: "fixed",
          right: edge,
          bottom: edge,
          width: fabSize,
          height: fabSize,
          zIndex: 60,
        }}
      >
        <Fab
          onClick={toggleWebchat}
          role="button"
          aria-label="Abrir chat"
          imgUrl="/images/logo.png"
        />
      </div>
      <div
        style={{
          ...themeVars,
          position: "fixed",
          right: edge,
          bottom: edge + fabSize + 12,
          width: chatWidth,
          height: chatHeight,
          zIndex: 59,
          display: isWebchatOpen ? "block" : "none",
          borderRadius: 16,
          border: "1px solid rgba(200, 255, 0, 0.24)",
          boxShadow: "0 18px 48px rgba(0, 0, 0, 0.45)",
          background: "rgba(10, 10, 10, 0.92)",
          backdropFilter: "blur(10px)",
          overflow: "hidden",
        }}
      >
        <Webchat
          clientId={clientId}
          configuration={configuration}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  )
}
