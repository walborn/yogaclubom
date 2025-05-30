// 'use client'
import { PowerIcon } from '@heroicons/react/24/outline'

import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
 
export default function SignOutForm({ className }: { className?: string }) {
  // const searchParams = useSearchParams()
  // const callbackUrl = searchParams.get('callbackUrl') || '/schedule/edit'
 
  return (
    <form
      action={async () => {
        'use server'
        await signOut({ redirectTo: '/' })
      }}
      className={className}
    >
      <Button
        className="mb-5 bg-brand-400-hovered cursor-pointer"
      >
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </Button>
    </form>
  )
}
