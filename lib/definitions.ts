export type Lesson = {
  id: string
  weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6
  from: number // in minutes
  to: number // in minutes
  title: string
  master: string
  level: string
  notes: string[]
}

export type WeekDay = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс'
export type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6
// export type Level = 'Любой' | 'Лёгкий' | 'Средний' | 'Сложный' | '5-14 лет'
export type HumanLesson = {
  id?: string
  day: WeekDay
  time: string // HH:mm
  duration: number // in minutes
  title: string
  master: string
  level: string // Level
  notes: string[]
}
