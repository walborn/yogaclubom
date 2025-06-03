'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { AuthError } from 'next-auth'


import { signIn } from '@/auth'
import api from '@/lib/api'
import { WeekDay } from '@/lib/definitions'
import { minutes, weekdayByName } from '@/lib/placeholder.lessons'
import { LessonSchema } from '@/lib/zod'

export type CreateState = {
  errors?: {
    id?: string[]
    title?: string[]
    weekday?: string[]
    start?: string[]
    finish?: string[]
    master?: string[]
    level?: string[]
    notes?: string[]
  }
  message?: string
  status: 'fulfilled' | 'rejected' | 'pending'
  data?: FormData
}
 
export async function createLesson(prevState: CreateState, formData: FormData): Promise<CreateState> {
  try {
    const validatedFields = LessonSchema.omit({ id: true }).safeParse({
      title: formData.get('title'),
      weekday: formData.get('weekday'),
      start: minutes(formData.get('start') as string),
      finish: minutes(formData.get('finish') as string),
      master: formData.get('master'),
      level: formData.get('level'),
      notes: formData.get('notes'),
    })

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        status: 'rejected',
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Lesson.',
      }
    }
  
    // Prepare data for insertion into the database
    const { weekday, title, start, finish, master, level, notes } = validatedFields.data

    // Insert data into the database
    await api.lessons.create({ weekday, title, start, finish, master, level, notes })

    // Revalidate the cache for the lessons page
    revalidatePath('/schedule/edit')
    return { status: 'fulfilled', data: formData }
  } catch (error) {
    return { 
      status: 'rejected',
      message: `Database Error: Failed to Create Lesson. ${error}`,
    }
  }
}

export type UpdateState = {
  errors?: {
    id?: string[]
    title?: string[]
    weekday?: string[]
    start?: string[]
    finish?: string[]
    master?: string[]
    level?: string[]
    notes?: string[]
  }
  message?: string
  status: 'fulfilled' | 'rejected' | 'pending'
  data?: FormData
}

export async function updateLesson(prevState: UpdateState, formData: FormData): Promise<UpdateState> {
  try {  
    const validatedFields = LessonSchema.safeParse({
      id: formData.get('id'),
      title: formData.get('title'),
      weekday: weekdayByName[formData.get('weekday') as WeekDay],
      start: minutes(formData.get('start') as string),
      finish: minutes(formData.get('finish') as string),
      master: formData.get('master'),
      level: formData.get('level'),
      notes: formData.get('notes'),
    })

    if (!validatedFields.success) {
      return {
        status: 'rejected',
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Lesson.',
      }
    }

    // Prepare data for insertion into the database
    const { id, weekday, title, start, finish, master, level, notes } = validatedFields.data


    // await new Promise((resolve) => setTimeout(resolve, 3000))
    await api.lessons.update({ id, weekday, title, start, finish, master, level, notes })

    revalidatePath('/schedule/edit')
    return { status: 'fulfilled', data: formData }

  } catch (error) {
    return { 
      status: 'rejected',
      message: `Database Error: Failed to Update Lesson. ${error}`,
    }
  }
}


export async function deleteLesson(id: string) {
  await api.lessons.delete(id)

  revalidatePath('/schedule/edit')
  redirect('/schedule/edit')
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData)
    // await signIn("github", { redirectTo: "/schedule/edit" })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
      case 'CredentialsSignin':
        return 'Invalid credentials.'
      default:
        return 'Something went wrong.'
      }
    }
    throw error
  }
}
