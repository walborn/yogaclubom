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
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Наталья',
    notes: '',
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
    notes: '',
  },
  
  // Среда
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
    master: 'Евгения.',
    notes: '',
  },

  // Четверг
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
    notes: 'по предварительной записи',
  },
  {
    weekday: 'Чт',
    start: '19:30',
    finish: '21:00',
    title: 'Хатха-йога',
    level: 'Средний ',
    master: 'Нина',
    notes: '',
  },

  // Пятница
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
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Наталья',
    notes: '',
  },

  // Суббота
  {
    weekday: 'Сб',
    start: '09:00',
    finish: '10:30',
    title: 'Общая физическая подготовка',
    level: 'Любой',
    master: 'Сергей',
    notes: '',
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
    notes: 'по предварительной записи',
  },
  {
    weekday: 'Вс',
    start: '19:00',
    finish: '20:30',
    title: 'Хатха-йога с акцентом на медитацию',
    level: 'Любой',
    master: 'Андрей',
    notes: 'по предварительной записи',
  },
]

export default lessons
