import React from 'react'

import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { Unlimited } from '@/components/Unlimited'
import { HomeCarousel } from '@/components/HomeCarousel'
import { Location } from '@/components/icons/Location'

export const metadata: Metadata = {
  title: 'Главная | Yoga Club OM',
  description: 'Расскажем о клубе Yoga Club OM',
}

const HomePage: React.FC = () => (
  <Container className="max-lg:overflow-hidden max-md:mb-10">
    <div className="whitespace-nowrap pl-3 mr-16 pt-1 pb-4 overflow-hidden md:hidden">
      <Location
        href="https://yandex.ru/maps/-/CCQlqKsMhD"
        className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
      >
        <span className="sm:inline">м.&nbsp;Бибирево, ул.&nbsp;Плещеева&nbsp;д.12А, 3&nbsp;этаж</span>
      </Location>
    </div>
    <HomeCarousel className="m-2 rounded"/>
    <div className="mx-4 my-5 flex flex-col gap-8">
      <section>
        <strong>Наш клуб</strong> - это сообщество увлеченных людей,
        целью которых является саморазвитие и помощь в этом другим людям.
        С 2014 года улучшаем жизнь Практикой!
      </section>
      <section>
        <Title size="lg" className="text-brand">Выбери свою практику</Title>
        Можно выбрать практику в удобное для Вас время, различного уровня сложности
        и созвучную Вашим внутренним устремлениям.
        Занятия проводят опытные и сертифицированные инструкторы, с которыми можно
        заниматься - <strong>индивидуально</strong> или <strong>в группе</strong>.
      </section>
      <section><strong>ЙОГА:</strong>
        <div className="item">Классическая Хатха йога</div>
        <div className="item">Аштанга йога</div>
        <div className="item">Кундалини йога</div>
        <div className="item">Мягкие практики <strong>для беременных</strong></div>
      </section>
      <section>
        <strong>СПЕЦИАЛЬНЫЕ НАПРАВЛЕНИЯ:</strong>
        <div className="item">Практика &quot;Здоровая спина&quot;</div>
        <div className="item">Общая физическая подготовка</div>
      </section>
      <section>
        <strong>ЕДИНОБОРСТВА (ДЛЯ ДЕТЕЙ ОТ 5 ДО 14 ЛЕТ)</strong>
        <div className="item">Джит Кун-до - стиль, основанный Брюсом Ли</div>
      </section>
      <section>
        <Title size="lg">Акция: 2 занятия по цене 1!</Title>
        <Unlimited className="shadow-light p-5 rounded" />
      </section>
    </div>
  </Container>
)

export default HomePage
