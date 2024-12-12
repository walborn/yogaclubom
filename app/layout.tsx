import { Suspense } from 'react'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Providers } from '@/components/Providers'
import { Analytics } from '@/components/Analytics'

import './globals.css'
import { cn } from '@/lib/utils'

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
    <head>
      {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> */}
      {/* rest of your scripts go under */}
    </head>
    <body className={cn('text-text flex flex-col min-h-screen', font.className)}>
      <Suspense>
        <Header />
      </Suspense>
      <main className="flex-auto mt-5"><Providers>{children}</Providers></main> {/* <Providers>{children}</Providers> */}
      <Footer />
      <SpeedInsights/>
      <Analytics />
    </body>
  </html>
)

export default RootLayout
