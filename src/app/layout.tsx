import type { Metadata } from 'next'
import './globals.css'

import Provider from './Provider'
import { ModalCartProvider } from './context/ModalCartContext'

export const metadata: Metadata = {
  title: 'Snack House',
  description: 'A lancheria do momento',
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
          <body>{children}</body>
        </ModalCartProvider>
      </Provider>
    </html>
  )
}
