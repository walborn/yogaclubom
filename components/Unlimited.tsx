'use client'

import React from 'react'

import { List } from '@/components/List'
import { cn } from '@/lib/utils'


interface Props {
  className?: string
}

export const Unlimited: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn('md:flex md:gap-2', className)}>
      <List className="flex-1 max-md:mb-5 flex flex-col gap-2 custom-bullet">
        <li>Стоимость <strong>1000</strong> рублей</li>
        <li>Акция актуальна, если вы у нас впервые</li>
        <li>2 занятия в течение 7 дней. Нельзя переносить, замораживать и продлевать</li>
        <li>Мы будем благодарны за любой честный отзыв в удобном для вас сервисе (2ГИС, яндекс карты)</li>
      </List>
    </section>
  )
}
