import cerveja from './data/bebidas/cervejas.json'
import refrigerante from './data/bebidas/refrigerantes.json'
import agua from './data/bebidas/aguas.json'

import NewItem from './NewItem';

export default function Bebidas() {

  return (
    <>
      <section id='cervejas' className='mb-14'>
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Cerveja</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
          {cerveja.map((item, index) => (
            <article key={index} className="grid grid-cols-3 md:h-52 h-40 shadow-md rounded-md group hover:shadow-xl transition border border-neutral-100 hover:bg-neutral-50">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
                img={item.img}
                quantidade={item.quantidade}
              />
            </article>
          ))}
        </div>
      </section>
      <section className="mb-14" id='refrigerantes'>
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Refrigerante</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
          {refrigerante.map((item, index) => (
            <article key={index} className="grid grid-cols-3 md:h-52 h-40 shadow-md rounded-md group hover:shadow-xl transition border border-neutral-100 hover:bg-neutral-50">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
                img={item.img}
                quantidade={item.quantidade}
              />
            </article>
          ))}
        </div>
      </section>
      <section className="mb-14" id='agua'>
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Água</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
          {agua.map((item, index) => (
            <article key={index} className="grid grid-cols-3 md:h-52 h-40 shadow-md rounded-md group hover:shadow-xl transition border border-neutral-100 hover:bg-neutral-50">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
                img={item.img}
                quantidade={item.quantidade}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}