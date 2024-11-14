import { Suspense } from 'react'

import { Container } from '@/components/Container'
import { Title } from '@/components/Title'
import { Unlimited } from '@/components/Unlimited'
interface Props {
  searchParams: any
}

const HomePage: React.FC<Props> = async props => {
  const searchParams = await props.searchParams;
  console.log(111, searchParams)
  return (
    <Container>
      <div className="mx-4 [&>section]:py-4">
        <section>
          <strong>Наш клуб</strong> - это сообщество увлеченных людей,
        целью которых является саморазвитие и помощь в этом другим людям.
        С 2014 года улучшаем жизнь Практикой!
        </section>
        <section>
          <Title size="lg" className="text-brand">Выбери свою практику</Title>
        Можно выбрать практику в удобное для Вас время, различного уровня сложности
        и созвучную Вашим внутренним устремлениям.
        Занятия проводят опытные и сертифицированные инструкторы, с которыми можно
        заниматься - <strong>индивидуально</strong> или <strong>в группе</strong>.
        </section>
        <section><strong>ЙОГА:</strong>
          <div className="item">Классическая Хатха йога</div>
          <div className="item">Аштанга йога</div>
          <div className="item">Кундалини йога</div>
          <div className="item">Мягкие практики <strong>для беременных</strong></div>
        </section>
        <section>
          <strong>СПЕЦИАЛЬНЫЕ НАПРАВЛЕНИЯ:</strong>
          <div className="item">Практика &quot;Здоровая спина&quot;</div>
          <div className="item">Общая физическая подготовка</div>
        </section>
        <section>
          <strong>ЕДИНОБОРСТВА (ДЛЯ ДЕТЕЙ ОТ 5 ДО 14 ЛЕТ)</strong>
          <div className="item">Джит Кун-до - стиль, основанный Брюсом Ли</div>
        </section>
        <section>
          <Title size="lg" className="text-brand">Акция: 2 занятия по цене 1!</Title>
          <Unlimited />
        </section>
      </div>
    </Container>
  )
}

export default HomePage
