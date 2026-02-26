"use client"

import { type ComponentType, useEffect, useMemo, useRef, useState } from "react"
import type { BlockObjects, Configuration, Renderers } from "@botpress/webchat"
import {
  BadgeDollarSign,
  Check,
  CalendarClock,
  CalendarDays,
  CircleX,
  HelpCircle,
  Link2,
  LifeBuoy,
  MessageCircle,
  X,
} from "lucide-react"

const clientId = "830741fd-4402-4cd7-84b7-2f71d253d09d"

type ButtonVariant = BlockObjects["button"]["variant"]
type ActionKind =
  | "link"
  | "cancel"
  | "confirm"
  | "reschedule"
  | "schedule"
  | "quote"
  | "support"
  | "default"

const sanitizeButtonLabel = (text: string) =>
  text
    .replace(/(?:[\uD83C-\uDBFF][\uDC00-\uDFFF])|[\u2600-\u27BF]|\uFE0F/g, "")
    .replace(/[^0-9A-Za-zÀ-ÿ\s.,:/()\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()

const normalizeForMatch = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()

const getActionKind = (text: string, variant: ButtonVariant): ActionKind => {
  const value = normalizeForMatch(text)

  if (variant === "link") {
    return "link"
  }

  if (/(cancel|cancelar|anular|stop|detener|no\b|decline|reject)/.test(value)) {
    return "cancel"
  }

  if (/(^si$|^yes$|confirm|aceptar|continuar|ok\b)/.test(value)) {
    return "confirm"
  }

  if (/(reagendar|reprogram|reschedule)/.test(value)) {
    return "reschedule"
  }

  if (/(agendar|agenda|cita|reservar|schedule|book|appointment)/.test(value)) {
    return "schedule"
  }

  if (/(cotizar|cotizacion|quote|pricing|price|presupuesto)/.test(value)) {
    return "quote"
  }

  if (/(ayuda|duda|soporte|support|contact|contacto|whatsapp|pregunta|question)/.test(value)) {
    return "support"
  }

  return "default"
}

const actionIcon = (text: string, variant: ButtonVariant) => {
  switch (getActionKind(text, variant)) {
    case "link":
      return <Link2 size={14} aria-hidden="true" />
    case "cancel":
      return <CircleX size={14} aria-hidden="true" />
    case "confirm":
      return <Check size={14} aria-hidden="true" />
    case "reschedule":
      return <CalendarClock size={14} aria-hidden="true" />
    case "schedule":
      return <CalendarDays size={14} aria-hidden="true" />
    case "quote":
      return <BadgeDollarSign size={14} aria-hidden="true" />
    case "support":
      return <LifeBuoy size={14} aria-hidden="true" />
    default:
      return <HelpCircle size={14} aria-hidden="true" />
  }
}

const iconSvgByKind = (kind: ActionKind) => {
  if (kind === "link") {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11.8 5"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L12.2 19"/></svg>'
  }

  if (kind === "cancel") {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>'
  }

  if (kind === "confirm") {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>'
  }

  if (kind === "reschedule") {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M14 14h4v4"/><path d="M18 18l-5-5"/></svg>'
  }

  if (kind === "schedule") {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>'
  }

  if (kind === "quote") {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H6"/></svg>'
  }

  if (kind === "support") {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18h.01"/><path d="M8 10a4 4 0 0 1 8 0c0 2-2 3-2 3"/><circle cx="12" cy="12" r="9"/></svg>'
  }

  return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
}

const ActionButtonRenderer = ({
  text,
  buttonValue,
  variant,
  reusable,
  sendMessage,
  isReadOnly,
}: BlockObjects["button"]) => {
  const [isActivated, setIsActivated] = useState(false)
  const label = sanitizeButtonLabel(text ?? "") || (text ?? "").trim()
  const disabled = Boolean(isReadOnly || (!reusable && isActivated))

  if (variant === "link") {
    return (
      <a
        className="bpMessageBlocksButton spa-chat-action"
        data-activated={isActivated ? "" : undefined}
        data-type="link"
        href={buttonValue}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }
          setIsActivated(true)
        }}
        style={disabled ? { pointerEvents: "none", opacity: 0.7 } : undefined}
      >
        <span className="spa-chat-action-icon">{actionIcon(label, "link")}</span>
        {label}
      </a>
    )
  }

  return (
    <button
      type="button"
      className="bpMessageBlocksButton spa-chat-action"
      data-activated={isActivated ? "" : undefined}
      data-type="action"
      disabled={disabled}
      onClick={() => {
        if (disabled) return
        setIsActivated(true)
        sendMessage?.({ type: "text", text: label, value: buttonValue })
      }}
      style={isReadOnly ? { pointerEvents: "none", opacity: 0.7 } : undefined}
    >
      <span className="spa-chat-action-icon">{actionIcon(label, "action")}</span>
      {label}
    </button>
  )
}

