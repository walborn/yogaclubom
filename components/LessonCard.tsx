import React from 'react'

import type { LessonHuman } from '@/lib/definitions'

interface Props {
  value: LessonHuman
}

export const LessonCard = ({ value }: Props) => (
  <>
    <div className="text-[#468ee5] font-bold">{value.start} - {value.finish}</div>
    <div>{value.title}</div>
    <div className="font-light">{value.master}</div>
    <div>{value.level}</div>
    <div className="text-brand-300">{value.notes}</div>
  </>
)
