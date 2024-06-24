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
      <section id="fritas" className='mb-14'>
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Fritas</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
          {fritas.map((item, index) => (
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
      <section id="picados" className='mb-14'>
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Picados</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
          {picados.map((item, index) => (
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
      <section id="cachorroquente" className='mb-14'>
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Cachorro-Quente</h1>
        <div className="grid md:grid-cols-2 mx-2 grid-cols-1 gap-x-10 gap-y-5">
          {cachorrosQuentes.map((item, index) => (
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
      <section className="mb-10" id="xis">
        <h1 className="md:text-3xl text-xl font-bold mb-5 ml-5 uppercase">Xis</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-2 gap-x-10 gap-y-5">
          {xis.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-3 shadow-md rounded-md group hover:shadow-xl transition md:h-52 h-40 border border-neutral-100 hover:bg-neutral-50">
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
