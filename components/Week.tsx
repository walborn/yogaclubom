'use client'

import React from 'react'


import { PlusIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import CreateForm from '@/components/schedule/create-form'
import UpdateForm from '@/components/schedule/update-form'
import type { LessonWithId } from '@/lib/definitions'
import { getNowDay, getLessons, weekdays, format } from '@/lib/placeholder.lessons'
import { cn } from '@/lib/utils'

interface Props {
  values: LessonWithId[]
}

export const Week = ({ values }: Props) => {
  const [day, setDay] = React.useState(getNowDay())
  const [ updating, setUpdating ] = React.useState<string>()
  const [ creating, setCreating ] = React.useState(false)

  const lessons: LessonWithId[][] = getLessons(values)

  const handleCreating =  React.useCallback(() => {
    setUpdating('')
    setCreating(true)
  }, [])

  const handleActivate = (id: string) => () => {
    setUpdating(id)
    setCreating(false)
  }

  const handleDeactivate = React.useCallback(() => {
    setUpdating('')
    setCreating(false)
  }, [])

  const handleChangeDay = (day: number) => () => {
    setDay(day)
    setUpdating('')
    setCreating(false)
  }

  console.log(55, updating)
  return (
    <Container className="text-center p-5">
      <ul className="grid grid-cols-7 rounded-md mb-2 shadow-light overflow-hidden">
        {
          weekdays.map((weekday, i) => (
            <li
              key={weekday}
              className={cn(i === day && 'bg-[#fbe1c2]', 'text-base cursor-pointer inline-block font-semibold p-2')}
              onClick={handleChangeDay(i)}
            >
              {weekday}
            </li>
          ))
        }
      </ul>
      <ul>
        {
          lessons[day].map((i: LessonWithId) => (
            <li
              key={i.id}
              className="p-5 my-3 rounded-md shadow-light relative"
            >
              <UpdateForm
                value={{
                  id: i.id,
                  title: i.title,
                  weekday: weekdays[i.weekday],
                  start: format(i.start),
                  finish: format(i.finish),
                  master: i.master,
                  level: i.level,
                  notes: i.notes,
                }}
                onActivate={handleActivate(i.id)}
                onDeactivate={handleDeactivate}
                active={updating === i.id}
              />
            </li>
          ))
        }
      </ul>

      {creating
        ? (
          <div className="relative">
            <CreateForm
              onDeactivate={() => setCreating(false)}
              weekday={day}
              className="p-5 my-3 rounded-md shadow-light relative"
            />
          </div>
        ) : (
          <div onClick={handleCreating} className="m-auto inline-block rounded-md border p-2 hover:bg-gray-100 cursor-pointer">
            <PlusIcon className="size-3" />
          </div>
        )
      }
    </Container>
  )
}
