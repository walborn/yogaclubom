export type User = {
  id: string;
  name: string
  email: string
  password: string
}

export type Lesson = {
  id: string
  weekday: number //0 | 1 | 2 | 3 | 4 | 5 | 6
  start: number // in minutes
  finish: number // in minutes
  title: string
  master: string
  level: string
  notes: string
}

export type WeekDay = 'Пн' | 'Вт' | 'Ср' | 'Чт' | 'Пт' | 'Сб' | 'Вс'
export type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type HumanLesson = {
  id?: string
  day: WeekDay
  time: string // HH:mm
  duration: number // in minutes
  title: string
  master: string
  level: string
  notes: string
}
