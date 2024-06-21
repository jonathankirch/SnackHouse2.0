"use client"
import { useCartItens } from '@/app/context/CartItens'

import { IoCloseSharp } from 'react-icons/io5'

import { useModalCart } from '@/app/context/ModalCartContext'

export default function Cart() {
  const { cartItens, increaseItemQuantity, decreaseItemQuantity } = useCartItens()
  const { isOpen, closeModal } = useModalCart()

  const formatarValor = (lang: string, currency: string, balance: number) =>
    Intl.NumberFormat(lang, {
      style: 'currency',
      maximumFractionDigits: 2,
      currency,
    }).format(balance)

  const valorTotal = cartItens.reduce((acc, item) => acc + (item.valor * item.quantidade), 0)

  return (
    <div className={`h-screen w-screen fixed border z-20 blur-none ${!isOpen ? 'hidden' : ''}`}>
      <div className="w-1/3 h-4/5 border border-black bg-white mx-auto my-auto mt-24 rounded-xl relative">
        <button className='absolute end-0 m-4' onClick={closeModal}>
          <IoCloseSharp size={40} />
        </button>
        <div className="mt-20 h-1/2 overflow-y-auto">
          {cartItens &&
            cartItens.map((item, index) => (
              <>
                <div key={index} className="flex mx-10">
                  <p className='uppercase'><strong className='lowercase'>{item.quantidade}x -</strong> {item.nome}</p>
                  <p className="ml-auto mr-2 my-auto font-bold">
                    -{formatarValor('pt-BR', 'BRL', item.valor * item.quantidade)}
                  </p>
                  <div className='flex my-auto'>
                    <button className='w-5 h-5 bg-red-300 rounded text-center' onClick={() => decreaseItemQuantity(item.nome)}>-</button>
                      <p className='mx-2'>{item.quantidade}</p>
                    <button className='w-5 h-5 bg-green-300 rounded text-center' onClick={() => increaseItemQuantity(item.nome)}>+</button>
                  </div>
                  </div>
                <hr className="mx-10 my-3" />
              </>
            ))}
        </div>
        <h2 className="text-xl text-end mt-5 mr-10 font-bold">
          Total: {formatarValor('pt-BR', 'BRL', valorTotal)}
        </h2>
        <div className="mx-10">
          <h2 className="font-bold">Observações:</h2>
          <textarea
            className="border-2 rounded-md w-full h-32 border-black p-2"
            placeholder="Ex: Xis sem maionese, Cachorro quente sem ervilha, etc."></textarea>
        </div>
        <button className="bg-red-400 text-white rounded border shadow border p-2 mt-3 ml-10" onClick={closeModal}>
          Cancelar
        </button>
        <button className="bg-green-500 rounded border border-white shadow p-2 float-end mt-3 mr-10 text-white">
          Finalizar Pedido
        </button>
      </div>
    </div>
  )
}
