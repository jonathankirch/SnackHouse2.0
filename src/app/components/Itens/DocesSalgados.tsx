import doces from './data/doces-e-salgados/doces.json'
import salgados from './data/doces-e-salgados/salgados.json'

import NewItem from './NewItem'

export default function DocesSalgados() {
  return (
    <>
      <section id='doces' className='mb-14'>
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Doces</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
          {doces.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 md:h-52 h-40 shadow-md rounded-md group hover:shadow-xl transition border border-neutral-100 hover:bg-neutral-50">
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
      <section className="mb-14" id='salgados'>
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Salgados</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
          {salgados.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 md:h-52 h-40 shadow-md rounded-md group hover:shadow-xl transition border border-neutral-100  hover:bg-neutral-50">
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
