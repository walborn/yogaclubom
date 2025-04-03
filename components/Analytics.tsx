'use client'

import React from 'react'

import { YMInitializer } from 'react-yandex-metrika'
import ReactGA from 'react-ga'

declare global {
  interface Window {
    GA_INITIALIZED?: boolean
  }
}
 
export const Analytics: React.FC = () => {  
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID || 'UA-140999737-1')
      window.GA_INITIALIZED = true
    }
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }, []) // Empty dependency array to run only once

  return (
    <YMInitializer
      accounts={[process.env.NEXT_PUBLIC_YM_ID || 99187796]}
      options={{
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
    />
  )
}
