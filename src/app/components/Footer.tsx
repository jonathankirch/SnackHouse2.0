import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa'

import { useModalCart } from '@/app/context/ModalCartContext'
import Image from 'next/image'

export default function Footer() {
  const { isOpen } = useModalCart()

  return (
    <footer className={`bg-stone-50 py-14 border-y ${isOpen ? 'blur' : ''}`}>
      <div className="md:flex md:w-2/3 mx-5 md:pl-36">
        <div className="md:w-1/6 mx-auto md:mr-14 mb-12">
          <Image
            src="/img/logo-snackhouse.webp"
            width={500}
            height={500}
            alt="img"
            className="w-1/2 mx-auto mt-5 mb-3 rounded"
          />
          <p className="text-center ">Snack House</p>
        </div>
        <div>
          {/*  redes sociais caso queira adicionar */}

          {/* <h2 className="font-bold">Acompanhe nossas redes sociais</h2>
          <ul className="flex my-5">
            <li className="mr-7">
              <FaInstagram size={20} />
            </li>
            <li>
              <FaFacebookF size={20} />
            </li>
          </ul> */}
          <h2 className="font-bold mb-5">Fale com a gente</h2>
          <a href='https://wa.me/5551995635609' target='_blank' className='hover:underline'>WhatsApp: (51) 99563-5609</a>

          <h2 className="font-bold my-5">Endereço:</h2>
          <a href='https://maps.app.goo.gl/QRb17q2K2pgs1cLF7' target='_blank' className="mb-2 hover:underline"><FaMapMarkerAlt className='inline mr-1 mb-1' />Rua Carlos Arnt, 1025, Canabarro - Teutônia
          / RS - Brasil</a>
        </div>
      </div>
    </footer>
  )
}
