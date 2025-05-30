'use client'

import React from 'react'

import { PencilIcon, XMarkIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

import { LessonCard } from './LessonCard'

import { Container } from '@/components/Container'
import CreateForm from '@/components/schedule/create-form'
import { DeleteButton } from '@/components/schedule/delete-button'
import UpdateForm from '@/components/schedule/update'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import type { Lesson } from '@/lib/definitions'
import { getNowDay, getLessons, WEEKDAYS as weekdays } from '@/lib/placeholder.lessons'
import { cn } from '@/lib/utils'

interface Props {
  values: Lesson[]
}

export const Week = ({ values }: Props) => {
  const [day, setDay] = React.useState(getNowDay())
  const [ updating, setUpdating ] = React.useState<string>()
  const [ creating, setCreating ] = React.useState(false)

  const lessons = getLessons(values)
  const handleMode = (id: string, creating: boolean) => () => {
    setUpdating(id)
    setCreating(creating)
  }
  const handleChangeDay = (day: number) => () => {
    setDay(day)
    setUpdating('')
    setCreating(false)
  }
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
          lessons[day].map((i: Lesson) => (
            <li
              key={i.id}
              className="p-5 my-3 rounded-md shadow-light relative"
            >
              {updating === i.id
                ? <UpdateForm value={i} onSubmit={handleMode('', false)}/>
                : <LessonCard value={i} />
              }
              {updating === i.id 
                ? 
                <div
                  className="absolute top-2 right-11 rounded-md border p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleMode('', false)}
                >
                  <XMarkIcon className="size-3" />
                </div>
                : <div
                  className="absolute top-2 right-11 rounded-md border p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleMode(i.id, false)}
                >
                  <PencilIcon className="size-3" />
                </div>
              }
              <Dialog>
                <DialogTrigger className="absolute top-2 right-2 rounded-md border p-2 hover:bg-gray-100 cursor-pointer">
                  <TrashIcon className="size-3" />
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle>Вы уверены?</DialogTitle>
                    <DialogDescription>
                      Это действие не может быть отменено. Оно удалит занятие из базы данных и его данные нельзя будет восстановить.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DeleteButton className="m-auto" id={i.id}>
                      Всё равео удалить!
                    </DeleteButton>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </li>
          ))
        }
      </ul>

      {creating
        ? (
          <div className="relative">
            <CreateForm
              onSubmit={handleMode('', false)}
              weekday={day}
              className="p-5 my-3 rounded-md shadow-light relative"
            />
            <div
              className="absolute top-2 right-2 rounded-md border p-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleMode('', false)}
            >
              <XMarkIcon className="size-3" />
            </div>
          </div>
        ) : (
          <div onClick={handleMode('', true)} className="m-auto inline-block rounded-md border p-2 hover:bg-gray-100 cursor-pointer">
            <PlusIcon className="size-3" />
          </div>
        )
      }
    </Container>
  )
}
