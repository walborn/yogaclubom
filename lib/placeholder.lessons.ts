import type { WeekDay, WeekDayIndex, LessonHuman, Lesson, LessonWithId, StrictTimeString } from '@/lib/definitions'
import { randomUUID } from 'crypto'

export const humanizeLesson = (lesson: LessonWithId): LessonHuman => {
  return {
    title: lesson.title,
    weekday: weekdays[lesson.weekday],
    start: format(lesson.start),
    finish: format(lesson.finish),
    master: lesson.master,
    level: lesson.level,
    notes: lesson.notes,
  }
}
const placeholderLessons: LessonHuman[] = [
  {
    weekday: 'Пн',
    start: '10:00',
    finish: '12:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '',
  },
  {
    weekday: 'Пн',
    start: '16:15',
    finish: '17:45',
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
    notes: '',
  },
  {
    weekday: 'Пн',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '',
  },
  {
    weekday: 'Пн',
    start: '20:15',
    finish: '21:45',
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Наталья',
    notes: '',
  },
  {
    weekday: 'Вт',
    start: '18:00',
    finish: '19:25',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    notes: '',
  },
  {
    weekday: 'Вт',
    start: '19:30',
    finish: '21:00',
    title: 'Хатха-йога',
    level: 'Средний',
    master: 'Нина',
    notes: '',
  },
  {
    weekday: 'Ср',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '',
  },
  {
    weekday: 'Ср',
    start: '20:15',
    finish: '21:45',
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Евгения',
    notes: '',
  },
  {
    weekday: 'Чт',
    start: '10:00',
    finish: '12:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '',
  },
  {
    weekday: 'Чт',
    start: '18:00',
    finish: '19:25',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    notes: '',
  },
  {
    weekday: 'Чт',
    start: '19:30',
    finish: '21:00',
    title: 'Хатха-йога',
    level: 'Средний',
    master: 'Нина',
    notes: '',
  },
  {
    weekday: 'Пт',
    start: '16:15',
    finish: '17:45',
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
    notes: '',
  },
  {
    weekday: 'Пт',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога для начинающих',
    level: 'Средний',
    master: 'Ирина',
    notes: '',
  },
  {
    weekday: 'Пт',
    start: '20:15',
    finish: '21:45',
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Наталья',
    notes: '',
  },
  {
    weekday: 'Сб',
    start: '09:00',
    finish: '10:30',
    title: 'Общая физическая подготовка',
    level: 'Любой',
    master: 'Сергей',
    notes: 'Отмена до октября',
  },
  {
    weekday: 'Сб',
    start: '10:45',
    finish: '12:15',
    title: 'Кундалини-йога',
    level: 'Любой',
    master: 'Татьяна',
    notes: '',
  },
  {
    weekday: 'Сб',
    start: '12:30',
    finish: '14:00',
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Евгения',
    notes: '',
  },
  {
    weekday: 'Сб',
    start: '14:15',
    finish: '15:45',
    title: 'Здоровая спина (йога-терапия)',
    level: 'Лёгкий',
    master: 'Евгения',
    notes: '',
  },
  {
    weekday: 'Вс',
    start: '11:00',
    finish: '12:30',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    notes: 'по предварительной записи',
  },
  {
    weekday: 'Вс',
    start: '17:15',
    finish: '18:45',
    title: 'Йога для беременных',
    level: 'Лёгкий',
    master: 'Надежда',
    notes: 'по предварительной записи',
  },
  {
    weekday: 'Вс',
    start: '19:00',
    finish: '20:30',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Андрей',
    notes: 'по предварительной записи',
  },
]

export const weekdayByName: Record<WeekDay, WeekDayIndex> = {
  'Пн': 0, 'Вт': 1, 'Ср': 2, 'Чт': 3, 'Пт': 4, 'Сб': 5, 'Вс': 6,
}

export const weekdays: WeekDay[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const format = (minutes: number): StrictTimeString => (mm => `${`0${(minutes - mm) / 60}`.slice(-2)}:${`0${mm}`.slice(-2)}`)(minutes % 60) as StrictTimeString
export const minutes = (time?: string) => {
  if (!time) return 0
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

// Получить номер текущего дня недели: 0 - Пн, ..., 6 - Вс
export const getNowDay = () => {
  const now = new Date()
  const offset = (now.getTimezoneOffset() + 180) * 60 * 1000
  return (new Date(now.getTime() + offset).getDay() + 6) % 7
}

// Определим интерфейс для ограничения типа
type LessonLike = Pick<LessonWithId, 'weekday' | 'start' | 'finish'>

// Преобразуем список занятий в объект
export const getLessons = <T extends LessonLike>(list: T[]) => {
  const Lessons: T[][] = list
    .reduce((r: T[][], i: T) => {
      if (!Array.isArray(r[i.weekday])) r[i.weekday] = []
      r[i.weekday].push(i)
      return r
    }, [])

  // сортируем по началу и если начало совпадает,
  // то сначала те, которые раньше заканчиваются
  const compare = (a: T, b: T) => a.start - b.start || a.finish - b.finish

  return Lessons.map(i => i?.sort(compare) || [])
}

export const lessons: Lesson[] = placeholderLessons
  .map(({ weekday, start, finish, ...others   }) => {
    return {
      ...others,
      weekday: weekdayByName[weekday],
      start: minutes(start),
      finish: minutes(finish),
    }
  })

export const enrichWithId = <T>(items: T[]): Array<T & { id: string }> => items
  .map(item => ({ id: randomUUID(), ...item }))
  
export default getLessons(lessons)
