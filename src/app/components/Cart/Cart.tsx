'use client'
import { useCartItens } from '@/app/context/CartItens'

import { IoCloseSharp } from 'react-icons/io5'

import { useModalCart } from '@/app/context/ModalCartContext'

export default function Cart() {
  const { cartItens, increaseItemQuantity, decreaseItemQuantity } =
    useCartItens()
  const { isOpen, closeModal } = useModalCart()

  const formatarValor = (lang: string, currency: string, balance: number) =>
    Intl.NumberFormat(lang, {
      style: 'currency',
      maximumFractionDigits: 2,
      currency,
    }).format(balance)

  const valorTotal = cartItens.reduce(
    (acc, item) => acc + item.valor * item.quantidade,
    0
  )

  return (
    <div
      className={`h-screen w-screen fixed border z-20 blur-none ${
        !isOpen ? 'hidden' : ''
      }`}>
      <div className="md:w-1/3 md:h-4/5 h-screen border border-black bg-white mx-auto my-auto md:mt-24 md:rounded-xl relative">
        <h1 className="text-2xl m-4 absolute underline">Carrinho:</h1>
        <button
          className="absolute end-0 md:m-4 mt-3 mr-4"
          onClick={closeModal}>
          <IoCloseSharp size={40} />
        </button>
        <div className="mt-20 md:h-1/2 h-1/3 overflow-y-auto">
          {cartItens &&
            cartItens.map((item, index) => (
              <>
                <div key={index} className="flex md:mx-10 mx-3">
                  <p className="uppercase">
                    <strong className="lowercase">{item.quantidade}x -</strong>{' '}
                    {item.nome}
                  </p>
                  <p className="ml-auto mr-2 my-auto font-bold">
                    -
                    {formatarValor(
                      'pt-BR',
                      'BRL',
                      item.valor * item.quantidade
                    )}
                  </p>
                  <div className="flex items-center my-auto">
                    <button
                      className="w-6 h-6 bg-red-300 rounded font-bold text-center flex items-center justify-center"
                      onClick={() => decreaseItemQuantity(item.nome)}>
                      -
                    </button>
                    <p className="mx-2">{item.quantidade}</p>
                    <button
                      className="w-6 h-6 bg-green-300 rounded font-bold text-center flex items-center justify-center"
                      onClick={() => increaseItemQuantity(item.nome)}>
                      +
                    </button>
                  </div>
                </div>
                <hr className="mx-10 my-3" />
              </>
            ))}
        </div>
        <h2 className="text-xl text-end mt-5 mr-10 font-bold">
          Total: {formatarValor('pt-BR', 'BRL', valorTotal)}
        </h2>
        <div className="">
          <div className="mx-10">
            <h2 className="font-bold">Observações:</h2>
            <textarea
              className="border-2 rounded-md w-full h-32 border-black p-2"
              placeholder="Ex: Xis sem maionese, Cachorro quente sem ervilha, etc."></textarea>
          </div>
          <button
            className="bg-red-400 text-white rounded border shadow p-2 mt-3 ml-10"
            onClick={closeModal}>
            Cancelar
          </button>
          <button className="bg-green-500 rounded border border-white shadow p-2 float-end mt-3 mr-10 text-white">
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  )
}
