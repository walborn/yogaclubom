import { useActionState } from 'react'

import { CheckIcon } from '@heroicons/react/24/outline'

import { Input } from '@/components/ui/input'
import { createLesson, State } from '@/lib/actions'
import { WEEKDAYS } from '@/lib/placeholder.lessons'

interface Props {
  className: string
  weekday: number
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export default function CreateForm({ className, weekday, onSubmit }: Props) {
  const initialState: State = { message: null, errors: {} }
  const [ state, formAction ] = useActionState(createLesson, initialState)
  
  return (
    <form action={formAction} onSubmit={onSubmit} className={className}>
      <div className="pb-2 flex flex-col gap-3 relative">
        <div className="text-fuchsia-400 font-bold">Новое занятие</div>
        <Input
          id="title"
          name="title"
          placeholder="Название"
          required
        />
        <div className="flex gap-3">
          <select
            id="weekday"
            name="weekday"
            className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={weekday}
            aria-describedby="weekday-error"
            // required
          >
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <option key={i} value={i}>
                {WEEKDAYS[i]}
              </option>
            ))}
          </select>
          <Input
            id="start"
            name="start"
            placeholder="Начало (чч:мм)"
            required
          />
          <Input
            id="finish"
            name="finish"
            placeholder="Конец (чч:мм)"
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
          required
        />
        <Input
          id="level"
          name="level"
          placeholder="Уровень"
          required
        />
        <Input
          id="notes"
          name="notes"
          placeholder="Заметки"
        />
        <button
          className="absolute top-[-12px] right-6 rounded-md border p-2 hover:bg-gray-100 cursor-pointer"
          type="submit"
        >
          <CheckIcon className="size-3"/>
        </button>
      </div>
    </form>
  )
}
