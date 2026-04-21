import React from 'react'

import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { HomeCarousel } from '@/components/HomeCarousel'
import { Location } from '@/components/icons/Location'
import { Title } from '@/components/ui/title'
import { Unlimited } from '@/components/Unlimited'

export const metadata: Metadata = {
  title: 'Главная | Yoga Club OM',
  description: 'Расскажем о клубе Yoga Club OM',
}

const HomePage: React.FC = () => (
  <Container className="max-lg:overflow-hidden max-md:mb-10">
    <div className="whitespace-nowrap pl-3 mr-16 pt-1 pb-4 overflow-hidden md:hidden">
      <Location
        href="https://yandex.ru/maps/-/CCQlqKsMhD"
        className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
      >
        <span className="sm:inline">м.&nbsp;Бибирево, ул.&nbsp;Плещеева&nbsp;д.12А, 3&nbsp;этаж</span>
      </Location>
    </div>
    <HomeCarousel className="m-2 rounded" />
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

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <section><strong>ЙОГА:</strong>
            <div className="item">Классическая Хатха йога</div>
            <div className="item">Аштанга йога</div>
            <div className="item">Кундалини йога</div>
            <div className="item">Мягкие практики <strong>с медитацией</strong></div>
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
        </div>
        <section className="flex-1 p-5 shadow-light rounded">
          <Title size="md">Акция:<br />2 занятия по цене 1!</Title>
          <Unlimited className=" " />
        </section>
      </div>
    </div>
  </Container>
)

export default HomePage
