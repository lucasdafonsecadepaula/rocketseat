import { CartButton } from '@/components/Buttons/Cart'
import { Logo } from '@/components/Logo'
import { CartContext } from '@/contexts/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const Topbar = () => {
  const { amount } = useContext(CartContext)
  const navigate = useNavigate()

  console.log('amount', amount)

  return (
    <nav className="max-w-[1440px] w-full py-8 px-40 flex items-center justify-between fixed z-20 bg-white">
      <Logo />
      <div className="flex items-center justify-center gap-3">
        <button>Porto Alegre, RS</button>
        <CartButton
          amountItems={amount}
          onClick={() => navigate('/carrinho')}
        />
      </div>
    </nav>
  )
}
