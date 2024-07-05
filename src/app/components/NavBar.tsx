import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="md:w-2/3 md:mx-auto mx-2 mb-5 border-y shadow-inner">
      <ul className="flex gap-5 uppercase py-5 text-nowrap overflow-x-auto">
        <li>
          <Link className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white" href="#fritas">
            Fritas
          </Link>
        </li>
        <li>
          <Link
            className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white"
            href="#picados">
            Picados
          </Link>
        </li>
        <li>
          <Link
            className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white"
            href="#cachorroquente">
            Cachorro Quente
          </Link>
        </li>
        <li>
          <Link className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white" href="#xis">
            Xis
          </Link>
        </li>
        <li>
          <Link
            className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white"
            href="#cervejas">
            Cervejas
          </Link>
        </li>
        <li>
          <Link
            className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white"
            href="#refrigerantes">
            Refrigerantes
          </Link>
        </li>
        <li>
          <Link className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white" href="#agua">
            Água
          </Link>
        </li>
        <li>
          <Link className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white" href="#combos">
            Combos
          </Link>
        </li>
        <li>
          <Link className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white" href="#doces">
            Doces
          </Link>
        </li>
        <li>
          <Link
            className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white"
            href="#salgados">
            Salgados
          </Link>
        </li>
        {/* <li>
          <Link className="border rounded-2xl px-5 py-3 hover:shadow transition shadow-inner bg-white" href="#tortas">
            Tortas
          </Link>
        </li> */}
      </ul>
    </div>
  )
}
