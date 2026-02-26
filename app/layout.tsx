import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BotpressChat from '@/components/botpress-chat'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const siteUrl = "https://spatalleres.netlify.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "S.P.A Talleres | Planchado y Pintura en Arequipa",
    template: "%s | S.P.A Talleres",
  },
  description:
    "S.P.A Talleres: especialistas en planchado, enderezado tecnico y pintura automotriz al horno en Arequipa. Cotizaciones y atencion por WhatsApp.",
  keywords: [
    "S.P.A. Talleres",
    "spa talleres",
    "taller automotriz",
    "pintura automotriz al horno",
    "enderezado de carroceria",
    "planchado automotriz",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "S.P.A Talleres",
    title: "S.P.A Talleres | Planchado y Pintura en Arequipa",
    description:
      "Especialistas en enderezado tecnico y pintura automotriz al horno.",
    locale: "es_EC",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Logo S.P.A Talleres",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.P.A Talleres | Planchado y Pintura en Arequipa",
    description:
      "Especialistas en enderezado tecnico y pintura automotriz al horno.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
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
