import Bebidas from './Bebidas'
import Combos from './Combos'
import DocesSalgados from './DocesSalgados'
import Lanches from './Lanches'
import Tortas from './Tortas'

export default function AllItens() {
  return (
    <>
      <div>
        <h1 className='md:text-3xl text-2xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center'>Lanches</h1>
        <Lanches />
      </div>
      <div>
        <h1 className='text-3xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center'>Bebidas</h1>
        <Bebidas />
      </div>
      <div>
        <h1 className='text-3xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center'>Combos</h1>
        <Combos />
      </div>
      <div>
        <h1 className='text-3xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center'>Doces e Salgados</h1>
        <DocesSalgados />
      </div>
      <div>
        <h1 className='text-3xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center'>Tortas</h1>
        <Tortas />
      </div>
    </>
  )
}
