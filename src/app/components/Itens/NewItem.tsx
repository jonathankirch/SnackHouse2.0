"use client"

import { useCartItens } from "@/app/context/CartItens";
import { NewItemProps } from "@/app/types";

import Image from "next/image";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function NewItem({ nome, valor, descricao, img }: NewItemProps) {
  const { addItem, cartItens } = useCartItens();

  const formatarValor = (lang: string, currency: string, balance: number) =>
    Intl.NumberFormat(lang, {
      style: "currency",
      maximumFractionDigits: 2,
      currency,
    }).format(balance);

  const handleAddItem = () => {
    const newItem = {
      nome,
      valor,
      descricao,
      quantidade:  1
    };
    notify()
    addItem(newItem);
  };

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
        <h2 className="text-xl font-bold uppercase mb-3">{nome}</h2>
        <p className="uppercase text-sm text-neutral-600">{descricao}</p>
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-2">
          <h3 className="text-center font-bold">
            {formatarValor("pt-BR", "BRL", valor)}
          </h3>
          <button className="ml-auto" onClick={handleAddItem}>
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
}
