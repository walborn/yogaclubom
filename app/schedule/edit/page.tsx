import { auth } from '@/auth'
import { Container } from '@/components/Container'
import { UserButton } from '@/components/UserButton'
import { Week } from '@/components/Week'
import api from '@/lib/api'
 
export default async function Page() {
  const lessons = await api.lessons.list()
  const session = await auth()

  if (!session) return <div>Not authenticated</div>

  return (
    <Container className="text-center">
      <div className="flex justify-center">
        <UserButton />
      </div>
      <Week values={lessons} />
    </Container>
  )
}
