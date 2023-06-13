export default function CartPage() {
  return (
    <div className="flex justify-center w-full">
      <div className="pt-[140px] grid grid-cols-5 gap-4 w-full max-w-[1440px] px-40">
        <div className="col-span-3">
          <h5 className="text-title-xs font-baloo2 text-base-subtitle">
            Complete seu pedido
          </h5>
        </div>
        <div className="col-span-2 ">
          <h5 className="text-title-xs font-baloo2 text-base-subtitle">
            Cafés selecionados
          </h5>
        </div>
      </div>
    </div>
  )
}
