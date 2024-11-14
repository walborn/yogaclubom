'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Container } from '@/components/Container'
import { Telegram } from '@/components/icons/Telegram'
import { Location } from '@/components/icons/Location'
import { Whatsapp } from '@/components/icons/Whatsapp'
import { Email } from '@/components/icons/Email'
import { File } from '@/components/icons/File'
import { Phone } from '@/components/icons/Phone'
import { useParams, usePathname } from 'next/navigation'
import { Vkontakte } from './icons/Vkontakte';

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

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn('bg-main text-brand-800', className)}>
      <Container className="flex items-center justify-between px-4 py-8">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={128} height={128} />
        </Link>

        <div className="inline-flex gap-3">
          <Vkontakte
            className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-6 [&>svg]:fill-brand-400"
            href="https://vk.com/yoga.altufyevo"
          />
          <Telegram
            className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-6 [&>svg]:fill-brand-400"
            href="https://t.me/yogaclub_om_moscow"
          />
        </div>
        <ul>
          <li>
            <Location
              href="https://yandex.ru/maps/-/CCQlqKsMhD"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
            >
                м. Бибирево ул. Плещеева, д. 12А, 3 этаж
            </Location>
          </li>
          <li>
            <Phone
              href="tel:+79168765413"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
            >
                +7 (916) 876-54-13
            </Phone>
            <Whatsapp
              href="https://wa.me/79168765413"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
            />
            <Telegram
              href="tg://resolve?domain=yoga_club_om"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
            />
          </li>
        
          <li>
            <Email
              href="mailto:yoga-club-om@yandex.ru?subject=Запись"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
            >
                yoga-club-om@yandex.ru
            </Email>
          </li>
          <li>
            <Vkontakte
              href="https://vk.com/yoga.altufyevo"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
            >
                Вконтакте
            </Vkontakte>
          </li>
          <li>
            <Telegram
              href="https://t.me/yogaclub_om_moscow"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
            >
                Telegram
            </Telegram>
          </li>
          <li>
            <File
              href="/docs/public-offer-agreement__yoga-club-om.pdf"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
            >
                Договор оферты
            </File>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
