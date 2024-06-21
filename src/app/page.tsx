'use client'

import Header from './components/Header'
import Itens from './components/Itens/AllItens'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cart from './components/Cart/Cart'

import { useModalCart } from '@/app/context/ModalCartContext'

export default function Home() {

  const { isOpen } = useModalCart()

  return (
    <>
      <Cart />
      <main className={`${isOpen ? 'blur' : ''}`}>
        <Header />
        <section className="pt-32">
          <hr className="w-3/5 mx-auto border border-yellow-400 rounded-xl" />
          <div className="grid grid-cols-2 w-2/4 mx-auto my-5">
            <div className="text-center my-auto">
              <h1 className="text-6xl font-bold">Snack House</h1>
              <div className="w-3/4 mx-auto bg-gradient-to-r from-black via-red-500 to-yellow-500 h-2 rounded"></div>
              <div className="text-xl mt-10 font-bold text-neutral-700">
                <h2 className="mb-1 ml ">Aberto</h2>
              </div>
            </div>
            <div className="">
              <img
                src="img/teste2-removebg-preview.png"
                alt="Banner"
                className="mx-auto w-3/4 my-auto rotate-12"
              />
            </div>
          </div>
          <hr className="w-3/5 mx-auto border border-yellow-400 rounded-xl mb-10" />
        </section>
        <NavBar />
        <section className="md:w-4/6 mx-auto">
          <Itens />
        </section>
      </main>
      <Footer />
    </>
  )
}
