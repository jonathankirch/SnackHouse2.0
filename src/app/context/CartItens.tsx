// CartProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { CartItensProps, CartContextType } from '../types'

const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItens, setCartItens] = useState<CartItensProps[]>([])

  const addItem = (item: CartItensProps) => {
    setCartItens((prevCartItens) => {
      const itemIndex = prevCartItens.findIndex(
        (cartItem) => cartItem.nome === item.nome
      )

      if (itemIndex !== -1) {
        const updatedCartItems = [...prevCartItens]
        updatedCartItems[itemIndex].quantidade += 1
        return updatedCartItems
      } else {
        return [...prevCartItens, { ...item, quantidade: 1 }]
      }
    })
  }

  const increaseItemQuantity = (itemName: string) => {
    const updatedCartItems = cartItens.map((item) => {
      if (item.nome === itemName) {
        return {
          ...item,
          quantidade: item.quantidade + 1,
        }
      }
      return item
    })
    setCartItens(updatedCartItems)
  }

  const decreaseItemQuantity = (itemName: string) => {
    const updatedCartItems = cartItens
      .map((item) => {
        if (item.nome === itemName) {
          const newQuantity = item.quantidade - 1
          if (newQuantity <= 0) {
            return null
          } else {
            return {
              ...item,
              quantidade: newQuantity,
            }
          }
        }
        return item
      })
      .filter(Boolean) as CartItensProps[]
    setCartItens(updatedCartItems)
  }

  const updateItemQuantity = (itemName: string, quantity: number) => {
    setCartItens((prevCartItens) =>
      prevCartItens.map((item) =>
        item.nome === itemName ? { ...item, quantidade: quantity } : item
      )
    )
  }

  const contextValue: CartContextType = {
    cartItens,
    addItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    updateItemQuantity,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export const useCartItens = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartItens must be used within a CartProvider')
  }
  return context
}
