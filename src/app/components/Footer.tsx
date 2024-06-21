import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-50 py-14">
      <div className='flex md:w-2/3 mx-auto pl-36'>
        <div className="w-1/6 mr-14">
            <img src="img/logo-snackhouse.webp" alt="img" className="w-1/2 mx-auto my-5 rounded" />
            <p className='text-center '>Snack House</p>
        </div>
        <div>
          <h2 className='font-bold'>Acompanhe nossas redes sociais</h2>
          <ul className="flex my-5">
            <li className="mr-7">
              <FaInstagram size={20} />
            </li>
            <li>
              <FaFacebookF size={20} />
            </li>
          </ul>
          <h2 className='font-bold mb-5'>Fale com a gente</h2>
          <p className="mb-2">Telefone: (99) 99999999</p>
          <p>WhatsApp: (99) 99999-9999</p>
        </div>
      </div>
    </footer>
  )
}
