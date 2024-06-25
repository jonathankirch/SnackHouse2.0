'use client'

import { useState } from 'react'

import HeaderCart from './Cart/HeaderCart'
import Image from 'next/image'

import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Header() {
  const [selectedOption, setSelectedOption] = useState('asdf') // Valor da opção que você quer exibir

  const handleSelectChange = (event: any) => {
    event.preventDefault()
    event.target.value = selectedOption // fazer função para mudar todo dia aqui
  }

  return (
    <header className="bg-stone-50 fixed z-10 border-y md:h-24 h-20 my-auto w-full">
      <div className="md:w-3/5 mx-auto">
        <div className="md:pt-4 md:py-auto py-2 flex items-center">
          <div className="md:w-1/6 md:-mr-5">
          <a href="#home">
              <Image
                src="/img/logo-snackhouse.webp"
                alt="Snack House Logo"
                width={1000}
                height={1000}
                className="md:w-2/4 w-2/3 mx-2 rounded-md"
              />
          </a>
          </div>
          <div className="md:w-1/4 md:inline hidden">
            <strong className='md:text-xl'>Snack House</strong>
            <br />
            <a
              className="line-clamp-1 text-black mt-1 hover:underline"
              href="https://maps.app.goo.gl/QRb17q2K2pgs1cLF7"
              target="_blank">
              <FaMapMarkerAlt className='inline mb-1' size={17} /> R. Carlos Arnt, 1025, Canabarro - Teutônia
              / RS - Brasil
            </a>
          </div>

          <div className="border border-neutral-200 rounded-2xl h-10 my-auto ml-2 mr-5"></div>

          {/* <div className="my-auto">
            <select
              name="tsete"
              id="1"
              value={selectedOption}
              onChange={handleSelectChange}>
              <option value="adf">Segunda-feira - Fechado</option>
              <option value="asdf">Terça-feira - 11:20 às 23:00</option>
              <option value="asdf">Quarta-feira - 11:20 às 23:00</option>
              <option value="asdf">Quinta-feira - 11:20 às 23:00</option>
              <option value="adf">Sexta-feira - 11:25 às 23:00</option>
              <option value="fadsf">Sábado - 17:30 às 23:00</option>
              <option value="afd">Domingo - 17:29 às 23:00</option>
            </select>
          </div> */}

          <div className="flex md:ml-auto items-center ml-auto mr-2">
            <HeaderCart />
          </div>
        </div>
      </div>
    </header>
  )
}
