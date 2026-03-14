"use client"

import { useState, type CSSProperties } from "react"
import { Webchat, type Configuration } from "@botpress/webchat"

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
  const chatWidth = "min(420px, calc(100vw - 16px))"
  const chatHeight = "min(680px, calc(100dvh - 16px))"
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
    "--header-avatar-bg": "#c8ff00",
    "--header-avatar-text": "#0a0a0a",
    "--message-bg": "#1d1d1d",
    "--message-text": "#f5f5f5",
    "--send-button-bg": "#c8ff00",
    "--send-button-bg-hover": "#b2e400",
    "--send-button-text": "#0a0a0a",
    "--button-bg": "#c8ff00",
    "--button-bg-hover": "#b2e400",
    "--button-text": "#0a0a0a",
    "--scrollbar": "#2a2a2a",
    "--scrollbar-hover": "#3a3a3a",
  } as CSSProperties

  return (
    <>
      {!isWebchatOpen && (
        <button
          type="button"
          onClick={toggleWebchat}
          aria-label="Abrir asistencia en linea"
          aria-controls="spa-webchat-panel"
          aria-expanded={isWebchatOpen}
          className="spa-chat-launcher"
          style={{
            ...themeVars,
            position: "fixed",
            right: edge,
            bottom: edge,
            zIndex: 60,
          }}
        >
          <span className="spa-chat-launcher__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M7.5 17.5 3 21V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M8 9h8M8 12h5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="spa-chat-launcher__text">
            <span className="spa-chat-launcher__eyebrow">Asistencia en linea</span>
            <span className="spa-chat-launcher__title">Habla con nosotros</span>
          </span>
          <span className="spa-chat-launcher__badge">Online</span>
        </button>
      )}
      <div
        className="spa-chat-backdrop"
        data-open={isWebchatOpen ? "" : undefined}
        onClick={() => setIsWebchatOpen(false)}
      />
      <div
        id="spa-webchat-panel"
        className="spa-chat-panel"
        style={{
          ...themeVars,
          position: "fixed",
          right: edge,
          bottom: "max(0px, env(safe-area-inset-bottom))",
          width: chatWidth,
          height: chatHeight,
          zIndex: 59,
          opacity: isWebchatOpen ? 1 : 0,
          pointerEvents: isWebchatOpen ? "auto" : "none",
          transform: isWebchatOpen
            ? "translateY(0) scale(1)"
            : "translateY(12px) scale(0.98)",
          transition:
            "opacity 180ms ease, transform 180ms ease, box-shadow 180ms ease",
          borderRadius: "16px 16px 0 0",
          border: "1px solid rgba(200, 255, 0, 0.24)",
          boxShadow: "0 18px 48px rgba(0, 0, 0, 0.45)",
          background: "rgba(10, 10, 10, 0.92)",
          backdropFilter: "blur(10px)",
          overflow: "hidden",
        }}
      >
        <button
          type="button"
          aria-label="Cerrar chat"
          className="spa-chat-close"
          onClick={() => setIsWebchatOpen(false)}
        >
          <span aria-hidden="true">×</span>
        </button>
        <Webchat
          clientId={clientId}
          configuration={configuration}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <style jsx global>{`
        .spa-chat-launcher {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px 10px 12px;
          border-radius: 999px;
          border: 1px solid rgba(200, 255, 0, 0.45);
          background: linear-gradient(135deg, rgba(10, 10, 10, 0.98), rgba(20, 20, 20, 0.9));
          color: #f5f5f5;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
          cursor: pointer;
          transition: transform 160ms ease, box-shadow 160ms ease, border 160ms ease;
        }
        .spa-chat-launcher:hover {
          transform: translateY(-2px);
          border-color: rgba(200, 255, 0, 0.7);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
        }
        .spa-chat-launcher__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: radial-gradient(circle at top, rgba(200, 255, 0, 0.6), rgba(200, 255, 0, 0.1));
          color: #0a0a0a;
          box-shadow: inset 0 0 0 1px rgba(200, 255, 0, 0.45);
        }
        .spa-chat-launcher__text {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
        }
        .spa-chat-launcher__eyebrow {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(200, 255, 0, 0.9);
          font-weight: 600;
        }
        .spa-chat-launcher__title {
          font-size: 14px;
          font-weight: 600;
        }
        .spa-chat-launcher__badge {
          font-size: 11px;
          font-weight: 600;
          color: #0a0a0a;
          background: #c8ff00;
          padding: 4px 8px;
          border-radius: 999px;
        }
        .spa-chat-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 5, 5, 0.55);
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease;
          z-index: 58;
        }
        .spa-chat-backdrop[data-open] {
          opacity: 1;
          pointer-events: auto;
        }
        .spa-chat-panel .bpContainer {
          border-radius: 16px 16px 0 0;
          border-color: rgba(200, 255, 0, 0.2);
          background: #0f0f0f;
        }
        .spa-chat-panel .bpHeaderContainer {
          background: linear-gradient(
            135deg,
            rgba(200, 255, 0, 0.18),
            rgba(10, 10, 10, 0.92)
          );
          border-bottom: 1px solid rgba(200, 255, 0, 0.2);
        }
        .spa-chat-panel .bpHeaderContentContainer {
          background: rgba(8, 8, 8, 0.65);
          border: 1px solid rgba(200, 255, 0, 0.2);
        }
        .spa-chat-panel .bpHeaderTitle {
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .spa-chat-panel .bpHeaderDescription {
          color: rgba(245, 245, 245, 0.7);
        }
        .spa-chat-panel .bpMessageList {
          padding-top: 12px;
        }
        .spa-chat-panel .bpComposerContainer {
          margin: 0 12px 12px;
          border-radius: 14px;
          border-color: rgba(200, 255, 0, 0.22);
          background: rgba(18, 18, 18, 0.92);
        }
        .spa-chat-panel .bpComposerInput {
          color: #f5f5f5;
        }
        .spa-chat-panel .bpMessageContainer {
          padding: 0 12px;
        }
        .spa-chat-panel .bpMessageBlocksButton {
          border-radius: 999px;
          background: var(--button-bg);
          color: var(--button-text);
          font-weight: 600;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
        }
        .spa-chat-panel .bpMessageBlocksButton:hover {
          background: var(--button-bg-hover);
        }
        .spa-chat-close {
          position: absolute;
          right: 10px;
          top: 10px;
          z-index: 2;
          width: 30px;
          height: 30px;
          border-radius: 999px;
          border: 1px solid rgba(200, 255, 0, 0.4);
          background: rgba(10, 10, 10, 0.8);
          color: #f5f5f5;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
        }
        .spa-chat-close:hover {
          background: rgba(200, 255, 0, 0.2);
          color: #0a0a0a;
        }
        @media (max-width: 640px) {
          .spa-chat-launcher {
            right: 12px;
            bottom: 12px;
          }
          .spa-chat-panel {
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100dvh !important;
            border-radius: 0 !important;
          }
          .spa-chat-panel .bpContainer {
            border-radius: 0 !important;
          }
          .spa-chat-backdrop {
            background: rgba(5, 5, 5, 0.6);
          }
        }
      `}</style>
    </>
  )
}
