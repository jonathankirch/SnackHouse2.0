import type { Metadata } from 'next'
import './globals.css'

import Provider from './Provider'
import { ModalCartProvider } from './context/ModalCartContext'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Snack House',
  icons: '/img/logo-snackhouse.webp',
  description: 'Desfrute dos melhores lanches em Canabarro, Teutônia! Nossa lancheria oferece uma variedade de escolhas, como: fritas, xis, cachorro quente e picados. Venha experimentar os lanches mais deliciosos da região!',
  keywords: [
    "Lanches em Canabarro",
    "Lancheria em Canabarro",
    "Hamburgueria Canabarro",
    "Melhores lanches em Canabarro",
    "Sanduíches Canabarro",
    "Lanches rápidos Canabarro",
    "Delivery de lanches Canabarro",
    "Xis Canabarro",
    "Cachorro quente Canabarro",
    "Lanches artesanais Canabarro",
    "Lanchonete Canabarro",
    "Comida rápida Canabarro",
    "Lanches especiais Canabarro",
    "Lanches gourmet Canabarro",
    "Lanches deliciosos Canabarro",
    "Melhor lancheria Canabarro",
    "Promoções de lanches Canabarro",
    "Lanches frescos Canabarro",
    "Lanches saudáveis Canabarro",
    "Lanches com entrega Canabarro",
    "Lanches em Teutônia",
    "Lancheria em Teutônia",
    "Hamburgueria Teutônia",
    "Melhores lanches em Teutônia",
    "Sanduíches Teutônia",
    "Lanches rápidos Teutônia",
    "Delivery de lanches Teutônia",
    "Xis Teutônia",
    "Cachorro quente Teutônia",
    "Lanches artesanais Teutônia",
    "Lanchonete Teutônia",
    "Comida rápida Teutônia",
    "Lanches especiais Teutônia",
    "Lanches gourmet Teutônia",
    "Lanches deliciosos Teutônia",
    "Melhor lancheria Teutônia",
    "Promoções de lanches Teutônia",
    "Lanches frescos Teutônia",
    "Lanches saudáveis Teutônia",
  ],
  robots: "index, follow"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="pt-br" className="scroll-smooth">
      <Provider>
        <ModalCartProvider>
          <body className='bg-neutral-100'>
            <ToastContainer position="bottom-right" />
            {children}
          </body>
        </ModalCartProvider>
      </Provider>
    </html>
  )
}
