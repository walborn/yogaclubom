'use client'

import React from 'react'
import toast from 'react-hot-toast'

import { List } from '@/components/List'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Phone } from '@/components/icons/Phone'

export const Unlimited: React.FC = () => {

  const [ name, setName ] = React.useState('')
  const [ phone, setPhone ] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const toastId = toast.loading('Загрузка...',
      { position: 'bottom-right', style: { minWidth: '300px' }})

    const data = await fetch('/api/sendgrid', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, subject: 'Unlimited Week' }),
    })

    if (data.status !== 200) toast.error(
      <div>
        <strong>Что-то пошло не так</strong><br />
        Повторите попытку позже или позвоните по телефону 
        <Phone
          href="tel:+79168765413"
          className="whitespace-nowrap [&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 [&>svg]:fill-brand-400"
        >
          +7 (916) 876-54-13
        </Phone>
      </div>,
      {
        id: toastId,
      },
    )
    else toast.success(
      <div className="text-center">
        <strong className="whitespace-nowrap">Вы успешно записались на акцию</strong><br />
        <b className="text-2xl">&quot;2 занятия по цене 1&quot;</b><br />
        В скором времени мы с Вами свяжемся для подтверждения участия!
      </div>,
      {
        id: toastId,
        icon: '🎉',
      },
    )
  }

  // const validate = () => {
  //   if (!name) errors.name = 'Обязательное поле'
  //   if (phone && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s0-9]*$/.test(phone)) errors.phone = 'Номер должен начинаться с +7, 8 и иметь 11 цифр'

  //   return errors
  // }

  return (
    <section className="md:flex md:gap-2">
      <List className="flex-1 max-md:mb-5 flex flex-col gap-2">
        <li>Стоимость ₽ <strong>1000</strong></li>
        <li>Акция актуальна, если вы у нас впервые</li>
        <li>2 занятия в течение 7 дней. Нельзя переносить, замораживать и продлевать</li>
        <li>Мы будем благодарны за любой честный отзыв в удобном для вас сервисе (2ГИС, яндекс карты)</li>
      </List>

      <div className="flex-1">
        <form className="flex flex-col gap-3 mb-5" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Телефон"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            type="submit"
            className="mt-2 bg-brand-400 hover:bg-brand-400/90"
            disabled={!name || !phone}
          >
            Участвовать
          </Button>
        </form>
      </div>
    </section>
  )
}
