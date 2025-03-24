export type Lesson = {
  id: string
  user: {
    id: string
    name: string
    picture: string
  }
  weekday: number
  time: number
  duration: number
  category: string
  title: string
  master: string
  alternate?: string
  disabled: boolean
  hidden: boolean
  level: string
  room: number
  note?: string
  from: string
  to: string
}

export const weekdays = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ]
export const format = (minutes: number) =>
  ((mm) => `${`0${(minutes - mm) / 60}`.slice(-2)}:${`0${mm}`.slice(-2)}`)(
    minutes % 60,
  )
// Получить номер текущего дня недели: 0 - Пн, ..., 6 - Вс
export const getDay = () => {
  const now = new Date()
  const offset = (now.getTimezoneOffset() + 180) * 60 * 1000
  return (new Date(now.getTime() + offset).getDay() + 6) % 7
}

const today = new Date().toDateString()
const isToday = (dates: string[]) => dates.includes(today)
const isBefore = (date: string) => new Date(today).getTime() <= new Date(date).getTime()

export const lessons = [
  {
    day: 'Пн',
    time: '10:00',
    duration: 120,
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
  },
  // {
  //   day: 'Пн',
  //   time: '12:15',
  //   duration: 90,
  //   title: 'Хатха-йога для начинающих',
  //   level: 'Лёгкий',
  //   master: 'Наталья',
  //   note: 'по предварительной записи',
  // },
  {
    day: 'Пн',
    time: '16:15',
    duration: 90,
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
  },
  {
    day: 'Пн',
    time: '18:00',
    duration: 120,
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
  },
  {
    day: 'Пн',
    time: '20:15',
    duration: 90,
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Наталья',
  },
  {
    day: 'Вт',
    time: '18:00',
    duration: 85,
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    note: 'по предварительной записи',
    // [ [2025, 1, 25], [2025, 2, 4] ].map(i => new Date(...i).toDateString())
    // alternate: ['Tue Feb 25 2025', 'Tue Mar 04 2025'].includes(today),
    // note: <>по предварительной записи<br />25.02, 04.03 замена Андрей</>,
  },
  {
    day: 'Вт',
    time: '19:30',
    duration: 90,
    title: 'Хатха-йога',
    level: 'Средний',
    master: 'Нина',
  },
  {
    day: 'Ср',
    time: '18:00',
    duration: 120,
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
  },
  // {
  //   day: 'Ср',
  //   time: '20:15',
  //   duration: 90,
  //   title: 'Хатха-йога',
  //   level: 'средний',
  //   master: 'Евгения',
  //   // note: 'отмена 1 января',
  // },
  {
    day: 'Ср',
    time: '20:15',
    duration: 90,
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Евгения',
    note: '26 марта - замена, Надежда',
  },
  {
    day: 'Чт',
    time: '10:00',
    duration: 120,
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    // note: 'отмена 2 января',
  },
  // {
  //   day: 'Чт',
  //   time: '12:15',
  //   duration: 90,
  //   title: 'Хатха-йога для начинающих',
  //   level: 'Лёгкий',
  //   master: 'Наталья',
  //   note: 'по предварительной записи',
  //   // note: 'отмена 2 января',
  // },
  {
    day: 'Чт',
    time: '18:00',
    duration: 85,
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    note: 'по предварительной записи',
    // alternate: ['Thu Feb 27 2025', 'Thu Mar 06 2025'].includes(today),
    // note: <>по предварительной записи<br />27.02, 06.03 замена Андрей</>,
    // note: 'отмена 2 января',
  },
  {
    day: 'Чт',
    time: '19:30',
    duration: 90,
    title: 'Хатха-йога',
    level: 'Средний',
    master: 'Нина',
    // note: 'отмена 2 января',
  },
  {
    day: 'Пт',
    time: '16:15',
    duration: 90,
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
  },
  {
    day: 'Пт',
    time: '18:00',
    duration: 120,
    title: 'Аштанга-йога для начинающих',
    level: 'Средний',
    master: 'Ирина',
    // note: 'отмена 3 января',
  },
  {
    day: 'Пт',
    time: '20:15',
    duration: 90,
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Наталья',
  },
  {
    day: 'Сб',
    time: '09:00',
    duration: 90,
    title: 'Общая физическая подготовка',
    level: 'Любой',
    master: 'Сергей',
    note: 'по предварительной записи',
  },
  {
    day: 'Сб',
    time: '10:45',
    duration: 90,
    title: 'Кундалини-йога',
    level: 'Любой',
    master: 'Татьяна',
  },
  {
    day: 'Сб',
    time: '12:30',
    duration: 90,
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Евгения',
    alternate: isToday(['Sat Mar 15 2025']),
    note: isBefore('Sat Mar 15 2025') ? '15 марта - замена, Андрей' : undefined,
  },
  {
    day: 'Сб',
    time: '14:15',
    duration: 90,
    title: 'Здоровая спина (йога-терапия)',
    level: 'Лёгкий',
    master: 'Евгения',
    alternate: isToday(['Sat Mar 15 2025']),
    note: isBefore('Sat Mar 15 2025') ? '15 марта - замена, Надежда' : undefined,
  },
  {
    day: 'Вс',
    time: '11:00',
    duration: 90,
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    note: 'по предварительной записи',
    // note: <>по предварительной записи<br/>23 марта занятие с 12:30 до 14:00</>,
    // alternate: ['Sun Feb 23 2025', 'Sun Mar 02 2025', 'Sun Mar 09 2025'].includes(today),
    // note: <>по предварительной записи<br />23.02, 02.03, 09.03 замена Андрей</>,
  },
  {
    day: 'Вс',
    time: '17:15',
    duration: 90,
    title: 'Йога для беременных',
    level: 'Лёгкий',
    master: 'Надежда',
    note: 'по предварительной записи',
    // note: '16 февраля отмена',
  },
  {
    day: 'Вс',
    time: '19:00',
    duration: 90,
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Андрей',
    note: 'по предварительной записи',
    // note: '16 февраля замена - Андрей',
  },
].map(({ day, time: from, duration, ...i }) => {
  const [ h, m ] = from.split(':').map(Number)
  const time = h * 60 + m
  const weekday = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ].indexOf(day)

  const id = `${day}-${time}-${i.master}-${i.title}`
  const to = format(time + duration)
  return { ...i, id, time, from, to, weekday }
}) as Lesson[]

// Преобразуем список занятий в объект
export const getLessons = (list: Lesson[]) => {
  const lessons: Lesson[][] = list
    .reduce((r: Lesson[][], i: Lesson) => {
      if (!Array.isArray(r[i.weekday])) r[i.weekday] = []
      r[i.weekday].push(i)
      return r
    }, [])

  // сортируем по началу и продолжительности
  // то есть если два занятия начинаются в одно и то же время,
  // то первым будет то, которое раньше заканчивается
  const compare = (a: Lesson, b: Lesson) => {
    if (a.time < b.time) return -1
    if (a.time > b.time) return 1
    if (a.duration < b.duration) return -1
    if (a.duration > b.duration) return 1
    return 0
  }

  return lessons.map((i) => i.sort(compare))
}

export default getLessons(lessons)
