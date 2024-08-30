'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Container } from '@/components/Container'
import { Telegram } from '@/components/Telegram'
import { Location } from '@/components/Location'
import { Whatsapp } from '@/components/Whatsapp'
import { Phone } from '@/components/Phone'
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
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between px-4 py-8">
        <div className='flex items-center gap-4'>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={48} height={48} />
          </Link>

          <Link href="https://yandex.ru/maps/-/CCQlqKsMhD">
            <Location className="h-4 mr-2 fill-brand hover:fill-telegram inline" />
            <span className='hidden sm:inline'>м.&nbsp;Бибирево, ул.&nbsp;Плещеева&nbsp;д.12А, 3&nbsp;этаж</span>
          </Link>
        </div>

        <div className='flex gap-4'>
          <Link href="tel:+7916876541" className="whitespace-nowrap">
            <Phone className="h-4 fill-brand hover:fill-telegram inline"/>
            <span className='hidden md:inline'>+7&nbsp;(916)&nbsp;876-54-13</span>
          </Link>
      
          <Link href="https://wa.me/79168765413" className='flex items-center'>
            <Whatsapp className="h-4 fill-brand hover:fill-whatsapp"/>
          </Link>

          <Link href="tg://resolve?domain=yoga_club_om" className='flex items-center'>
            <Telegram className="h-4 fill-brand hover:fill-telegram" />
          </Link>
        </div>
      </Container>
      <Container>
        <ul>
          {
            navigation.map(i => (
              <li
                key={i.key}
                className={cn('inline', { active: i.key === active })}
              >
                <Link href={`/${i.href}`}>
                  {i.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </Container>
    </header>
  )
}
