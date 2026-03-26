import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vibe Coder Bootcamp | Cohort #1',
  description:
    'De no saber programar a construir apps reales con IA en 8 semanas. Aprende Vibe Coding: arquitectura + herramientas de IA para construir, desplegar y monetizar aplicaciones.',
  generator: 'v0.app',
  keywords: ['vibe coding', 'bootcamp', 'IA', 'programar', 'no-code', 'AI builder'],
  openGraph: {
    title: 'Vibe Coder Bootcamp | Cohort #1 Founding Members',
    description: 'Aprende Vibe Coding en 8 semanas. Solo 20 cupos disponibles.',
    url: 'https://cl.aiengineerbuilder.protolylat.com/',
  },
  icons: {
    icon: 'favicon.png',
    apple: 'favicon.png',
  },

}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
