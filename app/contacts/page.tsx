import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { Email } from '@/components/icons/Email'
import { File } from '@/components/icons/File'
import { Location } from '@/components/icons/Location'
import { Max } from '@/components/icons/Max'
import { Phone } from '@/components/icons/Phone'
import { Telegram } from '@/components/icons/Telegram'
import { Vkontakte } from '@/components/icons/Vkontakte'
import { Whatsapp } from '@/components/icons/Whatsapp'
import { Map } from '@/components/Map'


export const metadata: Metadata = {
  title: 'Контакты | Yoga Club OM',
  description: 'Как добраться до нашей його-студии',
}

const ContactsPage = () => {
  return (
    <Container className="py-8 px-5">
      <div className="md:flex bg-white rounded shadow-light overflow-hidden mb-16">
        <ul className="md:shrink-0 md:h-full md:w-2/5 p-2">
          <li>
            <Location
              href="https://yandex.ru/maps/-/CCQlqKsMhD"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              м. Бибирево ул. Плещеева, д. 12А, 3 этаж
            </Location>
          </li>
          <li>
            <Phone
              href="tel:+79168765413"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              +7 (916) 876-54-13
            </Phone>
            <Whatsapp
              href="https://wa.me/79168765413"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            />
            <Telegram
              href="tg://resolve?domain=yoga_club_om"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            />
            <Max
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
              href="https://max.ru/u/f9LHodD0cOJIJb2VGTT9LM_5SlF3ZhgXEpzGCfqHQp6kw5aFMbFUtBMS4CU"
            />
          </li>
          <li>
            <Phone
              href="tel:+79295659511"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              +7 (929) 565-95-11
            </Phone>
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
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
              href="https://max.ru/join/u0lFRVYRJRZX7_m9l0Ip8BQlMGoGrYIgogtqW04cawU"
            >
              Max
            </Max>
          </li>
          <li>
            <File
              href="/docs/public-offer-agreement__yoga-club-om.pdf"
              className="[&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
            >
              Скачать договор оферты
            </File>
          </li>
        </ul>
        <div className="w-full h-[350px] bg-[url('/images/map.jpg')] bg-no-repeat bg-center bg-cover">
          <Map
            width="100%"
            height="350px"
            defaultState={{ center: [55.885832, 37.610907], zoom: 15 }}
            placemark={[55.885832, 37.610907]}
          />
        </div>
      </div>
    </Container>
  )
}

export default ContactsPage
