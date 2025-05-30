import { TrashIcon } from '@heroicons/react/24/outline'

import { deleteLesson } from '@/lib/actions'

interface Props {
  id: string
  className?: string
  children?: React.ReactNode
}
export function DeleteButton({ id, className, children }: Props) {
  const handleDeleteLesson = deleteLesson.bind(null, id)
 
  return (
    <form action={handleDeleteLesson} className={className}>
      <button type="submit" className="relative whitespace-nowrap rounded-md border py-2 pl-8 pr-4 hover:bg-gray-100 cursor-pointer">
        <TrashIcon className="size-3 absolute left-3 top-1/2 -translate-y-1/2" />
        {children}
      </button>
    </form>
  )
}
