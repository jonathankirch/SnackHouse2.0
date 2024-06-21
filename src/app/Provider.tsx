"use client"

import CartProvider from './context/CartItens'

import { ProviderProps } from './types'

export default function Provider({ children }: ProviderProps) {
  return <CartProvider>{children}</CartProvider>
}
