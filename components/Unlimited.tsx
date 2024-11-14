'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Container } from '@/components/Container'
import { Telegram } from '@/components/icons/Telegram'
import { Location } from '@/components/icons/Location'
import { Whatsapp } from '@/components/icons/Whatsapp'
import { Phone } from '@/components/icons/Phone'
import { useParams, usePathname } from 'next/navigation'

import { List } from '@/components/List'

const navigation = [
  { key: '', href: '', title: 'Главная' },
  { key: 'schedule', href: 'schedule', title: 'Расписание' },
  { key: 'prices', href: 'prices', title: 'Цены' },
  { key: 'masters', href: 'masters', title: 'Инструкторы' },
  { key: 'booking', href: 'booking', title: 'Аренда залов' },
  { key: 'contacts', href: 'contacts', title: 'Контакты' },
]

interface Props {
  className?: string;
}

export const Unlimited: React.FC<Props> = ({ className }) => {
  return (
    <section className="flex">
      <List className="flex-1">
        <li>Стоимость ₽ <strong>1000</strong></li>
        <li>Акция актуальна, если вы у нас впервые</li>
        <li>2 занятия в течение 7 дней. Нельзя переносить, замораживать и продлевать</li>
        <li>Мы будем благодарны за любой честный отзыв в удобном для вас сервисе (2ГИС, яндекс карты)</li>
      </List>
      <form className="flex-1">
        <input />
      </form>

    </section>
  )
}
