'use client'

import React from 'react'

import { Container } from '@/components/Container'
import { getDay, weekdays } from '@/lib/lessons'
import type { Lesson } from '@/lib/lessons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'


type Row = Record<string, Lesson[]>

interface Props {
  lessons: Lesson[][]
}
export const Schedule = ({ lessons }: Props) => {
  const [ day, setDay ] = React.useState(getDay())
  const [ view, setView ] = React.useState('day') // day or week

  const table = lessons.reduce((r: Row[], dayLessons: Lesson[], weekday: number) => {
    dayLessons.forEach((lesson: Lesson) => {
      const hour: number = lesson.time / 60 | 0
      if (!r[hour]) r[hour] = { [weekday]: [ lesson ] }
      else if (!Array.isArray(r[hour][weekday])) r[hour][weekday] = [ lesson ]
      else r[hour][weekday] = [ ...r[hour][weekday], lesson ]
    })
    return r
  }, [])

  if (view === 'day') return (
    <Container className={'text-center p-5'}>
      <Button
        className="mb-5 bg-brand-400 hover:bg-brand-400/90"
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
          lessons[day].map((i: Lesson) => (
            <li
              key={i.id}
              className="p-5 my-3 rounded-md shadow-light"
            >
              <div className="text-[#468ee5] font-bold">{i.from} - {i.to}</div>
              <div>{i.title}</div>
              <div className="font-light">{i.master}</div>
              <div>{i.alternate}</div>
              <div>{i.level}</div>
              <div className="text-brand-300">{i.note}</div>
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
              table.map((row: Row, index: number) => (
                <tr
                  key={index}
                  className={cn(index % 2 && 'bg-[#8a78730d]')}
                >
                  <td className="p-2">{index}</td>
                  {
                    [ 0, 1, 2, 3, 4, 5, 6 ].map(weekday => (
                      <td
                        key={weekday}
                        className={cn(weekday === day && 'bg-[#fbe1c222]', 'cursor-pointer font-semibold p-2')}
                      >
                        <ul>
                          {
                            row[weekday]?.filter((i: Lesson) => !i.hidden)?.map((i: Lesson) => (
                              <li
                                key={i.id}
                                className="p-5 my-3 rounded-md shadow-light"
                              >
                                <div className="text-[#468ee5] font-bold">{i.from} - {i.to}</div>
                                <div>{i.title}</div>
                                <div className="font-light">{i.master}</div>
                                <div>{i.alternate}</div>
                                <div>{i.level}</div>
                                <div className="text-brand-300 font-normal">{i.note}</div>
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
