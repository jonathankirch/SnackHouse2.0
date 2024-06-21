"use client"

import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItensProps, CartContextType } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItens, setCartItens] = useState<CartItensProps[]>([]);

  const addItem = (item: CartItensProps) => {
    setCartItens(prevCartItens => [...prevCartItens, item]);
  };

  const contextValue: CartContextType = {
    cartItens,
    addItem,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartItens = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartItens must be used within a CartProvider');
  }
  return context;
};
