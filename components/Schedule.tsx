'use client'

import React from 'react'

import { Container } from '@/components/Container'
import { LessonCard } from '@/components/LessonCard'
import { Button } from '@/components/ui/button'
import type { FullLesson } from '@/lib/definitions'
import { getNowDay, weekdays } from '@/lib/placeholder.lessons'
import { cn } from '@/lib/utils'

type Row = Record<string, FullLesson[]>

interface Props {
  values: FullLesson[][]
}

export const Schedule = ({ values: lessons }: Props) => {
  const [day, setDay] = React.useState(getNowDay())
  const [view, setView] = React.useState('day') // one day or whole week

  const table = lessons.reduce((r: Row[], dayLessons: FullLesson[], weekday: number) => {
    dayLessons.forEach((lesson) => {
      const hour: number = lesson.start / 60 | 0
      if (!r[hour]) r[hour] = { [weekday]: [lesson] }
      else if (!Array.isArray(r[hour][weekday])) r[hour][weekday] = [lesson]
      else r[hour][weekday] = [...r[hour][weekday], lesson]
    })
    return r
  }, []).map((i: Row, hour: number) => ({ hour, row: i }))

  if (view === 'day') return (
    <Container className="text-center p-5">
      <Button
        className="mb-5 bg-brand-400-hovered cursor-pointer"
        onClick={() => setView('week')}
      >
        Показать всю неделю
      </Button>
      <ul className="grid grid-cols-7 rounded-md mb-2 shadow-light overflow-hidden">
        {
          weekdays.map((weekday, i) => (
            <li
              key={weekday}
              className={cn(i === day && 'bg-[#fbe1c2]', 'text-base cursor-pointer inline-block font-semibold p-2')}
              onClick={() => setDay(i)}
            >
              {weekday}
            </li>
          ))
        }
      </ul>
      <ul>
        {
          lessons[day].map((i) => (
            <li
              key={i.id}
              className="p-5 my-3 rounded-md shadow-light"
            >
              <LessonCard value={i} />
            </li>
          ))
        }
      </ul>
    </Container>
  )
  if (view === 'week') return (
    <>
      <Container className="text-center">
        <Button
          className="mt-5 bg-brand-400 hover:bg-brand-400/90"
          onClick={() => setView('day')}
        >
          Показать один день
        </Button>
      </Container>

      <Container
        className="text-center p-5 max-w-full overflow-x-scroll"
      >
        <table
          className="text-xs rounded shadow-light overflow-hidden"
        >
          <thead>
            <tr>
              <th>T</th>
              {
                weekdays.map((weekday, i) => (
                  <th
                    key={weekday}
                    className={cn(i === day && 'bg-[#fbe1c2]', 'text-base cursor-pointer font-semibold p-2')}
                    onClick={() => setDay(i)}
                  >
                    {weekday}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              table.filter(Boolean).map(({ hour, row }: { hour: number, row: Row }, index: number) => (
                <tr
                  key={index}
                  className={cn(index % 2 === 0 && 'bg-[#8a78730d]')}
                >
                  <td className="p-2">{hour}</td>
                  {
                    [0, 1, 2, 3, 4, 5, 6].map(weekday => (
                      <td
                        key={weekday}
                        className={cn(weekday === day && 'bg-[#fbe1c222]', 'cursor-pointer font-semibold p-2')}
                      >
                        <ul>
                          {
                            row[weekday]?.map((i) => (
                              <li
                                key={i.id}
                                className="p-5 my-3 rounded-md shadow-light"
                              >
                                <LessonCard value={i} />
                              </li>
                            ))
                          }
                        </ul>
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </Container>
    </>
  )
}
