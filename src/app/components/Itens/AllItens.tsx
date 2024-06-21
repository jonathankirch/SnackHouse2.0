import Bebidas from './Bebidas'
import Combos from './Combos'
import DocesSalgados from './DocesSalgados'
import Lanches from './Lanches'
import Tortas from './Tortas'

export default function Itens() {
  return (
    <>
      <div>
        <h1 className='text-2xl font-bold uppercase bg-yellow-400'>Lanches</h1>
        <Lanches />
      </div>
      <div>
        <h1 className='text-2xl font-bold uppercase bg-yellow-400'>Bebidas</h1>
        <Bebidas />
      </div>
      <div>
        <h1 className='text-2xl font-bold uppercase bg-yellow-400'>Combos</h1>
        <Combos />
      </div>
      <div>
        <h1 className='text-2xl font-bold uppercase bg-yellow-400'>Doces e Salgados</h1>
        <DocesSalgados />
      </div>
      <div>
        <h1 className='text-2xl font-bold uppercase bg-yellow-400'>Tortas</h1>
        <Tortas />
      </div>
    </>
  )
}
