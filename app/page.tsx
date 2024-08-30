import { Suspense } from 'react'

import { Container } from '@/components/Container'
import { Title } from '@/components/Title'

interface Props {
  searchParams: any
}

const HomePage: React.FC<Props> = async ({ searchParams }) => {
  console.log(111, searchParams)
  return (
    <>
      <Container className="mt-10">
        <Title size="lg" className="font-extrabold text-tahiti">
          Главная
        </Title>
      </Container>
      {/* <TopBar
        categories={categories.filter(({ products }) => products.length)}
      /> */}

      {/* <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container> */}
    </>
  )
}

export default HomePage
