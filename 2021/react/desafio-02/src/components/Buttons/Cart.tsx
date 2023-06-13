import { ShoppingCart } from '@phosphor-icons/react'
import { ButtonHTMLAttributes } from 'react'

interface CartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  amountItems: number
}

export function CartButton({ amountItems, ...props }: CartProps) {
  return (
    <button
      {...props}
      className="relative bg-yellow-light hover:bg-yellow/30 rounded-md p-2 transition-[background] duration-200"
    >
      {amountItems > 0 ? (
        <span className="h-5 flex items-center justify-center px-1 min-w-[20px] absolute -top-[10px] -right-[10px] text-white bg-yellow-dark rounded-full text-xs">
          {amountItems}
        </span>
      ) : null}
      <ShoppingCart weight="fill" size={22} className="text-yellow-dark" />
    </button>
  )
}
