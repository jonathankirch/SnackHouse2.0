import { ReactNode } from 'react'

export interface NewItemProps {
  nome: string,
  valor: number,
  descricao: string,
  img: string,
  quantidade: number
}

export interface CartItensProps {
  nome: string;
  valor: number;
  descricao: string;
  quantidade: number;
}

export interface CartContextType {
  cartItens: CartItensProps[];
  addItem: (item: CartItensProps) => void;
  increaseItemQuantity: (itemName: string) => void;
  decreaseItemQuantity: (itemName: string) => void;
  updateItemQuantity: (itemName: string, quantity: number) => void;
}

export interface ProviderProps {
  children: ReactNode;
}
