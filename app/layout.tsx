import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Suspense } from 'react'

import { Analytics } from '@/components/Analytics'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Providers } from '@/components/Providers'
import { cn } from '@/lib/utils'

import './globals.css'


const font = Open_Sans({ subsets: ['cyrillic'] })

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
    <body className={cn('bg text-text flex flex-col min-h-screen', font.className)}>
      <Suspense>
        <Header />
      </Suspense>
      <main className="flex-auto mt-5">
        <Providers>{children}</Providers>
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
)

export default RootLayout
