import { Suspense } from 'react'

import { Container } from '@/components/Container'
import SigninForm from '@/components/ui/signin-form'
 
export default function SignInPage() {
  return (
    <Container className="flex items-center justify-center md:h-screen">
      <Suspense>
        <SigninForm />
      </Suspense>
    </Container>
  )
}
