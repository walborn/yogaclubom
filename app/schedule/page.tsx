import type { Metadata } from 'next'

import lessons from './lessons'

import { Container } from '@/components/Container'
import { Schedule } from '@/components/Schedule'
 
export const metadata: Metadata = {
  title: 'Расписание | Yoga Club OM',
  description: 'Текущее расписание занятий в клубе Yoga Club OM',
}
 
export default async function Page() {
  return (
    <Container className="text-center">
      <Schedule values={lessons} />
    </Container>
  )
}
