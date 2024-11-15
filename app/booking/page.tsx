'use client'
import React from 'react'

import Autoplay from 'embla-carousel-autoplay'

import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const BookingPage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )

  return <Container className="mb-10 px-5 max-lg:overflow-hidden">
    <strong>Наши залы</strong> - это многофункциональные площадки,
      которые подойдут для различных занятий и мероприятий.
      Залы предназначены для проведения индивидуальных и групповых
      занятий по следующим направлениям:
    <ul>
      <li>Йога</li>
      <li>Фитнес</li>
      <li>Единоборства</li>
    </ul>
    <Title size="lg">Характеристики</Title>
    <ul>
      <li>Площадь залов: 70 и 17 м<sup>2</sup></li>
      <li>Высота потолков: 3.4 м</li>
      <li>Напольное покрытие: ламинат</li>
      <li>Раздевалки (женская, мужская)</li>
      <li>Спортинвентарь: коврики, блоки, ремни для йоги, болстеры, татами</li>
    </ul>
      
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {[
          '/images/gallery/0.jpeg',
          '/images/gallery/1.jpeg',
          '/images/gallery/2.jpeg',
          '/images/gallery/3.jpeg',
          '/images/gallery/4.jpeg',
          '/images/gallery/5.jpeg',
        ].map((imageUrl) => (
          <CarouselItem key={imageUrl}>
            <Card>
              <CardContent className="flex p-0 aspect-video items-center justify-center">
                <img src={imageUrl} className="w-full rounded-lg" alt={imageUrl} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </Container>
}

export default BookingPage
