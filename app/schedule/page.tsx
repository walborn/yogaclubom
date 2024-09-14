'use client'

import React from 'react'

import { Container } from '@/components/Container'
import lessons, { Lesson, getDay, weekdays } from './lessons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SchedulePage = () => {
  const [ day, setDay ] = React.useState(getDay())
  const [ view, setView ] = React.useState('day') // day or week

  const table = lessons.reduce((r: any, dayLessons: Lesson[], weekday: any) => {
    dayLessons.forEach((lesson: Lesson) => {
      const hour: number = lesson.time / 60 | 0
      if (!r[hour]) r[hour] = { [weekday]: [ lesson ] }
      else if (!Array.isArray(r[hour][weekday])) r[hour][weekday] = [ lesson ]
      else r[hour][weekday] = [ ...r[hour][weekday], lesson ]
    })
    return r
  }, [])

  if (view === 'day') return (
    <Container
      className="text-center m-3"
      /*title="Расписание | Йога клуб ОМ"*/
    >
      <Button
        className="mb-3 bg-brand-400 hover:bg-brand-400/90"
        onClick={() => setView('week')}
      >
        Показать всю неделю
      </Button>
      <ul className="grid grid-cols-7 rounded-md mb-2 shadow-[#e7eaf3_0px_1px_1px_inset,#e7eaf3_0px_0px_8px]">
        {
          weekdays.map((weekday, i) => (
            <li
              key={weekday}
              className={cn(i === day && 'bg-[#fbe1c2]', 'cursor-pointer inline-block font-semibold p-2')}
              onClick={() => setDay(i)}
            >
              {weekday}
            </li>
          ))
        } 
      </ul>
      <ul>
        {
          lessons[day].map((i: any) => (
            <li
              key={i.id}
              className="p-5 my-3 rounded-md shadow-[#e7eaf3_0px_1px_1px_inset,#e7eaf3_0px_0px_8px]"
            >
              <div className="text-[#468ee5] font-bold">{i.from} - {i.to}</div>
              <div>{i.title}</div>
              <div className="font-light">{i.master}</div>
              <div>{i.alternate}</div>
              <div>{i.level}</div>
              <div>{i.note}</div>
            </li>
          ))
        }
      </ul>
    </Container>
  )
  if (view === 'week') return (
    <Container
      className="text-center m-3"
    >
      <Button
        className="mb-3 bg-brand-400 hover:bg-brand-400/90"
        onClick={() => setView('day')}
      >
        Показать один день
      </Button>

      <table
        className="text-xs"
      >
        <thead>
          <tr>
            <th>T</th>
            {
              weekdays.map((weekday, i) => (
                <th
                  key={weekday}
                  className={cn(i === day && 'bg-[#fbe1c2]', 'cursor-pointer font-semibold p-2')}
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
            table.map((row: any, index: number) => (
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
                              className="p-5 my-3 rounded-md shadow-[#e7eaf3_0px_1px_1px_inset,#e7eaf3_0px_0px_8px]"
                            >
                              <div className="text-[#468ee5] font-bold">{i.from} - {i.to}</div>
                              <div>{i.title}</div>
                              <div className="font-light">{i.master}</div>
                              <div>{i.alternate}</div>
                              <div>{i.level}</div>
                              <div>{i.note}</div>
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
  )
  return <pre>{JSON.stringify(table, null, 4)}</pre>
}


export default SchedulePage
