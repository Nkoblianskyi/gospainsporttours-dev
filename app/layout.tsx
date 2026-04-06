import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GospainSportTours — Comparador de precios de entradas deportivas en España y Europa',
  description: 'Compara precios de entradas para eventos deportivos en España y la UE. Fútbol, Fórmula 1, tenis, ciclismo y más. Mercado secundario de reventas. Los precios pueden ser superiores al valor nominal.',
  keywords: ['entradas deportivas España', 'comparador entradas', 'fútbol España', 'Formula 1 España', 'reventas entradas', 'mercado secundario entradas'],
  openGraph: {
    title: 'GospainSportTours — Comparador de entradas deportivas',
    description: 'Compara precios de entradas para los mejores eventos deportivos en España y Europa.',
    url: 'https://gospainsporttours.com',
    siteName: 'GospainSportTours',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
