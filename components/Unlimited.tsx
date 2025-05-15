'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { List } from '@/components/List'
import { Button } from '@/components/ui/button'
import { Phone } from '@/components/icons/Phone'
import { LoaderCircle } from 'lucide-react'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { PhoneInput } from '@/components/ui/phone-input'
import { useToast, ToasterToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Имя должно содержать больше двух символов',
    }),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Невалидный номер' }),
})

interface Props {
  className?: string
}

export const Unlimited: React.FC<Props> = ({ className }) => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  })

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    const { id, update } = toast({
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <LoaderCircle className="animate-spin opacity-20" />
        </pre>
      ),
    })

    const { status } = await fetch('/api/sendgrid', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, subject: 'Unlimited Week' }),
    })

    const failure: ToasterToast = {
      id,
      variant: 'destructive',
      title: 'Что-то пошло не так',
      description: (
        <div>
          Повторите попытку позже или позвоните по телефону
          <Phone
            href="tel:+79168765413"
            className="whitespace-nowrap [&>svg]:mr-1 [&>svg]:hover:fill-telegram [&>svg]:inline [&>svg]:h-4 fill-brand-400"
          >
            +7 (916) 876-54-13
          </Phone>
        </div>
      ),
    }

    const success: ToasterToast = {
      id,
      description: (
        <div className="text-center">
          <strong className="whitespace-nowrap">🎉 Вы успешно записались на акцию</strong><br />
          <b className="text-2xl">&quot;2 занятия по цене 1&quot;</b><br />
          В скором времени мы с Вами свяжемся для подтверждения участия!
        </div>
      ),
    }

    if (status === 200) {
      update(success)
      form.reset()
    } else {
      update(failure)
    }
  }

  return (
    <section className={cn('md:flex md:gap-2', className)}>
      <List className="flex-1 max-md:mb-5 flex flex-col gap-2">
        <li>Стоимость ₽ <strong>1000</strong></li>
        <li>Акция актуальна, если вы у нас впервые</li>
        <li>2 занятия в течение 7 дней. Нельзя переносить, замораживать и продлевать</li>
        <li>Мы будем благодарны за любой честный отзыв в удобном для вас сервисе (2ГИС, яндекс карты)</li>
      </List>

      <div className="flex-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex gap-4 flex-col items-start w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start w-full">
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      placeholder="Ваше имя"
                      autoComplete="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start w-full">
                  <FormControl className="w-full">
                    <PhoneInput
                      {...field}
                      placeholder="Номер телефона"
                      autoComplete="phone"
                      defaultCountry="RU"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="mt-2 bg-brand-400-hovered w-full cursor-pointer"
              type="submit"
              disabled={!form.getFieldState('phone').isDirty}
            >
              Участвовать
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
