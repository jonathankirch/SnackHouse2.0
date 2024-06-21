import doces from './data/doces-e-salgados/doces.json'
import salgados from './data/doces-e-salgados/salgados.json'

import NewItem from './NewItem'

export default function DocesSalgados() {
  return (
    <>
      <section className="mb-10" id='doces'>
        <h1 className="text-2xl font-bold uppercase mb-5">Doces</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {doces.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
              />
            </article>
          ))}
        </div>
      </section>
      <section className="mb-10" id='salgados'>
        <h1 className="text-2xl font-bold uppercase mb-5">Salgados</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {salgados.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
