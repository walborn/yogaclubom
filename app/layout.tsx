import { Suspense } from 'react'

import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
// import { Providers } from '@/shared/components/shared/providers'

import { Header } from '@/components/Header'

import './globals.css'

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
    <body className={font.className}>
      <Suspense>
        <Header />
      </Suspense>
      {children} {/* <Providers>{children}</Providers> */}
    </body>
  </html>
)

export default RootLayout
