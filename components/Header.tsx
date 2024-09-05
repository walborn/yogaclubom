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

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname()
  const active = pathname?.split('/')[1]

  return (
    <header className={className}>
      <Container className="flex items-center justify-between px-4 py-8">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={48} height={48} />
          </Link>
          <Location
            href="https://yandex.ru/maps/-/CCQlqKsMhD"
            className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
          >
            <span className="hidden sm:inline">м.&nbsp;Бибирево, ул.&nbsp;Плещеева&nbsp;д.12А, 3&nbsp;этаж</span>
          </Location>
        </div>

        <div className="flex gap-4">
          <Phone
            href="tel:+7916876541"
            className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
          >
            <span className="hidden md:inline whitespace-nowrap">+7 (916) 876-54-13</span>
          </Phone>
      
          <Whatsapp
            href="https://wa.me/79168765413"
            className="flex items-center [&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
          />
          <Telegram
            href="tg://resolve?domain=yoga_club_om"
            className="flex items-center [&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
          />
        </div>
      </Container>
      <div className="bg-brand-100">
        <Container className="text-center">
          <ul className="inline-flex gap-4 leading-10">
            {
              navigation.map(i => (
                <li
                  key={i.key}
                  className={cn('inline whitespace-nowrap', { active: i.key === active })}
                >
                  <Link href={`/${i.href}`}>
                    {i.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </Container>
      </div>
    </header>
  )
}
