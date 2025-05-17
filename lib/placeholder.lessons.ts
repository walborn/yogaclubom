import type { WeekDay, WeekDayIndex, Lesson, HumanLesson } from './definitions'

export const weekdays: Record<WeekDay, WeekDayIndex> = {
  'Пн': 0,
  'Вт': 1,
  'Ср': 2,
  'Чт': 3,
  'Пт': 4,
  'Сб': 5,
  'Вс': 6,
}

export const WEEKDAYS: WeekDay[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const format = (minutes: number) => (mm => `${`0${(minutes - mm) / 60}`.slice(-2)}:${`0${mm}`.slice(-2)}`)(minutes % 60)
// Получить номер текущего дня недели: 0 - Пн, ..., 6 - Вс
export const getNowDay = () => {
  const now = new Date()
  const offset = (now.getTimezoneOffset() + 180) * 60 * 1000
  return (new Date(now.getTime() + offset).getDay() + 6) % 7
}

// Преобразуем список занятий в объект
export const getLessons = (list: Lesson[]) => {
  const Lessons: Lesson[][] = list
    .reduce((r: Lesson[][], i: Lesson) => {
      if (!Array.isArray(r[i.weekday])) r[i.weekday] = []
      r[i.weekday].push(i)
      return r
    }, [])

  // сортируем по началу и если начало совпадает,
  // то сначала те, которые раньше заканчиваются
  // то есть если два занятия начинаются в одно и то же время,
  // то первым будет то, которое раньше заканчивается
  const compare = (a: Lesson, b: Lesson) => a.from - b.from || a.to - b.to

  return Lessons.map(i => i.sort(compare))
}


const placeholderLessons: HumanLesson[] = [
  {
    day: 'Пн',
    time: '10:00',
    duration: 120,
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: [],
  },
  {
    day: 'Пн',
    time: '16:15',
    duration: 90,
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
    notes: [],
  },
  {
    day: 'Пн',
    time: '18:00',
    duration: 120,
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: [],
  },
  {
    day: 'Пн',
    time: '20:15',
    duration: 90,
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Наталья',
    notes: [],
  },
  {
    day: 'Вт',
    time: '18:00',
    duration: 85,
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    notes: [],
  },
  {
    day: 'Вт',
    time: '19:30',
    duration: 90,
    title: 'Хатха-йога',
    level: 'Средний',
    master: 'Нина',
    notes: [],
  },
  {
    day: 'Ср',
    time: '18:00',
    duration: 120,
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: [],
  },
  {
    day: 'Ср',
    time: '20:15',
    duration: 90,
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Евгения',
    notes: [],
  },
  {
    day: 'Чт',
    time: '10:00',
    duration: 120,
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: [],
  },
  {
    day: 'Чт',
    time: '18:00',
    duration: 85,
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    notes: [],
  },
  {
    day: 'Чт',
    time: '19:30',
    duration: 90,
    title: 'Хатха-йога',
    level: 'Средний',
    master: 'Нина',
    notes: [],
  },
  {
    day: 'Пт',
    time: '16:15',
    duration: 90,
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
    notes: [],
  },
  {
    day: 'Пт',
    time: '18:00',
    duration: 120,
    title: 'Аштанга-йога для начинающих',
    level: 'Средний',
    master: 'Ирина',
    notes: [],
  },
  {
    day: 'Пт',
    time: '20:15',
    duration: 90,
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Наталья',
    notes: [],
  },
  {
    day: 'Сб',
    time: '09:00',
    duration: 90,
    title: 'Общая физическая подготовка',
    level: 'Любой',
    master: 'Сергей',
    notes: ['Отмена до октября'],
  },
  {
    day: 'Сб',
    time: '10:45',
    duration: 90,
    title: 'Кундалини-йога',
    level: 'Любой',
    master: 'Татьяна',
    notes: [],
  },
  {
    day: 'Сб',
    time: '12:30',
    duration: 90,
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Евгения',
    notes: [],
  },
  {
    day: 'Сб',
    time: '14:15',
    duration: 90,
    title: 'Здоровая спина (йога-терапия)',
    level: 'Лёгкий',
    master: 'Евгения',
    notes: [],
  },
  {
    day: 'Вс',
    time: '11:00',
    duration: 90,
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    notes: ['по предварительной записи'],
  },
  {
    day: 'Вс',
    time: '17:15',
    duration: 90,
    title: 'Йога для беременных',
    level: 'Лёгкий',
    master: 'Надежда',
    notes: ['по предварительной записи'],
  },
  {
    day: 'Вс',
    time: '19:00',
    duration: 90,
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Андрей',
    notes: ['по предварительной записи'],
  },
]

const Lessons = placeholderLessons
  .map(({ day, time, duration, title, level, master, notes }) => {
    const id = `${day}-${time}-${master}-${title}`

    const [h, m] = time.split(':').map(Number)
    const from = h * 60 + m
    const to = from + duration

    return { id, weekday: weekdays[day], from, to, title, level, master, notes } as Lesson
  }) as Lesson[]


export default getLessons(Lessons)
