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
import { usePathname } from 'next/navigation'

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
  const [ opened, setOpened ] = React.useState(false)

  return (
    <header className={className}>
      <Container className="flex items-center justify-between p-4">
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
        <div className="md:hidden" onClick={() => setOpened(true)}>
          <svg
            className="h-6 w-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M 4 4 A 1.0001 1.0001 0 1 0 4 6 L 20 6 A 1.0001 1.0001 0 1 0 20 4 L 4 4 z M 4 11 A 1.0001 1.0001 0 1 0 4 13 L 20 13 A 1.0001 1.0001 0 1 0 20 11 L 4 11 z M 4 18 A 1.0001 1.0001 0 1 0 4 20 L 20 20 A 1.0001 1.0001 0 1 0 20 18 L 4 18 z"/>
          </svg>
        </div>
      </Container>
   
      {opened && <ul className="divide-y divide-slate-200 fixed top-0 right-0 z-50 flex h-full flex-col items-center bg-white py-8 text-center md:hidden">
        {
          navigation.map(i => (
            <li
              key={i.key}
              className={cn('w-full', { 'text-brand-400': i.key === active })}
            >
              <Link
                href={`/${i.href}`}
                onClick={() => setOpened(false)}
                className="w-full px-10 leading-10"
              >
                {i.title}
              </Link>
            </li>
          ))
        }
      </ul>}
      {opened && <div onClick={() => setOpened(false)} className="fixed top-0 left-0 z-40 w-full h-full bg-brand-800/20 md:hidden" />}
      <div className="bg-brand-100 max-md:hidden">
        <Container className="text-center">
          <ul className="inline-flex gap-4 leading-10">
            {
              navigation.map(i => (
                <li
                  key={i.key}
                  className={cn('inline whitespace-nowrap', { 'text-brand-400': i.key === active })}
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
