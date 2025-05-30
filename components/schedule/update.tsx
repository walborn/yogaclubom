'use client'

import { useState } from 'react'

import UpdateForm from '@/components/schedule/update-form'
import { Lesson } from '@/lib/definitions'
import { minutes } from '@/lib/placeholder.lessons'

interface Props {
  value: Lesson
  onSubmit: () => void
}
export default function Form({ value, onSubmit }: Props) {
  const [dirty, setDirty] = useState(false)

  const handleChange = (formData: FormData) => setDirty(() =>
    value.title !== formData.get('title')
    || value.weekday !== Number(formData.get('weekday'))
    || value.start !== minutes(formData.get('start') as string)
    || value.finish !==  minutes(formData.get('finish') as string)
    || value.master !== formData.get('master')
    || value.level !== formData.get('level')
    || value.notes !== formData.get('notes'))

  const handleSubmit = () => {
    setDirty(false)
    onSubmit()
  }

  return (
    <UpdateForm
      value={value}
      dirty={dirty}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}
