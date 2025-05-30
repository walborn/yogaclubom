import Link from 'next/link'

import { Title } from '@/components/Title'
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <div className="text-9xl">😮</div>
      <Title size="2xl">404</Title>
      <p>Такой страницы не существует</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-amber-500 px-4 py-2 text-sm text-white transition-colors hover:bg-amber-600 cursor-pointer"
      >
        На главную страницу
      </Link>
    </main>
  )
}
