import type { Metadata } from 'next'
import './globals.css'

import Provider from './Provider'
import { ModalCartProvider } from './context/ModalCartContext'
import { ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
  title: 'Snack House | Lancheria em Teutônia - RS',
  description: 'Desfrute dos melhores lanches em Canabarro, Teutônia! Nossa lancheria oferece uma variedade de escolhas, como: fritas, xis, cachorro quente e picados.',
  keywords: [
    "snackhouse", "snack house", "snack house lanches", "Snack house teutonia", 
    "Lanches Teutônia", "Lanches Canabarro", "snackhouse lanches", 
    "Snackhouse teutonia", "snackhouse lanches", "snackhouse lanches canabarro", 
    "snackhouse lanches teutonia", "Lanches em Teutônia", "Lancheria em Teutônia", 
    "Lancheria Teutônia", "Hamburgueria Teutônia", "Melhores lanches em Teutônia", 
    "Sanduíches Teutônia", "Lanches rápidos Teutônia", "Delivery de lanches Teutônia", 
    "Xis Teutônia", "Cachorro quente Teutônia", "Lanches artesanais Teutônia", 
    "Lanchonete Teutônia", "Comida rápida Teutônia", "Lanches especiais Teutônia", 
    "Lanches gourmet Teutônia", "Lanches deliciosos Teutônia", "Melhor lancheria Teutônia", 
    "Promoções de lanches Teutônia", "Lanches frescos Teutônia", "Lanches saudáveis Teutônia", 
    "Lanches com entrega Teutônia", "Lanches em Canabarro", "Lancheria em Canabarro", 
    "Hamburgueria Canabarro", "Melhores lanches em Canabarro", "Sanduíches Canabarro", 
    "Lanches rápidos Canabarro", "Delivery de lanches Canabarro", "Xis Canabarro", 
    "Cachorro quente Canabarro", "Lanches artesanais Canabarro", "Lanchonete Canabarro", 
    "Comida rápida Canabarro", "Lanches especiais Canabarro", "Lanches gourmet Canabarro", 
    "Lanches deliciosos Canabarro", "Melhor lancheria Canabarro", "Promoções de lanches Canabarro", 
    "Lanches frescos Canabarro", "Lanches saudáveis Canabarro", "Lanches com entrega Canabarro", 
    "Lanches em Teutônia", "Lancheria em Teutônia", "Hamburgueria Teutônia", 
    "Melhores lanches em Teutônia", "Sanduíches Teutônia", "Lanches rápidos Teutônia", 
    "Delivery de lanches Teutônia", "Xis Teutônia", "Cachorro quente Teutônia", 
    "Lanches artesanais Teutônia", "Lanchonete Teutônia", "Comida rápida Teutônia", 
    "Lanches especiais Teutônia", "Lanches gourmet Teutônia", "Lanches deliciosos Teutônia", 
    "Melhor lancheria Teutônia", "Promoções de lanches Teutônia", "Lanches frescos Teutônia", 
    "Lanches saudáveis Teutônia"
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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/logo-snackhouse-apple-touch-icon.png"
        />

        <meta name="google-site-verification" content="Gm1G62fTQ4AwSTZ694p6yMlYr6S_W6V32LSyEKfjYo0" />

        <meta property="og:title" content="Snack House | Lancheria em Teutônia - RS" />
        <meta property="og:description" content="Desfrute dos melhores lanches em Canabarro, Teutônia! Nossa lancheria oferece uma variedade de escolhas, como: fritas, xis, cachorro quente e picados." />
        <meta property="og:image" content="https://snackhouse.app.br/favicon.ico" />
        <meta property="og:url" content="https://snackhouse.app.br/" />
        <meta property="og:type" content="website" />
      </head>
      <Provider>
        <ModalCartProvider>
          <body className="bg-neutral-100">
            <ToastContainer position="bottom-right" />
            {children}
          </body>
        </ModalCartProvider>
      </Provider>
    </html>
  )
}
