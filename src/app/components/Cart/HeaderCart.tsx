import { CiShoppingCart } from 'react-icons/ci'
import { useCartItens } from '@/app/context/CartItens'

import { useModalCart } from '@/app/context/ModalCartContext'

export default function HeaderCart() {
  const { cartItens } = useCartItens()
  const { openModal } = useModalCart()

  const totalItens = cartItens.length 

  const valorTotal = cartItens.reduce(
    (acc, item) => acc + item.valor * item.quantidade,
    0
  )

  const formatarValor = (lang: string, currency: string, balance: number) =>
    Intl.NumberFormat(lang, {
      style: 'currency',
      maximumFractionDigits: 2,
      currency,
    }).format(balance)

  return (
    <>
      {totalItens > 0 ? (
        <button className="flex relative items-center ml-10 pr-5 py-4 border border-neutral-800 rounded-xl bg-neutral-300 transition cursor-pointer hover:scale-105 hover:shadow-xl" onClick={openModal}>
          <div className="absolute bg-neutral-400b w-5 h-5 rounded-full text-center end-1 top-1 text-sm font-bold">
            {totalItens}
          </div>
          <CiShoppingCart size={30} className="my-auto" />
          <strong className="my-auto ml-2">
            {formatarValor('pt-BR', 'BRL', valorTotal)}
          </strong>
        </button>
      ) : (
        <button className="flex relative items-center ml-10 p-4" onClick={openModal}>
          <CiShoppingCart size={30} className="my-auto" />
          <strong className="my-auto ml-2">
            {formatarValor('pt-BR', 'BRL', valorTotal)}
          </strong>
        </button>
      )}
    </>
  )
}
