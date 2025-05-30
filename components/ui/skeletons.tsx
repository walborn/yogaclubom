import { Container } from '@/components/Container'
import { WEEKDAYS } from '@/lib/placeholder.lessons'
import { cn } from '@/lib/utils'

const CardSkeleton = () => (
  <>
    <div className="mx-auto my-1 h-5 w-30 rounded-md bg-blue-200" />
    <div className="mx-auto my-1 h-5 w-50 rounded-md bg-gray-100" />
    <div className="mx-auto my-1 h-5 w-20 rounded-md bg-gray-100 opacity-30" />
    <div className="mx-auto my-1 h-5 w-25 rounded-md bg-gray-100" />
    <div className="mx-auto my-1 h-5 w-30 rounded-md bg-amber-600 opacity-20" />
  </>
)

export const ScheduleSkeleton = ({ day }: {day: number}) => (
  <Container className={'text-center p-5'}>
    <div className="bg-brand-300 inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium select-none pointer-events-none text-primary-foreground h-10 px-4 py-2 mb-5">
      Показать всю неделю
    </div>
    <ul className="grid grid-cols-7 rounded-md mb-2 shadow-light overflow-hidden">
      {
        WEEKDAYS.map((weekday, i) => (
          <li
            key={weekday}
            className={cn({'bg-[#fbe1c2]': i === day}, 'text-base inline-block font-semibold p-2 opacity-50')}
          >
            {weekday}
          </li>
        ))
      }
    </ul>
    <ul>
      <li className="p-5 my-3 rounded-md shadow-light text-center">
        <CardSkeleton />
      </li>
      <li className="p-5 my-3 rounded-md shadow-light">
        <CardSkeleton />
      </li>
      <li className="p-5 my-3 rounded-md shadow-light">
        <CardSkeleton />
      </li>
    </ul>
  </Container>
)
