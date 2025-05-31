export type User = {
  name: string
  email: string
  password: string
}

export type Lesson = {
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

type Hour = 
  | '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'
  | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23'

type Minute = 
  | '00' | '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09'
  | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19'
  | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29'
  | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39'
  | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49'
  | '50' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '59'

export type StrictTimeString = `${Hour}:${Minute}`;

export type LessonHuman = {
  weekday: WeekDay
  start: StrictTimeString
  finish: StrictTimeString
  title: string
  master: string
  level: string
  notes: string
}

// API
export type UserWithId = User & { id: string }
export type LessonWithId = Lesson & { id: string }
