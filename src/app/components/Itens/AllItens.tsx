import Bebidas from './Bebidas'
import Combos from './Combos'
import DocesSalgados from './DocesSalgados'
import Lanches from './Lanches'
import Tortas from './Tortas'

export default function AllItens() {
  return (
    <>
      <div>
        <h2 className='md:text-3xl text-2xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center mx-2'>Lanches</h2>
        <Lanches />
      </div>
      <div>
        <h2 className='text-3xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center mx-2'>Bebidas</h2>
        <Bebidas />
      </div>
      <div>
        <h2 className='text-3xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center mx-2'>Combos</h2>
        <Combos />
      </div>
      <div>
        <h2 className='text-3xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center mx-2'>Doces e Salgados</h2>
        <DocesSalgados />
      </div>
      <div>
        <h2 className='text-3xl font-bold uppercase bg-black text-yellow-400 p-2 rounded mb-5 text-center mx-2'>Tortas</h2>
        <Tortas />
      </div>
    </>
  )
}
