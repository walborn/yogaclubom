import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { Schedule } from '@/components/Schedule'
import api from '@/lib/api'
import { getLessons } from '@/lib/placeholder.lessons'
import { enrichWithId, lessons as lessonsWithoutId } from '@/lib/placeholder.lessons'  // удалить, когда переедем на бд

export const metadata: Metadata = {
  title: 'Расписание | Yoga Club OM',
  description: 'Текущее расписание занятий в клубе Yoga Club OM',
}
const SchedulePage = async () => {
  // const lessons = getLessons(await api.lessons.list())
  const lessons = getLessons(enrichWithId(lessonsWithoutId)) // удалить, когда переедем на бд
  return (
    <Container className="text-center">
      <Schedule lessons={lessons} />
    </Container>
  )
}

export default SchedulePage
