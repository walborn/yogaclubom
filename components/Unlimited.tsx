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
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface Props {
  className?: string;
}

export const Unlimited: React.FC<Props> = ({ className }) => {
  return (
    <section className="md:flex mt-5">
      <List className="flex-1 max-md:mb-5">
        <li className="mb-2">Стоимость ₽ <strong>1000</strong></li>
        <li className="mb-2">Акция актуальна, если вы у нас впервые</li>
        <li className="mb-2">2 занятия в течение 7 дней. Нельзя переносить, замораживать и продлевать</li>
        <li className="mb-2">Мы будем благодарны за любой честный отзыв в удобном для вас сервисе (2ГИС, яндекс карты)</li>
      </List>

      <div className="flex-1">
        <form className="flex flex-col gap-3 mb-5">
          <Input
            type="text"
            placeholder="Имя"
            onChange={(e) => console.log(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Телефон"
            onChange={(e) => console.log(e.target.value)}
          />
          <Button
            className="mt-2 bg-brand-400 hover:bg-brand-400/90"
          >
            Участвовать
          </Button>
        </form>
      </div>
    </section>
  )
}
