import Link from 'next/link'

export default function NavBar() {

  return (
    <nav className="w-2/3 mx-auto py-5 mb-5">
      <ul className="flex gap-5 uppercase py-5 overflow-x-auto overflow-y-hidden text-nowrap">
        <li>
          <Link className="bg-neutral-300 rounded-2xl px-5 py-3" href="#fritas">
            Fritas
          </Link>
        </li>
        <li>
          <Link
            className="bg-neutral-300 rounded-2xl px-5 py-3"
            href="#picados">
            Picados
          </Link>
        </li>
        <li>
          <Link
            className="bg-neutral-300 rounded-2xl px-5 py-3"
            href="#cachorroquente">
            Cachorro Quente
          </Link>
        </li>
        <li>
          <Link className="bg-neutral-300 rounded-2xl px-5 py-3" href="#xis">
            Xis
          </Link>
        </li>
        <li>
          <Link
            className="bg-neutral-300 rounded-2xl px-5 py-3"
            href="#cervejas">
            Cervejas
          </Link>
        </li>
        <li>
          <Link
            className="bg-neutral-300 rounded-2xl px-5 py-3"
            href="#refrigerantes">
            Refrigerantes
          </Link>
        </li>
        <li>
          <Link className="bg-neutral-300 rounded-2xl px-5 py-3" href="#agua">
            Água
          </Link>
        </li>
        <li>
          <Link className="bg-neutral-300 rounded-2xl px-5 py-3" href="#combos">
            Combos
          </Link>
        </li>
        <li>
          <Link className="bg-neutral-300 rounded-2xl px-5 py-3" href="#doces">
            Doces
          </Link>
        </li>
        <li>
          <Link
            className="bg-neutral-300 rounded-2xl px-5 py-3"
            href="#salgados">
            Salgados
          </Link>
        </li>
        <li>
          <Link className="bg-neutral-300 rounded-2xl px-5 py-3" href="#tortas">
            Tortas
          </Link>
        </li>
      </ul>
    </nav>
  )
}
