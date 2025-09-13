import type { Metadata } from 'next'

import { SpeedInsights } from '@vercel/speed-insights/next'

import { Analytics } from '@/components/Analytics'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { opensans as font } from '@/components/ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yoga club OM',
  description: 'Yoga club OM',
  verification: { yandex: '1b46776c88d34ab0' },
}

interface Props {
  readonly children: React.ReactNode
}


const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang="ru">
    <head />
    <body className={`${font.className} antialiased bg text-text flex flex-col min-h-screen`}>
     
      <Header />
      
      <main className="flex-auto mt-5">
        {children}
      </main>
      
      <Footer />
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
)

export default RootLayout
