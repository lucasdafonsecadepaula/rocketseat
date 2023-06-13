import { CreditCard, ShoppingCart, Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import imgSrc from './assets/imgs/Americano.jpg'
import { CartButton } from './components/Buttons/Cart'
import { IconButton } from './components/Buttons/Icon'
import { PrimaryButton } from './components/Buttons/Primary'
import { SecondaryButton } from './components/Buttons/Secondary'
import { CardFull } from './components/CardFull'
import { CardShort } from './components/CardShort'
import { Input } from './components/Input'
import { InputNumber } from './components/InputNumber'
import { Select } from './components/Select'

function App() {
  const [text, setText] = useState('')
  return (
    <>
      <div className="m-40 font-roboto">
        <PrimaryButton>LABEL</PrimaryButton>
      </div>

      <div className="m-40 font-roboto">
        <SecondaryButton leftIcon={<Trash size={16} className="text-purple" />}>
          REMOVER
        </SecondaryButton>
      </div>

      <div className="m-40 font-roboto">
        <IconButton
          icon={
            <ShoppingCart weight="fill" size={22} className="text-base-card" />
          }
        />
      </div>

      <div className="m-40 font-roboto">
        <CartButton amountItems={1} />
      </div>
      <div className="m-40 font-roboto">
        <CartButton amountItems={11} />
      </div>
      <div className="m-40 font-roboto">
        <CartButton amountItems={111} />
      </div>
      <div className="m-40 font-roboto">
        <CartButton amountItems={1111} />
      </div>
      <div className="m-40 font-roboto">
        <Select
          isActive={false}
          leftIcon={<CreditCard size={16} className="text-purple" />}
        >
          CARTÃO DE CRÉDITO
        </Select>
      </div>
      <div className="m-40 font-roboto">
        <Select
          isActive
          leftIcon={<CreditCard size={16} className="text-purple" />}
        >
          CARTÃO DE CRÉDITO
        </Select>
      </div>
      <div className="m-40 font-roboto">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Label"
          isOptional
        />
      </div>
      <div className="m-40 font-roboto">
        <InputNumber value={1} />
      </div>
      <div className="m-40 font-roboto">
        <CardFull
          id="test"
          imgSrc={imgSrc}
          tags={['tradicional']}
          title={'Expresso Tradicional'}
          description={
            'O tradicional café feito com água quente e grãos moídos'
          }
          price={9.9}
          amount={1}
        />
      </div>

      <div className="m-40 font-roboto">
        <CardShort
          imgSrc={imgSrc}
          title={'Expresso Tradicional'}
          price={9.9}
          amount={1}
        />
      </div>
    </>
  )
}

export default App
