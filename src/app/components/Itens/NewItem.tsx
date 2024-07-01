'use client'

import { useCartItens } from '@/app/context/CartItens'
import { NewItemProps } from '@/app/types'

import Image from 'next/image'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { IoCartOutline } from 'react-icons/io5'

export default function NewItem({ nome, valor, descricao, img }: NewItemProps) {
  const { addItem } = useCartItens()

  const formatarValor = (lang: string, currency: string, balance: number) =>
    Intl.NumberFormat(lang, {
      style: 'currency',
      maximumFractionDigits: 2,
      currency,
    }).format(balance)

  const handleAddItem = () => {
    const newItem = {
      nome,
      valor,
      descricao,
      quantidade: 1,
    }
    notify()
    addItem(newItem)
  }

  const notify = () => toast.success(`${nome} adicionado ao carrinho`)

  return (
    <>
      <div>
        <Image
          src={img}
          className="object-cover w-full h-full rounded-s-md shadow-md group-hover:shadow-xl"
          width={500}
          height={500}
          alt={nome}
        />
      </div>
      <div className="p-5 col-span-2 relative">
        <h2 className="md:text-xl font-bold uppercase mb-3">{nome}</h2>
        <p className="uppercase text-xs text-neutral-600 line-clamp-3">{descricao}</p>
        <div className="absolute bottom-0 left-0 w-full flex pb-3">
          <h3 className="font-bold md:text-xl ml-5">
            {formatarValor('pt-BR', 'BRL', valor)}
          </h3>
          <button
            className="absolute end-5 border border-black rounded text-sm px-1 bottom-2 flex shadow hover:scale-105 transition active:bg-neutral-300 active:border-2"
            onClick={handleAddItem}>
            <IoCartOutline size={30} />
            <p className='my-auto font-bold ml-2'>
              Add
            </p>
          </button>
        </div>
      </div>
    </>
  )
}
