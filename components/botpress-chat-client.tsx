"use client"

import dynamic from "next/dynamic"

const BotpressChat = dynamic(() => import("@/components/botpress-chat"), {
  ssr: false,
})

export default function BotpressChatClient() {
  return <BotpressChat />
}
