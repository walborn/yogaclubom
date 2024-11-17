'use client'

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { Unlimited } from '@/components/Unlimited'
import { Card, CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface Props {
  searchParams: any
}

const HomePage: React.FC<Props> = () => {
  // const searchParams = await props.searchParams
  // console.log(111, searchParams)
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  )
  return (
    <Container className="max-lg:overflow-hidden mb-5">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="m-5 rounded"
      >
        <CarouselContent>
          {[
            '/images/home/2-1.jpeg',
            '/images/home/3-1.jpeg',
            '/images/home/4.jpeg',
            '/images/home/7.jpeg',
            '/images/home/8.jpeg',
            '/images/home/9.jpeg',
            // '/images/home/11.jpeg',
            // '/images/home/12.jpeg',
            // '/images/home/16.jpeg',
            // '/images/home/21.jpeg',
          ].map((imageUrl) => (
            <CarouselItem key={imageUrl}>
              <Card>
                <CardContent className="flex p-0 aspect-auto items-center justify-center">
                  <img src={imageUrl} className="w-full rounded-lg" alt={imageUrl} />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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
          <Unlimited />
        </section>
      </div>
    </Container>
  )
}

export default HomePage
