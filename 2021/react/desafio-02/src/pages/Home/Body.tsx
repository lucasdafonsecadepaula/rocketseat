import { CardFull } from '@/components/CardFull'
import { coffeeList } from '@/mock/coffeList'

export const Body = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="max-w-[1440px] w-full py-8 px-40">
        <h2 className="text-base-subtitle text-title-l font-baloo2">
          Nossos cafés
        </h2>
      </div>

      <ul className="flex items-center justify-center gap-8 flex-wrap pb-40 max-w-[1440px] w-full py-8 px-40">
        {coffeeList.map((coffee) => (
          <li key={coffee.title}>
            <CardFull {...coffee} />
          </li>
        ))}
      </ul>
    </main>
  )
}
