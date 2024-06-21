import fritas from './data/lanches/fritas.json'
import picados from './data/lanches/picados.json'
import cachorrosQuentes from './data/lanches/cachorrosQuentes.json'
import xis from './data/lanches/xis.json'

import NewItem from './NewItem'

export default function Lanches() {
  const formatarValor = (lang: string, currency: string, balance: number) =>
    Intl.NumberFormat(lang, {
      style: 'currency',
      maximumFractionDigits: 2,
      currency,
    }).format(balance)

  return (
    <>
      <section className="mb-10" id='fritas'>
        <h1 className="text-2xl font-bold uppercase mb-5">Fritas</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {fritas.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
                quantidade={item.quantidade}
              />
            </article>
          ))}
        </div>
      </section>
      <section className="mb-10" id='picados'>
        <h1 className="text-2xl font-bold uppercase mb-5">Picados</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {picados.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition h-52">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
                quantidade={item.quantidade}
              />
            </article>
          ))}
        </div>
      </section>
      <section className="mb-10" id='cachorroquente'>
        <h1 className="text-2xl font-bold uppercase mb-5">Cachorro Quente</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {cachorrosQuentes.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition h-52">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
                quantidade={item.quantidade}
              />
            </article>
          ))}
        </div>
      </section>
      <section className="mb-10" id='xis'>
        <h1 className="text-2xl font-bold uppercase mb-5">Xis</h1>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {xis.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition h-52">
              <NewItem
                nome={item.nome}
                descricao={item.descricao}
                valor={item.valor}
                quantidade={item.quantidade}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
