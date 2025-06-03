// import { isValidPhoneNumber } from 'react-phone-number-input'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { z } from 'zod'
 
export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export const LessonSchema = z.object({
  id: z.string(),
  title: z.string({ invalid_type_error: 'Please type a title.' }),
  weekday: z.coerce.number().int().min(0).max(6),
  start: z.coerce.number().int().min(0, { message: 'Невалидное время' }).max(1439, { message: 'Невалидное время' }),
  finish: z.coerce.number().int().min(0).max(1439),
  master: z.string().min(2, { message: 'Имя должно содержать больше двух символов' }),
  level: z.string(),
  notes: z.string(),
})

export const UnlimitedSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Имя должно содержать больше двух символов' }),
  phone: z
    .string()
    .refine(value => {
      try {
        const phoneNumber = parsePhoneNumberFromString(value)
        return !!phoneNumber?.isValid()
      } catch {
        return false
      }
    }, { 
      message: 'Невалидный номер', 
    }),
})
