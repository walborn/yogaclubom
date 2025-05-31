import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { Title } from '@/components/ui/title'
import { Unlimited } from '@/components/Unlimited'

export const metadata: Metadata = {
  title: 'Цены | Yoga Club OM',
  description: 'Текущее цены на занятия в клубе Yoga Club OM',
}

const PricesPage = () => (
  <Container className="my-8 flex flex-col gap-5">
    <section className="px-5">
      <Title size="lg">Акция: 2 занятия по цене 1!</Title>
      <Unlimited />
    </section>
    <section className="px-5 flex flex-col gap-2">
      <Title size="lg" className="mb-0">Стоимость групповых занятий</Title>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">1000 рублей</span> - разовое занятие.
      </div>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">3200 рублей</span> - абонемент на 4 занятия в течение 1-го месяца
        <div className="text-sm text-[#5d616f]">{3200/4} руб. одно занятие</div>
      </div>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">6000 рублей</span> - абонемент на 8 занятий в течение 1-го месяца
        <div className="text-sm text-[#5d616f]">{6000/8} руб. одно занятие</div>
      </div>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">8400 рублей</span> - абонемент на 12 занятий в течение 2-х месяцев
        <div className="text-sm text-[#5d616f]">{8400/12} руб. одно занятие</div>
      </div>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">15600 рублей</span> - абонемент на 24 занятия в течение 3-х месяцев
        <div className="text-sm text-[#5d616f]">{15600/24} руб. одно занятие</div>
      </div>
    </section>
    <section className="px-5 flex flex-col gap-2">
      <Title size="lg" className="mb-0">Стоимость индивидуальных занятий</Title>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">3500 рублей</span> - разовое занятие (<b>1</b> час).
      </div>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">4300 рублей</span> - разовое занятие (<b>1.5</b> часа).
      </div>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">13000 рублей</span> - абонемент на <b>4</b> занятия (по <b>1</b> часу) в течение 1-го месяца.
      </div>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">
        16000 рублей
        </span> - абонемент на <b>4</b> занятия (по <b>1.5</b> часа) в течение 1-го месяца.
      </div>
    </section>
    <section className="px-5 flex flex-col gap-2">
      <Title size="lg" className="mb-0">Способы оплаты</Title>
      <div className="shadow-lightest hover:shadow-light p-5 rounded">
        <span className="text-lg font-semibold">Наличный расчёт</span> - &nbsp;у&nbsp;администратора на стойке регистрации
      </div>
      <div className="shadow-light text-[17px] p-5 rounded-md bg-[#e7eaf3]">
        Оплачивая занятие, абонемент или услугу, клиент присоединяется к настоящему <a className="no-underline text-[#ffa727] opacity-80 hover:opacity-100 visited:text-[#9b6b6b] whitespace-nowrap" href="/docs/public-offer-agreement__yoga-club-om.pdf">договору-оферте</a>
      </div>
    </section>
  </Container>
)

export default PricesPage
