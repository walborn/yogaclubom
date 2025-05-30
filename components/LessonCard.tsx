import React from 'react'

import type { LessonWithId } from '@/lib/definitions'
import { format } from '@/lib/placeholder.lessons'


interface Props {
  value: LessonWithId
}

export const LessonCard = ({ value }: Props) => (
  <>
    <div className="text-[#468ee5] font-bold">{format(value.start)} - {format(value.finish)}</div>
    <div>{value.title}</div>
    <div className="font-light">{value.master}</div>
    <div>{value.level}</div>
    <div className="text-brand-300">
      {value.notes}
    </div>
  </>
)
