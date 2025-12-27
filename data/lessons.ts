import type { LessonHuman as Lesson } from '@/lib/definitions'

const lessons: Lesson[] = [

  // Понедельник
  {
    weekday: 'Пн',
    start: '10:00',
    finish: '12:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '5 января отмена',
  },
  {
    weekday: 'Пн',
    start: '16:15',
    finish: '17:45',
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
    notes: '5 января отмена',
  },
  {
    weekday: 'Пн',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '5 января отмена',
  },
  {
    weekday: 'Пн',
    start: '20:15',
    finish: '21:45',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Наталья',
    notes: '5 января отмена',
  },

  // Вторник
  {
    weekday: 'Вт',
    start: '18:00',
    finish: '19:25',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    notes: 'по предварительной записи',
  },
  {
    weekday: 'Вт',
    start: '19:30',
    finish: '21:00',
    title: 'Хатха-йога',
    level: 'Средний',
    master: 'Нина',
    notes: '30 декабря и 6 января отмена',
  },
  
  // Среда
  {
    weekday: 'Ср',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '31 декабря и 7 января отмена',
  },
  {
    weekday: 'Ср',
    start: '20:15',
    finish: '21:45',
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Евгения.',
    notes: '31 декабря и 7 января отмена',
  },

  // Четверг
  {
    weekday: 'Чт',
    start: '10:00',
    finish: '12:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '1 января отмена',
  },
  {
    weekday: 'Чт',
    start: '18:00',
    finish: '19:25',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Алексей',
    notes: '1 и 8 января отмена',
  },
  {
    weekday: 'Чт',
    start: '19:30',
    finish: '21:00',
    title: 'Хатха-йога',
    level: 'Средний ',
    master: 'Нина',
    notes: '1 и 8 января отмена',
  },

  // Пятница
  {
    weekday: 'Пт',
    start: '16:15',
    finish: '17:45',
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
    notes: '2 и 9 января отмена',
  },
  {
    weekday: 'Пт',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога для начинающих',
    level: 'Средний',
    master: 'Ирина',
    notes: '2 и 9 января отмена',
  },
  {
    weekday: 'Пт',
    start: '20:15',
    finish: '21:45',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Наталья',
    notes: '2 января отмена 9 января в 19:00 по предварительной записи',
  },

  // Суббота
  {
    weekday: 'Сб',
    start: '09:00',
    finish: '10:30',
    title: 'Общая физическая подготовка',
    level: 'Любой',
    master: 'Сергей',
    notes: '3 января отмена',
  },
  {
    weekday: 'Сб',
    start: '10:45',
    finish: '12:15',
    title: 'Кундалини-йога',
    level: 'Любой',
    master: 'Татьяна',
    notes: '3 января отмена',
  },
  {
    weekday: 'Сб',
    start: '12:30',
    finish: '14:00',
    title: 'Хатха-йога для начинающих',
    level: 'Лёгкий',
    master: 'Евгения',
    notes: '3 января отмена',
  },
  {
    weekday: 'Сб',
    start: '14:15',
    finish: '15:45',
    title: 'Здоровая спина (йога-терапия)',
    level: 'Лёгкий',
    master: 'Евгения',
    notes: '3 января отмена',
  },

  // Воскресенье
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
    notes: '28 декабря и 4 января отмена',
  },
  {
    weekday: 'Вс',
    start: '19:00',
    finish: '20:30',
    title: 'Хатха-йога с акцентом на медитацию',
    level: 'Любой',
    master: 'Андрей',
    notes: '28 декабря в 12:45 по предварительной записи',
  },
]

export default lessons
