import React from 'react'

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { ActionButton } from '@/components/schedule/ActionButton'
import { Input } from '@/components/ui/input'
import { createLesson } from '@/lib/actions'
import { weekdays, minutes } from '@/lib/placeholder.lessons'
import { LessonSchema } from '@/lib/zod'

interface Props {
  className: string
  weekday: number
  onDeactivate: () => void
}

export default function CreateForm({ className, weekday, onDeactivate }: Props) {
  const [ valid, setValid ] = React.useState(false)
  const [ state, formAction, isPending ] = React.useActionState(createLesson, { status: 'pending' })
  
  React.useEffect(() => {
    if (!isPending && state.status === 'fulfilled') {
      onDeactivate()
    }
  }, [state.status, isPending, onDeactivate])

  const handleChange = ({ currentTarget }: React.ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(currentTarget)

    const validatedFields = LessonSchema.omit({ id: true }).safeParse({
      title: formData.get('title'),
      weekday: formData.get('weekday'),
      start: minutes(formData.get('start') as string),
      finish: minutes(formData.get('finish') as string),
      master: formData.get('master'),
      level: formData.get('level'),
      notes: formData.get('notes'),
    })
  
    setValid(validatedFields.success) 
  }
  return (
    <form action={formAction} onChange={handleChange} className={className}>
      <div className="pb-2 flex flex-col gap-3 relative">
        <div className="text-fuchsia-400 font-bold">Новое занятие</div>
        <Input
          id="title"
          name="title"
          placeholder="Название"
          disabled={isPending}
        />
        <div className="flex gap-3">
          <select
            id="weekday"
            name="weekday"
            className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={weekday}
            aria-describedby="weekday-error"
            disabled={isPending}
            required
          >
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <option key={i} value={i}>
                {weekdays[i]}
              </option>
            ))}
          </select>
          <Input
            id="start"
            name="start"
            placeholder="Начало (чч:мм)"
            disabled={isPending}
            required
          />
          <Input
            id="finish"
            name="finish"
            placeholder="Конец (чч:мм)"
            disabled={isPending}
            required
          />
        </div>
        <div id="weekday-error" aria-live="polite" aria-atomic="true">
          {state?.errors?.weekday?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <Input
          id="master"
          name="master"
          placeholder="Инструктор"
          disabled={isPending}
          required
        />
        <Input
          id="level"
          name="level"
          placeholder="Уровень"
          disabled={isPending}
          required
        />
        <Input
          id="notes"
          name="notes"
          disabled={isPending}
          placeholder="Заметки"
        />
        <div className="absolute top-[-12px] right-2 flex gap-2">
          <ActionButton icon={CheckIcon} type="submit" disabled={isPending || !valid}/>
          <ActionButton icon={XMarkIcon} onClick={onDeactivate} />
        </div>
      </div>
    </form>
  )
}
