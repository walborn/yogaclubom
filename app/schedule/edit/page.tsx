import { SessionProvider } from 'next-auth/react'

import { auth } from '@/auth'
import { Container } from '@/components/Container'
// import Breadcrumbs from '@/components/ui/breadcrumbs'
import { UserButton } from '@/components/UserButton'
import { Week } from '@/components/Week'
import { fetchLessons } from '@/lib/data'
 
export default async function Page() {
  const lessons = await fetchLessons()
  const session = await auth()

  if (!session) return <div>Not authenticated</div>

  return (
    <SessionProvider session={session}>
      <Container className="text-center">
        <div className="flex justify-center">
          <UserButton />
        </div>
        <Week values={lessons} />
      </Container>
    </SessionProvider>
  )
}
