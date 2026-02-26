import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BotpressChat from '@/components/botpress-chat'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: 'S.P.A. Servicio Profesional Arequipa | Pintura y Planchado Automotriz',
  description: 'Planchado y Pintura Profesional al Horno en Arequipa. Resultados duraderos. Servicio profesional automotriz.',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <BotpressChat />
        <Analytics />
      </body>
    </html>
  )
}
