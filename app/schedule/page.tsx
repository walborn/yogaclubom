import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { Schedule } from '@/components/Schedule'
import api from '@/lib/api'
import { getLessons } from '@/lib/placeholder.lessons'

export const metadata: Metadata = {
  title: 'Расписание | Yoga Club OM',
  description: 'Текущее расписание занятий в клубе Yoga Club OM',
}
const SchedulePage = async () => {
  const lessons = getLessons(await api.lessons.list())
  return (
    <Container className="text-center">
      <Schedule lessons={lessons} />
    </Container>
  )
}

export default SchedulePage
