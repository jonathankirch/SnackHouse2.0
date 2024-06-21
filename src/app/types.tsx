import { ReactNode } from 'react'

export interface CartItensProps {
  nome: string,
  valor: number,
  descricao: string,
}

export interface NewItemProps {
  nome: string,
  valor: number,
  descricao: string
}

export interface ProviderProps {
  children: ReactNode
}

export interface CartContextType {
  cartItens: CartItensProps[];
  addItem: (item: CartItensProps) => void;
}