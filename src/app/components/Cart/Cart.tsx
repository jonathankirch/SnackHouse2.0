'use client'
import { useCartItens } from '@/app/context/CartItens'
import { IoCloseSharp } from 'react-icons/io5'
import { useModalCart } from '@/app/context/ModalCartContext'
import { useState } from 'react'

export default function Cart() {
  const {
    cartItens,
    increaseItemQuantity,
    decreaseItemQuantity,
    updateItemQuantity,
  } = useCartItens()
  const { isOpen, closeModal } = useModalCart()
  const [observacoes, setObservacoes] = useState('')

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

  const handleQuantityChange = (nome: string, quantidade: number) => {
    updateItemQuantity(nome, quantidade)
  }

  function criarLink() {
    let numeroWhats = '5551995635606'

    const itens = cartItens
      .map(
        (item) =>
          `${item.quantidade}x - ${item.nome} - ${formatarValor(
            'pt-BR',
            'BRL',
            item.valor
          )}`
      )
      .join('\n')

    const texto = encodeURIComponent(`Olá, gostaria de fazer um pedido 😄

--------------------------

${itens}

--------------------------

Valor total: ${formatarValor('pt-BR', 'BRL', valorTotal)}

Observações: 
  -${observacoes ? observacoes : 'Sem observações'}
      `)

    return `https://wa.me/${numeroWhats}?text=${texto}`
  }

  return (
    <div
      className={`h-screen w-screen fixed border z-20 blur-none ${
        !isOpen ? 'hidden' : ''
      }`}>
      <div className="md:w-1/3 md:h-4/5 h-screen border border-black bg-white mx-auto my-auto md:mt-20 md:rounded-xl relative">
        <h4 className="text-2xl m-4 absolute underline font-bold uppercase  ">
          Carrinho:
        </h4>
        <button
          className="absolute end-0 md:m-4 mt-3 mr-4"
          onClick={closeModal}>
          <IoCloseSharp size={40} />
        </button>
        <div className="mt-20 h-1/3 overflow-y-auto">
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
                  <div className="flex items-center my-auto w-min">
                    <button
                      className="w-6 h-6 bg-red-300 rounded font-bold text-center flex items-center justify-center"
                      onClick={() => decreaseItemQuantity(item.nome)}>
                      -
                    </button>
                    <input
                      className="mx-2 border w-10 rounded text-center float-end"
                      type={
                        item.nome.toLowerCase().includes('torta')
                          ? 'number'
                          : 'number'
                      }
                      step={item.nome.toLowerCase().includes('torta') ? 0.5 : 1} // Permite números quebrados só para tortas
                      min={0}
                      value={item.quantidade}
                      onChange={(e) => {
                        const novaQuantidade = parseFloat(e.target.value)
                        // Se o item for torta, aceita número quebrado, senão, arredonda para inteiro
                        handleQuantityChange(
                          item.nome,
                          item.nome.toLowerCase().includes('torta')
                            ? novaQuantidade
                            : Math.floor(novaQuantidade)
                        )
                      }}
                    />

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
        <div className="absolute w-full bottom-10">
          <div className="mx-10">
            <h2 className="font-bold">Observações:</h2>
            <textarea
              className="border-2 rounded-md w-full h-32 border-black p-2"
              placeholder="Ex: Xis sem maionese, Cachorro quente sem ervilha, etc."
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}></textarea>
          </div>
          <button
            className="bg-red-400 text-white rounded border shadow p-2 mt-3 ml-10"
            onClick={closeModal}>
            Cancelar
          </button>
          <a
            href={criarLink()}
            target="_blank"
            className="bg-green-500 rounded border border-white shadow p-2 float-end mt-3 mr-10 text-white">
            Finalizar Pedido
          </a>
        </div>
      </div>
    </div>
  )
}
