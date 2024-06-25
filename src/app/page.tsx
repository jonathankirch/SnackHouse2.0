'use client'

import Header from './components/Header'
import AllItens from './components/Itens/AllItens'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cart from './components/Cart/Cart'

import { useModalCart } from '@/app/context/ModalCartContext'
import Image from 'next/image'

export default function Home() {

  const { isOpen } = useModalCart()

  return (
    <>
      <Cart />
      <main className={`${isOpen ? 'blur' : ''}`}>
        <Header />
        <section className="md:pt-32 pt-24 mx-2" id='home'>
          <hr className="md:w-3/5 w-4/5 mx-auto border border-yellow-400 rounded-xl" />
          <div className="grid md:grid-cols-2 grid-cols-1 md:w-2/4 mx-auto my-5">
            <div className="text-center my-auto">
              <h1 className="text-6xl font-bold md:w-full w-1/2 mx-auto">Snack House</h1>
              <div className="md:w-3/4 w-1/2 mx-auto bg-gradient-to-r from-black via-red-500 to-yellow-500 h-2 rounded"></div>

              {/* caso queiram adicionar funcionaliade que mostra se ta aberto naquele momento ou não */}
              
              {/* <div className="text-xl mt-10 font-bold text-neutral-700">
                <h2 className="mb-1">Aberto</h2>
              </div> */}
            </div>
            <div>
              <Image
                src="/img/teste2-removebg-preview.png"
                alt="Banner"
                width={500}
                height={500}
                className="mx-auto md:w-3/4 w-1/2 md:my-auto -my-7 rotate-12"
              />
            </div>
          </div>
          <hr className="md:w-3/5 w-4/5 mx-auto border border-yellow-400 rounded-xl mb-10" />
        </section>
        <nav className='sticky md:top-24 top-20 bg-neutral-100 z-10'>
          <NavBar />
        </nav>
        <section className="md:w-4/6 mx-auto">
          <AllItens />
        </section>
      </main>
      <Footer />
    </>
  )
}
