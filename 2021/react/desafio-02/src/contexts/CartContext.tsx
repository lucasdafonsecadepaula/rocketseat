import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../models/Coffee'

type CoffeeIdProps = Coffee['id']
type CoffeMapProps = Map<CoffeeIdProps, { amount: number }>

interface CartContextProps {
  items: CoffeMapProps
  amount: number
  addCoffeeInCart: (coffee: CoffeeIdProps) => void
  removeCoffeeInCart: (coffee: CoffeeIdProps) => void
  getAmount: (id: CoffeeIdProps) => number
}

export const CartContext = createContext<CartContextProps>({
  items: new Map(),
  amount: 0,
  addCoffeeInCart: () => ({}),
  removeCoffeeInCart: () => ({}),
  getAmount: () => 0,
})

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CoffeMapProps>(() => {
    const localCartItemsString = localStorage.getItem('cartItems')
    if (localCartItemsString) {
      return new Map(JSON.parse(localCartItemsString))
    }
    return new Map()
  })

  useEffect(() => {
    if (items.size > 0) {
      localStorage.setItem('cartItems', JSON.stringify([...items]))
    }
  }, [items])

  const addCoffeeInCart = (coffeeId: CoffeeIdProps) => {
    if (items.has(coffeeId)) {
      const prevCoffeeValues = items.get(coffeeId)!
      items.set(coffeeId, {
        amount: prevCoffeeValues.amount + 1,
      })
    } else {
      items.set(coffeeId, { amount: 1 })
    }

    setItems(new Map(items))
  }

  const removeCoffeeInCart = (coffeeId: CoffeeIdProps) => {
    if (!items.has(coffeeId)) return

    const prevCoffeeValues = items.get(coffeeId)!
    const newAmount = prevCoffeeValues.amount - 1

    if (newAmount <= 0) {
      items.delete(coffeeId)
    } else {
      items.set(coffeeId, {
        amount: newAmount,
      })
    }

    setItems(new Map(items))
  }

  const getAmount = (coffeeId: CoffeeIdProps) => {
    return items.get(coffeeId)?.amount || 0
  }

  const amount = items.size

  console.log(amount)
  console.log(items)

  return (
    <CartContext.Provider
      value={{ items, amount, addCoffeeInCart, removeCoffeeInCart, getAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}
