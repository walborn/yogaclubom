import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { Schedule } from '@/components/Schedule'
import api from '@/lib/api'
// import { enrichWithId, lessons as lessonsWithoutId } from '@/lib/placeholder.lessons'  // удалить, когда переедем на бд

export const metadata: Metadata = {
  title: 'Расписание | Yoga Club OM',
  description: 'Текущее расписание занятий в клубе Yoga Club OM',
}
 
export default async function Page() {
  const lessons = await api.lessons.list()
  // const session = await auth()
  // if (!session) return <div>Not authenticated</div>

  return (
    <Container className="text-center">
      <Schedule values={lessons} />
    </Container>
  )
}
