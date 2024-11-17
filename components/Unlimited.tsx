'use client'

import React from 'react'

import { List } from '@/components/List'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Unlimited: React.FC = () => {
  return (
    <section className="md:flex">
      <List className="flex-1 max-md:mb-5 flex flex-col gap-2">
        <li>Стоимость ₽ <strong>1000</strong></li>
        <li>Акция актуальна, если вы у нас впервые</li>
        <li>2 занятия в течение 7 дней. Нельзя переносить, замораживать и продлевать</li>
        <li>Мы будем благодарны за любой честный отзыв в удобном для вас сервисе (2ГИС, яндекс карты)</li>
      </List>

      <div className="flex-1">
        <form className="flex flex-col gap-3 mb-5">
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            onChange={(e) => console.log(e.target.value)}
          />
          <Input
            type="text"
            name="phone"
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
