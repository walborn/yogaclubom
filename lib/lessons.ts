export type Lesson = {
  id: string;
  user: {
    id: string;
    name: string;
    picture: string;
  },
  weekday: number;
  time: number;
  duration: number;
  category: string;
  title: string;
  master: string;
  alternate?: string;
  disabled: boolean;
  hidden: boolean;
  level: string;
  room: number;
  note?: string;
  from: string;
  to: string;
}

export const weekdays = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ]
export const format = (minutes: number) => (mm => `${`0${(minutes - mm) / 60}`.slice(-2)}:${`0${mm}`.slice(-2)}`)(minutes % 60)
// Получить номер текущего дня недели: 0 - Пн, ..., 6 - Вс
export const getDay = () => {
  const now = new Date()
  const offset = (now.getTimezoneOffset() + 180) * 60 * 1000
  return (new Date(now.getTime() + offset).getDay() + 6) % 7
}

// Преобразуем список занятий в объект
export const getLessons = (list: Lesson[]) => {
  const lessons: Lesson[][] =  list
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

  return lessons.map(i => i.sort(compare))
}
