import { CartContext } from '@/contexts/CartContext'
import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Coffee } from '../../models/Coffee'
import { IconButton } from '../Buttons/Icon'
import { InputNumber } from '../InputNumber'

export function CardFull(coffee: Coffee) {
  const { addCoffeeInCart, removeCoffeeInCart, getAmount } =
    useContext(CartContext)

  return (
    <div className="flex flex-col justify-center items-center bg-base-card w-[256px] rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px]">
      {/* Não foi possivel retirar o fundo da image, por isso eu não adicionei a margin top negativa :/ */}
      <img
        src={coffee.imgSrc}
        alt={coffee.title}
        className="h-[120px] w-[120px] object-contain bg-transparent mix-blend-multiply mt-2"
      />
      <div className="flex items-center gap-1 mt-3">
        {coffee.tags.map((tag) => (
          <span
            key={tag}
            className="bg-yellow-light text-yellow-dark rounded-[100px] py-1 px-2 leading-normal text-tag"
          >
            {tag.toLocaleUpperCase()}
          </span>
        ))}
      </div>
      <div className="text-title-s  text-base-subtitle font-[700] font-baloo2 mt-4">
        {coffee.title}
      </div>
      <p className="text-center text-s text-base-label px-2 mt-2">
        {coffee.description}
      </p>
      <div className="flex items-center gap-2 mt-7 mb-5">
        <p className="flex-none text-base-text text-s mr-3">
          {`R$ `}
          <span className="font-baloo2 text-title-m">
            {coffee.price.toFixed(2).replace('.', ',')}
          </span>
        </p>
        <InputNumber
          value={getAmount(coffee.id)}
          onIncrement={() => addCoffeeInCart(coffee.id)}
          onDecrement={() => removeCoffeeInCart(coffee.id)}
        />
        <IconButton
          icon={
            <ShoppingCart weight="fill" size={22} className="text-base-card" />
          }
        />
      </div>
    </div>
  )
}
