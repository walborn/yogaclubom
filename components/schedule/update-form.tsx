'use client'

import React from 'react'

import { CheckIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, PencilIcon, XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'

import { LessonCard } from '@/components/LessonCard'
import { ActionButton } from '@/components/schedule/ActionButton'
import { DeleteButton } from '@/components/schedule/delete-button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {  updateLesson } from '@/lib/actions'
import type { LessonHuman } from '@/lib/definitions'
import { weekdays } from '@/lib/placeholder.lessons'

interface Props {
  value: LessonHuman & { id: string }
  active: boolean
  onActivate: () => void
  onDeactivate: () => void
}

export default function UpdateForm({ value, active, onActivate, onDeactivate }: Props) {
  const [state, action, isPending] = React.useActionState(updateLesson, { status: 'pending' })
  const [dirty, setDirty] = React.useState(false)

  const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(currentTarget)
    // const isDirty = value.title !== formData.get('title')
    //   || value.weekday !== formData.get('weekday')
    //   || value.start !== formData.get('start')
    //   || value.finish !==  formData.get('finish')
    //   || value.master !== formData.get('master')
    //   || value.level !== formData.get('level')
    //   || value.notes !== formData.get('notes')

    const isDirty = Object.entries(value).some(([k, v]) => v !== formData.get(k))
    setDirty(isDirty)
  }

  React.useEffect(() => {
    if (!isPending && state.status === 'fulfilled') {
      onDeactivate()
      setDirty(false)
    }
  }, [state.status, isPending, onDeactivate])


  return (
    <form action={action} onChange={handleChange}>
      {!active && <LessonCard value={value} />}
   
      <div hidden={!active} className="pt-7 pb-2 flex flex-col gap-3 relative">
        <input hidden id="id" name="id" defaultValue={value.id} />
        <Input
          id="title"
          name="title"
          defaultValue={value.title}
          placeholder="Название"
          required
          disabled={isPending}
        />
        <div className="flex gap-3">
          <select
            id="weekday"
            name="weekday"
            className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={value.weekday}
            required
            disabled={isPending}
          >
            {weekdays.map((weekday) => (
              <option key={weekday} value={weekday}>
                {weekday}
              </option>
            ))}
          </select>
          <Input
            id="start"
            name="start"
            placeholder="Начало (чч:мм)"
            defaultValue={value.start}
            required
            disabled={isPending}
          />
          <Input
            id="finish"
            name="finish"
            placeholder="Конец (чч:мм)"
            defaultValue={value.finish}
            required
            disabled={isPending}
          />
        </div>
        <Input
          id="master"
          name="master"
          placeholder="Инструктор"
          defaultValue={value.master}
          required
          disabled={isPending}
        />
        <Input
          id="level"
          name="level"
          placeholder="Уровень"
          defaultValue={value.level}
          required
          disabled={isPending}
        />
        <Input
          id="notes"
          name="notes"
          placeholder="Заметки"
          defaultValue={value.notes}
          disabled={isPending}
        />
      </div>

      <div className="absolute top-2 right-2 flex gap-2">
        {isPending && <ActionButton icon={ArrowPathIcon} iconClassName="animate-spin" />}
        {!isPending && !active && <ActionButton icon={PencilIcon} onClick={onActivate} />}
        {!isPending && active && dirty && <ActionButton icon={CheckIcon} type="submit"/>}
        {!isPending && active && <ActionButton icon={XMarkIcon} onClick={onDeactivate} />}
        {!isPending && (
          <Dialog>
            <DialogTrigger className="rounded-md border p-2 hover:bg-gray-100 cursor-pointer">
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
                <DeleteButton className="m-auto" id={value.id}>
                  Всё равно удалить!
                </DeleteButton>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </form>
  )
}
