'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { AuthError } from 'next-auth'


import { signIn } from '@/auth'
import api from '@/lib/api'
import { minutes } from '@/lib/placeholder.lessons'
import { LessonSchema } from '@/lib/zod'


export type State = {
  errors?: {
    title?: string[];
    weekday?: string[];
    start?: string[];
    finish?: string[];
    master?: string[];
    level?: string[];
    notes?: string[];
  };
  message?: string | null;
}
 
export async function createLesson(prevState: State, formData: FormData) {
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
  redirect('/schedule/edit')
}
export async function updateLesson(formData: FormData) {
  const { id, weekday, title, start, finish, master, level, notes } = LessonSchema.parse({
    id: formData.get('id'),
    title: formData.get('title'),
    weekday: formData.get('weekday'),
    start: minutes(formData.get('start') as string),
    finish: minutes(formData.get('finish') as string),
    master: formData.get('master'),
    level: formData.get('level'),
    notes: formData.get('notes'),
  })

  await api.lessons.update({ id, weekday, title, start, finish, master, level, notes })

  revalidatePath('/schedule/edit')
  redirect('/schedule/edit')
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
