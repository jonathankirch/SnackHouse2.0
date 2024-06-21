"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalCartContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalCartContext = createContext<ModalCartContextType | undefined>(undefined);

interface ModalCartProviderProps {
  children: ReactNode;
}

export function ModalCartProvider({ children }: ModalCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const contextValue: ModalCartContextType = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalCartContext.Provider value={contextValue}>
      {children}
    </ModalCartContext.Provider>
  );
}

export const useModalCart = () => {
  const context = useContext(ModalCartContext);
  if (!context) {
    throw new Error('useCartItens must be used within a CartProvider');
  }
  return context;
};
