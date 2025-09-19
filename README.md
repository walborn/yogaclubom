# Расписание
Менять расписание нужно в файле [data/lessons.ts](data/lessons.ts)

# Карусель на главной странице
1. Добавьте картинку в папку [public/images/home](public/images/home) - обязательно webp формат. 
2. Если картинка не в формате webp, то нужно конвертировать её в этот формат командой `bun webpify {полный путь до файла}`
3. Добавьте адрес картинки в файле [data/homeImages.ts](data/homeImages.ts)

Пример
1. Положили картинку `adho_mukha_svanasana.jpeg` в папку [public/images/home](public/images/home)
2. Сконвертировали в webp формат
```sh
bun webpify /Users/walborn/Projects/yogaclubom/public/images/home/adho_mukha_svanasana.jpeg
```
3. Добавили в файл [data/homeImages.ts](data/homeImages.ts)
```git
  ...
  'images/home/kundalini.webp',
+ 'images/home/adho_mukha_svanasana.webp', // <- добавили в том порядке, какой нам нужен
  ...
```
4. Запушили `git push`

# Карусель на странице с арендой
Аналогично главной странице, только другие пути к папкам, и названия рекомендуются в формате 
`{число}.webp`
Папка находится в разделе [public/images/gallery](public/images/gallery) 



# Структура

/app: Содержит все роуты, компоненты и логику приложения. Это то, где происходит оснавная работа над приложением
/app/lib: Содержит используемые функции, такие как переиспользуемые утилиты, удобные запросы к API и так далее
/app/ui: Содержит все UI компоненты для приложения, такие как карточки, таблицы, формочки и тд.
/public: Содержит статику - например, картинки
/data: Все данные, в зависимости от которых меняется наполнение сайта

/next.config.ts - конфиги, которые, скорее всего, не придется часто менять