export default function BotpressChat() {
  const [botpress, setBotpress] = useState<{
    Webchat: ComponentType<Record<string, unknown>>
  } | null>(null)
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)
  const chatRootRef = useRef<HTMLDivElement | null>(null)
  const configuration = useMemo<Configuration>(
    () => ({
      color: "#C8FF00",
      themeMode: "dark",
      variant: "soft",
      headerVariant: "glass",
      radius: 1.8,
      botName: "S.P.A. Asistente",
      botAvatar: "/images/logo.png",
      botDescription: "Cotizaciones y citas para tu vehiculo.",
      fabImage: "/images/logo.png",
      composerPlaceholder:
        "Escribe aqui tu consulta (ej: Quiero una cotizacion)...",
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
    }),
    []
  )
  const renderers = useMemo<Partial<Renderers>>(
    () => ({
      button: ActionButtonRenderer,
    }),
    []
  )

  useEffect(() => {
    let mounted = true

    import("@botpress/webchat").then((module) => {
      if (!mounted) return
      setBotpress({
        Webchat: module.Webchat as ComponentType<Record<string, unknown>>,
      })
    })

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    if (!isWebchatOpen || !chatRootRef.current) return

    const root = chatRootRef.current

    const decorateButtons = () => {
      const buttons = root.querySelectorAll<HTMLElement>(".bpMessageBlocksButton")

      buttons.forEach((button) => {
        const raw = button.textContent ?? ""
        const label = sanitizeButtonLabel(raw)
        if (!label) return

        const variant: ButtonVariant =
          button.tagName.toLowerCase() === "a" ||
          button.getAttribute("data-type") === "link"
            ? "link"
            : "action"

        const kind = getActionKind(label, variant)
        const signature = `${kind}:${label}`
        const iconSelector = ".spa-chat-action-icon"
        const currentIcon = button.querySelector<HTMLElement>(iconSelector)
        const hadEmojiOrNoise = raw.trim() !== label
        const needsFallbackDecoration =
          hadEmojiOrNoise ||
          !currentIcon ||
          !button.classList.contains("spa-chat-action")

        if (!needsFallbackDecoration) {
          return
        }

        if (button.getAttribute("data-spa-signature") === signature && currentIcon) {
          return
        }

        button.classList.add("spa-chat-action")
        button.setAttribute("data-spa-signature", signature)

        const icon = document.createElement("span")
        if (!currentIcon) {
          icon.className = "spa-chat-action-icon"
          icon.setAttribute("aria-hidden", "true")
        } else {
          icon.className = currentIcon.className || "spa-chat-action-icon"
          icon.setAttribute(
            "aria-hidden",
            currentIcon.getAttribute("aria-hidden") ?? "true"
          )
        }
        icon.innerHTML = iconSvgByKind(kind)
        while (button.firstChild) {
          button.removeChild(button.firstChild)
        }
        button.appendChild(icon)
        button.appendChild(document.createTextNode(label))
      })
    }

    decorateButtons()

    const observer = new MutationObserver(() => {
      decorateButtons()
    })

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => observer.disconnect()
  }, [isWebchatOpen])

  if (!botpress) return null

  const { Webchat } = botpress
  const edge = 8
  const topSafeOffset = 84
  const chatHeight = `min(620px, calc(100dvh - ${topSafeOffset + edge}px))`
  const chatWidth = "min(392px, calc(100vw - 16px))"

  return (
    <>
      {!isWebchatOpen && (
        <button
          type="button"
          onClick={() => setIsWebchatOpen(true)}
          aria-label="Abrir asistencia en linea"
          className="fixed z-[61] flex items-center gap-2.5 rounded-full border border-primary/50 bg-gradient-to-r from-background/95 to-card/95 px-2.5 py-2 text-left shadow-[0_12px_30px_rgba(0,0,0,0.38)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_14px_32px_rgba(0,0,0,0.45)]"
          style={{
            right: `${edge}px`,
            bottom: `${edge}px`,
            maxWidth: "calc(100vw - 16px)",
          }}
        >
          <span className="relative inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/45 bg-primary/15 text-primary shadow-[0_0_0_4px_rgba(200,255,0,0.12)]">
            <MessageCircle size={16} />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
          </span>
          <span className="min-w-0 pr-2 leading-tight">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-primary/90">
              Asistencia en linea
            </span>
            <span className="block truncate text-sm font-semibold text-foreground">
              Necesitas ayuda?
            </span>
          </span>
        </button>
      )}
      <div
        ref={chatRootRef}
        style={{
          position: "fixed",
          right: `${edge}px`,
          bottom: `${edge}px`,
          zIndex: 60,
          width: chatWidth,
          height: chatHeight,
          opacity: isWebchatOpen ? 1 : 0,
          pointerEvents: isWebchatOpen ? "auto" : "none",
          transform: isWebchatOpen
            ? "translateY(0) scale(1)"
            : "translateY(8px) scale(0.98)",
          transition:
            "opacity 180ms ease, transform 180ms ease, box-shadow 180ms ease",
          overflow: "visible",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(200, 255, 0, 0.26)",
            background: "rgba(14, 14, 14, 0.94)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.45)",
          }}
        >
          <Webchat
            clientId={clientId}
            configuration={configuration}
            renderers={renderers}
            style={{
              position: "absolute",
              inset: "0",
              width: "100%",
              height: "100%",
              borderRadius: "14px",
              overflow: "hidden",
            }}
          />
        </div>
        {isWebchatOpen && (
          <button
            type="button"
            aria-label="Cerrar chat"
            onClick={() => setIsWebchatOpen(false)}
            className="absolute z-[66] inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/65 bg-background/95 text-foreground shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition-colors hover:bg-primary hover:text-primary-foreground"
            style={{
              right: "-14px",
              top: "-14px",
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>
      <style jsx global>{`
        .spa-chat-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .spa-chat-action-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: currentColor;
          opacity: 0.95;
          flex-shrink: 0;
        }
      `}</style>
    </>
  )
}
