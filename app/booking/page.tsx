import React from 'react'

import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { GymCarousel } from '@/components/GymCarousel'
import { List } from '@/components/List'
import { Title } from '@/components/ui/title'

export const metadata: Metadata = {
  title: 'Аренда залов | Yoga Club OM',
  description: 'Доступные для аренды залы в клубе Yoga Club OM',
  keywords: [ 'аренда зала', 'аренда помещения', 'аренда класса' ],
}

const BookingPage = () => (
  <Container className="my-8 px-5 max-lg:overflow-hidden">
    <p className="mb-5"><strong>Наши залы</strong> - это многофункциональные площадки,
      которые подойдут для различных занятий и мероприятий.
      Залы предназначены для проведения индивидуальных и групповых
      занятий по следующим направлениям:
    </p>
    <List>
      <li>Йога</li>
      <li>Фитнес</li>
      <li>Единоборства</li>
    </List>
    <Title size="lg">Характеристики</Title>
    <List className="mb-5">
      <li>Площадь залов: 70 и 17 м<sup>2</sup></li>
      <li>Высота потолков: 3.4 м</li>
      <li>Напольное покрытие: ламинат</li>
      <li>Раздевалки (женская, мужская)</li>
      <li>Спортинвентарь: коврики, блоки, ремни для йоги, болстеры, татами</li>
    </List>
      
    <GymCarousel />
  </Container>
)

export default BookingPage
