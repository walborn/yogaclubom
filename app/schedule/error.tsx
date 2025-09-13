'use client'
 
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}
export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Title size="sm">
        Houston, we have a problem!
      </Title>
      <Button
        variant="default"
        className="mt-4 rounded-md bg-amber-500 px-4 py-2 text-sm text-white transition-colors hover:bg-amber-600 cursor-pointer"
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </main>
  )
}
