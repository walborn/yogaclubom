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
    notes: '31.08 и 07.09 отмена',
  },
  {
    weekday: 'Пн',
    start: '16:15',
    finish: '17:45',
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
    notes: 'с 7 сентября',
  },
  {
    weekday: 'Пн',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '31.08 и 07.09 отмена',
  },
  {
    weekday: 'Пн',
    start: '19:00',
    finish: '20:30',
    title: 'Хатха-йога с акцентом на медитацию',
    level: 'Любой',
    master: 'Андрей',
    notes: 'по предварительной записи',
  },
  {
    weekday: 'Пн',
    start: '20:15',
    finish: '21:45',
    title: 'Хатха-йога для начинающих',
    level: 'Легкий',
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
    master: 'Ксения',
    notes: 'с 1 сентября по предварительной записи',
  },
  {
    weekday: 'Вт',
    start: '19:30',
    finish: '21:00',
    title: 'Хатха-йога',
    level: 'Средний',
    master: 'Нина',
    notes: 'с 1 сентября',
  },
  
  // Среда
  {
    weekday: 'Ср',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога (майсор-класс)',
    level: 'Сложный',
    master: 'Ирина',
    notes: '2 и 9 сентября отмена',
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
    notes: '3 и 10 сентября отмена',
  },
  {
    weekday: 'Чт',
    start: '18:00',
    finish: '19:25',
    title: 'Хатха-йога',
    level: 'Любой',
    master: 'Ксения',
    notes: 'с 3 сентября по предварительной записи',
  },
  {
    weekday: 'Чт',
    start: '19:30',
    finish: '21:00',
    title: 'Хатха-йога',
    level: 'Средний ',
    master: 'Нина',
    notes: 'с 3 сентября',
  },

  // Пятница
  {
    weekday: 'Пт',
    start: '16:15',
    finish: '17:45',
    title: 'Джит Кун-До детская группа',
    level: '5-14 лет',
    master: 'Сергей',
    notes: 'с 7 сентября',
  },
  {
    weekday: 'Пт',
    start: '18:00',
    finish: '20:00',
    title: 'Аштанга-йога для начинающих',
    level: 'Средний',
    master: 'Ирина',
    notes: '28.08, 4.09 и 11.09 отмена',
  },
  {
    weekday: 'Пт',
    start: '20:15',
    finish: '21:45',
    title: 'Хатха-йога для начинающих',
    level: 'Легкий',
    master: 'Наталья',
    notes: '28 августа отмена',
  },

  // Суббота
  {
    weekday: 'Сб',
    start: '09:00',
    finish: '10:30',
    title: 'Общая физическая подготовка',
    level: 'Любой',
    master: 'Сергей',
    notes: 'отмена до октября',
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
    start: '17:15',
    finish: '18:45',
    title: 'Йога голоса и Гонг-медитация',
    level: 'Лёгкий',
    master: 'Ольга',
    notes: 'с 13 сентября по предварительной записи',
  },
  {
    weekday: 'Вс',
    start: '19:00',
    finish: '20:30',
    title: 'Хатха-йога с акцентом на медитацию',
    level: 'Любой',
    master: 'Андрей',
    notes: 'с сентября по предварительной записи',
  },
]

export default lessons
