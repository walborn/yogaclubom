import placeholderLessons from '@/data/lessons'
import type { WeekDay, WeekDayIndex, FullLesson } from '@/lib/definitions'
import { randomUUID } from 'crypto'


export const weekdayByName: Record<WeekDay, WeekDayIndex> = {
  'Пн': 0, 'Вт': 1, 'Ср': 2, 'Чт': 3, 'Пт': 4, 'Сб': 5, 'Вс': 6,
}
export const minutes = (time?: string) => {
  if (!time) return -1
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

const lessons: FullLesson[] = placeholderLessons
  .map(({ weekday, start, finish, ...others }) => ({
    ...others,
    id: randomUUID(),

    weekday: weekdayByName[weekday],
    start: minutes(start),
    finish: minutes(finish),

    weekdayRu: weekday,
    startRu: start,
    finishRu: finish,
  }))


export const getLessons = <T extends FullLesson>(list: T[]) => {
  const result: T[][] = list
    .reduce((r: T[][], i: T) => {
      if (!Array.isArray(r[i.weekday])) r[i.weekday] = []
      r[i.weekday].push(i)
      return r
    }, [])
  
  // сортируем по началу и если начало совпадает,
  // то сначала те, которые раньше заканчиваются
  const compare = (a: T, b: T) => a.start - b.start || a.finish - b.finish

  return result.map(i => i?.sort(compare) || [])
}

  
export default getLessons(lessons)
