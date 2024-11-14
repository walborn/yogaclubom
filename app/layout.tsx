import { Suspense } from 'react'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
// import { Providers } from '@/shared/components/shared/providers'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import './globals.css'
import { cn } from '@/lib/utils'

const font = Open_Sans({ subsets: ['cyrillic'] })
  
export const metadata: Metadata = {
  title: 'YogaClubOM',
  description: 'Yoga club OM',
}

interface Props {
  readonly children: React.ReactNode
}


const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang="ru">
    <body className={cn('text-text', font.className)}>
      <Suspense>
        <Header />
      </Suspense>
      {children} {/* <Providers>{children}</Providers> */}
      <Footer />
    </body>
  </html>
)

export default RootLayout
