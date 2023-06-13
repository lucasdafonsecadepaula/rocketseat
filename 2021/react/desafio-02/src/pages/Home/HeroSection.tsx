import HeroImg from '@/assets/imgs/Hero.png'
import { BackgroundHeroSection } from '@/components/BackgroundHeroSection'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export const HeroSection = () => (
  <section className="max-w-[1440px] py-8 px-40 flex items-center justify-between w-full flex-1 relative z-10">
    <div className="w-full relative z-10">
      <h1 className="text-base-title font-baloo2 text-title-xl">
        Encontre o café perfeito para qualquer hora do dia
      </h1>
      <p className="mt-4 text-base-subtitle text-l">
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </p>

      <div className="mt-[66px] grid grid-cols-2 gap-4 relative z-10">
        <span className="flex items-center gap-3 text-base-text text-m">
          <span className="bg-yellow-dark rounded-full p-2">
            <ShoppingCart weight="fill" color="white" />
          </span>
          Compra simples e segura
        </span>
        <span className="flex items-center gap-3 text-base-text text-m">
          <span className="bg-base-text rounded-full p-2">
            <Package weight="fill" color="white" />
          </span>
          Embalagem mantém o café intacto
        </span>
        <span className="flex items-center gap-3 text-base-text text-m">
          <span className="bg-yellow rounded-full p-2">
            <Timer weight="fill" color="white" />
          </span>
          Entrega rápida e rastreada
        </span>
        <span className="flex items-center gap-3 text-base-text text-m">
          <span className="bg-purple rounded-full p-2">
            <Coffee weight="fill" color="white" />
          </span>
          O café chega fresquinho até você
        </span>
      </div>
    </div>
    <div className="w-10/12 flex items-center justify-end">
      <img
        src={HeroImg}
        alt="Copo de café"
        className="z-10 relative w-[476px] h-[360px]"
      />
    </div>
    <span className="absolute left-1/2 -translate-x-1/2 overflow-hidden z-1">
      <BackgroundHeroSection />
    </span>
  </section>
)
