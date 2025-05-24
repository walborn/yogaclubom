'use client'

import React from 'react'

import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import type { Lesson } from '@/lib/definitions'
import { getNowDay, WEEKDAYS as weekdays, format } from '@/lib/placeholder.lessons'
import { cn } from '@/lib/utils'


type Row = Record<string, Lesson[]>

interface Props {
  lessons: Lesson[][]
}

export const Schedule = ({ lessons }: Props) => {
  const [day, setDay] = React.useState(getNowDay())
  const [view, setView] = React.useState('day') // day or week

  const table = lessons.reduce((r: Row[], dayLessons: Lesson[], weekday: number) => {
    dayLessons.forEach((lesson: Lesson) => {
      const hour: number = lesson.from / 60 | 0
      if (!r[hour]) r[hour] = { [weekday]: [lesson] }
      else if (!Array.isArray(r[hour][weekday])) r[hour][weekday] = [lesson]
      else r[hour][weekday] = [...r[hour][weekday], lesson]
    })
    return r
  }, []).map((i: Row, hour: number) => ({ hour, row: i }))

  if (view === 'day') return (
    <Container className={'text-center p-5'}>
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
          lessons[day].map((i: Lesson) => (
            <li
              key={i.id}
              className="p-5 my-3 rounded-md shadow-light"
            >
              <div className="text-[#468ee5] font-bold">{format(i.from)} - {format(i.to)}</div>
              <div>{i.title}</div>
              <div className="font-light">{i.master}</div>
              {/* {i.alternate && <div className="font-light text-brand-600">Сегодня замена</div>} */}
              <div>{i.level}</div>

              <div className="text-brand-300">
                {i.notes.map(note => <div key={note}>{note}</div>)}
              </div>
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
                            row[weekday]?.map((i: Lesson) => (
                              <li
                                key={i.id}
                                className="p-5 my-3 rounded-md shadow-light"
                              >
                                <div className="text-[#468ee5] font-bold">{i.from} - {i.to}</div>
                                <div>{i.title}</div>
                                <div className="font-light">{i.master}</div>
                                {/* <div>{i.alternate}</div> */}
                                <div>{i.level}</div>
                                <div className="text-brand-300 font-normal">
                                  {i.notes.map(note => <div key={note}>{note}</div>)}
                                </div>
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
