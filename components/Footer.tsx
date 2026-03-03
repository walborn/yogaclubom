
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Vkontakte } from './icons/Vkontakte'

import { Container } from '@/components/Container'
import { Email } from '@/components/icons/Email'
import { File } from '@/components/icons/File'
import { Location } from '@/components/icons/Location'
import { Max } from '@/components/icons/Max'
import { Phone } from '@/components/icons/Phone'
import { Telegram } from '@/components/icons/Telegram'
import { Whatsapp } from '@/components/icons/Whatsapp'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn('bg-main text-brand-800', className)}>
      <Container className="flex max-md:flex-col gap-5 items-center justify-between px-4 py-8">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={128} height={128} priority/>
        </Link>

        <div className="inline-flex gap-3">
          <Vkontakte
            className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-6 fill-brand-400"
            href="https://vk.com/yoga.altufyevo"
          />
          <Telegram
            className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-6 fill-brand-400"
            href="https://t.me/yogaclub_om_moscow"
          />
          <Max
            className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-6 fill-brand-400"
            href="https://max.ru/join/u0lFRVYRJRZX7_m9l0Ip8BQlMGoGrYIgogtqW04cawU"
          />
        </div>
        <ul>
          <li>
            <Location
              href="https://yandex.ru/maps/-/CCQlqKsMhD"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              м. Бибирево ул. Плещеева, д. 12А, 3 этаж
            </Location>
          </li>
          <li className="relative">
            <Phone
              href="tel:+79168765413"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              +7 (916) 876-54-13
            </Phone>
            <Whatsapp
              href="https://wa.me/79168765413"
              className="ml-2 [&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400 [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:-translate-y-1/2"
            />
            <Telegram
              href="tg://resolve?domain=yoga_club_om"
              className="ml-6 [&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400 [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:-translate-y-1/2"
            />
            <Max
              href="https://max.ru/u/f9LHodD0cOJIJb2VGTT9LM_5SlF3ZhgXEpzGCfqHQp6kw5aFMbFUtBMS4CU"
              className="ml-6 [&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400 [&>svg]:absolute [&>svg]:top-1/2 [&>svg]:-translate-y-1/2"
            />
          </li>

          <li>
            <Email
              href="mailto:yoga-club-om@yandex.ru?subject=Запись"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              yoga-club-om@yandex.ru
            </Email>
          </li>
          <li>
            <Vkontakte
              href="https://vk.com/yoga.altufyevo"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              Вконтакте
            </Vkontakte>
          </li>
          <li>
            <Telegram
              href="https://t.me/yogaclub_om_moscow"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              Telegram
            </Telegram>
          </li>
          <li>
            <Max
              href="https://max.ru/join/u0lFRVYRJRZX7_m9l0Ip8BQlMGoGrYIgogtqW04cawU"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              Max
            </Max>
          </li>
          <li>
            <File
              href="/docs/public-offer-agreement__yoga-club-om.pdf"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              Договор оферты
            </File>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
