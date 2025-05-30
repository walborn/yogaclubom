import { CheckIcon } from '@heroicons/react/24/outline'

import { Input } from '@/components/ui/input'
import { updateLesson } from '@/lib/actions'
import { Lesson } from '@/lib/definitions'
import { format, WEEKDAYS } from '@/lib/placeholder.lessons'

interface Props {
  value: Lesson
  dirty: boolean
  onChange: (form: FormData) => void
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export default function UpdateForm({ value, dirty, onChange, onSubmit }: Props) {
  const handleChange = (formData: React.ChangeEvent<HTMLFormElement>) => {
    onChange(new FormData(formData.currentTarget))
  }

  return (
    <form action={updateLesson} onChange={handleChange} onSubmit={onSubmit}>
      <div key={value.id} className="pt-7 pb-2 flex flex-col gap-3 relative">
        <input hidden id="id" name="id" defaultValue={value.id} />
        <Input
          id="title"
          name="title"
          defaultValue={value.title}
          placeholder="Название"
          required
        />
        <div className="flex gap-3">
          <select
            id="weekday"
            name="weekday"
            className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-gold focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={value.weekday}
            required
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
            defaultValue={format(value.start)}
            required
          />
          <Input
            id="finish"
            name="finish"
            placeholder="Конец (чч:мм)"
            defaultValue={format(value.finish)}
            required
          />
        </div>
        <Input
          id="master"
          name="master"
          placeholder="Инструктор"
          defaultValue={value.master}
          required
        />
        <Input
          id="level"
          name="level"
          placeholder="Уровень"
          defaultValue={value.level}
          required
        />
        <Input
          id="notes"
          name="notes"
          placeholder="Заметки"
          defaultValue={value.notes}
        />
        <button
          hidden={!dirty}
          className="absolute top-[-12px] right-15 rounded-md border p-2 hover:bg-gray-100 cursor-pointer"
          type="submit"
        >
          <CheckIcon className="size-3"/>
        </button>
      </div>
    </form>
  )
}
