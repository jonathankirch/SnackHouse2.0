'use client'

import { useState } from 'react'

import HeaderCart from './Cart/HeaderCart'

export default function Header() {
  const [selectedOption, setSelectedOption] = useState('asdf') // Valor da opção que você quer exibir

  const handleSelectChange = (event: any) => {
    event.preventDefault()
    event.target.value = selectedOption // fazer função para mudar todo dia aqui
  }

  return (
    <header className="bg-stone-50 fixed z-10">
      <div className="md:w-2/3 mx-auto">
        <div className="py-5 flex items-center">
          <div className="w-1/6">
            <img
              src="img/logo-snackhouse.webp"
              alt="icon"
              className="w-2/4 mx-auto rounded-md"
            />
          </div>
          <div>
            <strong>Snack House</strong>
            {/* add link de localização */}
            <p>Rua tal tal tal tal</p>
          </div>

          <div className="border border-neutral-200 rounded-2xl h-10 my-auto ml-10 mr-5"></div>

          <div className="my-auto">
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
          </div>

          <div className="flex ml-auto mr-10 items-center">
            <HeaderCart />
          </div>
        </div>
      </div>
    </header>
  )
}
